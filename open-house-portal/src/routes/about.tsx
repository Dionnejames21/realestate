import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, MapPin, Users } from "lucide-react";
import { ValuationModal } from "../components/ValuationModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Open House | Moving Home. Made More Personal." },
      {
        name: "description",
        content:
          "Local expertise. A national network. Personal service with the value of online pricing. Learn more about Open House Estate Agents.",
      },
      {
        property: "og:title",
        content: "About Open House | Moving Home. Made More Personal.",
      },
      {
        property: "og:description",
        content:
          "Local expertise. A national network. Personal service with the value of online pricing.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/a5fe3566-5e04-47a7-a655-74a752bb5ed9.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
                About Open House
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              Moving home.
              <br />
              Made more personal.
            </h1>

            <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[480px]">
              Local expertise. A national network. Personal service with the value of online
              pricing.
            </p>

            <div className="pt-2">
              <Link
                to="/find-agent"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Find your local agent</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Photo (Couple talking with female agent holding tablet) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/a5fe3566-5e04-47a7-a655-74a752bb5ed9.png"
                alt="A couple talking with a female agent holding a tablet inside a bright home with a dining table and garden view"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: LOCAL EXPERTISE. A MORE PERSONAL EXPERIENCE. */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="space-y-4 mb-10">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-[#191c2b] tracking-tight leading-[1.15]">
            Local expertise.
            <br />A more personal experience.
          </h2>

          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-2xl">
            Open House brings traditional estate agency service together with online pricing. You
            can reduce the cost of selling without taking on the work yourself.
          </p>
        </div>

        {/* Three light grey rounded cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Globe icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <Globe className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                A national network. A local connection.
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Find an agent who knows your area and talk through your next move.
              </p>
            </div>
          </div>

          {/* Card 2: Location pin icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                Local knowledge
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Honest advice from an agent who knows your area.
              </p>
            </div>
          </div>

          {/* Card 3: People icon */}
          <div className="bg-[#f8f9fa] rounded-[24px] p-7 sm:p-8 space-y-4 border border-gray-100/80 flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191c2b] tracking-tight leading-snug">
                Personal support
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Help with buying, selling or renting, at a time that suits you.
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
            <span>Meet your local agent</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* 3. SECTION 2: THE OPEN HOUSE APPROACH (Two columns) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Rounded photo of Victorian brick terraced houses with greenery */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[28px] shadow-sm bg-gray-100 aspect-[4/3] w-full">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/25903a3f-69b1-4c7e-8fa3-57abda44be53.png"
                alt="Victorian brick terraced houses with greenery"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                The Open House approach
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
              Traditional service.
              <br />
              Online value.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-lg">
              Selling with Open House combines personal support with competitive online pricing.
              Lower fees needn't mean handling the process yourself.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setValuationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Request a Free valuation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER (dark navy, rounded) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-[#191c2b] text-white rounded-[28px] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          {/* Left */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
              Let's talk about your next move.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-300">
              Buying, selling or renting? We're here to help.
            </p>
          </div>

          {/* Right: phone + email */}
          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <a
              href="tel:03330155440"
              className="text-[26px] sm:text-[32px] font-bold text-white hover:text-pink-300 tracking-tight transition-colors"
            >
              0333 015 5440
            </a>
            <a
              href="mailto:info@localagent.co.uk"
              className="text-[14px] text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              info@localagent.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Valuation Request Modal */}
      <ValuationModal open={valuationOpen} onClose={() => setValuationOpen(false)} />
    </div>
  );
}
