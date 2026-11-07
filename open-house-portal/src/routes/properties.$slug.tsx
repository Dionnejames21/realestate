import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  FileText,
  Calculator,
  ArrowRight,
  Check,
  User,
  Phone,
  Mail,
  X,
  Sparkles,
  Layers,
} from "lucide-react";
import { PROPERTIES_DATA } from "../lib/data";
import { ValuationModal } from "../components/ValuationModal";
import { OpenHouseLogo } from "../components/OpenHouseLogo";
import { toast } from "sonner";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = PROPERTIES_DATA.find((p) => p.slug === params.slug);
    if (!property) {
      throw notFound();
    }
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.property) {
      return {
        meta: [{ title: "Property Not Found | Open House" }],
      };
    }
    const p = loaderData.property;
    return {
      meta: [
        { title: `${p.title} | ${p.town} | Open House` },
        {
          name: "description",
          content: `${p.title}, ${p.town}. ${p.priceDisplay}. ${p.bedrooms} bedrooms · ${p.type}. Contact Open House for viewings.`,
        },
        { property: "og:title", content: `${p.title} | £${p.price.toLocaleString()} | Open House` },
        {
          property: "og:description",
          content: `${p.summary || p.description}`,
        },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PropertyDetailPage,
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold">Property not found</h1>
      <p className="mt-2 text-gray-600">The property you are looking for does not exist.</p>
      <Link
        to="/buy"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white font-semibold text-sm"
      >
        Browse properties
      </Link>
    </div>
  ),
});

function PropertyDetailPage() {
  const { property } = Route.useLoaderData();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"details" | "floorplan" | "mortgage">("details");
  const [isFavorited, setIsFavorited] = useState(false);
  const [viewingModalOpen, setViewingModalOpen] = useState(false);
  const [fullscreenGalleryOpen, setFullscreenGalleryOpen] = useState(false);
  const [fullscreenPhotoIndex, setFullscreenPhotoIndex] = useState(0);

  // Gallery photos
  const photos = [
    {
      src: "https://vibe.filesafe.space/1793524767581062047/assets/c444c105-17cb-4b8e-9272-fbbec322758a.jpg",
      alt: "Avondale Circle - Front Exterior",
      caption: "Exterior · Avondale Circle",
      label: "Exterior",
      digitallyAltered: true,
    },
    {
      src: "https://vibe.filesafe.space/1793524767581062047/assets/4ab39cf8-4308-4819-92d7-e333e723f4fe.jpg",
      alt: "Avondale Circle - Kitchen and dining",
      caption: "Kitchen · Avondale Circle",
      label: "Kitchen",
      hasWatermark: true,
    },
  ];

  const currentPhoto = photos[fullscreenPhotoIndex] ?? photos[0]!;
  const currentActivePhoto = photos[activePhotoIndex] ?? photos[0]!;
  const nextActivePhoto = photos[(activePhotoIndex + 1) % photos.length] ?? photos[0]!;

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNextFullscreenPhoto = () => {
    setFullscreenPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevFullscreenPhoto = () => {
    setFullscreenPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openFullscreenGallery = (startIndex: number = 0) => {
    setFullscreenPhotoIndex(startIndex);
    setFullscreenGalleryOpen(true);
  };

  return (
    <div className="bg-white min-h-screen text-[#191c2b] pb-24">
      {/* FULLSCREEN GALLERY MODAL (when "View all photos" is clicked) */}
      {fullscreenGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-[#f4f5f7] flex flex-col overflow-y-auto">
          {/* White top bar */}
          <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shrink-0 shadow-xs">
            {/* Left: Back to property link */}
            <button
              onClick={() => setFullscreenGalleryOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c2b] hover:text-[#df0068] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Back to property</span>
            </button>

            {/* Center: bold Avondale Circle with Stafford, ST18 below */}
            <div className="text-center">
              <h2 className="text-base sm:text-lg font-extrabold text-[#191c2b] tracking-tight leading-tight">
                Avondale Circle
              </h2>
              <p className="text-xs text-gray-500 font-medium">Stafford, ST18</p>
            </div>

            {/* Right: Round outlined X close button */}
            <button
              onClick={() => setFullscreenGalleryOpen(false)}
              aria-label="Close gallery"
              className="w-9 h-9 rounded-full border border-gray-300 hover:border-gray-400 flex items-center justify-center text-gray-700 hover:text-black transition-colors cursor-pointer bg-white"
            >
              <X className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

          {/* Gallery Content Area */}
          <div className="flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between">
            {/* Header row: "All photos" at left and "1 / 2 photos" at right */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#191c2b] tracking-tight">
                All photos
              </h3>
              <span className="text-sm font-semibold text-gray-500">
                {fullscreenPhotoIndex + 1} / {photos.length} photos
              </span>
            </div>

            {/* Main Stage Image with Prev / Next arrows */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/5 shadow-md flex items-center justify-center group aspect-[16/10] sm:aspect-[16/9] max-h-[620px]">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="w-full h-full object-cover"
              />

              {/* Tag for Digitally Altered on photo 1 */}
              {currentPhoto.digitallyAltered && (
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  <span>Digitally Altered</span>
                </div>
              )}

              {/* Watermark for photo 2 */}
              {currentPhoto.hasWatermark && (
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm">
                  <OpenHouseLogo className="h-6 w-auto" />
                </div>
              )}

              {/* Left arrow */}
              <button
                onClick={handlePrevFullscreenPhoto}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-gray-800 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Right arrow */}
              <button
                onClick={handleNextFullscreenPhoto}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-gray-800 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Caption under large photo */}
            <p className="text-center text-sm font-semibold text-gray-700 mt-3 sm:mt-4">
              {currentPhoto.caption}
            </p>

            {/* Thumbnails below */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pb-4">
              {photos.map((p, idx) => {
                const isSelected = idx === fullscreenPhotoIndex;
                return (
                  <button
                    key={p.label}
                    onClick={() => setFullscreenPhotoIndex(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-28 sm:w-36 h-20 sm:h-24 rounded-xl overflow-hidden transition-all shadow-xs ${
                        isSelected
                          ? "border-[3px] border-[#df0068] ring-2 ring-[#df0068]/20 scale-102"
                          : "border-2 border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? "text-[#df0068]" : "text-gray-700 group-hover:text-black"
                      }`}
                    >
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TOP BAR / BREADCRUMB */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          to="/buy"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#df0068] transition-colors"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back to properties</span>
        </Link>
      </div>

      {/* TITLE & PRICE ROW */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Left Title block */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold mb-2.5">
              For sale
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191c2b] tracking-tight">
              Avondale Circle
            </h1>
            <p className="text-base text-gray-500 font-medium mt-1">Stafford, ST18</p>
          </div>

          {/* Right Price block */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191c2b] tracking-tight">
                £300,000
              </span>
              <button
                onClick={() => {
                  setIsFavorited(!isFavorited);
                  toast.success(
                    !isFavorited ? "Saved to your favourites" : "Removed from favourites",
                  );
                }}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isFavorited
                    ? "bg-[#fef0f5] border-pink-200 text-[#df0068]"
                    : "border-gray-200 bg-white text-gray-500 hover:text-[#df0068]"
                }`}
                title="Save property"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-[#df0068]" : ""}`} />
              </button>
            </div>
            <p className="text-sm font-semibold text-gray-600 mt-1">3 bedrooms · Semi-detached</p>
          </div>
        </div>
      </div>

      {/* PHOTO GALLERY CAROUSEL */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/10] max-h-[580px]">
          {/* Photos side by side representation */}
          <div className="grid grid-cols-12 h-full w-full">
            {/* Main photo (spans 9 or 10 cols) */}
            <div className="col-span-12 md:col-span-9 h-full relative overflow-hidden">
              <img
                src={currentActivePhoto.src}
                alt={currentActivePhoto.alt}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            {/* Partially visible second photo on right (hidden on small screens, shown md+) */}
            <div className="hidden md:block md:col-span-3 h-full relative overflow-hidden opacity-90 border-l-4 border-white">
              <img
                src={nextActivePhoto.src}
                alt="Second photo preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Carousel Arrow buttons */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* TABS ROW */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Property details tab */}
            <button
              onClick={() => setActiveTab("details")}
              className={`flex items-center gap-2 pb-3.5 text-sm font-bold transition-all relative cursor-pointer ${
                activeTab === "details"
                  ? "text-[#df0068] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#df0068]"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <Home className="w-4 h-4 stroke-[2.2]" />
              <span>Property details</span>
            </button>

            {/* Floorplan tab */}
            <button
              onClick={() => setActiveTab("floorplan")}
              className={`flex items-center gap-2 pb-3.5 text-sm font-bold transition-all relative cursor-pointer ${
                activeTab === "floorplan"
                  ? "text-[#df0068] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#df0068]"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <FileText className="w-4 h-4 stroke-[2.2]" />
              <span>Floorplan</span>
            </button>

            {/* Mortgage tab */}
            <button
              onClick={() => setActiveTab("mortgage")}
              className={`flex items-center gap-2 pb-3.5 text-sm font-bold transition-all relative cursor-pointer ${
                activeTab === "mortgage"
                  ? "text-[#df0068] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#df0068]"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <Calculator className="w-4 h-4 stroke-[2.2]" />
              <span>Mortgage</span>
            </button>
          </div>

          {/* Far right: View all photos link */}
          <button
            onClick={() => openFullscreenGallery(0)}
            className="flex items-center gap-1.5 text-sm font-bold text-[#df0068] hover:text-[#c4005b] pb-3.5 transition-colors cursor-pointer"
          >
            <span>View all photos</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA: TWO COLUMNS (Left: Active Tab Content, Right: Contact Card) */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Switches between Details, Floorplan, and Mortgage */}
          <div className="lg:col-span-8">
            {/* TAB 1: PROPERTY DETAILS */}
            {activeTab === "details" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight">
                    Property details
                  </h2>
                  <p className="mt-3 text-base text-gray-700 leading-relaxed">
                    A three-bedroom semi-detached home arranged over three floors, with an open-plan
                    kitchen and living area, a separate study and an enclosed rear garden.
                  </p>
                </div>

                {/* Light grey rounded box with 3 columns */}
                <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6 sm:p-7 grid grid-cols-3 gap-4 text-center sm:text-left">
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Bedrooms
                    </span>
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#191c2b] mt-1">
                      3
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Property type
                    </span>
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#191c2b] mt-1">
                      Semi-detached
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Tenure
                    </span>
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#191c2b] mt-1">
                      Freehold
                    </span>
                  </div>
                </div>

                {/* Key features */}
                <div>
                  <h3 className="text-xl font-extrabold text-[#191c2b] tracking-tight mb-4">
                    Key features
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Open-plan kitchen and living area",
                      "Separate study for working from home",
                      "Main bedroom with en suite",
                      "Detached garage and driveway parking",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-base text-gray-800">
                        <div className="w-5 h-5 rounded-full bg-[#fef0f5] flex items-center justify-center text-[#df0068] shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FLOORPLAN */}
            {activeTab === "floorplan" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight">
                  Floorplan
                </h2>

                {/* Large light grey rounded box with centered content */}
                <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center space-y-4">
                  {/* Pink floorplan icon inside a white circle */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#df0068]">
                    <Layers className="w-8 h-8 stroke-[2]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#191c2b] tracking-tight pt-1">
                    Floorplan unavailable
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
                    A floorplan is not currently available for this property.
                    <br />
                    Contact the agent for more information about the layout.
                  </p>

                  <div className="pt-2">
                    <a
                      href="mailto:staffordshire@localagent.co.uk?subject=Floorplan Enquiry - Avondale Circle"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-all shadow-sm cursor-pointer"
                    >
                      <Mail className="w-4 h-4 stroke-[2.2]" />
                      <span>Contact the agent</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: MORTGAGE */}
            {activeTab === "mortgage" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c2b] tracking-tight">
                  Mortgage
                </h2>

                {/* Light grey rounded card matching Figma */}
                <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6 sm:p-8 max-w-lg space-y-5">
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      Estimated monthly repayment
                    </span>
                    <p className="text-3xl sm:text-4xl font-extrabold text-[#191c2b] tracking-tight mt-1">
                      £1,252.01
                    </p>
                  </div>

                  {/* Thin dark divider line */}
                  <hr className="border-t border-gray-300" />

                  {/* Rows */}
                  <div className="space-y-3.5 text-sm sm:text-base">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-medium">Borrowing</span>
                      <span className="font-extrabold text-[#191c2b]">£225,250</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-medium">Deposit</span>
                      <span className="font-extrabold text-[#191c2b]">15%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-medium">Terms</span>
                      <span className="font-extrabold text-[#191c2b]">25 Years</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 font-medium">Interest rate</span>
                      <span className="font-extrabold text-[#191c2b]">4.5%</span>
                    </div>
                  </div>

                  {/* Centered pink pill button */}
                  <div className="pt-4 text-center">
                    <Link
                      to="/mortgages"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] transition-all shadow-sm w-full cursor-pointer"
                    >
                      <span>Explore mortgage advice</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: CONTACT CARD (light grey rounded card) */}
          <div className="lg:col-span-4">
            <div className="bg-[#f9fafb] border border-gray-100 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs sticky top-24">
              <div className="flex items-center gap-2 text-[#df0068]">
                <User className="w-5 h-5 stroke-[2.2]" />
                <span className="text-sm font-bold">Contact the agent</span>
              </div>

              <div>
                <p className="text-xl font-extrabold text-[#191c2b]">Steve Lythgoe</p>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">
                  Open House · Staffordshire
                </p>
              </div>

              <div className="pt-2 space-y-2 border-t border-gray-200/70">
                <a
                  href="tel:01785256100"
                  className="flex items-center gap-2 text-sm font-bold text-[#191c2b] hover:text-[#df0068] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#df0068]" />
                  <span>01785 256100</span>
                </a>
                <a
                  href="mailto:staffordshire@localagent.co.uk"
                  className="flex items-center gap-2 text-sm font-bold text-[#191c2b] hover:text-[#df0068] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#df0068]" />
                  <span>staffordshire@localagent.co.uk</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setViewingModalOpen(true)}
                  className="w-full h-11 rounded-full bg-[#df0068] text-white font-semibold text-sm hover:bg-[#c4005b] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Request a viewing</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR (sticky above footer) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 shadow-lg py-3 px-4 sm:px-8">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          {/* Left: title and location */}
          <div>
            <p className="text-sm sm:text-base font-extrabold text-[#191c2b] leading-tight">
              Avondale Circle
            </p>
            <p className="text-xs text-gray-500">Stafford, ST18</p>
          </div>

          {/* Middle: separated by a thin vertical line */}
          <div className="hidden sm:flex items-center pl-6 border-l border-gray-200">
            <div>
              <p className="text-base sm:text-lg font-extrabold text-[#191c2b] leading-tight">
                £300,000
              </p>
              <p className="text-xs text-gray-500 font-medium">3 bedrooms · Semi-detached</p>
            </div>
          </div>

          {/* Right: pink pill button Request a viewing with arrow */}
          <div>
            <button
              onClick={() => setViewingModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#df0068] text-white text-xs sm:text-sm font-semibold hover:bg-[#c4005b] transition-colors shadow-sm cursor-pointer"
            >
              <span>Request a viewing</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Request viewing modal */}
      <ValuationModal open={viewingModalOpen} onClose={() => setViewingModalOpen(false)} />
    </div>
  );
}
