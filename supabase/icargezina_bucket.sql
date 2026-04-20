-- Ensure extensions needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the Storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('icargezina', 'icargezina', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public access to icargezina" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'icargezina');

CREATE POLICY "Admin access to insert icargezina" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'icargezina' AND auth.role() = 'authenticated');

CREATE POLICY "Admin access to update icargezina" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'icargezina' AND auth.role() = 'authenticated');

CREATE POLICY "Admin access to delete icargezina" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'icargezina' AND auth.role() = 'authenticated');
