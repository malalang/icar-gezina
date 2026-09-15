-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Custom Types
CREATE TYPE car_condition AS ENUM ('Excellent', 'Good', 'Fair', 'Needs Replacement');

-- Tables
CREATE TABLE cars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price INTEGER NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type TEXT NOT NULL,
  transmission TEXT NOT NULL,
  body_type TEXT NOT NULL,
  color TEXT NOT NULL,
  image_url TEXT NOT NULL,
  gallery_urls TEXT[] NOT NULL DEFAULT '{}',
  description TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE car_parts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  condition car_condition NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE car_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  car_id UUID NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  avatar TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) - Admins have full access via Service Role or Auth, public has read-only.
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE car_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE car_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone." ON cars FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON car_parts FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON car_reviews FOR SELECT USING (true);
CREATE POLICY "Public profiles are viewable by everyone." ON testimonials FOR SELECT USING (true);

-- Allow authenticated users (Admins) to do everything
CREATE POLICY "Admins have full access" ON cars TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON car_parts TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON car_reviews TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access" ON testimonials TO authenticated USING (true) WITH CHECK (true);
