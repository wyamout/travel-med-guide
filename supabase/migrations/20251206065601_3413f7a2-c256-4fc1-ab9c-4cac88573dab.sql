-- Create a public storage bucket for website images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-images', 
  'website-images', 
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml']
);

-- Allow public read access to all images
CREATE POLICY "Public read access for website images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'website-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'website-images');

-- Allow authenticated users to update their images
CREATE POLICY "Authenticated users can update images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'website-images');

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'website-images');