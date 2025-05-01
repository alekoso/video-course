import { Manrope, Raleway } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata(context) {
  const { params } = context;
  const locale = await params.locale;

  const metadataByLocale = {
    en: {
      title: "Secrets of Viral Video",
      description:
        "Course on creating content for TikTok, Instagram, and YouTube",
    },
    uk: {
      title: "Секрети Вірусного Відео",
      description:
        "Курс зі створення контенту для TikTok, Instagram та YouTube",
    },
    default: {
      title: "Секреты Вирусного Видео",
      description: "Курс по созданию контента для TikTok, Instagram и YouTube",
    },
  };

  return metadataByLocale[locale] || metadataByLocale.default;
}
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sansation = localFont({
  src: [
    {
      path: "../../../public/fonts/Sansation_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  const metadata = await generateMetadata({ params });

  return (
    <html
      lang={locale}
      className={`${raleway.className} ${sansation.className} ${manrope.className}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PCV4WQKM');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Секр. видео" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body className="bg-background text-textColorWhite">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCV4WQKM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
