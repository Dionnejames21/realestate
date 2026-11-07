import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Building2,
  ClipboardList,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { ValuationModal } from "../components/ValuationModal";

export const Route = createFileRoute("/land-and-new-homes")({
  head: () => ({
    meta: [
      { title: "Land & New Homes | Open House Estate Agents" },
      {
        name: "description",
        content:
          "Thinking of selling land? Talk to a local agent about your site, your plans and the next steps. Instant land valuation powered by Land IQ.",
      },
      {
        property: "og:title",
        content: "Land & New Homes | Your land. Its next chapter.",
      },
      {
        property: "og:description",
        content:
          "Thinking of selling land? Talk to a local agent about your site, your plans and the next steps.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/4b340319-52b3-44e5-a9ae-0a6c7167de15.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandNewHomesPage,
});

function LandNewHomesPage() {
  const [valuationOpen, setValuationOpen] = useState(false);
  const [landSearchQuery, setLandSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [selectedProcessStep, setSelectedProcessStep] = useState<
    "Land Search" | "Title Selection" | "Land Information" | "Valuation"
  >("Land Search");
  const [isPaused, setIsPaused] = useState(false);

  const handleLandSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!landSearchQuery.trim()) return;
    setSearchSubmitted(true);
    setSelectedProcessStep("Title Selection");
  };

  const valuationSteps = [
    { id: "Land Search", label: "Land Search" },
    { id: "Title Selection", label: "Title Selection" },
    { id: "Land Information", label: "Land Information" },
    { id: "Valuation", label: "Valuation" },
  ] as const;

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* 1. HERO SECTION (two columns) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                Selling land
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              Your land.
              <br />
              Its next chapter.
            </h1>

            <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px]">
              Thinking of selling land? Talk to a local agent about your site, your plans and the
              next steps.
            </p>

            <div className="pt-2">
              <Link
                to="/valuation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Discuss your land</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Rounded aerial photo of green fields */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/4b340319-52b3-44e5-a9ae-0a6c7167de15.png"
                alt="Aerial photo of green fields with hedgerows, country lane, trees and village"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: SELLING LAND STARTS WITH THE RIGHT CONVERSATION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="space-y-4 mb-10">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#191c2b] tracking-tight leading-[1.15]">
            Selling land starts with
            <br />
            the right conversation.
          </h2>

          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl">
            From individual plots to potential development sites, start with advice shaped around
            your land and your goals.
          </p>
        </div>

        {/* Three light grey rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Land / Map pin icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                Understand your land
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Share the location, size and any planning information so your agent can understand
                your site.
              </p>
            </div>
          </div>

          {/* Card 2: Buildings icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <Building2 className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                Explore your options
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Discuss your timescale and whether your land could appeal to self-builders,
                housebuilders or developers.
              </p>
            </div>
          </div>

          {/* Card 3: Clipboard checklist icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <ClipboardList className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                Plan your next step
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Talk through how to present your land and agree an approach to taking it to market.
              </p>
            </div>
          </div>
        </div>

        {/* Centered button */}
        <div className="mt-12 text-center">
          <Link
            to="/find-agent"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
          >
            <span>Talk to us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* 3. SECTION 2: NEW BUILD & DEVELOPMENT (INSTANT LAND VALUATION / LAND IQ) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="space-y-3 mb-8">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#191c2b] tracking-tight">
            New build & development
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl">
            Selling a plot or a potential development site? Explore its value and discuss your plans
            with a local agent.
          </p>
        </div>

        {/* Wide rounded widget block split in two halves */}
        <div className="overflow-hidden rounded-[28px] border border-gray-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* LEFT HALF (off-white background) */}
          <div className="lg:col-span-6 bg-[#fafafa] p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Big bold dark magenta heading on two lines */}
              <h3 className="text-[38px] sm:text-[46px] font-extrabold text-[#741541] tracking-tight leading-[1.08]">
                Instant land
                <br />
                valuation
              </h3>

              <div className="space-y-3 pt-2">
                <p className="text-[14.5px] font-medium text-[#191c2b]">
                  What's the address or title number of the land?
                </p>

                {/* Input with pin icon and black pill button */}
                <form onSubmit={handleLandSearch} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <MapPin className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={landSearchQuery}
                        onChange={(e) => setLandSearchQuery(e.target.value)}
                        placeholder="e.g. 123 Maple Street or Title BD12345"
                        className="w-full h-[52px] pl-10 pr-4 rounded-xl border border-gray-200 bg-white text-[14px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#741541] focus:ring-1 focus:ring-[#741541] transition-all shadow-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-[52px] px-7 rounded-full bg-[#11131a] text-white text-[14px] font-semibold flex items-center justify-center gap-1.5 hover:bg-black active:scale-[0.98] transition-all shrink-0 cursor-pointer shadow-sm"
                    >
                      <span>Search</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>

                {searchSubmitted && (
                  <div className="p-3 bg-pink-50 border border-pink-200 rounded-xl text-[13px] text-[#741541]">
                    Searching Land Registry records for <strong>"{landSearchQuery}"</strong>...
                    Please choose your parcel or speak to our local team.
                  </div>
                )}

                {/* Interactive map link */}
                <p className="text-[13.5px] text-gray-600 pt-1">
                  Can't find the address?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setLandSearchQuery("Staffordshire Development Land ST18");
                      setSearchSubmitted(true);
                      setSelectedProcessStep("Title Selection");
                    }}
                    className="font-bold underline text-[#191c2b] hover:text-[#df0068] transition-colors cursor-pointer"
                  >
                    Use our interactive map
                  </button>
                </p>
              </div>
            </div>

            {/* Bottom disclaimer and badge */}
            <div className="pt-6 border-t border-gray-200/70 space-y-3">
              <p className="text-[11px] leading-relaxed text-gray-500 max-w-[520px]">
                This service is an automated estimate of the current market value range of the
                land/site selected. It is not a formal valuation, not a RICS Red Book valuation, and
                has not been verified by a site inspection or by a qualified valuer. Where
                confidence is low or data is insufficient, no estimate should be shown. Independent
                professional advice is required for any formal, legal, lending, accounting, or
                transactional use.
              </p>

              <div>
                <span className="inline-block px-3 py-1 rounded-md border border-gray-300 text-[10px] font-bold tracking-wider text-gray-700 bg-white">
                  POWERED BY LAND·IQ
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT HALF (aerial photo with frosted-glass panel) */}
          <div className="lg:col-span-6 relative bg-gray-100 min-h-[420px] lg:min-h-full">
            <img
              src="https://vibe.filesafe.space/1793524767581062047/assets/f2ec258f-49be-48f6-bbda-71efda9f0d2f.png"
              alt="Aerial photo of a housing estate with trees"
              className="w-full h-full object-cover object-center absolute inset-0"
            />

            {/* Round white pause/play button at top right */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play" : "Pause"}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center backdrop-blur-sm transition-all active:scale-95 cursor-pointer z-10"
            >
              {isPaused ? (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>

            {/* Frosted-glass panel at bottom right titled 'Valuation Process' */}
            <div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:w-[280px] bg-white/60 backdrop-blur-md rounded-[20px] p-5 border border-white/40 shadow-xl text-[#191c2b] z-10">
              <h4 className="text-[14.5px] font-bold text-[#191c2b] mb-4">Valuation Process</h4>

              <div className="space-y-3">
                {valuationSteps.map((s, index) => {
                  const isSelected = selectedProcessStep === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedProcessStep(s.id)}
                      className="w-full flex items-center gap-3 text-left text-[13px] font-medium text-gray-800 hover:text-black transition-colors cursor-pointer"
                    >
                      <div className="relative flex items-center justify-center">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            isSelected ? "border-black bg-white" : "border-gray-400/80 bg-white/80"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-black" />}
                        </div>
                        {index < valuationSteps.length - 1 && (
                          <div className="absolute top-4 w-[1px] h-3 bg-gray-300/80" />
                        )}
                      </div>
                      <span className={isSelected ? "font-bold text-black" : "text-gray-700"}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Small round dark icon button at bottom right corner of panel */}
              <div className="flex justify-end mt-4 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedProcessStep("Land Search")}
                  aria-label="Reset valuation process"
                  className="w-8 h-8 rounded-full bg-[#11131a] text-white flex items-center justify-center hover:bg-black transition-all shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BAND (full-width light pink) */}
      <section className="bg-[#fdebf2] py-10 sm:py-14 my-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#191c2b] tracking-tight">
              Ready to talk about your land?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-700">
              Share a few details with your local agent and discuss the next steps.
            </p>
          </div>

          {/* Right: pink pill button with arrow */}
          <div className="shrink-0">
            <Link
              to="/valuation"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Discuss selling your land</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Valuation Modal */}
      <ValuationModal open={valuationOpen} onClose={() => setValuationOpen(false)} />
    </div>
  );
}
