export interface Property {
  id: string;
  title: string;
  category: 'Villas' | 'Apartments' | 'Custom Homes' | 'Bungalows';
  subtitle: string;
  tag: string;
  price: string;
  pricePerSqFt?: string;
  carpetArea: string;
  superArea: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  facing: string;
  status: 'Ready to Move' | 'Under Construction' | 'Immediate Possession' | 'Phase 2 Booking';
  description: string;
  featuredImage: string;
  gallery: string[];
  features: string[];
  floorPlan2D: string;
  floorPlan3D: string;
  specifications: {
    flooring: string;
    doorsWindows: string;
    kitchen: string;
    electrical: string;
    sanitary: string;
    structure: string;
  };
}

export interface Amenity {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  category: 'Wellness & Nature' | 'Security & Roads' | 'Leisure & Community' | 'Spiritual & Family';
  specs: string[];
}

export interface MasterPlanZone {
  id: string;
  name: string;
  code: string;
  category: 'Residential' | 'Green Space' | 'Spiritual' | 'Infrastructure' | 'Recreation';
  area: string;
  status: string;
  description: string;
  coordinates: { x: number; y: number }; // percentage on map
  highlights: string[];
  image: string;
}

export interface Landmark {
  name: string;
  category: 'Transit' | 'Education' | 'Healthcare' | 'Commercial' | 'Tourism';
  distance: string;
  driveTime: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  propertyOwned: string;
  avatar: string;
  residenceYear: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior & Architecture' | 'Luxury Interiors' | 'Township Landscapes' | 'Amenities & Community';
  image: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface SiteVisitBooking {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  propertyType: string;
  cabPickup: boolean;
  pickupLocation?: string;
  message?: string;
}
