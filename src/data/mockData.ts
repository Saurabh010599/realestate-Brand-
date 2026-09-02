import { Property, Amenity, MasterPlanZone, Landmark, Testimonial, GalleryItem } from '../types';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'prop-villa-4bhk',
    title: 'The Royal Sovereign Villa',
    category: 'Villas',
    subtitle: 'Ultra-Luxury 4 BHK Triplex with Private Lawn & Terraced Deck',
    tag: 'Signature Collection',
    price: '₹ 1.45 Cr onwards',
    pricePerSqFt: '₹ 4,850 / sq.ft',
    carpetArea: '2,950 sq.ft',
    superArea: '3,450 sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    facing: 'East / North-East (100% Vastu Compliant)',
    status: 'Ready to Move',
    description: 'An architectural masterpiece curated for distinguished living in Datala, Chandrapur. Features double-height living ceilings, private manicured courtyard, Italian marble flooring, and smart home automation.',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
    ],
    features: [
      'Double-height ceiling grand foyer',
      'Private landscaped rear garden & patio',
      'Dual covered car porch with EV charging point',
      'Solar water heating & rainwater harvesting',
      'Touchpad automated security system'
    ],
    floorPlan2D: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    specifications: {
      flooring: 'Italian Botticino marble in living & dining; wooden laminate in master suite.',
      doorsWindows: 'Teak wood main door with brass digital lock; heavy UPVC 3-track sliding windows.',
      kitchen: 'Designer modular granite island layout with chimney & piped gas provision.',
      electrical: 'Schneider/Legrand modular switches with concealed fire-retardant copper wiring.',
      sanitary: 'Kohler & Grohe premium bathroom fittings with thermostatic diverters.',
      structure: 'RCC framed earthquake-resistant M25 structure with premium AAC block masonry.'
    }
  },
  {
    id: 'prop-apt-3bhk',
    title: 'The Grand Boulevard Residences',
    category: 'Apartments',
    subtitle: 'Opulent 3 BHK High-Rise Suites with Panoramic Garden Views',
    tag: 'Fast Selling',
    price: '₹ 68 Lakhs onwards',
    pricePerSqFt: '₹ 4,200 / sq.ft',
    carpetArea: '1,580 sq.ft',
    superArea: '1,850 sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    facing: 'North-East Garden Facing',
    status: 'Immediate Possession',
    description: 'Experience refined elevated living with sun-drenched rooms, expansive wrap-around balconies overlooking the central musical fountain, and zero space wastage floor layouts.',
    featuredImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'
    ],
    features: [
      'Expansive 7-ft wide sunset deck',
      'Separate dry and wet utility balcony',
      'Vitrified 4x2 anti-skid premium floor tiles',
      'High-speed automatic OTIS elevators with power backup',
      'Video door phone with intercom connection to main security'
    ],
    floorPlan2D: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    specifications: {
      flooring: '800x1600mm glazed vitrified tiles across all bedrooms & living lounge.',
      doorsWindows: 'Pre-moulded European skin flush doors; anodized soundproof aluminum windows.',
      kitchen: 'Black galaxy granite platform with double-bowl Franke stainless steel sink.',
      electrical: 'Finolex cabling with automatic MCB/ELCB safety circuits.',
      sanitary: 'Jaquar Artize series wall-hung sanitary ware and glass partition cubicles.',
      structure: 'Advanced shear-wall construction offering thermal insulation and sound dampening.'
    }
  },
  {
    id: 'prop-bungalow-3bhk',
    title: 'The Palm Vista Bungalow',
    category: 'Bungalows',
    subtitle: 'Classic 3 BHK Independent Bungalow with Private Driveway',
    tag: 'Limited 8 Units',
    price: '₹ 1.15 Cr onwards',
    pricePerSqFt: '₹ 4,600 / sq.ft',
    carpetArea: '2,350 sq.ft',
    superArea: '2,700 sq.ft',
    bedrooms: 3,
    bathrooms: 4,
    balconies: 2,
    facing: 'East Facing Vastu Perfect',
    status: 'Ready to Move',
    description: 'Timeless single-family residences crafted for generational peace. Features independent boundary, rooftop pergola for stargazing, and private ground garden.',
    featuredImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85'
    ],
    features: [
      '100% Freehold independent land parcel',
      'Rooftop leisure pavilion with wooden finish deck',
      'Perimeter boundary with decorative wrought iron gate',
      'Dedicated underground water storage reservoir (10,000L)',
      'Provision for personal plunge pool / gazebo'
    ],
    floorPlan2D: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    specifications: {
      flooring: 'Imported rustic designer tiles in verandas; premium vitrified in interior.',
      doorsWindows: 'Solid teakwood frames and high-security multi-point locking mechanisms.',
      kitchen: 'L-shaped polished quartz platform with anti-scratch coating.',
      electrical: 'Havells fire-safe concealed wiring with inverter backup wiring.',
      sanitary: 'TOTO ceramic luxury sanitary fixtures and chrome-plated shower columns.',
      structure: 'Independent footings with heavy gauge Tata Tiscon steel reinforcement.'
    }
  },
  {
    id: 'prop-custom-estate',
    title: 'Custom-Built Bespoke Estates',
    category: 'Custom Homes',
    subtitle: 'Tailor-Made Architectural Plots & Custom Construction Services',
    tag: 'Bespoke Architecture',
    price: '₹ 45 Lakhs - 2.5 Cr',
    pricePerSqFt: '₹ 2,800 / sq.ft (Plot) + Custom Construction',
    carpetArea: '1,800 to 5,000 sq.ft',
    superArea: 'Plot: 2,000 - 6,500 sq.ft',
    bedrooms: 5,
    bathrooms: 5,
    balconies: 4,
    facing: 'Choose Custom Orientation',
    status: 'Phase 2 Booking',
    description: 'Work hand-in-hand with our in-house master architects to conceive and construct your dream sanctuary with bespoke interiors, private home cinema, and personal botanical gardens.',
    featuredImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85'
    ],
    features: [
      'Full architectural consultation & 3D walkthrough rendering',
      'Turnkey handover with personalized interior design',
      'Demarcated clear-title NA (Non-Agricultural) sanctioned plots',
      'Individual electricity and water meter connections ready',
      'Complimentary 3-year township maintenance'
    ],
    floorPlan2D: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    floorPlan3D: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    specifications: {
      flooring: 'Customizable: Marble, Hardwood, Microcement or Onyx accents.',
      doorsWindows: 'Double glazed sound-attenuated thermally broken aluminum systems.',
      kitchen: 'Custom Poggenpohl/Sleek style luxury kitchen with built-in appliances.',
      electrical: 'Full KNX/Lutron smart home automation compatibility.',
      sanitary: 'Customized luxury bathroom suites with jacuzzi / steam shower option.',
      structure: 'Engineered specifically for client custom elevation and floor-to-ceiling heights.'
    }
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'amenity-gardens',
    title: 'Landscaped Botanical Gardens',
    shortDesc: 'Over 2.5 acres of manicured flora, shaded gazebos, reflexology walking tracks, and flowering exotic shrubs.',
    fullDesc: 'Immerse in nature’s finest tranquility designed by international landscape architects. Includes dedicated floral pavilions, quiet meditation groves, and fragrant flowering canopies.',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
    category: 'Wellness & Nature',
    specs: ['2.5+ Acres continuous green canopy', 'Aromatherapy garden zone', 'Reflexology stone walkway', 'Senior citizen relaxation benches']
  },
  {
    id: 'amenity-play-area',
    title: "Children's Adventure Play Area",
    shortDesc: 'Safe, rubberized shock-absorbent flooring with modern swings, climbing frames, and interactive play pods.',
    fullDesc: 'Engineered for safety and joy. Features zero-sharp-edge play installations, sandpits, swings, and shade sails under continuous CCTV supervision.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85',
    category: 'Leisure & Community',
    specs: ['EPDM rubberized anti-injury flooring', 'Age-segregated zones (2-5 and 6-12 yrs)', 'CCTV monitored from central security', 'Shaded seating for accompanying parents']
  },
  {
    id: 'amenity-temple',
    title: 'Sacred Ganesha Temple & Pavilion',
    shortDesc: 'A divine sanctuary within the township for daily prayers, festive spiritual gatherings, and morning peace.',
    fullDesc: 'Carved out of authentic Rajasthani marble, the temple provides a serene spiritual anchor for all residents, nestled in lush greenery with water fountains.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    category: 'Spiritual & Family',
    specs: ['Pure white marble Sanctum Sanctorum', 'Open-air bhajan / satsang courtyard', 'Lush surrounding floral gardens', 'Daily morning & evening aarti bells']
  },
  {
    id: 'amenity-fountain',
    title: 'Illuminated Musical Fountain Plaza',
    shortDesc: 'A mesmerizing water and light spectacle at the central boulevard that enchants evening strolls.',
    fullDesc: 'The crowning visual attraction at DSK Green, choreographing water jets and ambient golden LED illuminations every sunset.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85',
    category: 'Leisure & Community',
    specs: ['Choreographed multi-tier water jets', 'Warm gold and emerald mood lighting', 'Plaza amphitheater seating around the rim', 'Recirculating filtered eco-water system']
  },
  {
    id: 'amenity-security',
    title: '24x7 Multi-Tier Gated Security',
    shortDesc: 'Biometric access, automated boom barriers, high-definition perimeter CCTV cameras, and trained guards.',
    fullDesc: 'Peace of mind guaranteed. Integrated security protocol with visitor management app, RFID vehicle tags, and 24-hour rapid patrol squads.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
    category: 'Security & Roads',
    specs: ['100+ HD night-vision CCTV coverage', 'Boom barriers with RFID automatic detection', 'Biometric & video intercom resident access', 'Trained 24/7 on-ground security guards']
  },
  {
    id: 'amenity-roads',
    title: 'Wide 40-ft Internal Concrete Roads',
    shortDesc: 'Smooth, durable, tree-lined avenues with underground drainage, decorative solar streetlights, and jogging footpaths.',
    fullDesc: 'Designed to eliminate congestion. Wide arterial roadways built with high-grade concrete, ensuring smooth two-way vehicular flow and dedicated walking lanes.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    category: 'Security & Roads',
    specs: ['40-ft and 30-ft wide concrete boulevards', 'Underground storm water channel system', 'Avenue plantation for perpetual shade', 'Cast-iron luxury street lamps with LED']
  },
  {
    id: 'amenity-green-spaces',
    title: '65% Open Green & Oxygen Zone',
    shortDesc: 'A pristine micro-climate surrounded by 1,200+ mature shade trees, green lawns, and clean unpolluted air.',
    fullDesc: 'Escape the industrial city dust. DSK Green is engineered as an eco-sanctuary with lush foliage, bird feeding stations, and native greenery.',
    iconName: 'Leaf',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    category: 'Wellness & Nature',
    specs: ['65% Dedicated unbuilt green footprint', 'Over 1,200+ planted native tree varieties', 'Micro-climate temperature reduction of 2-3°C', 'Bird-friendly fruit trees & butterfly corners']
  },
  {
    id: 'amenity-infrastructure',
    title: 'Underground Utilities & 24/7 Water',
    shortDesc: 'Zero dangling wires. 100% underground power cabling, high-pressure water grid, sewage treatment, and fiber optic.',
    fullDesc: 'Modern subterranean infrastructure that keeps the township aesthetic pristine and ensures zero service interruption during peak monsoons.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    category: 'Security & Roads',
    specs: ['Underground electrical power conduits', 'Dual 24x7 water supply lines with filtration', 'Eco-friendly Sewage Treatment Plant (STP)', 'High-speed FTTH Fiber Optic Internet ready']
  },
  {
    id: 'amenity-parking',
    title: 'Dedicated Covered Parking & EV Bays',
    shortDesc: 'Spacious demarcated parking bays for every resident family, ample visitor bays, and electric vehicle charging docks.',
    fullDesc: 'Effortless vehicle management with extra wide turning radiuses, designated parking numbers, and dedicated rapid EV charging stations.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=85',
    category: 'Security & Roads',
    specs: ['Covered vehicle bays with shade canopies', 'Dedicated Level 2 EV charging stations', '50+ Separate reserved visitor car parks', 'Epoxy coated floor with reflective signage']
  },
  {
    id: 'amenity-community',
    title: 'Grand Clubhouse & Amphitheater',
    shortDesc: 'A vibrant social hub featuring banquet hall, indoor games lounge, fitness studio, and open amphitheater.',
    fullDesc: 'Celebrate birthdays, festivals, and milestones in luxury. Complete with air-conditioned party hall, table tennis, billiards, and a yoga deck.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=85',
    category: 'Leisure & Community',
    specs: ['150-guest capacity air-conditioned banquet', 'Fully equipped cardio & strength gym', 'Indoor table tennis & snooker lounge', 'Open-air amphitheater for cultural evenings']
  }
];

export const MASTER_PLAN_ZONES: MasterPlanZone[] = [
  {
    id: 'zone-villas-west',
    name: 'The Sovereign Villa Enclave',
    code: 'ZONE-A',
    category: 'Residential',
    area: '4.2 Acres',
    status: 'Ready / Phase 1 Possession',
    description: 'Exclusive row of 4 BHK and 3 BHK Triplex luxury villas with private gardens and personal vehicle carports.',
    coordinates: { x: 22, y: 35 },
    highlights: ['East-facing orientation', 'Exclusive 35-ft cul-de-sac roads', 'Private garden boundaries', 'Direct garden access'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zone-apartments-tower',
    name: 'The Emerald & Grand Towers',
    code: 'ZONE-B',
    category: 'Residential',
    area: '3.8 Acres',
    status: 'Ready to Move',
    description: 'Elevated luxury apartment towers with spacious balconies overlooking the central water fountain.',
    coordinates: { x: 68, y: 32 },
    highlights: ['Panoramic township vistas', 'Dual OTIS high-speed elevators', 'Dedicated stilt parking', 'Grand entrance lobby'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zone-central-park',
    name: 'Central Botanical Garden & Jogging Circuit',
    code: 'ZONE-C',
    category: 'Green Space',
    area: '2.5 Acres',
    status: 'Fully Landscaped & Open',
    description: 'The green lungs of DSK Green featuring 1000+ native trees, aroma pavilions, and walking trails.',
    coordinates: { x: 48, y: 48 },
    highlights: ['800m continuous jogging track', 'Meditation pergolas', 'Children adventure playground', 'Fountain plaza'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zone-temple-plaza',
    name: 'Lord Ganesha Sanctum & Spiritual Pavilion',
    code: 'ZONE-D',
    category: 'Spiritual',
    area: '0.8 Acres',
    status: 'Active Worship',
    description: 'Peaceful temple plaza crafted with carved marble for morning meditation and festive communal gatherings.',
    coordinates: { x: 38, y: 78 },
    highlights: ['Marble temple architecture', 'Evening illumination', 'Peaceful water fountains', 'Festive courtyard'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zone-clubhouse',
    name: 'The Grand Club & Recreational Hub',
    code: 'ZONE-E',
    category: 'Recreation',
    area: '1.5 Acres',
    status: 'Fully Operational',
    description: 'Featuring an indoor games lounge, banquet hall, fitness center, library, and open-air party terrace.',
    coordinates: { x: 75, y: 72 },
    highlights: ['Air-conditioned banquet facility', 'Cardio & strength gym', 'Table tennis & snooker lounge', 'Yoga sun deck'],
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zone-grand-entrance',
    name: 'Grand Arch Entrance & Security Command Post',
    code: 'ZONE-F',
    category: 'Infrastructure',
    area: '0.6 Acres',
    status: 'Operational 24x7',
    description: 'Magnificent 50-ft wide Romanesque arrival gate with automated security checkpoints and visitor bays.',
    coordinates: { x: 50, y: 92 },
    highlights: ['RFID barrier gates', '24/7 Security command station', 'Visitor verification lobby', 'Water wall fountain'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Prime Location in Datala',
    description: 'Situated in the fastest-appreciating residential corridor of Chandrapur, away from heavy industrial smoke yet minutes from the city core.',
    icon: 'MapPin',
    stats: '10 Mins to City Center'
  },
  {
    title: 'Unmatched Construction Quality',
    description: 'Engineered with M25 grade concrete, Tata Tiscon high-tensile steel, AAC block thermal masonry, and branded sanitary ware.',
    icon: 'Hammer',
    stats: 'M25 High-Grade RCC'
  },
  {
    title: 'Gated Multi-Tier Security',
    description: 'Round-the-clock trained guards, full-perimeter CCTV coverage, RFID boom barriers, and biometric resident entry.',
    icon: 'Shield',
    stats: '100+ CCTV Cameras'
  },
  {
    title: 'Lush 65% Open Landscaping',
    description: 'Experience pure breathable air with 1,200+ oxygen-giving trees, manicured floral gardens, and peaceful water fountains.',
    icon: 'Sprout',
    stats: '1,200+ Native Trees'
  },
  {
    title: 'Modern High-End Lifestyle',
    description: 'Grand clubhouse, children’s adventure zone, indoor sports lounge, temple, and paved jogging tracks for every family member.',
    icon: 'Sparkles',
    stats: '10+ Luxury Amenities'
  },
  {
    title: 'Superb Regional Connectivity',
    description: 'Direct wide connectivity to Datala Road, Chandrapur Railway Junction, Tadoba Forest Highway, and leading academic institutions.',
    icon: 'Navigation',
    stats: 'Direct Main Road Access'
  },
  {
    title: '15+ Years Trusted Developer',
    description: 'Proven track record of timely deliveries, 100% clear legal titles, approved building plans, and bank loan approvals from SBI & HDFC.',
    icon: 'Award',
    stats: '100% Clear Title'
  },
  {
    title: 'High Capital Appreciation',
    description: 'Rapid infrastructural expansion in Datala guarantees superior return on investment and high rental demand.',
    icon: 'TrendingUp',
    stats: '18%+ Projected ROI'
  }
];

export const LANDMARKS_DATA: Landmark[] = [
  {
    name: 'Chandrapur Railway Junction',
    category: 'Transit',
    distance: '6.5 km',
    driveTime: '12 Mins',
    description: 'Direct express rail connectivity to Nagpur, Hyderabad, Mumbai, and Delhi.',
    icon: 'Train'
  },
  {
    name: 'Datala Main Highway & Bus Stand',
    category: 'Transit',
    distance: '0.8 km',
    driveTime: '2 Mins',
    description: 'Instant arterial access for intra-city transit and daily commuting.',
    icon: 'Bus'
  },
  {
    name: 'Mount Litera Zee / DPS School',
    category: 'Education',
    distance: '3.2 km',
    driveTime: '6 Mins',
    description: 'Premier CBSE affiliated international curriculum schools.',
    icon: 'GraduationCap'
  },
  {
    name: 'Government Medical College & Hospital',
    category: 'Healthcare',
    distance: '4.8 km',
    driveTime: '9 Mins',
    description: 'Comprehensive tertiary healthcare, trauma center, and 24/7 pharmacy.',
    icon: 'HeartPulse'
  },
  {
    name: 'Chandrapur City Center & Gandhi Chowk',
    category: 'Commercial',
    distance: '5.5 km',
    driveTime: '10 Mins',
    description: 'Major shopping hubs, banks, jewelry showrooms, and dining outlets.',
    icon: 'ShoppingBag'
  },
  {
    name: 'Tadoba-Andhari Tiger Reserve Access Gate',
    category: 'Tourism',
    distance: '24 km',
    driveTime: '30 Mins',
    description: "World-renowned wildlife sanctuary, luxury resorts, and nature trails.",
    icon: 'Compass'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh & Sangeeta Deshmukh',
    role: 'Senior Consultant Surgeon',
    location: 'Datala, Chandrapur',
    rating: 5,
    quote: 'Moving into our 4 BHK Sovereign Villa at DSK Green is the best lifestyle decision we ever made. The peaceful green environment, clean air, and unmatched security give our children a safe and joyous childhood. The construction finish is genuinely on par with luxury projects in Pune and Mumbai.',
    propertyOwned: 'The Royal Sovereign Villa (Villa #14)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    residenceYear: 'Resident since 2023'
  },
  {
    id: 'test-2',
    name: 'Mr. Arvind & Priya Kulkarni',
    role: 'Industrialist & Business Owner',
    location: 'Chandrapur',
    rating: 5,
    quote: 'DSK Green represents the pinnacle of residential luxury in Chandrapur. From the wide 40-ft concrete roads to the beautiful Lord Ganesha temple and evening musical fountain, the community vibe is warm and elevated. The builder delivered 100% on their clear-title promises.',
    propertyOwned: 'The Palm Vista Bungalow (Plot #29)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    residenceYear: 'Resident since 2022'
  },
  {
    id: 'test-3',
    name: 'Mrs. Anita & Sandeep Verma',
    role: 'Senior Executive, Power & Energy Sector',
    location: 'Datala, Chandrapur',
    rating: 5,
    quote: 'The 3 BHK Grand Boulevard flat has an incredible layout with great ventilation and huge balconies. Living here feels like staying in a 5-star resort every single day. The maintenance team keeps everything spotless.',
    propertyOwned: 'The Grand Boulevard Residences (Tower A, 5th Floor)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    residenceYear: 'Resident since 2024'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Sovereign Villa Front Elevation',
    category: 'Exterior & Architecture',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    description: 'Modern minimalist facades accented with natural stone and wooden louvers.'
  },
  {
    id: 'gal-2',
    title: 'Double-Height Living Lounge',
    category: 'Luxury Interiors',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    description: 'Italian marble floors with floor-to-ceiling glass offering ambient daylight.'
  },
  {
    id: 'gal-3',
    title: 'Central Landscaped Botanical Park',
    category: 'Township Landscapes',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
    description: 'Over 2.5 acres of verdant walking trails, flowerbeds, and meditation gazebos.'
  },
  {
    id: 'gal-4',
    title: 'Illuminated Evening Fountain Plaza',
    category: 'Amenities & Community',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85',
    description: 'The golden hour water show that gathers families every evening.'
  },
  {
    id: 'gal-5',
    title: 'Master Suite with Private Balcony Deck',
    category: 'Luxury Interiors',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    description: 'Spacious serene bedroom quarters with en-suite walk-in wardrobe.'
  },
  {
    id: 'gal-6',
    title: 'Grand 40-ft Wide Concrete Avenues',
    category: 'Exterior & Architecture',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    description: 'Underground cabling and tree-lined boulevards with designer street lights.'
  },
  {
    id: 'gal-7',
    title: 'Lord Ganesha Temple Sanctum',
    category: 'Amenities & Community',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    description: 'White marble spiritual shrine nestled amidst lush flowering palms.'
  },
  {
    id: 'gal-8',
    title: 'Gourmet Island Kitchen & Dining',
    category: 'Luxury Interiors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'Ergonomic modular kitchen with black granite counters and dining hub.'
  }
];

export const VIRTUAL_TOUR_SCENES = [
  {
    id: 'scene-foyer',
    name: 'Grand Foyer & Double-Height Living',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    description: 'Spacious 24-ft ceiling foyer with Italian marble flooring and custom chandelier accents.'
  },
  {
    id: 'scene-master',
    name: 'Presidential Master Suite',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    description: 'Luxurious king bedroom with en-suite bath, hardwood accents, and private terrace view.'
  },
  {
    id: 'scene-garden',
    name: 'Private Manicured Garden Patio',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
    description: 'Your private green lawn for morning tea, weekend barbecues, and family gatherings.'
  },
  {
    id: 'scene-fountain',
    name: 'Central Fountain Plaza & Boulevard',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=85',
    description: 'Township central landmark featuring illuminated choreographed water displays.'
  },
  {
    id: 'scene-club',
    name: 'The Grand Clubhouse Lounge',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1600&q=85',
    description: 'Air-conditioned luxury lounge, indoor sports arcade, and fitness gym.'
  }
];
