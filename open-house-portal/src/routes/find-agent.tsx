import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/find-agent")({
  head: () => ({
    meta: [
      { title: "Find your local agent | Open House" },
      {
        name: "description",
        content:
          "Find the Open House team for your postcode. Local knowledge, personal service and support for your next move.",
      },
      { property: "og:title", content: "Local experts. Closer than you think. | Open House" },
      {
        property: "og:description",
        content:
          "Find the Open House team for your postcode. Local knowledge, personal service and support for your next move.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/3127e597-8b51-455e-8826-32cbf7924ddd.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FindAgentPage,
});

export function FindAgentPage() {
  // Postcode input string
  const [postcode, setPostcode] = useState("");
  // Submitted search query for result evaluation. Defaults to empty (State 1).
  const [submittedQuery, setSubmittedQuery] = useState("");

  const cleanQuery = submittedQuery.trim().toUpperCase();

  // Exactly matching the prompt rules:
  // "Only the postcode BN1 and its result (Brighton Coast) are in the design. Do not invent other branches."
  // STATE 1 (empty, default): below the search, light grey section
  // STATE 2 (valid postcode, example "BN1" or matching "BN1 ...")
  // STATE 3 (invalid, example "BN" or anything else non-empty that is not BN1)
  const isMatch = cleanQuery === "BN1" || cleanQuery.startsWith("BN1 ");
  const isError = cleanQuery.length > 0 && !isMatch;
  const isEmpty = cleanQuery.length === 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuery(postcode);
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* TOP SECTION (light grey background) */}
      <section className="bg-[#f8f9fa] py-10 sm:py-14 lg:py-16 border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Light pink pill badge */}
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold tracking-wide">
                  Find your local agent
                </span>
              </div>

              {/* Heading on two lines */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
                Local experts.
                <br />
                Closer than you think.
              </h1>

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
                Find the Open House team for your postcode. Local knowledge, personal service and
                support for your next move.
              </p>
            </div>

            {/* Right rounded photo: Victorian brick terraced houses with greenery */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm border border-gray-100/80">
                <img
                  src="https://vibe.filesafe.space/1793524767581062047/assets/3127e597-8b51-455e-8826-32cbf7924ddd.jpg"
                  alt="Victorian brick terraced houses with greenery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION (white background) */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-[#191c2b]">Your postcode</label>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter your postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className={`w-full h-12 px-4 text-sm font-medium rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none transition-all ${
                  isError
                    ? "border-[#df0068] ring-1 ring-[#df0068] focus:border-[#df0068] focus:ring-[#df0068]"
                    : "border-gray-200 focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                }`}
              />

              {/* Full-width pink pill button with arrow */}
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Find my local branch</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Helper text / error text */}
            {isError ? (
              <p className="text-xs font-medium text-[#df0068] pt-0.5">
                Please enter a valid postcode or first part, for example BN1.
              </p>
            ) : (
              <p className="text-xs text-gray-500 pt-0.5">
                Enter a full postcode or the first part, for example BN1 or BN1 1AA.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* THREE STATES CONTAINER */}
      {/* STATE 2: Valid postcode (BN1) */}
      {isMatch && (
        <section className="bg-white pb-14 pt-2">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 space-y-4">
            {/* Header: heading "Your local team for BN1" and "1 team found" */}
            <div className="flex items-baseline justify-between pb-3 border-b border-gray-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#191c2b] tracking-tight">
                Your local team for {cleanQuery}
              </h2>
              <span className="text-xs text-gray-500 font-medium">1 team found</span>
            </div>

            {/* White rounded card with thin border */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="text-[11px] font-bold tracking-wider text-[#df0068] uppercase block">
                YOUR LOCAL OPEN HOUSE TEAM
              </span>

              <h3 className="text-2xl font-extrabold text-[#191c2b] tracking-tight">
                Brighton Coast
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                Personal property advice from people who know your neighbourhood.
              </p>

              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Serving Brighton, Saltdean, Peacehaven and Newhaven.
              </p>

              {/* Action buttons: pink pill button with phone icon + white outlined pill button with envelope icon */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:01273830987"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-xs font-semibold hover:bg-[#c4005b] transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 01273 830 987</span>
                </a>

                <a
                  href="mailto:brightoncoast@localagent.co.uk"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-[#191c2b] text-xs font-semibold hover:bg-gray-50 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#df0068]" />
                  <span>Email the team</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STATE 3: Invalid (e.g. "BN") */}
      {isError && (
        <section className="bg-[#f8f9fa] py-14 sm:py-16 border-y border-gray-100">
          <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight">
              We couldn't match that postcode.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Check the postcode and try again. If you need a hand, our team can help you find the
              right local contact.
            </p>
            <div className="pt-3">
              <a
                href="tel:03330155440"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-xs font-semibold hover:bg-[#c4005b] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 0333 015 5440</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* STATE 1: Empty / default */}
      {isEmpty && (
        <section className="bg-[#f8f9fa] py-14 sm:py-16 border-y border-gray-100">
          <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center space-y-2.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight">
              Your local team is one search away.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Enter your property's postcode above to find the people who can help with your next
              move.
            </p>
          </div>
        </section>
      )}

      {/* FAQ SECTION (same in all states) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
            {/* Left title: heading on two lines "A little help" / "for your next step." */}
            <div className="md:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c2b] tracking-tight leading-[1.15]">
                A little help
                <br />
                for your next step.
              </h2>
            </div>

            {/* Right questions */}
            <div className="md:col-span-7 space-y-8 text-sm sm:text-base">
              <div>
                <h3 className="font-bold text-[#191c2b] text-base sm:text-lg mb-1.5">
                  Can I search with part of my postcode?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Yes. Enter your full postcode or just the first part, such as BN1, to find the
                  team covering your area.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#191c2b] text-base sm:text-lg mb-1.5">
                  What if I can't find a local team?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Check your postcode and try again. You can also call Open House on{" "}
                  <a
                    href="tel:03330155440"
                    className="text-[#df0068] font-semibold hover:underline"
                  >
                    0333 015 5440
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:info@localagent.co.uk"
                    className="text-[#df0068] font-semibold hover:underline"
                  >
                    info@localagent.co.uk
                  </a>{" "}
                  for help.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#191c2b] text-base sm:text-lg mb-1.5">
                  Can my local agent help with a valuation?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Contact your local team to discuss your property and next steps, or start with an
                  instant online valuation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
