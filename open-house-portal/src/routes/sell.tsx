import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Key, Target } from "lucide-react";
import { ValuationModal } from "../components/ValuationModal";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell Your Home with Local Expertise | Open House" },
      {
        name: "description",
        content:
          "Reach more buyers with national marketing, personal local service and competitive fees. Get a free valuation today.",
      },
      { property: "og:title", content: "Sell Your Home with Local Expertise | Open House" },
      {
        property: "og:description",
        content:
          "Reach more buyers with national marketing, personal local service and competitive fees.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/cd555ce2-dec2-4c8c-8b25-47e502b26e4f.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SellPage,
});

function SellPage() {
  const [valuationOpen, setValuationOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-14 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* On mobile: photo comes first at the top (order-1 lg:order-2) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/cd555ce2-dec2-4c8c-8b25-47e502b26e4f.png"
                alt="Living room with green velvet sofa and coffee table"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>

          {/* Text & Buttons: (order-2 lg:order-1) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                Selling with Open House
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              Sell your home.
              <br />
              With local expertise.
            </h1>

            <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px]">
              Reach more buyers with national marketing, personal local service and competitive
              fees.
            </p>

            {/* Mobile: two full-width stacked buttons; Desktop: inline flex */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <button
                onClick={() => setValuationOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Get a free valuation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <Link
                to="/find-agent"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#df0068] text-[14px] font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
              >
                Find your local agent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MORE BUYERS. LOCAL KNOW-HOW. LESS HASSLE. */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-[26px] sm:text-[34px] font-bold text-[#191c2b] tracking-tight mb-8">
          More buyers. Local know-how. Less hassle.
        </h2>

        {/* Card Grid: on mobile stacked in one column in exact order:
            1. Photo card "Help buyers picture life here."
            2. "NATIONAL EXPOSURE" card
            3. "LOCAL EXPERTISE" card
            4. Dark navy card "A personal service. A proactive sale."
            5. White card "Enquiries don't stop at 5pm."
            6. White card "More of your move, in one place."
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5">
          {/* 1. Large card with photo */}
          <div className="lg:col-span-6 bg-[#f8f9fa] rounded-[24px] overflow-hidden flex flex-col border border-gray-100/80">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/7e7e6840-417f-40f6-a86b-3c34da56011e.png"
                alt="Garden seen through open bifold doors, dining table and sofa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-2">
              <h3 className="text-[19px] sm:text-[22px] font-bold text-[#191c2b] tracking-tight">
                Help buyers picture life here.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                Professional photography and floorplans show what makes your home special.
              </p>
            </div>
          </div>

          {/* Container for right side on desktop / sequential on mobile */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Desktop top row: 2 cards side by side; Mobile: stacked */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {/* 2. National Exposure Card */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between border border-gray-100/80">
                <span className="text-[11px] font-bold tracking-wider text-[#df0068] uppercase">
                  NATIONAL EXPOSURE
                </span>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#191c2b] tracking-tight leading-snug">
                    Reach more
                    <br />
                    buyers.
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    Advertise on Rightmove, Zoopla and PrimeLocation.
                  </p>
                </div>
              </div>

              {/* 3. Local Expertise Card */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between border border-gray-100/80">
                <span className="text-[11px] font-bold tracking-wider text-[#df0068] uppercase">
                  LOCAL EXPERTISE
                </span>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#191c2b] tracking-tight leading-snug">
                    Price with
                    <br />
                    confidence.
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    A local agent visits your home to give a market valuation.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Dark navy card */}
            <div className="bg-[#191c2b] text-white rounded-[24px] p-7 sm:p-9 space-y-3">
              <h3 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-white">
                A personal service. A proactive sale.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-300 leading-relaxed max-w-lg">
                Your local agent gets to know your home and helps match it with prospective buyers.
              </p>
              <div className="pt-2">
                <Link
                  to="/find-agent"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:text-pink-300 transition-colors"
                >
                  <span>Find your local agent</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 5. White card: Enquiries don't stop at 5pm. */}
          <div className="lg:col-span-6 bg-white rounded-[20px] p-6 sm:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2">
            <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
              Enquiries don't stop at 5pm.
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Telephone lines open 24/7, so buyers can get in touch when it suits them.
            </p>
          </div>

          {/* 6. White card: More of your move, in one place. */}
          <div className="lg:col-span-6 bg-white rounded-[20px] p-6 sm:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2">
            <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
              More of your move, in one place.
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Access EPCs, mortgage advice and conveyancing through Open House.
            </p>
          </div>
        </div>
      </section>

      {/* 3. YOUR MOVE, IN 3 STEPS.
          On mobile: vertical list with light pink icon at the left of each step (text left-aligned).
          On desktop: 3 centered columns.
      */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-left sm:text-center">
        <h2 className="text-[26px] sm:text-[36px] font-bold text-[#191c2b] tracking-tight mb-8 sm:mb-14 text-center">
          Your move, in 3 steps.
        </h2>

        {/* Steps container */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center shrink-0 mb-1">
              <span className="text-[18px] sm:text-[20px] font-bold font-serif leading-none">
                £
              </span>
            </div>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                Know your home's value
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[260px] mt-1 sm:mt-1.5">
                Meet your local agent for a market valuation.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center shrink-0 mb-1">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                Reach the right buyers
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[260px] mt-1 sm:mt-1.5">
                Launch with photography, floorplans and national exposure.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center shrink-0 mb-1">
              <Key className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                Move forward with support
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed max-w-[260px] mt-1 sm:mt-1.5">
                Get personal guidance from your local team.
              </p>
            </div>
          </div>
        </div>

        {/* Below 3 steps */}
        <div className="mt-10 sm:mt-14 max-w-xl mx-auto space-y-4 sm:space-y-5 text-center">
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Competitive fees, personal service. Ask your branch for a quote and what's included.
          </p>

          <div>
            <Link
              to="/find-agent"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Ask your local team</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER (dark navy, rounded)
          On mobile: centered text:
          "What could your home be worth?",
          "Start with a free valuation and plan your next move.",
          pink button "Get a Free valuation",
          and "Or call 0333 015 5440".
      */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="bg-[#191c2b] text-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-sm text-center md:text-left">
          {/* Left */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-[24px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
              What could your home be worth?
            </h2>
            <p className="text-[14px] sm:text-[16px] text-gray-300">
              Start with a free valuation and plan your next move.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setValuationOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Get a Free valuation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <a
              href="tel:03330155440"
              className="text-[13px] text-gray-300 hover:text-white transition-colors"
            >
              Or call 0333 015 5440
            </a>
          </div>
        </div>
      </section>

      {/* Valuation Modal */}
      <ValuationModal open={valuationOpen} onClose={() => setValuationOpen(false)} />
    </div>
  );
}
