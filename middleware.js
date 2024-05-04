import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["en", "bn"];
let defaultLocale = "en";

const getLocale = (request) => {
  let acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  // let headers = { 'accept-language': 'en-US,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
  ],
};
