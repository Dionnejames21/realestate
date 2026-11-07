import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

export const Route = createFileRoute("/valuation")({
  head: () => ({
    meta: [
      { title: "Free Online Valuation | Open House Estate Agents" },
      {
        name: "description",
        content:
          "Get an instant indication of your property's sale or rental value. Start with a few details about your home.",
      },
      { property: "og:title", content: "Free Online Valuation | What could your home be worth?" },
      {
        property: "og:description",
        content:
          "Get an instant indication of your property's sale or rental value. Start with a few details about your home.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/7e7e6840-417f-40f6-a86b-3c34da56011e.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ValuationPage,
});

function ValuationPage() {
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 values
  const [postcode, setPostcode] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [valuationType, setValuationType] = useState("");

  // Step 2 values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dropdown open states
  const [bedroomsOpen, setBedroomsOpen] = useState(false);
  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [valuationTypeOpen, setValuationTypeOpen] = useState(false);

  const bedroomOptions = ["1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5+ bedrooms"];

  const propertyTypeOptions = [
    "Semi-detached",
    "Detached",
    "Terraced",
    "Flat / Apartment",
    "Bungalow",
  ];

  const valuationTypeOptions = [
    "Sale valuation",
    "Rental valuation",
    "Both sale and rental valuation",
  ];

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#fef0f5] text-[#df0068] text-[13px] font-semibold tracking-tight">
                Free online valuation
              </span>
            </div>

            {/* Large bold heading on two lines */}
            <h1 className="text-[40px] sm:text-[52px] lg:text-[58px] font-extrabold text-[#191c2b] tracking-tight leading-[1.08]">
              What could your
              <br />
              home be worth?
            </h1>

            {/* Paragraph */}
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-[480px]">
              Get an instant indication of your property's sale or rental value. Start with a few
              details about your home.
            </p>

            {/* Rounded photo: living area opening through bifold glass doors */}
            <div className="pt-2">
              <div className="relative overflow-hidden rounded-[24px] shadow-sm bg-gray-100 aspect-[16/11] w-full">
                <img
                  src="https://vibe.filesafe.space/1793524767581062047/assets/7e7e6840-417f-40f6-a86b-3c34da56011e.png"
                  alt="Living area opening through bifold glass doors to garden with lawn, olive tree, dining table and sofa"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            {/* Note block below image */}
            <div className="space-y-1.5 pt-1">
              <h3 className="text-[17px] font-bold text-[#191c2b] tracking-tight">
                A starting point for your next move
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-lg">
                Online valuations are estimates. For a more accurate assessment, speak to your local
                agent.
              </p>
              <div className="pt-1.5">
                <Link
                  to="/find-agent"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors"
                >
                  <span>Prefer to speak to someone?</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Light grey rounded card, 2-step form */}
          <div className="lg:col-span-6">
            <div className="bg-[#f8f9fa] rounded-[28px] p-6 sm:p-10 lg:p-12 border border-gray-100/90 shadow-sm">
              {/* Stepper */}
              <div className="flex items-center justify-center max-w-[340px] mx-auto mb-10">
                {/* Step 1 Circle + Label */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[14px] transition-colors ${
                      step === 1
                        ? "border-2 border-[#df0068] text-[#df0068] bg-white shadow-sm"
                        : "bg-[#df0068] text-white"
                    }`}
                  >
                    {step === 2 ? <Check className="w-4 h-4 stroke-[2.5]" /> : "1"}
                  </div>
                  <span
                    className={`text-[12.5px] font-medium transition-colors ${
                      step === 1 ? "text-[#df0068] font-semibold" : "text-gray-500"
                    }`}
                  >
                    Your property
                  </span>
                </div>

                {/* Connecting thin line */}
                <div className="flex-1 h-[1.5px] bg-gray-200 mx-3 -mt-6" />

                {/* Step 2 Circle + Label */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[14px] transition-colors ${
                      step === 2
                        ? "border-2 border-[#df0068] text-[#df0068] bg-white shadow-sm"
                        : "border border-gray-300 text-gray-400 bg-white"
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`text-[12.5px] font-medium transition-colors ${
                      step === 2 ? "text-[#df0068] font-semibold" : "text-gray-400"
                    }`}
                  >
                    Your details
                  </span>
                </div>
              </div>

              {/* STEP 1 FORM */}
              {step === 1 && (
                <form onSubmit={handleContinue} className="space-y-6">
                  <h2 className="text-[22px] sm:text-[24px] font-bold text-[#191c2b] tracking-tight">
                    Tell us about your property
                  </h2>

                  {/* Postcode */}
                  <div className="space-y-2">
                    <label className="block text-[13.5px] font-medium text-[#191c2b]">
                      Postcode
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your postcode"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-[14.5px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                    />
                  </div>

                  {/* Two columns: Bedrooms + Property type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Bedrooms */}
                    <div className="space-y-2 relative">
                      <label className="block text-[13.5px] font-medium text-[#191c2b]">
                        Bedrooms
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setBedroomsOpen(!bedroomsOpen);
                          setPropertyTypeOpen(false);
                          setValuationTypeOpen(false);
                        }}
                        className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-left flex items-center justify-between text-[14.5px] transition-all focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                      >
                        <span className={bedrooms ? "text-[#191c2b]" : "text-gray-400"}>
                          {bedrooms || "Select bedrooms"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                      </button>

                      {bedroomsOpen && (
                        <div className="absolute top-[82px] left-0 right-0 z-20 bg-white rounded-xl border border-gray-200 shadow-lg py-1.5 max-h-56 overflow-y-auto">
                          {bedroomOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setBedrooms(opt);
                                setBedroomsOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left text-[14px] text-gray-700 hover:bg-[#fef0f5] hover:text-[#df0068] transition-colors"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Property type */}
                    <div className="space-y-2 relative">
                      <label className="block text-[13.5px] font-medium text-[#191c2b]">
                        Property type
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setPropertyTypeOpen(!propertyTypeOpen);
                          setBedroomsOpen(false);
                          setValuationTypeOpen(false);
                        }}
                        className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-left flex items-center justify-between text-[14.5px] transition-all focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                      >
                        <span className={propertyType ? "text-[#191c2b]" : "text-gray-400"}>
                          {propertyType || "Select property type"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                      </button>

                      {propertyTypeOpen && (
                        <div className="absolute top-[82px] left-0 right-0 z-20 bg-white rounded-xl border border-gray-200 shadow-lg py-1.5 max-h-56 overflow-y-auto">
                          {propertyTypeOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setPropertyType(opt);
                                setPropertyTypeOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left text-[14px] text-gray-700 hover:bg-[#fef0f5] hover:text-[#df0068] transition-colors"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Type of valuation */}
                  <div className="space-y-2 relative">
                    <label className="block text-[13.5px] font-medium text-[#191c2b]">
                      Type of valuation
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setValuationTypeOpen(!valuationTypeOpen);
                        setBedroomsOpen(false);
                        setPropertyTypeOpen(false);
                      }}
                      className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-left flex items-center justify-between text-[14.5px] transition-all focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                    >
                      <span className={valuationType ? "text-[#191c2b]" : "text-gray-400"}>
                        {valuationType || "Select sale or rental valuation"}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-400 stroke-[2.5]" />
                    </button>

                    {valuationTypeOpen && (
                      <div className="absolute top-[82px] left-0 right-0 z-20 bg-white rounded-xl border border-gray-200 shadow-lg py-1.5 max-h-56 overflow-y-auto">
                        {valuationTypeOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setValuationType(opt);
                              setValuationTypeOpen(false);
                            }}
                            className="w-full px-4 py-2.5 text-left text-[14px] text-gray-700 hover:bg-[#fef0f5] hover:text-[#df0068] transition-colors"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right-aligned pink pill button with arrow */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
                    >
                      <span>Continue to your details</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2 FORM: Your Details */}
              {step === 2 && !submitted && (
                <form onSubmit={handleStep2Submit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[22px] sm:text-[24px] font-bold text-[#191c2b] tracking-tight">
                      Your details
                    </h2>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[13px] font-semibold text-[#df0068] hover:underline"
                    >
                      Back to property
                    </button>
                  </div>

                  {/* Summary of property entered */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200 text-[13px] text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                    <span>
                      <strong className="text-gray-900">Postcode:</strong>{" "}
                      {postcode || "Not specified"}
                    </span>
                    {bedrooms && (
                      <span>
                        <strong className="text-gray-900">Beds:</strong> {bedrooms}
                      </span>
                    )}
                    {propertyType && (
                      <span>
                        <strong className="text-gray-900">Type:</strong> {propertyType}
                      </span>
                    )}
                    {valuationType && (
                      <span>
                        <strong className="text-gray-900">Valuation:</strong> {valuationType}
                      </span>
                    )}
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-[13.5px] font-medium text-[#191c2b]">
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-[14.5px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                    />
                  </div>

                  {/* Address Line */}
                  <div className="space-y-2">
                    <label className="block text-[13.5px] font-medium text-[#191c2b]">
                      Property address line *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14 Avondale Circle"
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-[14.5px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                    />
                  </div>

                  {/* Two columns: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-[13.5px] font-medium text-[#191c2b]">
                        Email address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@example.co.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-[14.5px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[13.5px] font-medium text-[#191c2b]">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-[52px] px-4 rounded-xl border border-gray-200 bg-white text-[14.5px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all"
                      />
                    </div>
                  </div>

                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    By submitting your details you agree to receive your free valuation estimate and
                    optional local property updates. Your information is kept strictly confidential.
                  </p>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#df0068] text-white text-[14px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer"
                    >
                      <span>Get my free valuation</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2 SUBMITTED SUCCESS STATE */}
              {step === 2 && submitted && (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h2 className="text-[26px] font-bold text-[#191c2b] tracking-tight">
                    Valuation request received!
                  </h2>
                  <p className="text-[15px] text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gray-900">{fullName}</strong>. Your instant
                    valuation estimate for{" "}
                    <strong className="text-gray-900">{addressLine || postcode}</strong> has been
                    generated and your nearest Open House specialist will be in touch with your
                    detailed report.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setSubmitted(false);
                        setPostcode("");
                        setBedrooms("");
                        setPropertyType("");
                        setValuationType("");
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setAddressLine("");
                      }}
                      className="px-6 py-2.5 rounded-full border border-gray-200 text-[13.5px] font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Start another valuation
                    </button>
                    <Link
                      to="/"
                      className="px-6 py-2.5 rounded-full bg-[#df0068] text-white text-[13.5px] font-semibold hover:bg-[#c4005b]"
                    >
                      Back to homepage
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
