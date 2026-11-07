import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open House | Local People. National Reach." },
      {
        name: "description",
        content:
          "Open House estate agents. Local property experts, national reach. A more personal way to move. Buy, rent, sell, landlord services and property auctions.",
      },
      { property: "og:title", content: "Your next chapter. Starts with Open House." },
      {
        property: "og:description",
        content: "Local property experts. National reach. A more personal way to move.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");
  const [locationInput, setLocationInput] = useState("");
  const [maxPrice, setMaxPrice] = useState("no-maximum");
  const [minBeds, setMinBeds] = useState("any");
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "buy") {
      navigate({ to: "/buy" });
    } else {
      navigate({ to: "/rent" });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <div className="relative w-full">
        {/* Full-width photo of a modern living/dining room with open bi-fold glass doors looking out onto a garden */}
        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden">
          <img
            src="https://vibe.filesafe.space/1793524767581062047/assets/5556d061-40bb-4f55-b69d-4d34b8f7b1f0.png"
            alt="Living and dining room with open bi-fold glass doors looking out onto a garden"
            className="w-full h-full object-cover brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60" />

          {/* Centered Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-6 pb-20 sm:pb-24">
            <h1 className="text-[34px] sm:text-5xl lg:text-[62px] font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl drop-shadow-sm">
              Your next chapter. Starts with Open House.
            </h1>
            <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-lg lg:text-xl font-normal text-white/95 max-w-2xl drop-shadow-sm leading-relaxed">
              Local property experts. National reach. A more personal way to move.
            </p>
          </div>
        </div>

        {/* SEARCH CARD (white rounded card overlapping the bottom of the hero) */}
        <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-22 z-20">
          <div className="bg-white rounded-[24px] sm:rounded-2xl shadow-xl border border-gray-100/90 p-5 sm:p-6 lg:p-7">
            <form onSubmit={handleHeroSearch} className="space-y-4">
              {/* Toggle: Buy (pink filled, active) and Rent */}
              <div className="flex bg-[#f4f5f7] p-1 rounded-xl w-full sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  onClick={() => setActiveTab("buy")}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "buy"
                      ? "bg-[#df0068] text-white shadow-sm"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("rent")}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "rent"
                      ? "bg-[#df0068] text-white shadow-sm"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  Rent
                </button>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4">
                {/* Location: input, placeholder "Enter area or postcode" */}
                <div className="sm:col-span-12 lg:col-span-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter area or postcode"
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  />
                </div>

                {/* Row: Max price and Min beds */}
                <div className="sm:col-span-6 lg:col-span-3">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Max price
                  </label>
                  <select
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full h-11 px-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  >
                    <option value="no-maximum">No maximum</option>
                    <option value="250000">£250,000</option>
                    <option value="300000">£300,000</option>
                    <option value="350000">£350,000</option>
                    <option value="500000">£500,000</option>
                    <option value="750000">£750,000</option>
                  </select>
                </div>

                <div className="sm:col-span-6 lg:col-span-3">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Min beds
                  </label>
                  <select
                    value={minBeds}
                    onChange={(e) => setMinBeds(e.target.value)}
                    className="w-full h-11 px-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  >
                    <option value="any">Any</option>
                    <option value="1">1+ bed</option>
                    <option value="2">2+ beds</option>
                    <option value="3">3+ beds</option>
                    <option value="4">4+ beds</option>
                    <option value="5">5+ beds</option>
                  </select>
                </div>
              </div>

              {/* Full-width pink pill button with a magnifier icon: "Search properties" */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-[#df0068] text-white font-semibold text-sm sm:text-[15px] hover:bg-[#c4005b] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Search className="w-4 h-4 stroke-[2.5]" />
                  <span>Search properties</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 2. PORTALS: small grey text "Your property, seen on leading property websites" with three greyed logos */}
      <div className="pt-14 pb-12 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-6">
          Your property, seen on leading property websites
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
          {/* rightmove */}
          <div className="flex items-center gap-1 font-bold text-gray-600 text-xl tracking-tight">
            <span>rightmove</span>
            <span className="text-[#26d07c] text-2xl font-light leading-none">⌂</span>
          </div>
          {/* zoopla */}
          <div className="text-2xl font-extrabold tracking-tight text-gray-600 font-mono">
            zoopla
          </div>
          {/* PrimeLocation.com */}
          <div className="flex items-center gap-1.5 font-semibold text-gray-600 text-lg">
            <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-[10px] font-bold">
              P
            </span>
            <span>PrimeLocation.com</span>
          </div>
        </div>
      </div>

      {/* 3. SERVICES */}
      <div className="py-12 sm:py-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fcecf3] text-[#df0068] text-xs font-semibold mb-3">
            Our services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#191c2b] tracking-tight leading-tight">
            Local people. A smarter way to move.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 leading-relaxed">
            Selling, letting or looking for advice? Our local agents are here with honest guidance
            and a more personal service.
          </p>
        </div>

        {/* Two Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {/* Card 1: full photo background of green velvet sofa living room with dark overlay */}
          <div className="group relative rounded-[26px] overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-gray-900 shadow-md">
            <img
              src="https://vibe.filesafe.space/1793524767581062047/assets/cd555ce2-dec2-4c8c-8b25-47e502b26e4f.png"
              alt="Living room interior with green sofa, wooden door and lamp"
              className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                SELLING
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-snug">
                Move forward <span className="text-[#ff4097]">with confidence.</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-2 max-w-md">
                Expert local advice, wide exposure and personal support.
              </p>
              <div className="mt-4">
                <Link
                  to="/sell"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#ff4097] transition-colors"
                >
                  <span>Find out about selling</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: photo background of Victorian terraced houses */}
          <div className="group relative rounded-[26px] overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-gray-900 shadow-md">
            <img
              src="https://vibe.filesafe.space/1793524767581062047/assets/25903a3f-69b1-4c7e-8fa3-57abda44be53.png"
              alt="Row of Victorian brick terraced houses with green hedges and black railings"
              className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                FOR LANDLORDS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-snug">
                Let <span className="text-[#ff4097]">with less hassle.</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-2 max-w-md">
                Reliable tenants, expert support and peace of mind.
              </p>
              <div className="mt-4">
                <Link
                  to="/landlords"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#ff4097] transition-colors"
                >
                  <span>Find out about letting</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HOW IT WORKS */}
      <div className="bg-[#fcfbf8] py-16 sm:py-20 border-t border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fcecf3] text-[#df0068] text-xs font-semibold mb-3">
              How it works
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#191c2b] tracking-tight">
              From first hello to moving day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fcecf3] text-[#df0068] font-bold text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-base font-bold text-[#191c2b]">Tell us your plans</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Get in touch for a friendly, no-obligation chat about your goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fcecf3] text-[#df0068] font-bold text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-base font-bold text-[#191c2b]">Get expert advice</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  We'll provide tailored guidance, a clear plan and local market insight.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fcecf3] text-[#df0068] font-bold text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-base font-bold text-[#191c2b]">Move with confidence</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  From marketing to completion, we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CLIENT STORIES */}
      <div className="bg-white py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fcecf3] text-[#df0068] text-xs font-semibold mb-3">
              Client stories
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#191c2b] tracking-tight leading-tight">
              Good moves. Great people.
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Personal service, remembered long after moving day.
            </p>
          </div>

          {/* Three review cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-[#f4f5f7] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between min-h-[210px] transition-all">
              <div>
                <span className="text-[12px] font-semibold text-[#df0068]">Client review</span>
                <p className="mt-4 text-base sm:text-lg font-bold text-[#191c2b] leading-snug">
                  “Our local agent was there to help us through a smooth sale”
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xs sm:text-sm font-semibold text-[#191c2b]">Richard Mooreland</p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">July 2020</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f4f5f7] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between min-h-[210px] transition-all">
              <div>
                <span className="text-[12px] font-semibold text-[#df0068]">Client review</span>
                <p className="mt-4 text-base sm:text-lg font-bold text-[#191c2b] leading-snug">
                  “You have been very professional and efficient.”
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xs sm:text-sm font-semibold text-[#191c2b]">N Persad</p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">July 2020</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f4f5f7] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between min-h-[210px] transition-all">
              <div>
                <span className="text-[12px] font-semibold text-[#df0068]">Client review</span>
                <p className="mt-4 text-base sm:text-lg font-bold text-[#191c2b] leading-snug">
                  “Great service. Julie was excellent”
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xs sm:text-sm font-semibold text-[#191c2b]">Sandra Kellet</p>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">July 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA: heading on two lines "A brighter move" / "starts here."; text "Get local expertise and a clear plan for your next chapter."; full-width pink pill button with arrow "Get a free valuation". */}
      <div className="py-16 sm:py-20 text-center px-4 max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c2b] tracking-tight leading-tight">
          A brighter move
          <br />
          starts here.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Get local expertise and a clear plan for your next chapter.
        </p>
        <div className="mt-6">
          <Link
            to="/valuation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#df0068] text-white text-sm sm:text-[15px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <span>Get a free valuation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
