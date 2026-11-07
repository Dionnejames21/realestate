import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register for Property Updates | Open House" },
      {
        name: "description",
        content:
          "Tell us what you're looking for and receive updates on properties matching your requirements.",
      },
      { property: "og:title", content: "Register for updates | Open House" },
      {
        property: "og:description",
        content:
          "Find a home. Stay in the know. Tell us what you're looking for and receive updates on properties matching your requirements.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1793524767581062047/assets/90da3af5-3106-438b-ad8b-4b52a0aceb3f.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterPage,
});

export function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 Fields
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  // Step 2 Fields
  const [buyOrRent, setBuyOrRent] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("Any");
  const [propertyType, setPropertyType] = useState("");
  const [message, setMessage] = useState("");
  const [prefMatching, setPrefMatching] = useState(false);
  const [prefValuation, setPrefValuation] = useState(false);

  // Errors
  const [errors, setErrors] = useState<{
    fullName?: string;
    telephone?: string;
    email?: string;
    confirmEmail?: string;
    postcode?: string;
    minPrice?: string;
    maxPrice?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  // Step 1 validation
  const validateStep1 = () => {
    const errs: typeof errors = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name";
    if (!telephone.trim()) errs.telephone = "Please enter your telephone number";
    if (!email.trim() || !email.includes("@")) errs.email = "Please enter a valid email address";
    if (!confirmEmail.trim()) {
      errs.confirmEmail = "Please re-enter your email address";
    } else if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      errs.confirmEmail = "Email addresses do not match";
    }
    if (!postcode.trim()) errs.postcode = "Please enter your postcode";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 validation
  const validateStep2 = () => {
    const errs: typeof errors = {};
    if (!minPrice.trim()) errs.minPrice = "Please enter a minimum price";
    if (!maxPrice.trim()) errs.maxPrice = "Please enter a maximum price";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast.error("Please complete all required fields marked with *");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setSubmitted(true);
      toast.success("Thank you! You are now registered for property updates.");
    } else {
      toast.error("Please complete all required fields marked with *");
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN (same on both steps) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            {/* Light pink pill badge */}
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold tracking-wide">
                Property updates
              </span>
            </div>

            {/* Large bold heading on two lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
              Find a home.
              <br />
              Stay in the know.
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Tell us what you're looking for and receive updates on properties matching your
              requirements.
            </p>

            {/* Rounded photo: red-brick semi-detached house with a front garden, brick pillars and a path */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm border border-gray-100">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/90da3af5-3106-438b-ad8b-4b52a0aceb3f.png"
                alt="Red-brick semi-detached house with a front garden, brick pillars and a path"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Bold heading & text */}
            <div className="space-y-2 pt-1">
              <h2 className="text-xl sm:text-[22px] font-bold text-[#191c2b] tracking-tight">
                Your search, made personal.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                Buying or renting? Share your budget and preferences so your local team knows what
                matters to you.
              </p>
            </div>

            {/* Pink link with arrow: "Prefer to speak to someone?" (goes to Find your local agent) */}
            <div className="pt-1">
              <Link
                to="/find-agent"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors"
              >
                <span>Prefer to speak to someone?</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN (light grey rounded card with a stepper) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="bg-[#f8f9fa] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100/90 shadow-sm">
              {/* STEPPER */}
              <div className="relative mb-10 max-w-md mx-auto">
                <div className="flex items-center justify-between relative">
                  {/* Connecting Line */}
                  <div className="absolute top-5 left-12 right-12 h-[2px] bg-gray-200 -z-0">
                    <div
                      className="h-full bg-[#df0068] transition-all duration-300"
                      style={{ width: step === 2 ? "100%" : "0%" }}
                    />
                  </div>

                  {/* Step 1 Indicator */}
                  <div className="flex flex-col items-center relative z-10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                        step === 1
                          ? "bg-white border-2 border-[#df0068] text-[#df0068] shadow-sm"
                          : "bg-[#df0068] text-white"
                      }`}
                      aria-label="Step 1: Your details"
                    >
                      {step === 2 ? <Check className="w-5 h-5 stroke-[2.5]" /> : "1"}
                    </button>
                    <span className="text-xs font-semibold text-[#df0068] mt-2.5">
                      Your details
                    </span>
                  </div>

                  {/* Step 2 Indicator */}
                  <div className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        step === 2
                          ? "bg-white border-2 border-[#df0068] text-[#df0068] shadow-sm"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                      }`}
                    >
                      2
                    </div>
                    <span
                      className={`text-xs font-semibold mt-2.5 ${
                        step === 2 ? "text-[#df0068]" : "text-gray-400"
                      }`}
                    >
                      Your search
                    </span>
                  </div>
                </div>
              </div>

              {submitted ? (
                /* Success view */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#191c2b] tracking-tight">
                    You're registered for updates!
                  </h3>
                  <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {fullName}. We've saved your property requirements and will send you
                    matching listings as soon as they become available.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      to="/buy"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-colors"
                    >
                      <span>Browse properties for sale</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#191c2b] text-sm font-semibold border border-gray-200 hover:border-gray-300"
                    >
                      Update requirements
                    </button>
                  </div>
                </div>
              ) : step === 1 ? (
                /* STEP 1 FORM */
                <form onSubmit={handleContinue} className="space-y-6">
                  {/* Heading & required notice */}
                  <div>
                    <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#191c2b] tracking-tight">
                      Your contact details
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">* Required fields</p>
                  </div>

                  {/* Row 1: Full name * & Telephone number * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Full name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="Enter your full name"
                        className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                          errors.fullName ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Telephone number *
                      </label>
                      <input
                        type="tel"
                        value={telephone}
                        onChange={(e) => {
                          setTelephone(e.target.value);
                          if (errors.telephone) setErrors({ ...errors, telephone: "" });
                        }}
                        placeholder="Enter your telephone number"
                        className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                          errors.telephone ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.telephone && (
                        <p className="text-xs text-red-500">{errors.telephone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email address * & Confirm email address * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Email address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="you@example.com"
                        className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                          errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Confirm email address *
                      </label>
                      <input
                        type="email"
                        value={confirmEmail}
                        onChange={(e) => {
                          setConfirmEmail(e.target.value);
                          if (errors.confirmEmail) setErrors({ ...errors, confirmEmail: "" });
                        }}
                        placeholder="Re-enter your email address"
                        className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                          errors.confirmEmail ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.confirmEmail && (
                        <p className="text-xs text-red-500">{errors.confirmEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Address (optional): textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">
                      Address (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your address"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all resize-none"
                    />
                  </div>

                  {/* Postcode * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">Postcode *</label>
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                        if (errors.postcode) setErrors({ ...errors, postcode: "" });
                      }}
                      placeholder="Enter your postcode"
                      className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                        errors.postcode ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.postcode && <p className="text-xs text-red-500">{errors.postcode}</p>}
                  </div>

                  {/* Right-aligned pink pill button with arrow: "Continue" */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              ) : (
                /* STEP 2 FORM */
                <form onSubmit={handleRegister} className="space-y-6">
                  {/* Heading & required notice */}
                  <div>
                    <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#191c2b] tracking-tight">
                      Your property requirements
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">* Required fields</p>
                  </div>

                  {/* "Looking to buy or rent?": full-width dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">
                      Looking to buy or rent?
                    </label>
                    <div className="relative">
                      <select
                        value={buyOrRent}
                        onChange={(e) => setBuyOrRent(e.target.value)}
                        className="w-full h-12 px-4 text-sm rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-10"
                      >
                        <option value="">Please select</option>
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                        <option value="Both">Both</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                        <ChevronDown className="w-4 h-4 stroke-[2]" />
                      </div>
                    </div>
                  </div>

                  {/* Row: Minimum price * & Maximum price * */}
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-700">
                          Minimum price *
                        </label>
                        <input
                          type="text"
                          value={minPrice}
                          onChange={(e) => {
                            setMinPrice(e.target.value);
                            if (errors.minPrice) setErrors({ ...errors, minPrice: "" });
                          }}
                          placeholder="£ Minimum"
                          className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                            errors.minPrice ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.minPrice && (
                          <p className="text-xs text-red-500">{errors.minPrice}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-700">
                          Maximum price *
                        </label>
                        <input
                          type="text"
                          value={maxPrice}
                          onChange={(e) => {
                            setMaxPrice(e.target.value);
                            if (errors.maxPrice) setErrors({ ...errors, maxPrice: "" });
                          }}
                          placeholder="£ Maximum"
                          className={`w-full h-12 px-4 text-sm rounded-xl border bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all ${
                            errors.maxPrice ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.maxPrice && (
                          <p className="text-xs text-red-500">{errors.maxPrice}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1.5">
                      For rent, enter monthly amounts (pcm).
                    </p>
                  </div>

                  {/* Row: Minimum bedrooms & Property type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Minimum bedrooms
                      </label>
                      <div className="relative">
                        <select
                          value={minBedrooms}
                          onChange={(e) => setMinBedrooms(e.target.value)}
                          className="w-full h-12 px-4 text-sm rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-10"
                        >
                          <option value="Any">Any</option>
                          <option value="1+ bedroom">1+ bedroom</option>
                          <option value="2+ bedrooms">2+ bedrooms</option>
                          <option value="3+ bedrooms">3+ bedrooms</option>
                          <option value="4+ bedrooms">4+ bedrooms</option>
                          <option value="5+ bedrooms">5+ bedrooms</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                          <ChevronDown className="w-4 h-4 stroke-[2]" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-gray-700">
                        Property type
                      </label>
                      <div className="relative">
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full h-12 px-4 text-sm rounded-xl border border-gray-200 bg-white text-[#191c2b] appearance-none focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all cursor-pointer pr-10"
                        >
                          <option value="">Select property type</option>
                          <option value="Any">Any type</option>
                          <option value="Semi-detached">Semi-detached</option>
                          <option value="Detached">Detached</option>
                          <option value="Terraced">Terraced</option>
                          <option value="End-terrace">End-terrace</option>
                          <option value="Townhouse">Townhouse</option>
                          <option value="Flat / Apartment">Flat / Apartment</option>
                          <option value="Bungalow">Bungalow</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                          <ChevronDown className="w-4 h-4 stroke-[2]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message (optional): textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you are looking for"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] transition-all resize-none"
                    />
                  </div>

                  {/* Heading "Your preferences" */}
                  <div className="pt-2 border-t border-gray-200/70 space-y-3">
                    <div>
                      <h4 className="text-base font-bold text-[#191c2b]">Your preferences</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        You must be 18 or over to register.
                      </p>
                    </div>

                    {/* Two checkboxes */}
                    <div className="space-y-2.5">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={prefMatching}
                          onChange={(e) => setPrefMatching(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#df0068] accent-[#df0068] cursor-pointer"
                        />
                        <span className="text-xs text-gray-700 font-medium">
                          Send me properties matching my requirements.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={prefValuation}
                          onChange={(e) => setPrefValuation(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#df0068] accent-[#df0068] cursor-pointer"
                        />
                        <span className="text-xs text-gray-700 font-medium">
                          Send me information about valuation services.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Small text: Privacy & reCAPTCHA */}
                  <div className="space-y-1 text-[11.5px] text-gray-400 leading-relaxed pt-1">
                    <p>
                      Read our{" "}
                      <Link to="/privacy" className="text-gray-600 underline hover:text-[#df0068]">
                        Privacy Policy and Notice
                      </Link>{" "}
                      to see how we use your data.
                    </p>
                    <p>Protected by reCAPTCHA. Google Privacy Policy and Terms of Service apply.</p>
                  </div>

                  {/* Buttons: Back on the left, Register for updates on the right */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#191c2b] text-sm font-semibold border border-gray-200 hover:border-gray-300 transition-colors shadow-sm cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                    >
                      <span>Register for updates</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
