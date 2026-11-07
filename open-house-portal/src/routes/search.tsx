import React, { useState } from "react";
import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Search, ArrowRight, ChevronLeft } from "lucide-react";
import { searchAll, SearchResult } from "../lib/search-index";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search results | Open House Estate Agents" },
      {
        name: "description",
        content: "Search Open House properties, areas and the latest property updates.",
      },
    ],
  }),
  component: SearchPage,
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? search["q"] : "",
  }),
});

function SearchPage() {
  const { q } = useSearch({ strict: false }) as { q: string };
  const [query, setQuery] = useState(q);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const trimmed = (query || q || "").trim();
  const results: SearchResult[] = trimmed ? searchAll(trimmed) : [];
  const pageResults = results.filter((r) => r.kind === "page");
  const propertyResults = results.filter((r) => r.kind === "property");

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b]">
      <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-20">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#df0068] hover:text-[#c4005b] transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back to homepage</span>
        </Link>

        {/* Search heading + search box */}
        <div className="space-y-5 mb-8 sm:mb-10">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#191c2b] tracking-tight leading-[1.12]">
            Search results
          </h1>
          <p className="text-[14.5px] sm:text-[16px] text-gray-500">
            Find properties, areas and the latest updates across Open House.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) {
                window.location.assign(`/search?q=${encodeURIComponent(query.trim())}`);
              }
            }}
            className="relative flex items-center max-w-2xl"
          >
            <Search className="pointer-events-none absolute left-4 w-[18px] h-[18px] text-gray-400 stroke-[2]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search properties, areas, or updates..."
              aria-label="Search the website"
              className="w-full h-[52px] pl-11 pr-32 text-[14px] rounded-full border border-gray-200 bg-[#f8f9fa] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-2 focus:ring-[#df0068]/30 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center justify-center gap-2 rounded-full bg-[#df0068] text-white text-[13.5px] font-semibold px-5 hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        </div>

        {trimmed && (
          <p className="text-[13.5px] text-gray-500 mb-6">
            {results.length > 0 ? (
              <>
                Showing <span className="font-semibold text-[#191c2b]">{results.length}</span>{" "}
                result{results.length === 1 ? "" : "s"} for{" "}
                <span className="font-semibold text-[#191c2b]">"{trimmed}"</span>
              </>
            ) : (
              <>
                No results for <span className="font-semibold text-[#191c2b]">"{trimmed}"</span>
              </>
            )}
          </p>
        )}

        {results.length === 0 && trimmed && (
          <div className="rounded-[24px] border border-gray-100 bg-[#f8f9fa] p-10 sm:p-14 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mb-4">
              <Search className="w-6 h-6 stroke-[2]" />
            </div>
            <h2 className="text-[20px] font-bold text-[#191c2b]">No results found</h2>
            <p className="mt-2 text-[14px] text-gray-500 max-w-md mx-auto">
              We couldn't find a match for your search. Try a different area, postcode or keyword,
              or get in touch and we'll help you find what you need.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/buy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-[13.5px] font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
              >
                <span>Browse all properties</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <a
                href="mailto:info@localagent.co.uk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-[#191c2b] text-[13.5px] font-semibold hover:border-gray-300 hover:bg-white transition-all cursor-pointer"
              >
                <span>Contact us</span>
              </a>
            </div>
          </div>
        )}

        {pageResults.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[16px] font-bold text-[#191c2b] mb-3">Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pageResults.map((r) => (
                <Link
                  key={r.id}
                  to={r.to ?? "/"}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 hover:border-[#df0068]/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fef0f5] text-[#df0068]">
                      <Search className="w-4 h-4 stroke-[2.2]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold text-[#191c2b] group-hover:text-[#df0068] transition-colors">
                        {r.label}
                      </span>
                      {r.description && (
                        <span className="block text-[12.5px] text-gray-500">{r.description}</span>
                      )}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {propertyResults.length > 0 && (
          <section>
            <h2 className="text-[16px] font-bold text-[#191c2b] mb-3">Properties & updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {propertyResults.map((prop) => {
                const isFav = favorites[prop.id];
                return (
                  <div
                    key={`${prop.kind}-${prop.id}`}
                    className="group bg-white rounded-[22px] overflow-hidden border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all duration-200 flex flex-col"
                  >
                    <Link
                      to="/properties/$slug"
                      params={{ slug: prop.slug ?? "" }}
                      className="relative aspect-[16/11] overflow-hidden bg-gray-100 block cursor-pointer"
                    >
                      <img
                        src={prop.image}
                        alt={prop.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white text-[#191c2b] shadow-sm">
                          {prop.status}
                        </span>
                      </div>
                      {prop.updateLabel && (
                        <div className="absolute top-3.5 right-16">
                          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#fdf0f5] text-[#df0068] shadow-sm">
                            {prop.updateLabel}
                          </span>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={(e) => toggleFavorite(prop.id, e)}
                        aria-label="Save as favourite"
                        className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white text-gray-700 hover:text-[#df0068] flex items-center justify-center shadow-sm transition-transform active:scale-90 cursor-pointer"
                      >
                        <svg
                          className={`w-4 h-4 ${isFav ? "fill-[#df0068] text-[#df0068]" : "fill-none text-gray-700"}`}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                    </Link>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="text-[22px] sm:text-[24px] font-extrabold text-[#191c2b] tracking-tight">
                          {prop.priceDisplay}
                        </div>
                        <Link
                          to="/properties/$slug"
                          params={{ slug: prop.slug ?? "" }}
                          className="block text-[15px] font-bold text-[#191c2b] mt-1 group-hover:text-[#df0068] transition-colors cursor-pointer"
                        >
                          {prop.label}
                        </Link>
                        <p className="text-[12.5px] text-gray-500 mt-0.5">{prop.location}</p>
                        <p className="text-[12.5px] text-gray-500 mt-1 font-medium">
                          {prop.beds} bedrooms · {prop.status}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          to="/properties/$slug"
                          params={{ slug: prop.slug ?? "" }}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#df0068] hover:text-[#c4005b] transition-colors cursor-pointer"
                        >
                          <span>View property</span>
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {!trimmed && (
          <div className="rounded-[24px] border border-gray-100 bg-[#f8f9fa] p-10 sm:p-14 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#fef0f5] text-[#df0068] flex items-center justify-center mb-4">
              <Search className="w-6 h-6 stroke-[2]" />
            </div>
            <h2 className="text-[20px] font-bold text-[#191c2b]">Start typing to search</h2>
            <p className="mt-2 text-[14px] text-gray-500 max-w-md mx-auto">
              Search for properties, areas, postcodes or the latest updates like Just listed,
              Reduced, Under offer, Sold and Let agreed.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
