#!/usr/bin/env python3
"""
Website Crawler for Cosmetic Surgery Thailand
Crawls full website content and images for analysis and documentation
Uses Selenium to handle JavaScript-rendered content
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os
import json
import time
from pathlib import Path
import re
from typing import Set, Dict, List
import hashlib
import requests

class WebsiteCrawler:
    def __init__(self, base_url: str, output_dir: str = "crawled_data", headless: bool = True):
        self.base_url = base_url.rstrip('/')
        self.domain = urlparse(base_url).netloc
        self.visited_urls: Set[str] = set()
        self.pages_data: List[Dict] = []
        self.images_data: List[Dict] = []
        self.output_dir = Path(output_dir)
        self.images_dir = self.output_dir / "images"
        self.content_dir = self.output_dir / "content"
        
        # Create output directories
        self.images_dir.mkdir(parents=True, exist_ok=True)
        self.content_dir.mkdir(parents=True, exist_ok=True)
        
        # Setup Selenium WebDriver
        chrome_options = Options()
        if headless:
            chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1920,1080')
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            self.driver.set_page_load_timeout(30)
        except Exception as e:
            print(f"Error initializing Chrome driver: {e}")
            print("Trying with default ChromeDriver...")
            self.driver = webdriver.Chrome(options=chrome_options)
        
        # Session for downloading images
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
    
    def is_valid_url(self, url: str) -> bool:
        """Check if URL is valid and belongs to the same domain"""
        parsed = urlparse(url)
        
        # Skip direct image file URLs (they're not pages)
        image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico']
        if any(parsed.path.lower().endswith(ext) for ext in image_extensions):
            return False
        
        return parsed.netloc == self.domain or parsed.netloc == ''
    
    def normalize_url(self, url: str) -> str:
        """Normalize URL by removing fragments and trailing slashes"""
        parsed = urlparse(url)
        normalized = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
        if parsed.query:
            normalized += f"?{parsed.query}"
        return normalized.rstrip('/')
    
    def sanitize_filename(self, title: str, max_length: int = 100) -> str:
        """Create a safe filename from page title"""
        if not title:
            return "untitled"
        
        # Remove or replace invalid filename characters
        invalid_chars = '<>:"/\\|?*'
        filename = title.strip()
        
        # Replace invalid characters with underscores
        for char in invalid_chars:
            filename = filename.replace(char, '_')
        
        # Remove multiple consecutive underscores
        filename = re.sub(r'_+', '_', filename)
        
        # Remove leading/trailing underscores and dots
        filename = filename.strip('_.')
        
        # Limit length
        if len(filename) > max_length:
            filename = filename[:max_length].rstrip('_')
        
        # If empty after sanitization, use a default
        if not filename:
            filename = "untitled"
        
        return filename
    
    def extract_text_content(self, soup: BeautifulSoup, page_source: str = None) -> Dict:
        """Extract all text content from the page"""
        # Get title from driver if available
        title = ''
        try:
            title = self.driver.title if hasattr(self, 'driver') and self.driver else ''
        except:
            pass
        
        if not title:
            title_tag = soup.find('title')
            title = title_tag.get_text(strip=True) if title_tag else ''
        
        # Remove script and style elements for text extraction
        soup_copy = BeautifulSoup(str(soup), 'html.parser')
        for script in soup_copy(["script", "style"]):
            script.decompose()
        
        # Extract main content
        content = {
            'title': title,
            'h1': [h.get_text(strip=True) for h in soup.find_all('h1') if h.get_text(strip=True)],
            'h2': [h.get_text(strip=True) for h in soup.find_all('h2') if h.get_text(strip=True)],
            'h3': [h.get_text(strip=True) for h in soup.find_all('h3') if h.get_text(strip=True)],
            'h4': [h.get_text(strip=True) for h in soup.find_all('h4') if h.get_text(strip=True)],
            'paragraphs': [p.get_text(strip=True) for p in soup.find_all('p') if p.get_text(strip=True)],
            'links_text': [a.get_text(strip=True) for a in soup.find_all('a') if a.get_text(strip=True)],
            'meta_description': '',
            'meta_keywords': '',
            'meta_title': '',
            'body_text': ''
        }
        
        # Extract meta tags
        meta_desc = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
        if meta_desc:
            content['meta_description'] = meta_desc.get('content', '')
        
        meta_keywords = soup.find('meta', attrs={'name': 'keywords'})
        if meta_keywords:
            content['meta_keywords'] = meta_keywords.get('content', '')
        
        meta_title = soup.find('meta', property='og:title')
        if meta_title:
            content['meta_title'] = meta_title.get('content', '')
        
        # Extract main body text
        body = soup_copy.find('body')
        if body:
            content['body_text'] = body.get_text(separator=' ', strip=True)
            # Limit body text to first 5000 chars for readability
            if len(content['body_text']) > 5000:
                content['body_text'] = content['body_text'][:5000] + '...'
        
        return content
    
    def download_image(self, img_url: str, page_url: str) -> Dict:
        """Download and save an image"""
        try:
            # Skip data URIs
            if img_url.startswith('data:'):
                return None
            
            # Skip empty or invalid URLs
            if not img_url or len(img_url.strip()) < 4:
                return None
            
            # Make absolute URL
            img_url = img_url.strip()
            if not img_url.startswith('http'):
                img_url = urljoin(page_url, img_url)
            
            # Clean up URL but keep query params (some sites use them for image versions)
            parsed = urlparse(img_url)
            if not parsed.scheme or not parsed.netloc:
                return None
            
            clean_url = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
            if parsed.query:
                clean_url += f"?{parsed.query}"
            
            # Allow images from same domain and common CDNs, but try to download all
            img_domain = urlparse(img_url).netloc
            # Don't restrict - download all images we find
            
            # Check if already downloaded
            url_hash = hashlib.md5(clean_url.encode()).hexdigest()
            ext = os.path.splitext(parsed.path)[1] or '.jpg'
            if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp']:
                ext = '.jpg'
            
            filename = f"{url_hash}{ext}"
            filepath = self.images_dir / filename
            
            # Skip if already exists
            if filepath.exists():
                return {
                    'url': img_url,
                    'filename': filename,
                    'filepath': str(filepath),
                    'size': filepath.stat().st_size,
                    'page_url': page_url,
                    'cached': True
                }
            
            response = self.session.get(img_url, timeout=15, stream=True, allow_redirects=True)
            response.raise_for_status()
            
            # Check content type
            content_type = response.headers.get('content-type', '')
            if 'image' not in content_type.lower():
                return None
            
            # Save image
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            
            file_size = filepath.stat().st_size
            if file_size == 0:
                filepath.unlink()
                return None
            
            return {
                'url': img_url,
                'filename': filename,
                'filepath': str(filepath),
                'size': file_size,
                'page_url': page_url,
                'cached': False
            }
        except Exception as e:
            # Silently skip failed downloads
            return None
    
    def extract_images(self, soup: BeautifulSoup, page_url: str) -> List[Dict]:
        """Extract all images from the page using both BeautifulSoup and Selenium"""
        images = []
        seen_urls = set()
        
        # Method 1: Use Selenium to find all img elements (gets dynamically loaded images)
        try:
            img_elements = self.driver.find_elements(By.TAG_NAME, "img")
            print(f"    Found {len(img_elements)} img elements via Selenium")
            
            for img_elem in img_elements:
                try:
                    # Try multiple attributes
                    img_url = (img_elem.get_attribute('src') or 
                              img_elem.get_attribute('data-src') or 
                              img_elem.get_attribute('data-lazy-src') or 
                              img_elem.get_attribute('data-original') or
                              img_elem.get_attribute('data-lazy'))
                    
                    if not img_url or img_url in seen_urls or img_url.startswith('data:'):
                        continue
                    
                    seen_urls.add(img_url)
                    alt_text = img_elem.get_attribute('alt') or ''
                    
                    # Download image
                    img_data = self.download_image(img_url, page_url)
                    if img_data:
                        img_data['alt_text'] = alt_text
                        images.append(img_data)
                        print(f"    Downloaded: {img_url[:60]}...")
                except Exception as e:
                    continue
        except Exception as e:
            print(f"    Error extracting images via Selenium: {e}")
        
        # Method 2: Use BeautifulSoup as backup
        img_tags = soup.find_all('img')
        print(f"    Found {len(img_tags)} img tags via BeautifulSoup")
        
        for img in img_tags:
            img_url = (img.get('src') or 
                      img.get('data-src') or 
                      img.get('data-lazy-src') or 
                      img.get('data-original') or
                      img.get('data-lazy') or
                      (img.get('srcset', '').split(',')[0].strip().split()[0] if img.get('srcset') else None))
            
            if not img_url or img_url in seen_urls or img_url.startswith('data:'):
                continue
            
            seen_urls.add(img_url)
            alt_text = img.get('alt', '')
            
            img_data = self.download_image(img_url, page_url)
            if img_data:
                img_data['alt_text'] = alt_text
                images.append(img_data)
                print(f"    Downloaded: {img_url[:60]}...")
        
        # Method 3: Extract background images using JavaScript
        try:
            bg_images_js = """
            var images = [];
            var elements = document.querySelectorAll('*');
            for (var i = 0; i < elements.length; i++) {
                var style = window.getComputedStyle(elements[i]);
                var bgImage = style.backgroundImage || style.background || '';
                if (bgImage && bgImage !== 'none') {
                    var matches = bgImage.match(/url\\(["']?([^"')]+)["']?\\)/);
                    if (matches && matches[1]) {
                        images.push(matches[1]);
                    }
                }
            }
            return images;
            """
            bg_images = self.driver.execute_script(bg_images_js)
            print(f"    Found {len(bg_images)} background images via JavaScript")
            
            for bg_url in bg_images:
                if bg_url and bg_url not in seen_urls and not bg_url.startswith('data:'):
                    seen_urls.add(bg_url)
                    img_data = self.download_image(bg_url, page_url)
                    if img_data:
                        images.append(img_data)
                        print(f"    Downloaded background: {bg_url[:60]}...")
        except Exception as e:
            print(f"    Error extracting background images: {e}")
        
        # Method 4: Extract from style attributes in HTML
        style_tags = soup.find_all(attrs={'style': True})
        for element in style_tags:
            style = element.get('style', '')
            bg_matches = re.findall(r'url\(["\']?([^"\')]+)["\']?\)', style)
            for bg_url in bg_matches:
                if bg_url not in seen_urls and not bg_url.startswith('data:'):
                    seen_urls.add(bg_url)
                    img_data = self.download_image(bg_url, page_url)
                    if img_data:
                        images.append(img_data)
        
        return images
    
    def crawl_page(self, url: str) -> Dict:
        """Crawl a single page using Selenium"""
        normalized_url = self.normalize_url(url)
        
        if normalized_url in self.visited_urls:
            return None
        
        print(f"Crawling: {normalized_url}")
        self.visited_urls.add(normalized_url)
        
        try:
            # Navigate to page with Selenium
            self.driver.get(normalized_url)
            
            # Wait for page to load (wait for body or a common element)
            try:
                WebDriverWait(self.driver, 10).until(
                    EC.presence_of_element_located((By.TAG_NAME, "body"))
                )
            except TimeoutException:
                print(f"  Warning: Timeout waiting for page to load")
            
            # Wait for images to start loading
            try:
                WebDriverWait(self.driver, 5).until(
                    lambda d: d.execute_script("return document.readyState") == "complete"
                )
            except:
                pass
            
            # Wait a bit more for JavaScript to render
            time.sleep(3)
            
            # Scroll more thoroughly to trigger lazy loading
            scroll_pause_time = 0.5
            last_height = self.driver.execute_script("return document.body.scrollHeight")
            
            # Scroll down multiple times
            for i in range(3):
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(scroll_pause_time)
                
                # Scroll back up a bit
                self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight * 0.5);")
                time.sleep(scroll_pause_time)
            
            # Scroll to top
            self.driver.execute_script("window.scrollTo(0, 0);")
            time.sleep(1)
            
            # Wait for any lazy-loaded images
            time.sleep(2)
            
            # Get page source after JavaScript execution
            page_source = self.driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')
            
            # Extract content
            content = self.extract_text_content(soup, page_source)
            
            # Extract images
            print(f"  Extracting images...")
            images = self.extract_images(soup, normalized_url)
            self.images_data.extend(images)
            if len(images) > 0:
                print(f"  [SUCCESS] Downloaded {len(images)} images")
            else:
                print(f"  [WARNING] No images found - checking page source...")
                # Debug: Check if there are any img tags at all
                img_count = len(soup.find_all('img'))
                print(f"    Found {img_count} <img> tags in HTML")
            
            # Find all links
            links = []
            for a_tag in soup.find_all('a', href=True):
                href = a_tag['href']
                # Skip javascript: and mailto: links
                if href.startswith('javascript:') or href.startswith('mailto:') or href.startswith('#'):
                    continue
                absolute_url = urljoin(normalized_url, href)
                if self.is_valid_url(absolute_url):
                    normalized_link = self.normalize_url(absolute_url)
                    if normalized_link not in links:
                        links.append(normalized_link)
            
            page_data = {
                'url': normalized_url,
                'content': content,
                'images_count': len(images),
                'images': images,
                'links': links,
                'status_code': 200
            }
            
            self.pages_data.append(page_data)
            
            # Save individual page content with title as filename
            title = content.get('title', '') or content.get('h1', [''])[0] if content.get('h1') else ''
            safe_filename = self.sanitize_filename(title)
            
            # Add URL hash to ensure uniqueness if same title exists
            url_hash = hashlib.md5(normalized_url.encode()).hexdigest()[:8]
            page_filename = f"{safe_filename}_{url_hash}.json"
            
            # Ensure filename is unique
            counter = 1
            original_filename = page_filename
            while (self.content_dir / page_filename).exists():
                page_filename = f"{safe_filename}_{url_hash}_{counter}.json"
                counter += 1
            
            with open(self.content_dir / page_filename, 'w', encoding='utf-8') as f:
                json.dump(page_data, f, indent=2, ensure_ascii=False)
            
            print(f"  Saved as: {page_filename}")
            
            print(f"  [OK] Extracted {len(content['paragraphs'])} paragraphs, {len(links)} links")
            
            return page_data
            
        except Exception as e:
            print(f"  [ERROR] Error crawling {normalized_url}: {e}")
            return None
    
    def crawl(self, max_pages: int = None):
        """Crawl the entire website
        
        Args:
            max_pages: Maximum number of pages to crawl. Set to None for unlimited.
        """
        print(f"Starting crawl of {self.base_url}")
        print(f"Output directory: {self.output_dir}")
        if max_pages:
            print(f"Max pages: {max_pages}")
        else:
            print(f"Max pages: Unlimited (will crawl all pages found)")
        print()
        
        # Start with base URL
        queue = [self.base_url]
        
        while queue and (max_pages is None or len(self.visited_urls) < max_pages):
            current_url = queue.pop(0)
            
            page_data = self.crawl_page(current_url)
            
            if page_data:
                # Add new links to queue
                for link in page_data.get('links', []):
                    if link not in self.visited_urls and link not in queue:
                        queue.append(link)
                        # Limit queue size to prevent memory issues (but allow more pages)
                        if len(queue) > 200:
                            break
            
            # Be polite - add delay between requests
            time.sleep(2)
        
        # Close browser
        try:
            self.driver.quit()
        except:
            pass
        
        # Save summary
        self.save_summary()
        print(f"\n{'='*60}")
        print(f"Crawl complete!")
        print(f"Total pages crawled: {len(self.pages_data)}")
        print(f"Total images downloaded: {len(self.images_data)}")
        if max_pages and len(self.visited_urls) >= max_pages:
            print(f"Note: Reached max_pages limit of {max_pages}")
            print(f"      There may be more pages to crawl. Increase max_pages or set to None for unlimited.")
        print(f"{'='*60}")
    
    def save_summary(self):
        """Save crawl summary"""
        summary = {
            'base_url': self.base_url,
            'total_pages': len(self.pages_data),
            'total_images': len(self.images_data),
            'pages': [
                {
                    'url': page['url'],
                    'title': page['content']['title'],
                    'h1': page['content']['h1'],
                    'images_count': page['images_count']
                }
                for page in self.pages_data
            ],
            'all_content': self.pages_data
        }
        
        summary_path = self.output_dir / 'crawl_summary.json'
        with open(summary_path, 'w', encoding='utf-8') as f:
            json.dump(summary, f, indent=2, ensure_ascii=False)
        
        # Also create a readable text summary
        text_summary_path = self.output_dir / 'crawl_summary.txt'
        with open(text_summary_path, 'w', encoding='utf-8') as f:
            f.write(f"Website Crawl Summary\n")
            f.write(f"{'='*50}\n\n")
            f.write(f"Base URL: {self.base_url}\n")
            f.write(f"Total Pages: {len(self.pages_data)}\n")
            f.write(f"Total Images: {len(self.images_data)}\n\n")
            
            f.write(f"Pages Crawled:\n")
            f.write(f"{'-'*50}\n")
            for page in self.pages_data:
                f.write(f"\nURL: {page['url']}\n")
                f.write(f"Title: {page['content']['title']}\n")
                if page['content']['h1']:
                    f.write(f"H1: {', '.join(page['content']['h1'])}\n")
                f.write(f"Images: {page['images_count']}\n")
        
        print(f"Summary saved to {summary_path}")
        print(f"Text summary saved to {text_summary_path}")


def main():
    """Main function"""
    import sys
    
    base_url = "http://cosmeticsurgerythailand.com/"
    
    # Allow max_pages to be set via command line argument
    max_pages = None
    if len(sys.argv) > 1:
        try:
            max_pages = int(sys.argv[1])
            print(f"Max pages set to: {max_pages}")
        except ValueError:
            if sys.argv[1].lower() in ['none', 'unlimited', 'all']:
                max_pages = None
                print("Max pages set to: Unlimited")
            else:
                print(f"Invalid max_pages value: {sys.argv[1]}. Using unlimited.")
                max_pages = None
    
    crawler = WebsiteCrawler(base_url, output_dir="crawled_data")
    crawler.crawl(max_pages=max_pages)
    
    print("\nCrawl completed successfully!")
    print(f"Check the 'crawled_data' directory for results.")


if __name__ == "__main__":
    main()

