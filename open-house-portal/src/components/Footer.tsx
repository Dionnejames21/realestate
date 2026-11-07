import React from "react";
import { Link } from "@tanstack/react-router";
import { OpenHouseLogo } from "./OpenHouseLogo";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100/80 pt-16 pb-12 mt-auto">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile & Desktop responsive grid:
            On mobile: logo, tagline, phone, email stacked;
            then two columns: Explore and Open House;
            then copyright on two lines;
            then Privacy policy and Terms of use side by side.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 pb-10 md:pb-14 border-b border-gray-100">
          {/* Col 1: Brand & contact info */}
          <div className="md:col-span-5 space-y-3 md:space-y-4">
            <OpenHouseLogo variant="footer" />
            <p className="text-[17px] font-bold text-[#191c2b] pt-1 md:pt-2">
              Local people. National reach.
            </p>
            <div className="space-y-1 text-[13.5px] text-gray-600">
              <div>
                <a
                  href="tel:03330155440"
                  className="hover:text-[#df0068] transition-colors font-medium"
                >
                  0333 015 5440
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@localagent.co.uk"
                  className="hover:text-[#df0068] transition-colors"
                >
                  info@localagent.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Mobile links container: two columns on mobile and tablet */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:gap-10">
            {/* Col 2: Explore links */}
            <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-[#191c2b] tracking-tight">Explore</h4>
              <ul className="space-y-2.5 text-[13.5px] text-gray-600">
                <li>
                  <Link to="/sell" className="hover:text-[#df0068] transition-colors">
                    Selling your property
                  </Link>
                </li>
                <li>
                  <Link to="/landlords" className="hover:text-[#df0068] transition-colors">
                    Landlord services
                  </Link>
                </li>
                <li>
                  <Link to="/auctions" className="hover:text-[#df0068] transition-colors">
                    Auctions
                  </Link>
                </li>
                <li>
                  <Link to="/mortgages" className="hover:text-[#df0068] transition-colors">
                    Mortgages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Open House links */}
            <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-[#191c2b] tracking-tight">Open House</h4>
              <ul className="space-y-2.5 text-[13.5px] text-gray-600">
                <li>
                  <Link to="/find-agent" className="hover:text-[#df0068] transition-colors">
                    Find your local agent
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#df0068] transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/discover" className="hover:text-[#df0068] transition-colors">
                    Client testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-[#df0068] transition-colors">
                    Register for updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-[12px] text-gray-500 gap-4">
          <p className="leading-relaxed">
            <span className="block sm:inline">© 2026 Open House Estate Agents.</span>{" "}
            <span className="block sm:inline">All rights reserved.</span>
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
