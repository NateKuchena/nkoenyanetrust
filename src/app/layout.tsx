import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Nkoenyane Family Trust | Premium Agriculture, Free State",
  description:
    "A technology-driven, governance-led agricultural enterprise producing traceable maize, sunflower, livestock and vegetables from 200 hectares in Bethlehem, Free State.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "The Nkoenyane Family Trust",
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.nkoenyane.co.za/#org',
      name: 'The Nkoenyane Family Trust',
      url: 'https://www.nkoenyane.co.za',
      email: 'ntebo@hlapane.com',
      telephone: '+27824118481',
      description: 'A technology-driven, governance-led agricultural enterprise producing traceable maize, sunflower, livestock and vegetables from 200 hectares in Bethlehem, Free State.',
      foundingDate: '2000',
      legalName: 'The Nkoenyane Family Trust (IT 1254/00)',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.nkoenyane.co.za/#farm',
      name: 'BLK 25 Fourie Farm',
      parentOrganization: { '@id': 'https://www.nkoenyane.co.za/#org' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bethlehem',
        addressRegion: 'Free State',
        postalCode: '9701',
        addressCountry: 'ZA',
      },
      geo: { '@type': 'GeoCoordinates', latitude: -28.138, longitude: 28.141 },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
