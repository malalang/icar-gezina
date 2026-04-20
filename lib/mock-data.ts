export interface CarPart {
  name: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Needs Replacement';
  description: string;
}

export interface CarReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'Hatchback' | 'Sedan' | 'SUV' | 'Bakkie' | 'Coupe';
  color: string;
  imageUrl: string;
  galleryUrls: string[];
  description: string;
  features: string[];
  parts: CarPart[];
  reviews: CarReview[];
}

export const mockCars: Car[] = [
  {
    id: '1',
    make: 'Volkswagen',
    model: 'Polo 1.0 TSI Comfortline',
    year: 2021,
    price: 289900,
    mileage: 45000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    color: 'Pure White',
    imageUrl: 'https://picsum.photos/seed/vwpolo/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/vwpolo/800/600',
      'https://picsum.photos/seed/vwpolo-2/800/600',
      'https://picsum.photos/seed/vwpolo-3/800/600',
    ],
    description: 'A pristine condition Volkswagen Polo, carefully maintained by a single owner. This economical hatchback delivers excellent fuel efficiency and a comfortable ride, packed with modern safety and entertainment features perfect for city commutes and long road trips alike.',
    features: ['Bluetooth Audio', 'Air Conditioning', 'Power Steering', 'Electric Windows', 'ABS Brakes', 'Touch Screen Display', 'Multi-function Steering Wheel'],
    parts: [
      { name: 'Engine', condition: 'Excellent', description: 'Runs perfectly, recent major service.' },
      { name: 'Transmission', condition: 'Excellent', description: 'Smooth shifting, clutch in great condition.' },
      { name: 'Brakes', condition: 'Good', description: 'Pads have 60% life remaining.' },
      { name: 'Tires', condition: 'Excellent', description: 'Brand new set of premium tires fitted 1000km ago.' },
      { name: 'Interior', condition: 'Excellent', description: 'No tears or stains on upholstery.' },
      { name: 'Suspension', condition: 'Good', description: 'No knocks or squeaks.' }
    ],
    reviews: [
      { id: 'r1', author: 'Michael T.', rating: 5, comment: 'Car was exactly as described. Great buying experience.', date: '2023-11-12' },
      { id: 'r2', author: 'Sarah L.', rating: 4, comment: 'Very clean vehicle, slightly higher consumption than expected but overall very happy.', date: '2024-01-05' }
    ]
  },
  {
    id: '2',
    make: 'Ford',
    model: 'Ranger 2.0 Bi-Turbo Double Cab Wildtrak',
    year: 2022,
    price: 769000,
    mileage: 32000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Bakkie',
    color: 'Saber Orange',
    imageUrl: 'https://picsum.photos/seed/fordranger/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/fordranger/800/600',
      'https://picsum.photos/seed/fordranger-interior/800/600',
      'https://picsum.photos/seed/fordranger-back/800/600',
    ],
    description: 'The ultimate adventure vehicle. This Ford Ranger Wildtrak combines off-road capability with luxury interior comfort. Fully accessorized and ready for any terrain.',
    features: ['4x4', 'Navigation System', 'Leather Seats', 'Tow Bar', 'Roll Bar', 'Keyless Entry', 'Adaptive Cruise Control', 'Apple CarPlay/Android Auto'],
    parts: [
      { name: 'Engine', condition: 'Excellent', description: 'Bi-turbo pulls strong, fully serviced.' },
      { name: 'Transmission', condition: 'Excellent', description: '10-speed auto is flawless.' },
      { name: 'Brakes', condition: 'Excellent', description: 'Recently replaced front pads and discs.' },
      { name: 'Tires', condition: 'Good', description: 'All-terrain tires with 70% tread.' },
      { name: '4x4 System', condition: 'Excellent', description: 'Tested and fully operational.' }
    ],
    reviews: [
      { id: 'r3', author: 'David W.', rating: 5, comment: 'Incredible machine. Dealership was very transparent about the vehicle history.', date: '2024-02-20' }
    ]
  },
  {
    id: '3',
    make: 'Toyota',
    model: 'Fortuner 2.8 GD-6 VX Auto',
    year: 2023,
    price: 899900,
    mileage: 15600,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Attitude Black',
    imageUrl: 'https://picsum.photos/seed/fortuner/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/fortuner/800/600',
      'https://picsum.photos/seed/fortuner-2/800/600'
    ],
    description: 'Practically brand new Toyota Fortuner VX. Top of the range with all the bells and whistles. Seven seats, unmatched reliability, and premium comfort.',
    features: ['7 Seater', 'JBL Sound System', 'Panoramic View Monitor', 'Lane Departure Alert', 'Power Tailgate'],
    parts: [
      { name: 'Engine', condition: 'Excellent', description: 'Like new.' },
      { name: 'Transmission', condition: 'Excellent', description: 'Like new.' },
      { name: 'Interior', condition: 'Excellent', description: 'Still has the new car smell.' }
    ],
    reviews: []
  },
  {
    id: '4',
    make: 'Audi',
    model: 'A4 40 TFSI S Line Auto',
    year: 2020,
    price: 459000,
    mileage: 68000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Daytona Grey',
    imageUrl: 'https://picsum.photos/seed/audia4/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/audia4/800/600',
      'https://picsum.photos/seed/audia4-2/800/600'
    ],
    description: 'Sleek, sophisticated, and sporty. This Audi A4 S Line offers brilliant performance, a premium interior cabin, and advanced technology for an exceptional driving dynamic.',
    features: ['Virtual Cockpit', 'Sunroof', 'Matrix LED Headlights', 'Sport Seats', 'Bang & Olufsen Sound System'],
    parts: [
      { name: 'Engine', condition: 'Good', description: 'Serviced regularly at Audi.' },
      { name: 'Transmission', condition: 'Excellent', description: 'DSG shifts incredibly fast.' },
      { name: 'Brakes', condition: 'Good', description: 'Standard wear.' },
      { name: 'Exterior', condition: 'Good', description: 'Minor scratch on the rear bumper, polished out.' }
    ],
    reviews: [
      { id: 'r4', author: 'Jessica R.', rating: 5, comment: 'Beautiful car, exactly what I was looking for.', date: '2023-12-10' }
    ]
  },
  {
    id: '5',
    make: 'BMW',
    model: '3 Series 320d M Sport',
    year: 2021,
    price: 529000,
    mileage: 54000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Alpine White',
    imageUrl: 'https://picsum.photos/seed/bmw320/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/bmw320/800/600'
    ],
    description: 'Iconic BMW 3 Series with the highly sought-after M Sport package. Excellent fuel economy combined with sporty aesthetics.',
    features: ['M Sport Package', 'Ambient Lighting', 'Live Cockpit Professional', 'Reverse Camera', 'Parking Assist'],
    parts: [
      { name: 'Engine', condition: 'Excellent', description: 'Outstanding torque and economy.' },
      { name: 'Transmission', condition: 'Excellent', description: 'ZF 8-speed is perfect.' }
    ],
    reviews: []
  },
  {
    id: '6',
    make: 'Toyota',
    model: 'Starlet 1.4 XR',
    year: 2022,
    price: 239000,
    mileage: 28000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    color: 'Shadow Grey',
    imageUrl: 'https://picsum.photos/seed/starlet/800/600',
    galleryUrls: [
      'https://picsum.photos/seed/starlet/800/600'
    ],
    description: 'Reliable and spacious compact hatchback. The Toyota Starlet is perfect for first-time buyers or anyone looking for a dependable daily commuter.',
    features: ['Alloy Wheels', 'Push Button Start', 'Reverse Camera', 'Apple CarPlay', 'Cruise Control'],
    parts: [
      { name: 'Overall', condition: 'Excellent', description: 'Full service history, near perfect condition.' }
    ],
    reviews: []
  }
];

export const globalTestimonials = [
  {
    id: 't1',
    author: 'Mark J.',
    role: 'Verified Buyer',
    content: 'Bought a Ford Ranger and the experience was seamless from start to finish. Highly recommend Auto Market.',
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: 't2',
    author: 'Sarah M.',
    role: 'Verified Buyer',
    content: 'I loved being able to see the detailed condition of the car parts before visiting. It saved me so much time!',
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    id: 't3',
    author: 'Johan D.',
    role: 'Verified Buyer',
    content: 'The 116-point check gave me peace of mind. Traded my old Polo in for a newer model without a single hiccup.',
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];
