import posthog from "posthog-js";

// Only initialize PostHog on client-side and avoid crawlers
if (typeof window !== "undefined" && !isCrawler()) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug: process.env.NODE_ENV === "development",
    // Improve SEO by not tracking crawlers
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

// Helper function to detect crawlers
function isCrawler(): boolean {
  if (typeof navigator === "undefined") return false;

  const crawlers = [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "telegrambot",
  ];

  const userAgent = navigator.userAgent.toLowerCase();
  return crawlers.some((crawler) => userAgent.includes(crawler));
}
