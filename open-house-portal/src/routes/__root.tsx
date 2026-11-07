import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[68vh] px-4 py-16 sm:py-24 bg-white text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Huge bold pink "404" */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-[#df0068] tracking-tight">
          404
        </h1>

        {/* Large bold dark heading on two lines: "Looks like this page" / "has moved." */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191c2b] tracking-tight leading-tight">
          Looks like this page
          <br />
          has moved.
        </h2>

        {/* Grey text on two lines: "We can't find the page you're looking for." / "Let's get you back on the right path." */}
        <p className="text-base sm:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          We can't find the page you're looking for.
          <br />
          Let's get you back on the right path.
        </p>

        {/* Two buttons side by side: pink filled pill with arrow "Back to homepage", and white pill with a thin dark outline and pink text with arrow "Search properties" */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#df0068] text-white text-sm font-semibold hover:bg-[#c4005b] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Back to homepage</span>
            <span className="text-base leading-none">→</span>
          </Link>
          <Link
            to="/buy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#df0068] text-sm font-semibold border border-[#191c2b] hover:bg-pink-50/40 active:scale-[0.98] transition-all"
          >
            <span>Search properties</span>
            <span className="text-base leading-none">→</span>
          </Link>
        </div>

        {/* Below: grey text "Need a hand with your next move?" and a pink underlined link with arrow: "Find your local agent" */}
        <div className="pt-4 text-sm text-gray-500 space-y-1">
          <p>Need a hand with your next move?</p>
          <div>
            <Link
              to="/find-agent"
              className="text-[#df0068] font-semibold underline underline-offset-4 hover:text-[#c4005b] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Find your local agent</span>
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Open House | Local People. National Reach." },
      {
        name: "description",
        content:
          "Open House estate agents. Local property experts, national reach. Buy, rent, sell, landlords, auctions, land & new homes.",
      },
      { name: "author", content: "Open House Estate Agents" },
      { property: "og:title", content: "Open House | Estate Agents" },
      {
        property: "og:description",
        content: "Your next chapter starts with Open House. Local property experts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-white text-[#191c2b]">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </QueryClientProvider>
  );
}
