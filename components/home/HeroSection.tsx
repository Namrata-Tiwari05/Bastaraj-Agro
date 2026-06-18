"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaStar, FaTree, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Framer Motion Animation Variants for Content Stagger Sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HeroSection = () => {
  // Real-time custom detailed conversion string configuration (100% Intact)
  const getWhatsAppLink = () => {
    const phoneNumber = "917999618106"; // Bastarraj Agro Primary Desk Contact
    
    const rawMessage = `🌿 *Bastarraj Agro - New Portal Inquiry*\n` +
                       `--------------------------------------\n` +
                       `*नमस्ते, मैं आपके औषधीय और कमर्शियल प्लांटेशन...*`;
                       
    const message = encodeURIComponent(rawMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // State to switch language between Hindi and English dynamically
  const [isHindi, setIsHindi] = useState(true);

  // Background slideshow config (Super crisp high-resolution 1080p slide images from Unsplash)
  const images = [
    '/hero-slide-tree.jpg',
    '/hero-slide-drone.png',
    '/hero-slide-2.jpg',
    '/hero-slide-3.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto transition slides and languages in sync every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsHindi((prev) => !prev);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen min-h-screen flex items-center justify-start overflow-hidden bg-[#0D1713]">
      
      {/* 1. Full-Screen Background Image Slideshow with Framer Motion AnimatePresence Crossfade & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 8.0, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={images[currentImageIndex]} 
              alt={`Bastarraj Agro Slide ${currentImageIndex + 1}`}
              fill
              quality={95} // Force highest visual quality output
              className="object-cover object-center" 
              priority
              unoptimized={false} 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Balanced Left-Sided Dark Gradient Overlay for Cinematic Text Readability & Image Vibrancy */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
      
      {/* 3. Subtle bottom vignette shadow overlay - Balanced for High Image Visibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>

      {/* 3.5. Cinematic Radial Green Glow behind the Tree area on the right */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_80%_50%,rgba(65,166,29,0.12),transparent_50%)]"></div>

      {/* 4. Main Content Container - Left-aligned overlay style shifted slightly left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pl-4 pr-6 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-16 flex flex-col justify-between h-full pt-32 pb-12">
        
        {/* Card wrapper container - centered vertically */}
        <div className="flex-grow flex flex-col justify-center items-start w-full">
          {/* Luxury Glassmorphic Overlay Card wrapping the Hero text content - max-width 600px to balance visibility and space */}
          <div className="backdrop-blur-xl bg-[#16261F]/85 border border-[#2C4538] shadow-[0_10px_40px_rgba(0,0,0,0.25)] rounded-3xl p-6 sm:p-10 w-full max-w-[600px] text-left select-none min-h-[360px] sm:min-h-[420px] flex flex-col justify-center hover:bg-[#1B2D25] transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentImageIndex}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full flex flex-col items-start"
              >
                
                {/* Floating Trust Badge */}
                <motion.div 
                  variants={badgeVariants}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#16261F]/90 border border-[#2C4538] mb-6 shadow-inner backdrop-blur-sm transition-all duration-300 hover:border-[#41A61D]/50 w-fit"
                >
                  <span className="flex text-yellow-400 text-sm"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                  <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase">
                    {isHindi ? '500+ किसानों द्वारा विश्वसनीय' : 'TRUSTED BY 500+ FARMERS'}
                  </span>
                </motion.div>

                {/* Headline with slide up animation - Sized appropriately to fit on exactly 2 lines on desktop */}
                {isHindi ? (
                  <motion.h1 
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                  >
                    खेती में नवाचारी,<br />
                    <span className="text-[#41A61D] drop-shadow-[0_0_20px_rgba(65,166,29,0.5)]">
                      किसान बनेगा व्यापारी
                    </span>
                  </motion.h1>
                ) : (
                  <motion.h1 
                    variants={headingVariants}
                    className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                  >
                    Innovative Forestry,<br />
                    <span className="text-[#41A61D] drop-shadow-[0_0_20px_rgba(65,166,29,0.5)]">
                      Farmers to Wealth Creators
                    </span>
                  </motion.h1>
                )}
                
                {/* Description with fade-in animation */}
                {isHindi ? (
                  <motion.p 
                    variants={descVariants}
                    className="text-base sm:text-lg text-[#C6D1CC] mb-10 leading-relaxed font-medium tracking-wide max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    अब खेती सिर्फ गुज़ारा नहीं, बल्कि बनेगी कमाई का प्राकृतिक जरिया। हमारे औषधीय और कमर्शियल प्लांटेशनध मॉडल से जुड़ें और अपनी आदमनी को नई ऊंचाईयों तक ले जाएं।
                  </motion.p>
                ) : (
                  <motion.p 
                    variants={descVariants}
                    className="text-base sm:text-lg text-[#C6D1CC] mb-10 leading-relaxed font-medium tracking-wide max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    Agriculture is no longer just livelihood—it is a natural source of high-yield wealth. Join our certified commercial and medicinal forestry models and scale your income.
                  </motion.p>
                )}
                
                {/* Call to Action Container with stagger effects */}
                <motion.div 
                  variants={buttonContainerVariants}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  
                  {/* Primary CTA with premium hover animations */}
                  <Link href="/calculator" className="w-full sm:w-auto">
                    <motion.button 
                      variants={buttonVariants}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: "0 10px 25px rgba(65, 166, 29, 0.6)",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#41A61D] hover:bg-[#348c15] text-white text-base sm:text-lg font-extrabold rounded-full shadow-[0_4px_20px_rgba(65,166,29,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                    >
                      <FiTrendingUp className="text-xl" />
                      <span>{isHindi ? 'प्रॉफिट कैलकुलेटर' : 'Profit Calculator'}</span>
                    </motion.button>
                  </Link>
                  
                  {/* Secondary CTA with premium hover animations */}
                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <motion.button 
                      variants={buttonVariants}
                      whileHover={{ 
                        y: -4, 
                        boxShadow: "0 10px 25px rgba(65, 166, 29, 0.15)",
                        scale: 1.02
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#12211C]/40 border border-[#2C4538] backdrop-blur-md hover:bg-white hover:text-black hover:border-white text-white text-base sm:text-lg font-bold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
                    >
                      <FaWhatsapp className="text-2xl text-[#41A61D] group-hover:text-[#25D366] transition-colors duration-300" />
                      <span>{isHindi ? 'WhatsApp पूछताछ' : 'WhatsApp Inquiry'}</span>
                    </motion.button>
                  </a>

                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 5. Bottom Hero Stats Overlay (Desktop Only - Rendered in-flow at bottom to prevent overlaps) */}
        <div className="w-full hidden md:grid grid-cols-3 gap-8 max-w-4xl border-t border-[#2C4538] pt-8 mt-8 pb-4">
          <div className="flex items-center gap-4 transition-all duration-300 hover:translate-y-[-2px]">
            <FaTree className="text-4xl text-[#41A61D] flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-white leading-none">500+ Acres</h4>
              <p className="text-[10px] text-[#8EA39A] font-extrabold mt-1.5 uppercase tracking-wider">
                {isHindi ? 'छत्तीसगढ़ में प्रबंधित भूमि' : 'MANAGED LAND IN CG'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 transition-all duration-300 hover:translate-y-[-2px]">
            <FaShieldAlt className="text-4xl text-[#41A61D] flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-white leading-none">100% Secure</h4>
              <p className="text-[10px] text-[#8EA39A] font-extrabold mt-1.5 uppercase tracking-wider">
                {isHindi ? 'रजिस्टर्ड बाय-बैक अनुबंध' : 'REGISTERED BUYBACK AGREEMENT'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 transition-all duration-300 hover:translate-y-[-2px]">
            <FaLeaf className="text-4xl text-[#41A61D] flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-white leading-none">Certified Stock</h4>
              <p className="text-[10px] text-[#8EA39A] font-extrabold mt-1.5 uppercase tracking-wider">
                {isHindi ? 'उच्च गुणवत्ता वाले पौधे' : 'HIGH QUALITY SAPLINGS'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;