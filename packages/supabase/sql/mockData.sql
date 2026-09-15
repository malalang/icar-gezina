-- Note: This uses standard UUIDs to ensure relationships work.
-- Remove existing mock data if this script is run multiple times to avoid duplicate key errors.
DELETE FROM cars WHERE id IN (
  '11111111-1111-1111-1111-111111111111',
  '22222222-2222-2222-2222-222222222222',
  '33333333-3333-3333-3333-333333333333',
  '44444444-4444-4444-4444-444444444444',
  '55555555-5555-5555-5555-555555555555',
  '66666666-6666-6666-6666-666666666666'
);
DELETE FROM testimonials WHERE author IN ('Mark J.', 'Sarah M.', 'Johan D.');

WITH inserted_cars AS (
  INSERT INTO cars (id, make, model, year, price, mileage, fuel_type, transmission, body_type, color, image_url, gallery_urls, description, features)
  VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Volkswagen', 'Polo 1.0 TSI Comfortline', 2021, 289900, 45000, 'Petrol', 'Manual', 'Hatchback', 'Pure White', 'https://picsum.photos/seed/vwpolo/800/600', ARRAY['https://picsum.photos/seed/vwpolo/800/600', 'https://picsum.photos/seed/vwpolo-2/800/600', 'https://picsum.photos/seed/vwpolo-3/800/600'], 'A pristine condition Volkswagen Polo, carefully maintained by a single owner. This economical hatchback delivers excellent fuel efficiency and a comfortable ride, packed with modern safety and entertainment features perfect for city commutes and long road trips alike.', ARRAY['Bluetooth Audio', 'Air Conditioning', 'Power Steering', 'Electric Windows', 'ABS Brakes', 'Touch Screen Display', 'Multi-function Steering Wheel']),
    ('22222222-2222-2222-2222-222222222222', 'Ford', 'Ranger 2.0 Bi-Turbo Double Cab Wildtrak', 2022, 769000, 32000, 'Diesel', 'Automatic', 'Bakkie', 'Saber Orange', 'https://picsum.photos/seed/fordranger/800/600', ARRAY['https://picsum.photos/seed/fordranger/800/600', 'https://picsum.photos/seed/fordranger-interior/800/600', 'https://picsum.photos/seed/fordranger-back/800/600'], 'The ultimate adventure vehicle. This Ford Ranger Wildtrak combines off-road capability with luxury interior comfort. Fully accessorized and ready for any terrain.', ARRAY['4x4', 'Navigation System', 'Leather Seats', 'Tow Bar', 'Roll Bar', 'Keyless Entry', 'Adaptive Cruise Control', 'Apple CarPlay/Android Auto']),
    ('33333333-3333-3333-3333-333333333333', 'Toyota', 'Fortuner 2.8 GD-6 VX Auto', 2023, 899900, 15600, 'Diesel', 'Automatic', 'SUV', 'Attitude Black', 'https://picsum.photos/seed/fortuner/800/600', ARRAY['https://picsum.photos/seed/fortuner/800/600', 'https://picsum.photos/seed/fortuner-2/800/600'], 'Practically brand new Toyota Fortuner VX. Top of the range with all the bells and whistles. Seven seats, unmatched reliability, and premium comfort.', ARRAY['7 Seater', 'JBL Sound System', 'Panoramic View Monitor', 'Lane Departure Alert', 'Power Tailgate']),
    ('44444444-4444-4444-4444-444444444444', 'Audi', 'A4 40 TFSI S Line Auto', 2020, 459000, 68000, 'Petrol', 'Automatic', 'Sedan', 'Daytona Grey', 'https://picsum.photos/seed/audia4/800/600', ARRAY['https://picsum.photos/seed/audia4/800/600', 'https://picsum.photos/seed/audia4-2/800/600'], 'Sleek, sophisticated, and sporty. This Audi A4 S Line offers brilliant performance, a premium interior cabin, and advanced technology for an exceptional driving dynamic.', ARRAY['Virtual Cockpit', 'Sunroof', 'Matrix LED Headlights', 'Sport Seats', 'Bang & Olufsen Sound System']),
    ('55555555-5555-5555-5555-555555555555', 'BMW', '3 Series 320d M Sport', 2021, 529000, 54000, 'Diesel', 'Automatic', 'Sedan', 'Alpine White', 'https://picsum.photos/seed/bmw320/800/600', ARRAY['https://picsum.photos/seed/bmw320/800/600'], 'Iconic BMW 3 Series with the highly sought-after M Sport package. Excellent fuel economy combined with sporty aesthetics.', ARRAY['M Sport Package', 'Ambient Lighting', 'Live Cockpit Professional', 'Reverse Camera', 'Parking Assist']),
    ('66666666-6666-6666-6666-666666666666', 'Toyota', 'Starlet 1.4 XR', 2022, 239000, 28000, 'Petrol', 'Manual', 'Hatchback', 'Shadow Grey', 'https://picsum.photos/seed/starlet/800/600', ARRAY['https://picsum.photos/seed/starlet/800/600'], 'Reliable and spacious compact hatchback. The Toyota Starlet is perfect for first-time buyers or anyone looking for a dependable daily commuter.', ARRAY['Alloy Wheels', 'Push Button Start', 'Reverse Camera', 'Apple CarPlay', 'Cruise Control'])
  RETURNING id
)
SELECT * FROM inserted_cars;


INSERT INTO car_parts (car_id, name, condition, description)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Engine', 'Excellent', 'Runs perfectly, recent major service.'),
  ('11111111-1111-1111-1111-111111111111', 'Transmission', 'Excellent', 'Smooth shifting, clutch in great condition.'),
  ('11111111-1111-1111-1111-111111111111', 'Brakes', 'Good', 'Pads have 60% life remaining.'),
  ('11111111-1111-1111-1111-111111111111', 'Tires', 'Excellent', 'Brand new set of premium tires fitted 1000km ago.'),
  ('11111111-1111-1111-1111-111111111111', 'Interior', 'Excellent', 'No tears or stains on upholstery.'),
  ('11111111-1111-1111-1111-111111111111', 'Suspension', 'Good', 'No knocks or squeaks.'),
  ('22222222-2222-2222-2222-222222222222', 'Engine', 'Excellent', 'Bi-turbo pulls strong, fully serviced.'),
  ('22222222-2222-2222-2222-222222222222', 'Transmission', 'Excellent', '10-speed auto is flawless.'),
  ('22222222-2222-2222-2222-222222222222', 'Brakes', 'Excellent', 'Recently replaced front pads and discs.'),
  ('22222222-2222-2222-2222-222222222222', 'Tires', 'Good', 'All-terrain tires with 70% tread.'),
  ('22222222-2222-2222-2222-222222222222', '4x4 System', 'Excellent', 'Tested and fully operational.'),
  ('33333333-3333-3333-3333-333333333333', 'Engine', 'Excellent', 'Like new.'),
  ('33333333-3333-3333-3333-333333333333', 'Transmission', 'Excellent', 'Like new.'),
  ('33333333-3333-3333-3333-333333333333', 'Interior', 'Excellent', 'Still has the new car smell.'),
  ('44444444-4444-4444-4444-444444444444', 'Engine', 'Good', 'Serviced regularly at Audi.'),
  ('44444444-4444-4444-4444-444444444444', 'Transmission', 'Excellent', 'DSG shifts incredibly fast.'),
  ('44444444-4444-4444-4444-444444444444', 'Brakes', 'Good', 'Standard wear.'),
  ('44444444-4444-4444-4444-444444444444', 'Exterior', 'Good', 'Minor scratch on the rear bumper, polished out.'),
  ('55555555-5555-5555-5555-555555555555', 'Engine', 'Excellent', 'Outstanding torque and economy.'),
  ('55555555-5555-5555-5555-555555555555', 'Transmission', 'Excellent', 'ZF 8-speed is perfect.'),
  ('66666666-6666-6666-6666-666666666666', 'Overall', 'Excellent', 'Full service history, near perfect condition.');


INSERT INTO car_reviews (car_id, author, rating, comment, date)
VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Michael T.', 5, 'Car was exactly as described. Great buying experience.', '2023-11-12'),
  ('11111111-1111-1111-1111-111111111111', 'Sarah L.', 4, 'Very clean vehicle, slightly higher consumption than expected but overall very happy.', '2024-01-05'),
  ('22222222-2222-2222-2222-222222222222', 'David W.', 5, 'Incredible machine. Dealership was very transparent about the vehicle history.', '2024-02-20'),
  ('44444444-4444-4444-4444-444444444444', 'Jessica R.', 5, 'Beautiful car, exactly what I was looking for.', '2023-12-10');

INSERT INTO testimonials (author, role, content, avatar)
VALUES
  ('Mark J.', 'Verified Buyer', 'Bought a Ford Ranger and the experience was seamless from start to finish. Highly recommend Auto Market.', 'https://picsum.photos/seed/user1/100/100'),
  ('Sarah M.', 'Verified Buyer', 'I loved being able to see the detailed condition of the car parts before visiting. It saved me so much time!', 'https://picsum.photos/seed/user2/100/100'),
  ('Johan D.', 'Verified Buyer', 'The 116-point check gave me peace of mind. Traded my old Polo in for a newer model without a single hiccup.', 'https://picsum.photos/seed/user3/100/100');
