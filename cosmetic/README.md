# Cosmetic Surgery Thailand Website Crawler & Documentation

This project contains a Python web crawler to extract content and images from the cosmetic surgery Thailand website, along with comprehensive documentation for creating a modern, SEO-optimized website using Lovable.

## Files

- `website_crawler.py` - Python script to crawl the website
- `requirements.txt` - Python dependencies
- `LOVABLE_COSMETIC_SURGERY_THAILAND_GUIDE.md` - Complete guide for Lovable development
- `README.md` - This file

## Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. Install required Python packages:
```bash
pip install -r requirements.txt
```

## Usage

### Running the Website Crawler

1. Run the crawler script (unlimited pages by default):
```bash
python website_crawler.py
```

2. Or specify a maximum number of pages:
```bash
python website_crawler.py 50
```

3. Or set unlimited explicitly:
```bash
python website_crawler.py unlimited
```

4. The crawler will:
   - Visit all pages on the website (or up to your limit)
   - Extract text content, images, and metadata
   - Download all images to `crawled_data/images/`
   - Save page content to `crawled_data/content/` (named by page title)
   - Generate a summary report

5. Output files:
   - `crawled_data/crawl_summary.json` - Complete crawl data in JSON format
   - `crawled_data/crawl_summary.txt` - Human-readable summary
   - `crawled_data/content/*.json` - Individual page data (named by page title)
   - `crawled_data/images/*` - Downloaded images

### Customizing the Crawler

Edit `website_crawler.py` to modify:
- `max_pages`: Maximum number of pages to crawl (default: None = unlimited)
- `output_dir`: Output directory (default: "crawled_data")
- `base_url`: Website URL to crawl

**Note:** The crawler now defaults to unlimited pages. Use command line arguments to set a limit if needed.

## Documentation

See `LOVABLE_COSMETIC_SURGERY_THAILAND_GUIDE.md` for:
- Complete website structure recommendations
- SEO meta titles and descriptions for all pages
- SEO best practices
- Page speed optimization strategies
- Content strategy
- Design recommendations
- Technical implementation guide

## Notes

- The crawler includes a 1-second delay between requests to be respectful to the server
- Images are only downloaded from the same domain by default
- All data is saved in UTF-8 encoding
- The crawler handles common errors gracefully

## License

This project is for educational and development purposes.

