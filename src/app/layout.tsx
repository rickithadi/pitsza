import localFont from 'next/font/local'
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';


import Head from 'next/head';
import Link from 'next/link';
import { siteConfig } from '@/constant/config';
import { Metadata } from 'next';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};
const myFont = localFont({
  src:

    '../../public/fonts/mid.otf',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className={myFont.className} >
      <Head >
        <title>Bake & Shake</title>
        <meta name="description" content="Bake & Shake Pizza Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className={myFont.className}>&copy; 2024 Bake & Shake. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="#" className="hover:underline">Terms of Service</Link>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>

  );
}
