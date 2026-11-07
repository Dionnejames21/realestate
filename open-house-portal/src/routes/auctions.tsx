import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ValuationModal } from "../components/ValuationModal";

export const Route = createFileRoute("/auctions")({
  head: () => ({
    meta: [
      { title: "Property Auctions. On Your Terms. | Open House" },
      {
        name: "description",
        content:
          "Sell by auction with a reserve price you control, a defined timeline and 0% sales fee. Discuss selling at auction with Open House.",
      },
      { property: "og:title", content: "Property Auctions. On Your Terms. | Open House" },
      {
        property: "og:description",
        content:
          "Sell by auction with a reserve price you control, a defined timeline and 0% sales fee.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/5556d061-40bb-4f55-b69d-4d34b8f7b1f0.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuctionsPage,
});

function AuctionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* 1. HERO SECTION */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                Property auctions
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              Property auctions.
              <br />
              On your terms.
            </h1>

            <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px]">
              Sell by auction with a reserve price you control, a defined timeline and 0% sales fee.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Discuss selling at auction</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white border border-gray-200 text-[#df0068] text-[14px] font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
              >
                How auctions work
              </a>
            </div>
          </div>

          {/* Right Column: Hero Photo (Living room opening to garden) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/5556d061-40bb-4f55-b69d-4d34b8f7b1f0.png"
                alt="Living room with a beige sofa opening to a garden through glass doors, with an olive tree and round coffee table"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: MORE CONTROL. LESS UNCERTAINTY. (two columns, vertical divider) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading + 0% Stat */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#191c2b] tracking-tight leading-[1.15]">
              More control.
              <br />
              Less uncertainty.
            </h2>

            <div className="pt-2">
              <div className="text-[64px] sm:text-[72px] font-extrabold text-[#df0068] leading-none tracking-tight">
                0%
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight mt-3">
                Estate agency sales fee
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 mt-2 leading-relaxed max-w-sm">
                No upfront listing cost. Solicitor costs apply when your property sells.
              </p>
            </div>
          </div>

          {/* Right Column: 4 items with vertical divider border on large screens */}
          <div className="lg:col-span-7 lg:border-l lg:border-gray-200 lg:pl-12 xl:pl-16 space-y-8 sm:space-y-10">
            {/* Item 1 */}
            <div className="space-y-1.5">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                Your reserve. Your decision.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                Agree a confidential minimum price. Your property won't sell below it without your
                express permission.
              </p>
            </div>

            {/* Item 2 */}
            <div className="space-y-1.5">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                A timetable you can plan around.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                Agree completion in 28 or 56 days, or longer where arranged. Your team will explain
                the terms.
              </p>
            </div>

            {/* Item 3 */}
            <div className="space-y-1.5">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                Visible bids. Committed buyers.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                Online bidding makes offers visible. Non-refundable buyer fees apply when an offer
                is accepted.
              </p>
            </div>

            {/* Item 4 */}
            <div className="space-y-1.5">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight">
                More properties fit than you think.
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                Family homes, apartments and commercial premises can all be considered. Ask whether
                auction suits yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: FULL-WIDTH DARK NAVY BAND - HOW IT WORKS */}
      <section
        id="how-it-works"
        className="w-full bg-[#191c2b] text-white py-16 sm:py-24 my-10 sm:my-14"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#df0068] text-[12.5px] font-semibold tracking-tight shadow-sm">
                  How it works
                </span>
              </div>

              <h2 className="text-[32px] sm:text-[40px] font-bold text-white tracking-tight leading-[1.12]">
                From first advice
                <br />
                to the final bid.
              </h2>

              <p className="text-[15px] sm:text-[16px] text-gray-300 leading-relaxed max-w-sm">
                A clear plan, with your auction team guiding each stage.
              </p>
            </div>

            {/* Right Column: 3 steps with vertical divider border */}
            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-12 xl:pl-16 space-y-8 sm:space-y-10">
              {/* Step 1 */}
              <div className="space-y-1.5">
                <h3 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight">
                  Set your price & plan
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-gray-300 leading-relaxed">
                  Agree a starting bid, confidential reserve and auction end date.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-1.5">
                <h3 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight">
                  Launch, view & bid
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-gray-300 leading-relaxed">
                  Promote your property on leading portals, arrange viewings and share the legal
                  pack.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-1.5">
                <h3 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight">
                  Agree the sale & complete
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-gray-300 leading-relaxed">
                  The offer must meet your reserve. Your team supports the sale through to
                  completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: KNOW THE DETAILS. DECIDE WITH CONFIDENCE. */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading + Signing photo */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#191c2b] tracking-tight leading-[1.15]">
              Know the details.
              <br />
              Decide with confidence.
            </h2>

            <div className="relative overflow-hidden rounded-[24px] shadow-sm bg-gray-100 aspect-[16/10] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/4959e34c-f673-4111-a388-8f526c0421e4.png"
                alt="A person signing a document in a binder with house keys on the table"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 2 FAQ Items */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:pt-2">
            {/* FAQ 1 */}
            <div className="space-y-2">
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
                What is the legal pack?
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                It gives buyers documents to review before bidding. Partner solicitors can prepare
                it with no upfront cost, on a No Sale, No Fee basis. Confirm the terms and solicitor
                costs with the team.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="space-y-2">
              <h3 className="text-[18px] sm:text-[19px] font-bold text-[#191c2b] tracking-tight">
                Does 0% sales fee mean no costs at all?
              </h3>
              <p className="text-[14px] sm:text-[14.5px] text-gray-600 leading-relaxed">
                There is no estate agency sales fee or upfront listing cost. Solicitor costs apply
                when your property sells. Buyers pay separate fees; ask for the full terms before
                proceeding.
              </p>
            </div>
          </div>
        </div>

        {/* Below FAQ items: disclaimer text & pink button */}
        <div className="mt-14 sm:mt-16 text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed">
            Starting bid ≠ reserve price. The starting bid attracts interest; your confidential
            reserve sets the minimum you'll accept.
          </p>

          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Ask an auction specialist</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: FULL-WIDTH LIGHT PINK BAND (COULD AUCTION WORK FOR YOU?) */}
      <section className="w-full bg-[#fef0f5] py-16 sm:py-20 text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#191c2b] tracking-tight">
            Could auction work for you?
          </h2>

          <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-xl mx-auto">
            Talk through your property, likely costs and the right timetable.
          </p>

          <div className="pt-4 flex flex-col items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
            >
              Discuss selling at auction
            </button>

            <a
              href="tel:03330155440"
              className="text-[13px] text-gray-600 hover:text-[#df0068] transition-colors"
            >
              Or call 0333 015 5440
            </a>
          </div>
        </div>
      </section>

      {/* Valuation / Auction Specialist Enquiry Modal */}
      <ValuationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
