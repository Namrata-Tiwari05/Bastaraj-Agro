import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: {
    default: 'Swarnim Agro Forestry | High-Yield Commercial & Medicinal Plantation',
    template: '%s | Swarnim Agro Forestry'
  },
  description: 'Empowering farmers & investors to transition to high-yield commercial timber (Mahogany, Malabar Neem) and medicinal plantations (Ashwagandha, Black Turmeric) in Chhattisgarh.',
  keywords: ['Swarnim Agro Forestry', 'Mahogany plantation Chhattisgarh', 'Medicinal farming India', 'Commercial timber forestry', 'Ashwagandha contract farming', 'Black Turmeric cultivation', 'Agricultural investment India'],
  authors: [{ name: 'Swarnim Agro Forestry Pvt. Ltd.' }],
  creator: 'Swarnim Agro Forestry Pvt. Ltd.',
  publisher: 'Swarnim Agro Forestry Pvt. Ltd.',
  metadataBase: new URL('https://swarnimagroforestry.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Swarnim Agro Forestry | Premium Commercial & Medicinal Plantation',
    description: 'Empowering farmers & investors with high-yield commercial and medicinal crop cultivation.',
    url: 'https://swarnimagroforestry.com',
    siteName: 'Swarnim Agro Forestry',
    images: [
      {
        url: '/logo-swarnim.webp',
        width: 800,
        height: 600,
        alt: 'Swarnim Agro Forestry Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-[#0D1713] text-white min-h-screen flex flex-col justify-between font-sans">
        
        {/* Global shared header navigation */}
        <Header />
        
        {/* Main application viewport wrapper */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        {/* Global shared footer architecture */}
        <Footer />
        
      </body>
    </html>
  );
}