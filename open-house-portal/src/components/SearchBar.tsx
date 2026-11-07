import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X, ArrowRight } from "lucide-react";
import { latestUpdates, searchAll, SearchResult } from "../lib/search-index";

const PLACEHOLDER = "Search properties, areas, or updates...";

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [ref, handler]);
}

export interface SearchBarProps {
  /** When true, renders a compact icon button that expands into a full bar. */
  variant?: "compact" | "expanded";
  className?: string;
  autoFocus?: boolean;
}

export function SearchBar({
  variant = "expanded",
  className = "",
  autoFocus = false,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  useClickOutside(containerRef, () => setOpen(false));

  const results = useMemo(() => (query.trim() ? searchAll(query) : []), [query]);

  const updates = useMemo<SearchResult[]>(
    () => (open && !query.trim() ? latestUpdates(5) : []),
    [open, query],
  );

  const shown = query.trim() ? results : updates;
  useEffect(() => {
    setActiveIdx(0);
  }, [query, open]);

  useEffect(() => {
    if (variant === "compact" && open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [variant, open]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const go = useCallback(
    (r: SearchResult) => {
      setOpen(false);
      setQuery("");
      if (r.kind === "page" && r.to) {
        navigate({ to: r.to });
      } else if (r.kind === "property" && r.slug) {
        navigate({ to: "/properties/$slug", params: { slug: r.slug } });
      }
    },
    [navigate],
  );

  const submit = useCallback(() => {
    const r = shown[0];
    if (r) go(r);
    else if (query.trim()) {
      window.location.assign(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  }, [shown, query, go]);

  if (variant === "compact") {
    return (
      <CompactSearch
        query={query}
        setQuery={setQuery}
        open={open}
        setOpen={setOpen}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        shown={shown}
        submit={submit}
        go={go}
        containerRef={containerRef}
        inputRef={inputRef}
        listboxId={listboxId}
        className={className}
      />
    );
  }

  return (
    <SearchShell
      query={query}
      setQuery={(v) => {
        setQuery(v);
        setOpen(true);
      }}
      open={open}
      setOpen={setOpen}
      activeIdx={activeIdx}
      setActiveIdx={setActiveIdx}
      shown={shown}
      submit={submit}
      go={go}
      containerRef={containerRef}
      inputRef={inputRef}
      listboxId={listboxId}
      className={className}
    />
  );
}

interface ShellProps {
  query: string;
  setQuery: (v: string) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
  shown: SearchResult[];
  submit: () => void;
  go: (r: SearchResult) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  listboxId: string;
  className?: string;
}

const SearchShell = React.forwardRef<HTMLDivElement, ShellProps>(function SearchShell(
  {
    query,
    setQuery,
    open,
    setOpen,
    activeIdx,
    setActiveIdx,
    shown,
    submit,
    go,
    containerRef,
    inputRef,
    listboxId,
    className,
  },
  _ref,
) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, shown.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3.5 w-[18px] h-[18px] text-gray-400 stroke-[2]" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={PLACEHOLDER}
          aria-label="Search the website"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete="list"
          role="combobox"
          className="w-full h-[44px] pl-10 pr-10 text-[13.5px] rounded-full border border-gray-200 bg-[#f8f9fa] text-[#191c2b] placeholder:text-gray-400 focus:outline-none focus:border-[#df0068] focus:ring-2 focus:ring-[#df0068]/30 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(true);
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-[#191c2b] hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 stroke-[2.2]" />
          </button>
        )}
      </div>

      {open && (
        <Dropdown
          id={listboxId}
          query={query}
          shown={shown}
          activeIdx={activeIdx}
          onHover={setActiveIdx}
          onPick={go}
          onSeeAll={() => {
            if (query.trim()) {
              window.location.assign(`/search?q=${encodeURIComponent(query.trim())}`);
            }
          }}
        />
      )}
    </div>
  );
});

const CompactSearch = React.forwardRef<HTMLDivElement, ShellProps>(function CompactSearch(
  {
    query,
    setQuery,
    open,
    setOpen,
    activeIdx,
    setActiveIdx,
    shown,
    submit,
    go,
    containerRef,
    inputRef,
    listboxId,
    className,
  },
  _ref,
) {
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className={`p-2 -mr-1 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors ${className}`}
      >
        <Search className="w-6 h-6 stroke-[2.2]" />
      </button>
    );
  }

  return (
    <div ref={containerRef} className={`fixed inset-0 z-50 lg:hidden ${className}`}>
      <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
      <div className="relative bg-white px-4 pt-3 pb-4 shadow-lg">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400 stroke-[2] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIdx((i) => Math.min(i + 1, shown.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIdx((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                submit();
              } else if (e.key === "Escape") {
                setOpen(false);
              }
            }}
            placeholder={PLACEHOLDER}
            aria-label="Search the website"
            aria-expanded
            aria-controls={listboxId}
            aria-autocomplete="list"
            role="combobox"
            className="flex-1 h-12 text-[15px] text-[#191c2b] placeholder:text-gray-400 focus:outline-none"
            autoFocus
          />
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Close search"
            className="p-2 -mr-1 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>
        </div>
        {open && (
          <Dropdown
            id={listboxId}
            query={query}
            shown={shown}
            activeIdx={activeIdx}
            onHover={setActiveIdx}
            onPick={go}
            onSeeAll={() => {
              if (query.trim()) {
                window.location.assign(`/search?q=${encodeURIComponent(query.trim())}`);
              }
            }}
            className="mt-2 static max-h-[70vh] rounded-2xl border border-gray-100"
          />
        )}
      </div>
    </div>
  );
});

interface DropdownProps {
  id: string;
  query: string;
  shown: SearchResult[];
  activeIdx: number;
  onHover: (i: number) => void;
  onPick: (r: SearchResult) => void;
  onSeeAll?: () => void;
  className?: string;
}

function Dropdown({
  id,
  query,
  shown,
  activeIdx,
  onHover,
  onPick,
  onSeeAll,
  className,
}: DropdownProps) {
  return (
    <div
      id={id}
      role="listbox"
      className={`absolute z-50 mt-2 left-0 right-0 max-h-[440px] overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/[0.06] ${className ?? ""}`}
    >
      {!query && (
        <div className="px-4 pt-3 pb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#df0068]">
          Latest property updates
        </div>
      )}

      {shown.length === 0 ? (
        <div className="px-4 py-8 text-center">
          <p className="text-[14px] font-semibold text-[#191c2b]">No results found</p>
          <p className="mt-1 text-[13px] text-gray-500">
            We couldn't find a match.{" "}
            <a
              href="mailto:info@localagent.co.uk"
              className="text-[#df0068] font-semibold underline hover:text-[#c4005b] transition-colors"
            >
              Contact us
            </a>{" "}
            and we'll help you find what you need.
          </p>
        </div>
      ) : (
        <ul className="py-1.5">
          {shown.map((r, i) => (
            <li key={`${r.kind}-${r.id}`} role="option" aria-selected={i === activeIdx}>
              <ResultRow
                result={r}
                active={i === activeIdx}
                onHover={() => onHover(i)}
                onPick={() => onPick(r)}
              />
            </li>
          ))}
        </ul>
      )}

      {query && shown.length > 0 && onSeeAll && (
        <div className="border-t border-gray-100 p-2">
          <button
            type="button"
            onClick={onSeeAll}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl py-2 text-[13px] font-semibold text-[#df0068] hover:bg-[#fef0f5] transition-colors"
          >
            <span>See all results for "{query.trim()}"</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
}

function ResultRow({
  result,
  active,
  onHover,
  onPick,
}: {
  result: SearchResult;
  active: boolean;
  onHover: () => void;
  onPick: () => void;
}) {
  if (result.kind === "page") {
    return (
      <button
        type="button"
        onMouseEnter={onHover}
        onClick={onPick}
        className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
          active ? "bg-[#fef0f5]" : "hover:bg-gray-50"
        }`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fef0f5] text-[#df0068]">
          <Search className="w-4 h-4 stroke-[2.2]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13.5px] font-semibold text-[#191c2b] truncate">
            {result.label}
          </span>
          {result.description && (
            <span className="block text-[12px] text-gray-500 truncate">{result.description}</span>
          )}
        </span>
        <ArrowRight className="w-4 h-4 text-gray-300 stroke-[2.2] shrink-0" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onClick={onPick}
      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors ${
        active ? "bg-[#fef0f5]" : "hover:bg-gray-50"
      }`}
    >
      <span className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        {result.image && (
          <img
            src={result.image}
            alt={result.label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="text-[13.5px] font-semibold text-[#191c2b] truncate">
            {result.priceDisplay}
          </span>
          {result.updateLabel && (
            <span className="inline-flex items-center rounded-full bg-[#fdf0f5] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#df0068]">
              {result.updateLabel}
            </span>
          )}
        </span>
        <span className="block text-[12.5px] text-[#191c2b] font-medium truncate">
          {result.label}
        </span>
        <span className="block text-[11.5px] text-gray-500 truncate">{result.location}</span>
        <span className="block text-[11.5px] text-gray-400 truncate">
          {result.beds} bedrooms · {result.status}
        </span>
      </span>
    </button>
  );
}

export default SearchBar;
