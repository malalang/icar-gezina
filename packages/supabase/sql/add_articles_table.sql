CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  category text,
  excerpt text,
  content text NOT NULL,
  cover_image_url text,
  published boolean DEFAULT false,
  published_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Public read access to published articles
CREATE POLICY "Allow public read on published articles" ON articles FOR SELECT USING (published = true);

-- Only authenticated admins can read drafts, create, update, or delete articles
CREATE POLICY "Allow admin read all articles" ON articles FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin insert on articles" ON articles FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow admin update on articles" ON articles FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin delete on articles" ON articles FOR DELETE USING (auth.role() = 'authenticated');