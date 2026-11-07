import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface ValuationModalProps {
  open: boolean;
  onClose: () => void;
}

export function ValuationModal({ open, onClose }: ValuationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    propertyType: "House",
    bedrooms: "3",
    timeframe: "Immediately",
    intent: "Selling",
  });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(
      "Valuation request received! Your local Open House agent will be in touch shortly.",
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold mb-3">
              Free Property Valuation
            </div>
            <h2 className="text-2xl font-bold text-[#191c2b] tracking-tight">
              Request a Free valuation
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Find out what your home is worth with expert local guidance and zero obligation.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    I am looking to
                  </label>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] bg-white"
                  >
                    <option value="Selling">Sell my home</option>
                    <option value="Letting">Let to tenants</option>
                    <option value="Curious">Just curious</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Property postcode *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. BN1 1AA"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Property type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] bg-white"
                  >
                    <option value="Semi-detached">Semi-detached</option>
                    <option value="Detached">Detached</option>
                    <option value="Terraced">Terraced</option>
                    <option value="Flat / Apartment">Flat / Apartment</option>
                    <option value="Bungalow">Bungalow</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Bedrooms</label>
                  <select
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068] bg-white"
                  >
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Contact phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#df0068] focus:ring-1 focus:ring-[#df0068]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 h-12 flex items-center justify-center gap-2 rounded-full bg-[#df0068] text-white font-semibold text-sm hover:bg-[#c4005b] transition-all cursor-pointer shadow-md"
              >
                <span>Request your free valuation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <p className="text-[11px] text-center text-gray-500">
                By submitting, you agree to our privacy policy. We will never spam or share your
                details.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-pink-50 text-[#df0068] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#191c2b]">Valuation Request Sent</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm mx-auto">
              Thank you, {formData.name || "valued customer"}. Your nearest Open House local
              specialist has received your details for postcode{" "}
              <strong className="text-gray-900">{formData.postcode || "your area"}</strong> and will
              call you to arrange your complimentary appraisal.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
