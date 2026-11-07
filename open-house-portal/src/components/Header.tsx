import React, { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { OpenHouseLogo } from "./OpenHouseLogo";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { ValuationModal } from "./ValuationModal";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [valuationOpen, setValuationOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { label: "Buy", to: "/buy" },
    { label: "Rent", to: "/rent" },
    { label: "Sell", to: "/sell" },
    { label: "Landlords", to: "/landlords" },
    { label: "Auctions", to: "/auctions" },
    { label: "Land & New Homes", to: "/land-and-new-homes" },
    { label: "Discover", to: "/discover" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/80 transition-all">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <OpenHouseLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((item) => {
              const isActive =
                currentPath === item.to ||
                (item.to === "/buy" && currentPath.startsWith("/properties"));
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-[14.5px] font-medium transition-colors hover:text-[#df0068] ${
                    isActive ? "text-[#df0068] font-semibold" : "text-[#191c2b]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Search — between menu items and the CTA button */}
          <div className="hidden lg:block w-[320px] xl:w-[360px]">
            <SearchBar variant="expanded" />
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/valuation"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#df0068] text-white text-[13.5px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Request a Free valuation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile search + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <SearchBar variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-[15px] font-semibold text-[#191c2b] hover:text-[#df0068] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/valuation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#df0068] text-white font-semibold text-[14px] shadow-sm hover:bg-[#c4005b] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Request a Free valuation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <ValuationModal open={valuationOpen} onClose={() => setValuationOpen(false)} />
    </>
  );
}
