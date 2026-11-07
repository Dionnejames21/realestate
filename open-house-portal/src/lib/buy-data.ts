export interface BuyPropertyCard {
  id: string;
  slug: string;
  badge: "For sale" | "Sold STC";
  images: string[];
  price: number;
  priceDisplay: string;
  title: string;
  location: string;
  specs: string;
}

export const BUY_CARDS: BuyPropertyCard[] = [
  // 1. "For sale" | £300,000 | Avondale Circle | Stafford, ST18 | 3 bedrooms · Semi-detached (photo carousel with dots)
  {
    id: "buy-1",
    slug: "avondale-circle-stafford",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    ],
    price: 300000,
    priceDisplay: "£300,000",
    title: "Avondale Circle",
    location: "Stafford, ST18",
    specs: "3 bedrooms · Semi-detached",
  },
  // 2. "For sale" | £305,000 | Rowan Drive | Branston, Burton-on-Trent, DE14 | 4 bedrooms · Semi-detached
  {
    id: "buy-2",
    slug: "rowan-drive-branston",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
    ],
    price: 305000,
    priceDisplay: "£305,000",
    title: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    specs: "4 bedrooms · Semi-detached",
  },
  // 3. "For sale" | £309,950 | Earl Street | West Bromwich, B70 | 3 bedrooms · End-terrace
  {
    id: "buy-3",
    slug: "earl-street-west-bromwich",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    ],
    price: 309950,
    priceDisplay: "£309,950",
    title: "Earl Street",
    location: "West Bromwich, B70",
    specs: "3 bedrooms · End-terrace",
  },
  // 4. "Sold STC" (dark badge) | £310,000 | Northern Rose Close | Bury St. Edmunds, IP32 | 3 bedrooms · Townhouse
  {
    id: "buy-4",
    slug: "northern-rose-close-bury-st-edmunds",
    badge: "Sold STC",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/19c74ade-0000-4a4f-abce-2465bdfe4d18.jpg",
    ],
    price: 310000,
    priceDisplay: "£310,000",
    title: "Northern Rose Close",
    location: "Bury St. Edmunds, IP32",
    specs: "3 bedrooms · Townhouse",
  },
  // 5. "For sale" | £310,000 | Weston Road | Stafford, ST16 | 3 bedrooms · Detached
  {
    id: "buy-5",
    slug: "weston-road-stafford",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/9780a890-67a7-4d3d-ab40-867f63d3073a.jpg",
    ],
    price: 310000,
    priceDisplay: "£310,000",
    title: "Weston Road",
    location: "Stafford, ST16",
    specs: "3 bedrooms · Detached",
  },
  // 6. "For sale" | £314,995 | Hill Crest | Penley, Wrexham, LL13 | 4 bedrooms · Semi-detached
  {
    id: "buy-6",
    slug: "hill-crest-penley-wrexham",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/3c49acf4-a7ec-406a-9493-1b5a086b7b69.jpg",
    ],
    price: 314995,
    priceDisplay: "£314,995",
    title: "Hill Crest",
    location: "Penley, Wrexham, LL13",
    specs: "4 bedrooms · Semi-detached",
  },
  // 7. "For sale" | £300,000 | Avondale Circle | Stafford, ST18 | 3 bedrooms · Semi-detached
  {
    id: "buy-7",
    slug: "avondale-circle-stafford",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
    ],
    price: 300000,
    priceDisplay: "£300,000",
    title: "Avondale Circle",
    location: "Stafford, ST18",
    specs: "3 bedrooms · Semi-detached",
  },
  // 8. "For sale" | £305,000 | Rowan Drive | Branston, Burton-on-Trent, DE14 | 4 bedrooms · Semi-detached
  {
    id: "buy-8",
    slug: "rowan-drive-branston",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    ],
    price: 305000,
    priceDisplay: "£305,000",
    title: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    specs: "4 bedrooms · Semi-detached",
  },
  // 9. "For sale" | £309,950 | Earl Street | West Bromwich, B70 | 3 bedrooms · End-terrace
  {
    id: "buy-9",
    slug: "earl-street-west-bromwich",
    badge: "For sale",
    images: [
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    ],
    price: 309950,
    priceDisplay: "£309,950",
    title: "Earl Street",
    location: "West Bromwich, B70",
    specs: "3 bedrooms · End-terrace",
  },
];
