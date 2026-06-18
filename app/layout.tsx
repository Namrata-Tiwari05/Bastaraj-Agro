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
    default: 'Bastarraj Agro | High-Yield Commercial & Medicinal Plantation',
    template: '%s | Bastarraj Agro'
  },
  description: 'Empowering farmers & investors to transition to high-yield commercial timber (Mahogany, Malabar Neem) and medicinal plantations (Ashwagandha, Black Turmeric) in Chhattisgarh.',
  keywords: ['Bastarraj Agro', 'Mahogany plantation Chhattisgarh', 'Medicinal farming India', 'Commercial timber forestry', 'Ashwagandha contract farming', 'Black Turmeric cultivation', 'Agricultural investment India'],
  authors: [{ name: 'Bastarraj Agro Pvt. Ltd.' }],
  creator: 'Bastarraj Agro Pvt. Ltd.',
  publisher: 'Bastarraj Agro Pvt. Ltd.',
  metadataBase: new URL('https://bastarrajagro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bastarraj Agro | Premium Commercial & Medicinal Plantation',
    description: 'Empowering farmers & investors with high-yield commercial and medicinal crop cultivation.',
    url: 'https://bastarrajagro.com',
    siteName: 'Bastarraj Agro',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Bastarraj Agro Logo',
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