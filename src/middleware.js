import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ru", "uk"],
  defaultLocale: "ru",
  localePrefix: "always",
  localeDetection: true,
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap|image/.*).*)",
  ],
};
