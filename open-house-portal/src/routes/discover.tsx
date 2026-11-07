import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Client Stories & Testimonials | Open House Estate Agents" },
      {
        name: "description",
        content:
          "Read real client reviews and testimonials from home buyers, sellers, and landlords.",
      },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  return (
    <div className="bg-white min-h-screen py-12 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <span className="inline-block px-3 py-1 rounded-full bg-[#fef0f5] text-[#df0068] text-xs font-semibold mb-3">
        Client Stories
      </span>
      <h1 className="text-4xl font-extrabold text-[#191c2b]">Good moves. Great people.</h1>
      <p className="mt-3 text-base text-gray-600 max-w-xl">
        Personal service, remembered long after moving day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100">
          <p className="text-sm font-semibold text-[#191c2b]">
            “Our local agent was there to help us through a smooth sale”
          </p>
          <p className="text-xs text-gray-500 mt-4">Richard Mooreland · July 2020</p>
        </div>
        <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100">
          <p className="text-sm font-semibold text-[#191c2b]">
            “You have been very professional and efficient.”
          </p>
          <p className="text-xs text-gray-500 mt-4">N Persad · July 2020</p>
        </div>
        <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100">
          <p className="text-sm font-semibold text-[#191c2b]">
            “Great service. Julie was excellent”
          </p>
          <p className="text-xs text-gray-500 mt-4">Sandra Kellet · July 2020</p>
        </div>
      </div>
    </div>
  );
}
