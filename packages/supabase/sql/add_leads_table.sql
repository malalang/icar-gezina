CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID REFERENCES cars(id) ON DELETE SET NULL,
  type text NOT NULL, -- 'Enquiry', 'Test Drive', 'Contact'
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date text,
  message text,
  status text DEFAULT 'New', -- 'New', 'Contacted', 'Resolved'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a lead (anonymous insert)
CREATE POLICY "Allow public inserts on leads" ON leads FOR INSERT WITH CHECK (true);

-- Only authenticated admins can read, update, or delete leads
CREATE POLICY "Allow admin read on leads" ON leads FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin update on leads" ON leads FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin delete on leads" ON leads FOR DELETE USING (auth.role() = 'authenticated');
