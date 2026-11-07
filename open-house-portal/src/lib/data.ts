export interface Property {
  id: string;
  slug: string;
  title: string;
  address: string;
  town: string;
  postcode: string;
  price: number;
  priceDisplay: string;
  status: "For sale" | "Sold STC" | "Under offer" | "To let";
  type: "Semi-detached" | "Detached" | "Townhouse" | "End-terrace" | "Terraced" | "Apartment";
  bedrooms: number;
  bathrooms: number;
  receptions?: number;
  tenure: "Freehold" | "Leasehold";
  epcRating?: string;
  councilTaxBand?: string;
  description: string;
  summary: string;
  features: string[];
  image: string;
  gallery: string[];
  listingType: "buy" | "rent";
  agent: {
    name: string;
    branch: string;
    phone: string;
    email: string;
  };
}

// 9 exact listings shown in Figma Image 5
export const PROPERTIES_DATA: Property[] = [
  {
    id: "prop-1",
    slug: "avondale-circle-stafford",
    title: "Avondale Circle",
    address: "Avondale Circle",
    town: "Stafford, ST18",
    postcode: "ST18",
    price: 300000,
    priceDisplay: "£300,000",
    status: "For sale",
    type: "Semi-detached",
    bedrooms: 3,
    bathrooms: 2,
    receptions: 1,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "D",
    summary:
      "A beautifully presented modern 3 bedroom semi-detached home located in a popular residential setting in Stafford.",
    description:
      "Open House is delighted to present this immaculate 3-bedroom modern semi-detached home situated within the desirable development on Avondale Circle, Stafford. Featuring high specification finishes throughout, this property boasts an expansive lounge/diner with French doors leading out into a landscaped private rear garden, a contemporary fitted kitchen with integrated appliances, master bedroom with en-suite shower room, two additional well-proportioned bedrooms, family bathroom, private driveway parking, and a garage.",
    features: [
      "Modern 3 Bedroom Semi-Detached Family Home",
      "Spacious Lounge / Dining Room with Garden Access",
      "Contemporary Fitted Kitchen with Integrated Appliances",
      "Master Bedroom with En-Suite Shower Room",
      "Driveway Parking for Multiple Vehicles & Garage",
      "Enclosed Landscaped Rear Garden",
      "Excellent Transport Links to Stafford Town Centre & M6",
      "Energy Efficient EPC Rating B",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Julie Roberts",
      branch: "Open House Stafford & West Midlands",
      phone: "0333 015 5440",
      email: "stafford@openhouse.co.uk",
    },
  },
  {
    id: "prop-2",
    slug: "rowan-drive-branston",
    title: "Rowan Drive",
    address: "Rowan Drive",
    town: "Branston, Burton-on-Trent, DE14",
    postcode: "DE14",
    price: 305000,
    priceDisplay: "£305,000",
    status: "For sale",
    type: "Semi-detached",
    bedrooms: 4,
    bathrooms: 2,
    receptions: 2,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "D",
    summary:
      "Superb four bedroom semi-detached home overlooking scenic open grounds in Rowan Drive, Branston.",
    description:
      "An exceptional modern four bedroom property located on the coveted Rowan Drive. This contemporary home delivers flexible multi-level accommodation, including an expansive open-plan kitchen/breakfast area, sunny living room, 4 generous bedrooms, two bathrooms plus ground floor cloakroom, off-road driveway, and enclosed family lawn garden.",
    features: [
      "4 Generously Sized Bedrooms",
      "Two Modern Bathrooms including Master En-Suite",
      "Bright Open Plan Kitchen / Breakfast Room",
      "Generous Rear Garden with Patio",
      "Private Driveway Parking for 2 Cars",
      "Close to Popular Local Schools and Amenities",
      "Easy Access to A38 and Commuter Links",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Marcus Green",
      branch: "Open House Burton & South Derbyshire",
      phone: "0333 015 5440",
      email: "burton@openhouse.co.uk",
    },
  },
  {
    id: "prop-3",
    slug: "earl-street-west-bromwich",
    title: "Earl Street",
    address: "Earl Street",
    town: "West Bromwich, B70",
    postcode: "B70",
    price: 309950,
    priceDisplay: "£309,950",
    status: "For sale",
    type: "End-terrace",
    bedrooms: 3,
    bathrooms: 1,
    receptions: 2,
    tenure: "Freehold",
    epcRating: "C",
    councilTaxBand: "B",
    summary:
      "Charming and deceptively spacious 3 bedroom end-terrace property in Earl Street, West Bromwich.",
    description:
      "Ideal for first-time buyers and families alike, this attractive three-bedroom end-of-terrace property on Earl Street offers well-balanced living space, two reception rooms, fitted kitchen, low maintenance rear garden, and handy off-street parking. Conveniently positioned for West Bromwich high street, tram links, and easy access to Birmingham city centre.",
    features: [
      "3 Double Bedrooms",
      "Spacious End-Terrace Layout",
      "Two Welcoming Reception Rooms",
      "Fitted Kitchen with Utility Area",
      "Low-Maintenance Private Garden",
      "Short Walk to Metro / Tram Stations",
      "No Upward Chain",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Julie Roberts",
      branch: "Open House West Midlands",
      phone: "0333 015 5440",
      email: "westmidlands@openhouse.co.uk",
    },
  },
  {
    id: "prop-4",
    slug: "northern-rose-close-bury-st-edmunds",
    title: "Northern Rose Close",
    address: "Northern Rose Close",
    town: "Bury St. Edmunds, IP32",
    postcode: "IP32",
    price: 310000,
    priceDisplay: "£310,000",
    status: "Sold STC",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2,
    receptions: 1,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "C",
    summary: "Modern 3-storey townhouse with integrated garage in popular Bury St. Edmunds.",
    description:
      "Offering versatile modern living across three levels, this stylish townhouse in Northern Rose Close includes 3 double bedrooms, 2 bathrooms, integrated garage, off-road parking, and enclosed sun-trap garden. Perfectly located for Bury St. Edmunds town centre, station, and easy access to the A14.",
    features: [
      "Modern 3 Bedroom Townhouse",
      "Integrated Garage and Off-Road Parking",
      "Versatile 3-Storey Living Accommodation",
      "Enclosed Private Rear Garden",
      "Principal Bedroom with En-Suite",
      "Sought-After Residential Development",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/19c74ade-0000-4a4f-abce-2465bdfe4d18.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/19c74ade-0000-4a4f-abce-2465bdfe4d18.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Thomas Hall",
      branch: "Open House East Anglia",
      phone: "0333 015 5440",
      email: "bury@openhouse.co.uk",
    },
  },
  {
    id: "prop-5",
    slug: "weston-road-stafford",
    title: "Weston Road",
    address: "Weston Road",
    town: "Stafford, ST16",
    postcode: "ST16",
    price: 310000,
    priceDisplay: "£310,000",
    status: "For sale",
    type: "Detached",
    bedrooms: 3,
    bathrooms: 1,
    receptions: 2,
    tenure: "Freehold",
    epcRating: "C",
    councilTaxBand: "D",
    summary:
      "Attractive detached 3 bedroom family home with generous garden and driveway on Weston Road.",
    description:
      "Situated on a substantial plot along Weston Road in Stafford, this detached 3 bedroom home features generous driveway parking, detached garage, solar roof panels, bright entrance hall, dual aspect lounge, separate dining room, modern kitchen, and expansive private rear garden.",
    features: [
      "Detached 3 Bedroom Family Home",
      "Generous Private Driveway & Garage",
      "Solar Panels Installed for High Energy Efficiency",
      "Two Formal Reception Rooms",
      "Spacious Rear Lawn Garden with Terrace",
      "Walking Distance to Stafford Hospital and Schools",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/9780a890-67a7-4d3d-ab40-867f63d3073a.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/9780a890-67a7-4d3d-ab40-867f63d3073a.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Julie Roberts",
      branch: "Open House Stafford & West Midlands",
      phone: "0333 015 5440",
      email: "stafford@openhouse.co.uk",
    },
  },
  {
    id: "prop-6",
    slug: "hill-crest-penley-wrexham",
    title: "Hill Crest",
    address: "Hill Crest",
    town: "Penley, Wrexham, LL13",
    postcode: "LL13",
    price: 314995,
    priceDisplay: "£314,995",
    status: "For sale",
    type: "Semi-detached",
    bedrooms: 4,
    bathrooms: 2,
    receptions: 1,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "D",
    summary:
      "Executive 4 bedroom semi-detached home with integral garage in quiet Penley cul-de-sac.",
    description:
      "Positioned in the quiet village community of Penley, near Wrexham, this substantial four bedroom semi-detached house features an integrated garage, double tarmac driveway, spacious open plan dining kitchen with patio doors, four good sized bedrooms including master en-suite, and enclosed rear garden.",
    features: [
      "4 Bedroom Semi-Detached House",
      "Integral Garage & Private Driveway",
      "Master En-Suite Shower Room",
      "Open Plan Kitchen & Dining Room",
      "Quiet Village Location in Penley",
      "Close to The Maelor School",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/3c49acf4-a7ec-406a-9493-1b5a086b7b69.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/3c49acf4-a7ec-406a-9493-1b5a086b7b69.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "David Edwards",
      branch: "Open House North Wales & Cheshire",
      phone: "0333 015 5440",
      email: "wrexham@openhouse.co.uk",
    },
  },
  {
    id: "prop-7",
    slug: "avondale-circle-stafford-plot-2",
    title: "Avondale Circle",
    address: "Avondale Circle",
    town: "Stafford, ST18",
    postcode: "ST18",
    price: 300000,
    priceDisplay: "£300,000",
    status: "For sale",
    type: "Semi-detached",
    bedrooms: 3,
    bathrooms: 2,
    receptions: 1,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "D",
    summary:
      "Brand new 3-bedroom semi-detached residence with private parking and south-facing garden.",
    description:
      "An impressive newly built 3 bedroom semi-detached property in Avondale Circle, offering contemporary family living. Light-filled rooms, luxury finishes, ground floor cloakroom, open-plan kitchen diner, and enclosed garden.",
    features: [
      "3 Bedrooms, 2 Bathrooms",
      "Semi-Detached with Private Driveway",
      "Contemporary High Gloss Kitchen",
      "NHBC 10-Year Warranty",
      "South Facing Rear Garden",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Julie Roberts",
      branch: "Open House Stafford & West Midlands",
      phone: "0333 015 5440",
      email: "stafford@openhouse.co.uk",
    },
  },
  {
    id: "prop-8",
    slug: "rowan-drive-branston-plot-8",
    title: "Rowan Drive",
    address: "Rowan Drive",
    town: "Branston, Burton-on-Trent, DE14",
    postcode: "DE14",
    price: 305000,
    priceDisplay: "£305,000",
    status: "For sale",
    type: "Semi-detached",
    bedrooms: 4,
    bathrooms: 2,
    receptions: 2,
    tenure: "Freehold",
    epcRating: "B",
    councilTaxBand: "D",
    summary: "Substantial 4 bedroom home with landscaped garden and open outlook.",
    description:
      "Open House is pleased to offer this 4 bedroom semi-detached home on Rowan Drive. With generous room sizes throughout, high quality fixtures and fittings, and excellent commuter access, this property represents outstanding value.",
    features: [
      "4 Bedrooms & 2 Bathrooms",
      "High Efficiency Heating System",
      "Off-Street Driveway for 2 Vehicles",
      "Modern Open Plan Dining Kitchen",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Marcus Green",
      branch: "Open House Burton & South Derbyshire",
      phone: "0333 015 5440",
      email: "burton@openhouse.co.uk",
    },
  },
  {
    id: "prop-9",
    slug: "earl-street-west-bromwich-phase-2",
    title: "Earl Street",
    address: "Earl Street",
    town: "West Bromwich, B70",
    postcode: "B70",
    price: 309950,
    priceDisplay: "£309,950",
    status: "For sale",
    type: "End-terrace",
    bedrooms: 3,
    bathrooms: 1,
    receptions: 2,
    tenure: "Freehold",
    epcRating: "C",
    councilTaxBand: "B",
    summary: "Spacious 3 bedroom end-terrace home with courtyard garden in West Bromwich.",
    description:
      "A well maintained end-of-terrace property with three generous bedrooms, two reception rooms, and direct transport links into central Birmingham. Perfect for families or buy-to-let investors.",
    features: [
      "3 Double Bedrooms",
      "End-Terrace Layout",
      "Modern Fitted Kitchen",
      "Close to Tram and Motorway Links",
    ],
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    gallery: [
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    ],
    listingType: "buy",
    agent: {
      name: "Julie Roberts",
      branch: "Open House West Midlands",
      phone: "0333 015 5440",
      email: "westmidlands@openhouse.co.uk",
    },
  },
];

export interface AgentBranch {
  id: string;
  postcodePrefix: string;
  name: string;
  subtitle: string;
  coverage: string;
  phone: string;
  phoneRaw: string;
  email: string;
  website: string;
}

export const AGENT_BRANCHES: AgentBranch[] = [
  {
    id: "brighton-coast",
    postcodePrefix: "BN1",
    name: "Brighton Coast",
    subtitle: "Personal property advice from people who know your neighbourhood.",
    coverage: "Serving Brighton, Saltdean, Peacehaven and Newhaven.",
    phone: "Call 01273 830 987",
    phoneRaw: "01273830987",
    email: "brighton@openhouse.co.uk",
    website: "https://www.openhousebrighton.co.uk",
  },
  {
    id: "stafford-midlands",
    postcodePrefix: "ST18",
    name: "Stafford & Stone",
    subtitle: "Trusted local agents delivering unmatched property results.",
    coverage: "Serving Stafford, Stone, Penkridge, Eccleshall and surrounding areas.",
    phone: "Call 01785 244 550",
    phoneRaw: "01785244550",
    email: "stafford@openhouse.co.uk",
    website: "https://www.openhousestafford.co.uk",
  },
  {
    id: "burton-derbyshire",
    postcodePrefix: "DE14",
    name: "Burton & South Derbyshire",
    subtitle: "Honest property advice and proactive sales from local specialists.",
    coverage: "Serving Burton-on-Trent, Branston, Barton-under-Needwood, and Swadlincote.",
    phone: "Call 01283 567 890",
    phoneRaw: "01283567890",
    email: "burton@openhouse.co.uk",
    website: "https://www.openhouseburton.co.uk",
  },
];
