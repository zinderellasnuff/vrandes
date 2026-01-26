import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n, Locale } from '@/lib/i18n/config';

function getLocale(request: NextRequest): Locale {
  // Check if there's a locale cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && i18n.locales.includes(localeCookie as Locale)) {
    return localeCookie as Locale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map((lang) => {
        const [locale, priority = 'q=1'] = lang.trim().split(';');
        return {
          locale: locale.split('-')[0].toLowerCase(),
          priority: parseFloat(priority.split('=')[1] || '1'),
        };
      })
      .sort((a, b) => b.priority - a.priority);

    for (const { locale } of preferredLocales) {
      if (i18n.locales.includes(locale as Locale)) {
        return locale as Locale;
      }
    }
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Skip middleware for static files, API routes, and special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/docs') ||
    pathname.startsWith('/icons') ||
    pathname.includes('.') // Files with extensions
  ) {
    return NextResponse.next();
  }

  if (pathnameHasLocale) {
    // Set locale cookie for future visits
    const locale = pathname.split('/')[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });
    return response;
  }

  // Redirect to locale-prefixed URL
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  // Preserve hash and search params
  newUrl.search = request.nextUrl.search;

  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
