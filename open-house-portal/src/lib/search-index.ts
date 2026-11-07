// Site-wide search index.
// Combines navigable pages with "latest property updates" so customers can
// search for what they need directly from the header.

export type SearchKind = "page" | "property";

export interface SearchResult {
  id: string;
  kind: SearchKind;
  label: string;
  description?: string;
  /** Route path for page results (used with <Link to=...>). */
  to?: string;
  slug?: string;
  location?: string;
  priceDisplay?: string;
  beds?: number;
  /** Base listing status, e.g. "For sale", "To let". */
  status?: string;
  /** Latest update label, e.g. "Just listed", "Reduced", "Sold". */
  updateLabel?: string;
  image?: string;
  updatedAt?: number;
  keywords?: string[];
  score: number;
}

interface RawPage {
  id: string;
  label: string;
  description: string;
  to: string;
  keywords: string[];
}

interface RawProperty {
  id: string;
  label: string;
  location: string;
  priceDisplay: string;
  beds: number;
  status: string;
  updateLabel: string;
  image: string;
  slug: string;
  updatedAt: number;
}

const PAGE_DEFS: RawPage[] = [
  {
    id: "page-home",
    label: "Home",
    description: "Your next chapter starts with Open House.",
    to: "/",
    keywords: ["home", "start", "welcome", "open house"],
  },
  {
    id: "page-buy",
    label: "Buy",
    description: "Find your next home. Properties for sale.",
    to: "/buy",
    keywords: ["buy", "buying", "for sale", "properties", "purchase", "homes", "sale"],
  },
  {
    id: "page-rent",
    label: "Rent",
    description: "Find your next place to call home. Homes to rent.",
    to: "/rent",
    keywords: ["rent", "renting", "to let", "let", "tenancy", "letting"],
  },
  {
    id: "page-sell",
    label: "Sell",
    description: "Sell your home with local expertise.",
    to: "/sell",
    keywords: ["sell", "selling", "valuation", "estate agent", "fees"],
  },
  {
    id: "page-landlords",
    label: "Landlords",
    description: "Lettings & property management.",
    to: "/landlords",
    keywords: ["landlords", "lettings", "property management", "tenant", "rent", "manage"],
  },
  {
    id: "page-auctions",
    label: "Auctions",
    description: "Property auctions on your terms.",
    to: "/auctions",
    keywords: ["auctions", "auction", "bidding", "reserve", "sale", "bid"],
  },
  {
    id: "page-land",
    label: "Land & New Homes",
    description: "Your land and its next chapter.",
    to: "/land-and-new-homes",
    keywords: ["land", "new homes", "development", "plots", "self-build", "building land"],
  },
  {
    id: "page-valuation",
    label: "Free valuation",
    description: "What could your home be worth?",
    to: "/valuation",
    keywords: ["valuation", "free valuation", "worth", "price", "estimate", "value"],
  },
  {
    id: "page-find-agent",
    label: "Find your local agent",
    description: "Local experts, closer than you think.",
    to: "/find-agent",
    keywords: ["find agent", "local agent", "branch", "agent", "contact", "local"],
  },
  {
    id: "page-mortgages",
    label: "Mortgages",
    description: "Mortgage advice by UKMC.",
    to: "/mortgages",
    keywords: [
      "mortgages",
      "mortgage",
      "ukmc",
      "advice",
      "lending",
      "buy to let",
      "protection",
      "equity release",
    ],
  },
  {
    id: "page-about",
    label: "About us",
    description: "Moving home, made more personal.",
    to: "/about",
    keywords: ["about", "about us", "company", "local expertise", "open house"],
  },
  {
    id: "page-discover",
    label: "Client testimonials",
    description: "Discover client stories and reviews.",
    to: "/discover",
    keywords: ["discover", "testimonials", "reviews", "client stories", "clients", "feedback"],
  },
  {
    id: "page-register",
    label: "Register for updates",
    description: "Find a home and stay in the know.",
    to: "/register",
    keywords: ["register", "updates", "alerts", "property updates", "notifications"],
  },
];

// Buy property update labels (deterministic, stable per id).
const BUY_UPDATE_LABELS: Record<string, string> = {
  "prop-1": "Just listed",
  "prop-2": "Just listed",
  "prop-3": "Reduced",
  "prop-4": "Sold",
  "prop-5": "Under offer",
  "prop-6": "Just listed",
  "prop-7": "Reduced",
  "prop-8": "Just listed",
  "prop-9": "Under offer",
};

// Rental properties (mirror of the Rent listings page) with update labels.
const RENT_DEFS: RawProperty[] = [
  {
    id: "rent-1",
    label: "Avondale Circle",
    location: "Stafford, ST18",
    priceDisplay: "£950 pcm",
    beds: 3,
    status: "To let",
    updateLabel: "Just listed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    slug: "avondale-circle-stafford",
    updatedAt: 299,
  },
  {
    id: "rent-2",
    label: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    priceDisplay: "£1,100 pcm",
    beds: 4,
    status: "To let",
    updateLabel: "Just listed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    slug: "rowan-drive-branston",
    updatedAt: 298,
  },
  {
    id: "rent-3",
    label: "Earl Street",
    location: "West Bromwich, B70",
    priceDisplay: "£1,150 pcm",
    beds: 3,
    status: "To let",
    updateLabel: "Reduced",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    slug: "earl-street-west-bromwich",
    updatedAt: 297,
  },
  {
    id: "rent-4",
    label: "Northern Rose Close",
    location: "Bury St. Edmunds, IP32",
    priceDisplay: "£1,200 pcm",
    beds: 3,
    status: "Let agreed",
    updateLabel: "Let agreed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/19c74ade-0000-4a4f-abce-2465bdfe4d18.jpg",
    slug: "northern-rose-close-bury-st-edmunds",
    updatedAt: 296,
  },
  {
    id: "rent-5",
    label: "Weston Road",
    location: "Stafford, ST16",
    priceDisplay: "£1,250 pcm",
    beds: 3,
    status: "To let",
    updateLabel: "Just listed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/9780a890-67a7-4d3d-ab40-867f63d3073a.jpg",
    slug: "weston-road-stafford",
    updatedAt: 295,
  },
  {
    id: "rent-6",
    label: "Hill Crest",
    location: "Penley, Wrexham, LL13",
    priceDisplay: "£1,350 pcm",
    beds: 4,
    status: "To let",
    updateLabel: "Reduced",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/3c49acf4-a7ec-406a-9493-1b5a086b7b69.jpg",
    slug: "hill-crest-penley-wrexham",
    updatedAt: 294,
  },
  {
    id: "rent-7",
    label: "Avondale Circle",
    location: "Stafford, ST18",
    priceDisplay: "£1,450 pcm",
    beds: 3,
    status: "To let",
    updateLabel: "Just listed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    slug: "avondale-circle-stafford",
    updatedAt: 293,
  },
  {
    id: "rent-8",
    label: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    priceDisplay: "£1,550 pcm",
    beds: 4,
    status: "To let",
    updateLabel: "Under offer",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    slug: "rowan-drive-branston",
    updatedAt: 292,
  },
  {
    id: "rent-9",
    label: "Earl Street",
    location: "West Bromwich, B70",
    priceDisplay: "£1,750 pcm",
    beds: 3,
    status: "To let",
    updateLabel: "Just listed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    slug: "earl-street-west-bromwich",
    updatedAt: 291,
  },
];

// Lazy import of the buy properties keeps this module decoupled from data.ts
// at module-eval time, but we still want the buy listings included.
import { PROPERTIES_DATA } from "./data";

const BUY_DEFS: RawProperty[] = PROPERTIES_DATA.map((p, i) => ({
  id: p.id,
  label: p.title,
  location: p.town,
  priceDisplay: p.priceDisplay,
  beds: p.bedrooms,
  status: p.status,
  updateLabel: BUY_UPDATE_LABELS[p.id] ?? "Just listed",
  image: p.image,
  slug: p.slug,
  updatedAt: 199 - i,
}));

const PROPERTY_DEFS: RawProperty[] = [...BUY_DEFS, ...RENT_DEFS];

function pageHaystack(p: RawPage): string {
  return `${p.label} ${p.description} ${p.keywords.join(" ")}`.toLowerCase();
}

function propertyHaystack(p: RawProperty): string {
  return `${p.label} ${p.location} ${p.priceDisplay} ${p.beds} bedrooms ${p.status} ${p.updateLabel} ${p.slug}`.toLowerCase();
}

function scoreFor(haystack: string, q: string): number {
  if (haystack.startsWith(q)) return 100;
  if (haystack.includes(` ${q}`)) return 80;
  if (haystack.includes(q)) return 50;
  return 0;
}

export function searchAll(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const pages: SearchResult[] = PAGE_DEFS.map((p) => ({
    id: p.id,
    kind: "page" as const,
    label: p.label,
    description: p.description,
    to: p.to,
    keywords: p.keywords,
    score: scoreFor(pageHaystack(p), q),
  }));

  const props: SearchResult[] = PROPERTY_DEFS.map((p) => ({
    id: p.id,
    kind: "property" as const,
    label: p.label,
    location: p.location,
    priceDisplay: p.priceDisplay,
    beds: p.beds,
    status: p.status,
    updateLabel: p.updateLabel,
    image: p.image,
    slug: p.slug,
    updatedAt: p.updatedAt,
    score: scoreFor(propertyHaystack(p), q),
  }));

  return [...pages, ...props]
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
}

export function latestUpdates(limit = 5): SearchResult[] {
  return [...PROPERTY_DEFS]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, limit)
    .map((p) => ({
      id: p.id,
      kind: "property" as const,
      label: p.label,
      location: p.location,
      priceDisplay: p.priceDisplay,
      beds: p.beds,
      status: p.status,
      updateLabel: p.updateLabel,
      image: p.image,
      slug: p.slug,
      updatedAt: p.updatedAt,
      score: 0,
    }));
}

export function searchAllProperties(query: string): SearchResult[] {
  return searchAll(query).filter((r) => r.kind === "property");
}
