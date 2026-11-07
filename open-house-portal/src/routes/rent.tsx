import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Search, Check, ChevronDown, ArrowRight, MapPin, Map } from "lucide-react";
import { OpenHouseLogo } from "../components/OpenHouseLogo";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Properties to Rent | Open House Estate Agents" },
      {
        name: "description",
        content:
          "Find your next place to call home. Explore homes to rent, with local experts to help you make your move.",
      },
      { property: "og:title", content: "24 properties to rent | Open House" },
      {
        property: "og:description",
        content: "Explore homes to rent across the UK, matching your filters.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RentPage,
});

interface RentalCard {
  id: string;
  slug: string;
  badge: "To let" | "Let agreed";
  image: string;
  price: number;
  priceDisplay: string;
  title: string;
  location: string;
  specs: string;
  hasWatermark?: boolean;
}

const RENTAL_CARDS: RentalCard[] = [
  // Row 1
  {
    id: "rent-1",
    slug: "avondale-circle-stafford",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    price: 950,
    priceDisplay: "£950 pcm",
    title: "Avondale Circle",
    location: "Stafford, ST18",
    specs: "3 bedrooms · Semi-detached",
  },
  {
    id: "rent-2",
    slug: "rowan-drive-branston",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    price: 1100,
    priceDisplay: "£1,100 pcm",
    title: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    specs: "4 bedrooms · Semi-detached",
  },
  {
    id: "rent-3",
    slug: "earl-street-west-bromwich",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    price: 1150,
    priceDisplay: "£1,150 pcm",
    title: "Earl Street",
    location: "West Bromwich, B70",
    specs: "3 bedrooms · End-terrace",
  },

  // Row 2
  {
    id: "rent-4",
    slug: "northern-rose-close-bury-st-edmunds",
    badge: "Let agreed",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/19c74ade-0000-4a4f-abce-2465bdfe4d18.jpg",
    price: 1200,
    priceDisplay: "£1,200 pcm",
    title: "Northern Rose Close",
    location: "Bury St. Edmunds, IP32",
    specs: "3 bedrooms · Townhouse",
  },
  {
    id: "rent-5",
    slug: "weston-road-stafford",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/9780a890-67a7-4d3d-ab40-867f63d3073a.jpg",
    price: 1250,
    priceDisplay: "£1,250 pcm",
    title: "Weston Road",
    location: "Stafford, ST16",
    specs: "3 bedrooms · Detached",
    hasWatermark: true,
  },
  {
    id: "rent-6",
    slug: "hill-crest-penley-wrexham",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/3c49acf4-a7ec-406a-9493-1b5a086b7b69.jpg",
    price: 1350,
    priceDisplay: "£1,350 pcm",
    title: "Hill Crest",
    location: "Penley, Wrexham, LL13",
    specs: "4 bedrooms · Semi-detached",
  },

  // Row 3
  {
    id: "rent-7",
    slug: "avondale-circle-stafford",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
    price: 1450,
    priceDisplay: "£1,450 pcm",
    title: "Avondale Circle",
    location: "Stafford, ST18",
    specs: "3 bedrooms · Semi-detached",
  },
  {
    id: "rent-8",
    slug: "rowan-drive-branston",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/46ae444f-703b-4b00-a10c-3473f29cb5c3.jpg",
    price: 1550,
    priceDisplay: "£1,550 pcm",
    title: "Rowan Drive",
    location: "Branston, Burton-on-Trent, DE14",
    specs: "4 bedrooms · Semi-detached",
  },
  {
    id: "rent-9",
    slug: "earl-street-west-bromwich",
    badge: "To let",
    image:
      "https://vibe.filesafe.space/1793524767581062047/assets/6fb8a98b-b071-4bfc-b5e9-8c28f2c2a919.jpg",
    price: 1750,
    priceDisplay: "£1,750 pcm",
    title: "Earl Street",
    location: "West Bromwich, B70",
    specs: "3 bedrooms · End-terrace",
  },
];

function RentPage() {
  const [locationQuery, setLocationQuery] = useState("");
  const [maxRent, setMaxRent] = useState("£1,800 pcm");
  const [minBeds, setMinBeds] = useState("3+ bedrooms");
  const [propertyType, setPropertyType] = useState("Any type");
  const [includeLetAgreed, setIncludeLetAgreed] = useState(true);
  const [sortOption, setSortOption] = useState<"low-to-high" | "high-to-low">("low-to-high");
  const [showMap, setShowMap] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClearFilters = () => {
    setLocationQuery("");
    setMaxRent("£1,800 pcm");
    setMinBeds("3+ bedrooms");
    setPropertyType("Any type");
    setIncludeLetAgreed(true);
  };

  // Filter list (defaults to all 9 exact items matching design)
  const displayedProperties = RENTAL_CARDS.filter((item) => {
    if (!includeLetAgreed && item.badge === "Let agreed") return false;
    return true;
  }).sort((a, b) => {
    if (sortOption === "high-to-low") return b.price - a.price;
    return a.price - b.price;
  });

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20">
        {/* TOP HEADING */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
            Find your next place to call home.
          </h1>
          <p className="text-[15px] sm:text-[17px] text-gray-500 font-normal">
            Explore homes to rent, with local experts to help you make your move.
          </p>
        </div>

        {/* SEARCH PANEL (full-width light grey band) */}
        <div className="bg-[#f8f9fa] rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-sm mb-10">
          {/* Tabs at top left */}
          <div className="flex items-center gap-6 mb-5 text-[14.5px]">
            <Link
              to="/buy"
              className="font-medium text-gray-400 hover:text-[#191c2b] transition-colors"
            >
              Buy
            </Link>
            <span className="font-bold text-[#df0068] cursor-default">Rent</span>
          </div>

          {/* Filters in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-end">
            {/* Location */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">Location</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter area or postcode"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="w-full h-[48px] pl-3.5 pr-9 text-[14px] rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 text-[#191c2b] focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Max rent (pcm) */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">
                Max rent (pcm)
              </label>
              <div className="relative">
                <select
                  value={maxRent}
                  onChange={(e) => setMaxRent(e.target.value)}
                  className="w-full h-[48px] px-3.5 text-[14px] rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-9"
                >
                  <option value="No maximum">No maximum</option>
                  <option value="£1,000 pcm">£1,000 pcm</option>
                  <option value="£1,250 pcm">£1,250 pcm</option>
                  <option value="£1,500 pcm">£1,500 pcm</option>
                  <option value="£1,800 pcm">£1,800 pcm</option>
                  <option value="£2,000 pcm">£2,000 pcm</option>
                  <option value="£2,500+ pcm">£2,500+ pcm</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Min beds */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">Min beds</label>
              <div className="relative">
                <select
                  value={minBeds}
                  onChange={(e) => setMinBeds(e.target.value)}
                  className="w-full h-[48px] px-3.5 text-[14px] rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-9"
                >
                  <option value="Any">Any</option>
                  <option value="1+ bedroom">1+ bedroom</option>
                  <option value="2+ bedrooms">2+ bedrooms</option>
                  <option value="3+ bedrooms">3+ bedrooms</option>
                  <option value="4+ bedrooms">4+ bedrooms</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Property type */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">Property type</label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full h-[48px] px-3.5 text-[14px] rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-9"
                >
                  <option value="Any type">Any type</option>
                  <option value="Semi-detached">Semi-detached</option>
                  <option value="Detached">Detached</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="End-terrace">End-terrace</option>
                  <option value="Flat / Apartment">Flat / Apartment</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Pink pill button: Search with magnifier */}
            <div className="lg:col-span-2">
              <button
                type="button"
                className="w-full h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Sub-bar below filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-gray-200/70 text-[13px]">
            <div className="flex flex-wrap items-center gap-3">
              {/* Checked toggle: pink check + pink text */}
              <button
                type="button"
                onClick={() => setIncludeLetAgreed(!includeLetAgreed)}
                className="inline-flex items-center gap-1.5 cursor-pointer select-none group"
              >
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                    includeLetAgreed ? "text-[#df0068]" : "text-gray-300"
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span
                  className={`font-semibold transition-colors ${
                    includeLetAgreed ? "text-[#df0068]" : "text-gray-500"
                  }`}
                >
                  Include let agreed
                </span>
              </button>

              <span className="text-gray-500">Up to £1,800 pcm · 3+ bedrooms</span>
            </div>

            {/* Far right: pink underlined link "Clear filters" */}
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#df0068] underline font-medium hover:text-[#c4005b] transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-6">
          <div>
            <h2 className="text-[24px] sm:text-[26px] font-extrabold text-[#191c2b] tracking-tight">
              24 properties to rent
            </h2>
            <p className="text-[13px] text-gray-500 mt-0.5">
              Matching your filters · Including let agreed
            </p>
          </div>

          <div className="flex items-center gap-6 text-[13.5px]">
            {/* Dropdown: Rent: low to high */}
            <div className="relative inline-flex items-center gap-1">
              <span className="text-[#191c2b] font-medium">Rent:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as "low-to-high" | "high-to-low")}
                className="bg-transparent text-[#191c2b] font-semibold cursor-pointer pr-4 appearance-none focus:outline-none"
              >
                <option value="low-to-high">low to high</option>
                <option value="high-to-low">high to low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5] text-gray-700 pointer-events-none -ml-3" />
            </div>

            {/* Pink View on map link with map icon */}
            <button
              type="button"
              onClick={() => setShowMap(!showMap)}
              className="inline-flex items-center gap-1.5 font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
            >
              <Map className="w-4 h-4 stroke-[2]" />
              <span>{showMap ? "Hide map" : "View on map"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Map panel (toggleable) */}
        {showMap && (
          <div className="mb-10 rounded-[24px] overflow-hidden border border-gray-200 bg-[#f8f9fa] p-8 text-center relative shadow-inner">
            <div className="max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#191c2b]">Interactive Map View</h3>
              <p className="text-[13.5px] text-gray-600 leading-relaxed">
                Showing 24 rental properties across Stafford, Branston, West Bromwich, Bury St.
                Edmunds, and Penley. Click any card below to view full specifications.
              </p>
            </div>
          </div>
        )}

        {/* PROPERTY CARDS: 3 columns x 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {displayedProperties.map((prop) => {
            const isFav = favorites[prop.id];

            return (
              <div
                key={prop.id}
                className="group bg-white rounded-[22px] overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Image Container with Badges */}
                <Link
                  to="/properties/$slug"
                  params={{ slug: prop.slug }}
                  className="relative aspect-[16/11] overflow-hidden bg-gray-100 block cursor-pointer"
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* White pill badge at top left (or dark navy for "Let agreed") */}
                  <div className="absolute top-3.5 left-3.5">
                    {prop.badge === "Let agreed" ? (
                      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#191c2b] text-white shadow-sm">
                        Let agreed
                      </span>
                    ) : (
                      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold bg-white text-[#191c2b] shadow-sm">
                        To let
                      </span>
                    )}
                  </div>

                  {/* Round white heart button at top right */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(prop.id, e)}
                    aria-label="Save as favourite"
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white text-gray-700 hover:text-[#df0068] flex items-center justify-center shadow-sm transition-transform active:scale-90 cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 stroke-[2] transition-colors ${
                        isFav ? "fill-[#df0068] text-[#df0068]" : ""
                      }`}
                    />
                  </button>

                  {/* Watermark logo for card 5 (Weston Road) as shown in Figma */}
                  {prop.hasWatermark && (
                    <div className="absolute bottom-2.5 right-2.5 opacity-90 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm px-1.5 py-1 rounded-md shadow-sm">
                        <OpenHouseLogo className="h-4 w-auto pointer-events-none" />
                      </div>
                    </div>
                  )}
                </Link>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Bold price */}
                    <div className="text-[22px] sm:text-[24px] font-extrabold text-[#191c2b] tracking-tight">
                      {prop.priceDisplay}
                    </div>

                    {/* Bold street name */}
                    <Link
                      to="/properties/$slug"
                      params={{ slug: prop.slug }}
                      className="block text-[15px] font-bold text-[#191c2b] mt-1 group-hover:text-[#df0068] transition-colors cursor-pointer"
                    >
                      {prop.title}
                    </Link>

                    {/* Grey location */}
                    <p className="text-[12.5px] text-gray-500 mt-0.5">{prop.location}</p>

                    {/* Grey bedrooms · type */}
                    <p className="text-[12.5px] text-gray-500 mt-1 font-medium">{prop.specs}</p>
                  </div>

                  {/* Pink View property link with arrow */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to="/properties/$slug"
                      params={{ slug: prop.slug }}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
                    >
                      <span>View property</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINATION (centered) */}
        <div className="mt-14 flex flex-col items-center justify-center space-y-4">
          <p className="text-[12.5px] text-gray-500 font-medium">Showing 1–9 of 24 properties</p>

          <div className="flex items-center gap-2 text-[13px] font-semibold">
            {/* Previous button: disabled, grey */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-gray-400 cursor-not-allowed select-none"
            >
              <span>‹</span>
              <span>Previous</span>
            </button>

            {/* Page 1 (pink filled, active) */}
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                currentPage === 1
                  ? "bg-[#df0068] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                currentPage === 2
                  ? "bg-[#df0068] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                currentPage === 3
                  ? "bg-[#df0068] text-white"
                  : "border border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              3
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <span>›</span>
            </button>
          </div>
        </div>
      </main>

      {/* CTA BAND (full-width light pink) */}
      <section className="w-full bg-[#fdf0f5] py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-pink-100/80">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#191c2b] tracking-tight">
              A little local knowledge goes a long way.
            </h3>
            <p className="text-[14.5px] text-gray-600">
              Find a local lettings expert to help you find your next home.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/find-agent"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Find your local agent</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
