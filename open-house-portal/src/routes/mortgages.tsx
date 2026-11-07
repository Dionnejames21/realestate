import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Send, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/mortgages")({
  head: () => ({
    meta: [
      { title: "Mortgages & Clear Mortgage Advice | Open House" },
      {
        name: "description",
        content:
          "First home, next home or a new deal. UK Mortgage Centre helps you understand your options with clear mortgage advice.",
      },
      { property: "og:title", content: "Mortgage Advice by UKMC | Open House" },
      {
        property: "og:description",
        content:
          "Big life plans. Clear mortgage advice. First home, next home or a new deal with UK Mortgage Centre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MortgagesPage,
});

function MortgagesPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  interface FormErrors {
    fullName?: string;
    phone?: string;
    email?: string;
  }
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const errs: FormErrors = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name";
    if (!phone.trim()) errs.phone = "Please enter your phone number";
    if (!email.trim() || !email.includes("@")) errs.email = "Please enter a valid email address";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields marked with *");
      return;
    }

    setSubmitted(true);
    toast.success("Thank you! Your mortgage enquiry has been sent to UK Mortgage Centre.");
  };

  const scrollToContact = () => {
    const el = document.getElementById("ukmc-enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      {/* HERO SECTION (two columns) */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold tracking-wide">
              Mortgage advice by UKMC
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#191c2b] tracking-tight leading-[1.1]">
              Big life plans.
              <br />
              Clear mortgage
              <br />
              advice.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed pt-1">
              First home, next home or a new deal. UK Mortgage Centre helps you understand your
              options.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-colors shadow-sm cursor-pointer"
              >
                <span>Speak to UKMC</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: rounded photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-sm bg-gray-100">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/e1418a9a-98aa-43d6-bdbd-cb6636f0a174.png"
                alt="Smiling couple unpacking a cardboard box in their new home"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: centered heading "Advice for the move you're making." */}
      <section className="py-12 sm:py-16 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191c2b] text-center tracking-tight mb-10">
          Advice for the move you're making.
        </h2>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {/* Row 01 */}
          <div className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
            <div className="sm:col-span-1">
              <span className="text-sm font-bold text-[#df0068] tracking-wider">01</span>
            </div>
            <div className="sm:col-span-4">
              <h3 className="text-lg font-bold text-[#191c2b]">First-time buyers</h3>
            </div>
            <div className="sm:col-span-7">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Make sense of your first mortgage. UKMC breaks down the process so you know what
                happens next.
              </p>
            </div>
          </div>

          {/* Row 02 */}
          <div className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
            <div className="sm:col-span-1">
              <span className="text-sm font-bold text-[#df0068] tracking-wider">02</span>
            </div>
            <div className="sm:col-span-4">
              <h3 className="text-lg font-bold text-[#191c2b]">Remortgages</h3>
            </div>
            <div className="sm:col-span-7">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Your deal coming to an end? Explore your next options with support from a mortgage
                adviser.
              </p>
            </div>
          </div>

          {/* Row 03 */}
          <div className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
            <div className="sm:col-span-1">
              <span className="text-sm font-bold text-[#df0068] tracking-wider">03</span>
            </div>
            <div className="sm:col-span-4">
              <h3 className="text-lg font-bold text-[#191c2b]">Moving home</h3>
            </div>
            <div className="sm:col-span-7">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Keep your mortgage moving alongside your purchase, with support while you plan the
                move.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-colors shadow-sm cursor-pointer"
          >
            <span>Speak to UKMC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 2 (full-width light grey band): Different plans. Specialist support. */}
      <section className="bg-[#f7f8f9] py-14 sm:py-20 border-t border-b border-gray-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#191c2b] tracking-tight mb-10 text-center sm:text-left">
            Different plans. Specialist support.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Buy to let */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-5 bg-gray-100">
                  <img
                    src="https://vibe.filesafe.space/1793524767581062047/assets/25903a3f-69b1-4c7e-8fa3-57abda44be53.png"
                    alt="Victorian brick terraced houses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#191c2b] mb-2">Buy to let</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Buying an investment property or growing a portfolio? Talk through your mortgage
                  options.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
                >
                  <span>Discuss buy to let</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Protection */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-5 bg-gray-100">
                  <img
                    src="https://vibe.filesafe.space/1793524767581062047/assets/e7759800-139d-4388-bbf8-5d49ae3d7956.png"
                    alt="Father and young daughter reading together on a sofa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#191c2b] mb-2">Protection</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Understand cover that could help protect you and your family if circumstances
                  change.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
                >
                  <span>Explore protection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Equity release */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-5 bg-gray-100">
                  <img
                    src="https://vibe.filesafe.space/1793524767581062047/assets/ac9ebe6e-fb0e-4dc9-badb-df3bbeaa868c.png"
                    alt="Older couple having tea at a table"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#191c2b] mb-2">Equity release</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Explore whether a lifetime mortgage suits your later-life plans, with specialist
                  advice on the implications.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
                >
                  <span>Ask about equity release</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 (two columns): Team + Form */}
      <section
        id="ukmc-enquiry-form"
        className="py-14 sm:py-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold tracking-wide">
              Your mortgage advice team
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#191c2b] tracking-tight leading-[1.15]">
              Let's talk about
              <br />
              your plans.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
              UK Mortgage Centre offers straightforward, personal advice and support through the
              mortgage process.
            </p>

            {/* Living room with green velvet sofa photo */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-sm">
              <img
                src="https://vibe.filesafe.space/1793524767581062047/assets/cd555ce2-dec2-4c8c-8b25-47e502b26e4f.png"
                alt="Living room with green velvet sofa, cushions and wooden table"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5 pt-2">
              <p className="text-xs sm:text-sm text-gray-500">
                An advice fee may apply. UKMC will explain the costs before you proceed.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-base font-semibold pt-1">
                <a
                  href="tel:01925573328"
                  className="text-[#df0068] hover:text-[#c4005b] transition-colors"
                >
                  01925 573 328
                </a>
                <span className="text-gray-300">·</span>
                <a
                  href="mailto:hello@ukmc.co.uk"
                  className="text-gray-900 underline hover:text-[#df0068] transition-colors"
                >
                  hello@ukmc.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form card */}
          <div className="lg:col-span-6">
            <div className="bg-[#f7f8f9] rounded-2xl sm:rounded-3xl p-6 sm:p-9 border border-gray-100 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight mb-2">
                Tell us how we can help.
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                Send your mortgage enquiry to UK Mortgage Centre.
              </p>
              <p className="text-xs text-gray-500 mb-6">* Required fields</p>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 border border-green-100 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#191c2b]">Enquiry received</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, {fullName}. A mortgage adviser from UK Mortgage Centre will review
                    your enquiry and be in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                      setOptIn(false);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#df0068] text-white text-xs font-semibold hover:bg-[#c4005b] transition-colors cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                      }}
                      placeholder="Enter your full name"
                      className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:border-[#df0068] focus:ring-[#df0068]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Telephone number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      placeholder="Enter your phone number"
                      className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:border-[#df0068] focus:ring-[#df0068]"
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      placeholder="you@example.com"
                      className={`w-full h-11 px-3.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-400"
                          : "border-gray-200 focus:border-[#df0068] focus:ring-[#df0068]"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your mortgage needs"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] resize-none transition-colors"
                    />
                  </div>

                  {/* Opt-in Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={optIn}
                        onChange={(e) => setOptIn(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#df0068] focus:ring-[#df0068]"
                      />
                      <span className="text-xs text-gray-600 leading-normal">
                        I would like UKMC to contact me about their mortgage products.
                      </span>
                    </label>
                  </div>

                  {/* Privacy Policy Link */}
                  <div>
                    <Link
                      to="/privacy"
                      className="text-xs font-semibold text-[#df0068] hover:underline"
                    >
                      Read our Privacy Policy and Notice
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-colors shadow-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send enquiry</span>
                    </button>
                  </div>

                  {/* reCAPTCHA disclaimer */}
                  <p className="text-[11px] text-gray-400 pt-1 leading-relaxed">
                    Protected by reCAPTCHA. Google Privacy Policy and Terms of Service apply.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL TEXT (small, below the sections) */}
      <section className="pb-16 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-8">
        <div className="max-w-4xl space-y-2 text-xs text-gray-500 leading-relaxed">
          <p>Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
          <p>
            Some buy-to-let mortgages are not regulated by the Financial Conduct Authority. Ask UKMC
            about the advice, fees and terms relevant to your circumstances.
          </p>
          <div className="pt-2">
            <a
              href="mailto:hello@ukmc.co.uk?subject=UKMC%20legal%20information%20and%20fees"
              className="inline-flex items-center gap-1.5 font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors"
            >
              <span>UKMC legal information and fees</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
