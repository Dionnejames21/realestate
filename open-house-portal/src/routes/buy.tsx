import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  MapPin,
  Map,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BUY_CARDS } from "../lib/buy-data";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Find your next home | Open House Estate Agents" },
      {
        name: "description",
        content: "Explore properties for sale, with local expertise every step of the way.",
      },
      { property: "og:title", content: "146 properties for sale | Open House" },
      {
        property: "og:description",
        content:
          "Explore properties for sale across the UK, matching your filters. Including sold STC.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuyPage,
});

function BuyPage() {
  const [areaInput, setAreaInput] = useState("");
  const [maxPrice, setMaxPrice] = useState("No maximum");
  const [minBeds, setMinBeds] = useState("Any");
  const [propertyType, setPropertyType] = useState("Any type");
  const [includeSoldSTC, setIncludeSoldSTC] = useState(true);
  const [sortOption, setSortOption] = useState<"low-to-high" | "high-to-low">("low-to-high");
  const [showMap, setShowMap] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [carouselIndex, setCarouselIndex] = useState<Record<string, number>>({ "buy-1": 0 });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrevCarousel = (id: string, total: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCarouselIndex((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: (current - 1 + total) % total };
    });
  };

  const handleNextCarousel = (id: string, total: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCarouselIndex((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: (current + 1) % total };
    });
  };

  const handleClearFilters = () => {
    setAreaInput("");
    setMaxPrice("No maximum");
    setMinBeds("Any");
    setPropertyType("Any type");
    setIncludeSoldSTC(true);
  };

  const displayedProperties = BUY_CARDS.filter((item) => {
    if (!includeSoldSTC && item.badge === "Sold STC") return false;
    return true;
  }).sort((a, b) => {
    if (sortOption === "high-to-low") return b.price - a.price;
    return a.price - b.price;
  });

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-20">
        {/* TOP HEADING */}
        <div className="space-y-2 mb-6 sm:mb-10">
          <h1 className="text-[32px] sm:text-[46px] lg:text-[52px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
            Find your next home.
          </h1>
          <p className="text-[14.5px] sm:text-[17px] text-gray-500 font-normal">
            Explore properties for sale, with local expertise every step of the way.
          </p>
        </div>

        {/* MOBILE SEARCH WIDGET (Exact mobile design from user prompt) */}
        <div className="block lg:hidden mb-8">
          <div className="bg-[#f8f9fa] rounded-[22px] p-5 border border-gray-100/90 shadow-sm space-y-4">
            {/* Tabs at top left */}
            <div className="flex items-center gap-6 text-[14.5px]">
              <span className="font-bold text-[#df0068] cursor-default">Buy</span>
              <Link
                to="/rent"
                className="font-medium text-gray-400 hover:text-[#191c2b] transition-colors"
              >
                Rent
              </Link>
            </div>

            {/* Area / postcode input & Filter button */}
            <div className="space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">
                Area / postcode
              </label>
              <div className="flex items-center gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Area or postcode"
                    value={areaInput}
                    onChange={(e) => setAreaInput(e.target.value)}
                    className="w-full h-[48px] pl-3.5 pr-4 text-[14px] rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 text-[#191c2b] focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="h-[48px] px-4 rounded-xl border border-gray-200 bg-white text-[#191c2b] text-[13.5px] font-semibold inline-flex items-center gap-2 hover:border-gray-300 transition-colors cursor-pointer flex-shrink-0"
                >
                  <SlidersHorizontal className="w-4 h-4 stroke-[2]" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Mobile Expandable Filters Panel */}
            {mobileFilterOpen && (
              <div className="pt-3 border-t border-gray-200/80 space-y-3.5 animate-in fade-in duration-150">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[12px] font-medium text-gray-600 mb-1">
                      Max price
                    </label>
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full h-[42px] px-3 text-[13.5px] rounded-lg border border-gray-200 bg-white text-[#191c2b]"
                    >
                      <option value="No maximum">No maximum</option>
                      <option value="£250,000">£250,000</option>
                      <option value="£300,000">£300,000</option>
                      <option value="£325,000">£325,000</option>
                      <option value="£350,000">£350,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-600 mb-1">
                      Min beds
                    </label>
                    <select
                      value={minBeds}
                      onChange={(e) => setMinBeds(e.target.value)}
                      className="w-full h-[42px] px-3 text-[13.5px] rounded-lg border border-gray-200 bg-white text-[#191c2b]"
                    >
                      <option value="Any">Any</option>
                      <option value="2+ bedrooms">2+ bedrooms</option>
                      <option value="3+ bedrooms">3+ bedrooms</option>
                      <option value="4+ bedrooms">4+ bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-gray-600 mb-1">
                      Property type
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full h-[42px] px-3 text-[13.5px] rounded-lg border border-gray-200 bg-white text-[#191c2b]"
                    >
                      <option value="Any type">Any type</option>
                      <option value="Semi-detached">Semi-detached</option>
                      <option value="Detached">Detached</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="End-terrace">End-terrace</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[13px]">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeSoldSTC}
                      onChange={(e) => setIncludeSoldSTC(e.target.checked)}
                      className="accent-[#df0068] w-4 h-4 rounded"
                    />
                    <span className="text-gray-700 font-medium">Include sold STC</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="text-[#df0068] underline text-[12.5px] font-semibold"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP SEARCH PANEL (Matching Rent listings page with "Buy" active) */}
        <div className="hidden lg:block bg-[#f8f9fa] rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-sm mb-10">
          {/* Tabs at top left */}
          <div className="flex items-center gap-6 mb-5 text-[14.5px]">
            <span className="font-bold text-[#df0068] cursor-default">Buy</span>
            <Link
              to="/rent"
              className="font-medium text-gray-400 hover:text-[#191c2b] transition-colors"
            >
              Rent
            </Link>
          </div>

          {/* Filters in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-end">
            {/* Area / postcode */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">
                Area / postcode
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Area or postcode"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  className="w-full h-[48px] pl-3.5 pr-9 text-[14px] rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 text-[#191c2b] focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Max price */}
            <div className="lg:col-span-2 space-y-1.5">
              <label className="block text-[12.5px] font-medium text-gray-600">Max price</label>
              <div className="relative">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full h-[48px] px-3.5 text-[14px] rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-9"
                >
                  <option value="No maximum">No maximum</option>
                  <option value="£250,000">£250,000</option>
                  <option value="£275,000">£275,000</option>
                  <option value="£300,000">£300,000</option>
                  <option value="£325,000">£325,000</option>
                  <option value="£350,000">£350,000</option>
                  <option value="£400,000+">£400,000+</option>
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
              <button
                type="button"
                onClick={() => setIncludeSoldSTC(!includeSoldSTC)}
                className="inline-flex items-center gap-1.5 cursor-pointer select-none"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    includeSoldSTC
                      ? "bg-[#df0068] border-[#df0068] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {includeSoldSTC && <span className="text-[10px] font-bold">✓</span>}
                </div>
                <span
                  className={`font-semibold transition-colors ${
                    includeSoldSTC ? "text-[#df0068]" : "text-gray-500"
                  }`}
                >
                  Include sold STC
                </span>
              </button>

              <span className="text-gray-500">Up to £350,000 · 3+ bedrooms</span>
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 mb-6">
          <div>
            <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#191c2b] tracking-tight">
              146 properties for sale
            </h2>
            <p className="text-[13px] text-gray-500 mt-0.5">Including sold STC</p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-6 text-[13.5px]">
            {/* Dropdown: Price: low to high */}
            <div className="relative inline-flex items-center gap-1">
              <span className="text-[#191c2b] font-medium">Price:</span>
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

            {/* Pink View map link with map icon */}
            <button
              type="button"
              onClick={() => setShowMap(!showMap)}
              className="inline-flex items-center gap-1.5 font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
            >
              <Map className="w-4 h-4 stroke-[2]" />
              <span>{showMap ? "Hide map" : "View map"}</span>
            </button>
          </div>
        </div>

        {/* Map view panel */}
        {showMap && (
          <div className="mb-10 rounded-[24px] overflow-hidden border border-gray-200 bg-[#f8f9fa] p-8 text-center relative shadow-inner">
            <div className="max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#191c2b]">Interactive Property Map</h3>
              <p className="text-[13.5px] text-gray-600 leading-relaxed">
                Showing 146 properties across Stafford, Branston, West Bromwich, Bury St. Edmunds,
                and Penley. Click any property card below to open its full detail page.
              </p>
            </div>
          </div>
        )}

        {/* PROPERTY CARDS: 3 columns x 3 rows on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {displayedProperties.map((prop) => {
            const isFav = favorites[prop.id];
            const hasCarousel = prop.images.length > 1;
            const currentImgIdx = carouselIndex[prop.id] || 0;
            const currentImage = prop.images[currentImgIdx] || prop.images[0];

            return (
              <div
                key={prop.id}
                className="group bg-white rounded-[22px] overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Photo container with badge top left and heart top right */}
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100 block">
                  <Link
                    to="/properties/$slug"
                    params={{ slug: prop.slug }}
                    className="block w-full h-full cursor-pointer"
                  >
                    <img
                      src={currentImage}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>

                  {/* Badge top left */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    {prop.badge === "Sold STC" ? (
                      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#191c2b] text-white shadow-sm">
                        Sold STC
                      </span>
                    ) : (
                      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold bg-white text-[#191c2b] shadow-sm">
                        For sale
                      </span>
                    )}
                  </div>

                  {/* Heart button top right */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(prop.id, e)}
                    aria-label="Save as favourite"
                    className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white text-gray-700 hover:text-[#df0068] flex items-center justify-center shadow-sm transition-transform active:scale-90 cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 stroke-[2] transition-colors ${
                        isFav ? "fill-[#df0068] text-[#df0068]" : ""
                      }`}
                    />
                  </button>

                  {/* Photo carousel with dots for Card 1 (Avondale Circle) & multi-image cards */}
                  {hasCarousel && (
                    <>
                      {/* Left and Right navigation buttons */}
                      <button
                        type="button"
                        onClick={(e) => handlePrevCarousel(prop.id, prop.images.length, e)}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleNextCarousel(prop.id, prop.images.length, e)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/90 text-gray-800 hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </button>

                      {/* Dots indicator at bottom */}
                      <div className="absolute bottom-3 inset-x-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
                        {prop.images.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              dotIdx === currentImgIdx ? "bg-white w-2 h-2" : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

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

        {/* PAGINATION */}
        <div className="mt-14 flex flex-col items-center justify-center space-y-4">
          <p className="text-[12.5px] text-gray-500 font-medium">Showing 1–9 of 146 properties</p>

          <div className="flex items-center gap-3 text-[13px] font-semibold">
            {/* ‹ Previous (disabled) */}
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-gray-400 cursor-not-allowed select-none bg-gray-50/50"
            >
              <span>‹</span>
              <span>Previous</span>
            </button>

            {/* Next › */}
            <button
              type="button"
              className="inline-flex items-center gap-1 px-5 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <span>›</span>
            </button>
          </div>
        </div>
      </main>

      {/* LIGHT PINK BAND */}
      <section className="w-full bg-[#fdf0f5] py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-pink-100/80">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#191c2b] tracking-tight">
              A little local knowledge goes a long way.
            </h3>
            <p className="text-[14.5px] text-gray-600">
              Find an Open House agent who knows the area you want to call home.
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
