-- Create storage bucket for consultation form uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('consultation-uploads', 'consultation-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload files to the consultation-uploads bucket
CREATE POLICY "Allow public uploads to consultation-uploads"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'consultation-uploads');

-- Allow anyone to read files from consultation-uploads bucket
CREATE POLICY "Allow public read from consultation-uploads"
ON storage.objects
FOR SELECT
USING (bucket_id = 'consultation-uploads');