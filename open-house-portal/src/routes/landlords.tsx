import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, UserCheck, MessageSquare } from "lucide-react";
import { ValuationModal } from "../components/ValuationModal";

export const Route = createFileRoute("/landlords")({
  head: () => ({
    meta: [
      { title: "Lettings & Property Management | Open House" },
      {
        name: "description",
        content:
          "Find the right tenant and get help with rent, repairs and the everyday work of being a landlord. Request a rental valuation.",
      },
      { property: "og:title", content: "Lettings & Property Management | Open House" },
      {
        property: "og:description",
        content:
          "Find the right tenant and get help with rent, repairs and the everyday work of being a landlord.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/25903a3f-69b1-4c7e-8fa3-57abda44be53.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandlordsPage,
});

function LandlordsPage() {
  const [valuationOpen, setValuationOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                Lettings & Property management
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              Your rental.
              <br />
              Less to manage.
            </h1>

            <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px]">
              Find the right tenant and get help with rent, repairs and the everyday work of being a
              landlord.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setValuationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Request a rental valuation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#support"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#df0068] text-[14px] font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
              >
                Explore our support
              </a>
            </div>
          </div>

          {/* Right Column: Hero Photo (Victorian terraced houses) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/25903a3f-69b1-4c7e-8fa3-57abda44be53.png"
                alt="Row of Victorian brick terraced houses with green hedges and black railings"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. A TENANT YOU'VE CHECKED. A HOME CARED FOR. */}
      <section id="support" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#191c2b] tracking-tight mb-8">
          A tenant you've checked. A home cared for.
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Large card on the left (col-span-6) */}
          <div className="lg:col-span-6 bg-[#f8f9fa] rounded-[24px] overflow-hidden flex flex-col border border-gray-100/80">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/cd555ce2-dec2-4c8c-8b25-47e502b26e4f.png"
                alt="Living room with green velvet sofa, cushions and wooden coffee table"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-center space-y-2">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#191c2b] tracking-tight">
                Find tenants with confidence.
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-relaxed">
                Reach tenants on major property portals, with photography, floorplans and thorough
                tenant checks.
              </p>
            </div>
          </div>

          {/* Right column cluster (col-span-6): 2 top cards + dark navy card */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Top row: 2 cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {/* Card 1: Rent Collection */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-7 flex flex-col justify-between border border-gray-100/80">
                <span className="text-[11px] font-bold tracking-wider text-[#df0068] uppercase">
                  RENT COLLECTION
                </span>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[20px] font-bold text-[#191c2b] tracking-tight leading-snug">
                    Less chasing.
                    <br />
                    More time.
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    Support with rent collection and tenant communication.
                  </p>
                </div>
              </div>

              {/* Card 2: Property Care */}
              <div className="bg-[#f8f9fa] rounded-[24px] p-7 flex flex-col justify-between border border-gray-100/80">
                <span className="text-[11px] font-bold tracking-wider text-[#df0068] uppercase">
                  PROPERTY CARE
                </span>
                <div className="mt-4 space-y-2">
                  <h3 className="text-[20px] font-bold text-[#191c2b] tracking-tight leading-snug">
                    Everyday jobs,
                    <br />
                    handled.
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    Help with repairs, maintenance and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Dark navy card */}
            <div className="bg-[#191c2b] text-white rounded-[24px] p-8 sm:p-9 space-y-3">
              <h3 className="text-[22px] sm:text-[24px] font-bold tracking-tight text-white">
                One property or a growing portfolio.
              </h3>
              <p className="text-[14.5px] text-gray-300 leading-relaxed max-w-lg">
                Let your local team take on the day-to-day, with management support that fits your
                needs.
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
        </div>

        {/* Row below: two white cards with thin borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {/* Card 1 */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2">
            <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
              No Let, No Fee.
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Pay the letting fee when your property is let. Ask your branch about terms and any
              other charges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[20px] p-7 sm:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2">
            <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
              Rental advice grounded in your area.
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Your valuation considers local demand, location and your property's size and
              condition.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LETTING, MADE SIMPLER. */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-[30px] sm:text-[36px] font-bold text-[#191c2b] tracking-tight mb-14">
          Letting, made simpler.
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-4xl mx-auto">
          {/* Step 1: Calculator icon */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mb-1">
              <Calculator className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#191c2b] tracking-tight">
              Set the right rental price
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-[260px]">
              Get a valuation based on your home and local market.
            </p>
          </div>

          {/* Step 2: Person-with-check icon */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mb-1">
              <UserCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#191c2b] tracking-tight">
              Market it. Check tenants.
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-[260px]">
              Attract interest and make an informed tenant choice.
            </p>
          </div>

          {/* Step 3: Chat bubbles icon */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mb-1">
              <MessageSquare className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#191c2b] tracking-tight">
              Choose ongoing support
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-[260px]">
              Arrange help with rent, repairs and tenant communication.
            </p>
          </div>
        </div>

        {/* Below 3 steps */}
        <div className="mt-14 max-w-xl mx-auto space-y-5">
          <p className="text-[14px] text-gray-600">
            Know what's included. Ask your branch about fees, management services and client money
            protection.
          </p>

          <div>
            <Link
              to="/find-agent"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Talk to us now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER (dark navy, rounded) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="bg-[#191c2b] text-white rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          {/* Left */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
              What could your property rent for?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-300">
              Get local rental advice and find the right support for you.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
            <button
              onClick={() => setValuationOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Request a rental valuation</span>
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

      {/* Rental Valuation Modal */}
      <ValuationModal open={valuationOpen} onClose={() => setValuationOpen(false)} />
    </div>
  );
}
