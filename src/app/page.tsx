"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, Menu, X, Home as HomeIcon, Mountain, Waves, Check, ChevronLeft, ChevronRight, MapPin, Castle, Camera } from "lucide-react";

const heroBackgrounds = [
  { type: "video", src: "/real_assets/Velora-Valley-Villa-vd3.mp4" },
  { type: "image", src: "/real_assets/VV1.jpeg" },
  { type: "video", src: "/real_assets/Velora-Valley-Villa-vd1.mp4" },
  { type: "image", src: "/real_assets/VV6.jpeg" },
  { type: "image", src: "/real_assets/VV5.jpeg" }
];

const galleryItems = [
  {
    src: "/images/VV1.jpeg",
    category: "Family Bedroom",
    title: "Comfortable Stay",
    desc: "A clean, cozy family bedroom with natural light and an attached en-suite bathroom."
  },
  {
    src: "/images/VV2.jpeg",
    category: "Master Bedroom",
    title: "Rustic Stone Charm",
    desc: "Features a beautiful red laterite stone accent wall reflecting local architecture."
  },
  {
    src: "/images/VV3.jpeg",
    category: "Villa Interiors",
    title: "Connecting Hallways",
    desc: "Spacious corridors connecting the private bedrooms of the 3 BHK layout."
  },
  {
    src: "/images/VV4.jpeg",
    category: "Guest Room",
    title: "Welcoming Touches",
    desc: "Comfortable bedding with thoughtful hospitality touches like decorative towel art."
  },
  {
    src: "/images/VV5.jpeg",
    category: "Scenic Bedroom",
    title: "Valley View Room",
    desc: "Wake up to stunning morning views through large sliding glass doors."
  },
  {
    src: "/images/VV6.jpeg",
    category: "Lounge Area",
    title: "Spacious Living Room",
    desc: "A large communal space featuring wooden seating and an artificial grass carpet for family gatherings."
  },
  {
    src: "/images/VV7.jpeg",
    category: "Bathrooms",
    title: "Modern Washrooms",
    desc: "Clean, fully-equipped en-suite bathrooms featuring sleek black and white marble tiling."
  }
];

function AvenorLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="-2 -2 104 104" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Double Forest Green Circles */}
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="44.5" stroke="currentColor" strokeWidth="0.6" />
      
      {/* Curved Tagline at the Bottom */}
      <path id="taglinePath" d="M 16.8 73.2 A 40.5 40.5 0 0 0 83.2 73.2" fill="none" />
      <text fontFamily="var(--font-sans), sans-serif" fontWeight="600" fontSize="2.5" fill="currentColor" letterSpacing="0.15em">
        <textPath href="#taglinePath" startOffset="50%" textAnchor="middle">
          • WHERE EVERY STAY BECOMES A STORY •
        </textPath>
      </text>

      {/* Stylized Gold Monogram A */}
      <g transform="translate(0, -3)">
        {/* Left Thin Stem */}
        <path d="M43.5 22 L37.5 45.5" stroke="url(#metallicGold)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Right Thick Stem */}
        <path d="M50.5 18 C52.5 20.5 59.5 37 61.5 42 C62 43 60.5 43.5 59.5 41 C57.5 36.5 51 22 49.5 19.5 C49 18.5 50 17.5 50.5 18 Z" fill="url(#metallicGold)" />
        
        {/* Swooshing Curved Crossbar */}
        <path d="M37.5 37 C42.5 34.5 50.5 38.5 56.5 42.5 C60.5 45 63.5 45 65 44 C63.5 43.5 60.5 42.5 56 39.5 C50.5 35.5 42.5 32.5 37.5 35 C36.8 35.4 36.8 36.6 37.5 37 Z" fill="url(#metallicGold)" />
      </g>

      {/* Divider lines for HOSPITALITY */}
      <line x1="20" y1="64" x2="30" y2="64" stroke="currentColor" strokeWidth="0.8" />
      <line x1="70" y1="64" x2="80" y2="64" stroke="currentColor" strokeWidth="0.8" />

      {/* Text: AVENOR */}
      <g transform="translate(0, 1.5)">
        <text x="44" y="55" textAnchor="end" fontFamily="var(--font-sans), sans-serif" fontWeight="400" fontSize="9.5" fill="currentColor" letterSpacing="0.18em">AV</text>
        <text x="56" y="55" textAnchor="start" fontFamily="var(--font-sans), sans-serif" fontWeight="400" fontSize="9.5" fill="currentColor" letterSpacing="0.18em">NOR</text>
        {/* Three lines of 'E' (centered at E space) */}
        <line x1="47.5" y1="48" x2="52" y2="48" stroke="currentColor" strokeWidth="1.1" />
        <line x1="47.5" y1="51.5" x2="50.8" y2="51.5" stroke="currentColor" strokeWidth="1.1" />
        <line x1="47.5" y1="55" x2="52" y2="55" stroke="currentColor" strokeWidth="1.1" />
      </g>

      {/* Text: HOSPITALITY */}
      <text x="50" y="65.5" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontWeight="500" fontSize="4.2" fill="currentColor" letterSpacing="0.25em">
        HOSPITALITY
      </text>

      {/* Sparkle Star at bottom */}
      <path d="M50 71 Q50 73.5 47.5 73.5 Q50 73.5 50 76 Q50 73.5 52.5 73.5 Q50 73.5 50 71" fill="url(#metallicGold)" />

      <defs>
        <linearGradient id="metallicGold" x1="30" y1="15" x2="70" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F9F5E8" />
          <stop offset="25%" stopColor="#DFBA6B" />
          <stop offset="50%" stopColor="#C29C47" />
          <stop offset="75%" stopColor="#E8D091" />
          <stop offset="100%" stopColor="#8C6721" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const spaceData = [
  {
    id: "master",
    name: "Connecting Hallways",
    image: "/images/VV3.jpeg",
    title: "3 BHK Layout",
    desc: "A spacious and private hallway connects the multiple bedrooms, perfect for families traveling together.",
    amenities: ["Private bedroom access", "Rustic red stone walls", "Clean tile flooring", "Quiet corridors"]
  },
  {
    id: "pool",
    name: "Modern Bathrooms",
    image: "/images/VV7.jpeg",
    title: "Clean & Equipped Washrooms",
    desc: "Each bedroom features an attached en-suite bathroom with premium black and white marble tiling and modern fixtures.",
    amenities: ["En-suite access", "Hot & cold water", "Modern marble tiling", "Daily housekeeping"]
  },
  {
    id: "living",
    name: "Spacious Living Room",
    image: "/images/VV6.jpeg",
    title: "Family Gathering Space",
    desc: "A large, comfortable living area designed for your family to relax together, featuring a TV and rustic stone accents.",
    amenities: ["Wooden sofa seating", "Flat-screen TV", "Indoor grass carpet", "Rustic stone walls"]
  },
  {
    id: "bathroom",
    name: "Guest Bedrooms",
    image: "/images/VV4.jpeg",
    title: "Comfortable Sleep",
    desc: "Cozy guest bedrooms adorned with striking red laterite stone walls and thoughtful hospitality touches like decorative towel art.",
    amenities: ["Comfortable double bed", "Laterite stone accents", "En-suite bathroom", "Fresh linens & towels"]
  }
];

const reviews = [
  {
    quote: "The villa itself is stunning - super clean, beautifully decorated, and has everything you could possibly need. But what truly made our stay unforgettable was the owner. They went above and beyond to make us feel at home, from giving us the best local food recommendations to checking in to ensure we were comfortable.",
    author: "Sattar Isane",
    stay: "Verified Guest Review"
  },
  {
    quote: "Had a great stay here. Pleasant location with a beautiful view and clean rooms. A must visit mountain sanctuary.",
    author: "Monika Jadhav",
    stay: "Verified Local Guide"
  },
  {
    quote: "It was a wonderful experience here. Do visit this beautiful villa! We will definitely visit again. The staff and workers are really polite, friendly, and attentive.",
    author: "Sanchit Dhanawade",
    stay: "Verified Guest Review"
  },
  {
    quote: "Excellent service and a beautiful property. The views are magnificent and the rooms are super clean. Highly recommended for families.",
    author: "Maruti Jadhav",
    stay: "Verified Guest Review"
  }
];

const dayTimeline = [
  {
    time: "8:00 AM",
    label: "Morning Wake Up",
    title: "Sunrise from Bed",
    desc: "Draw the curtains on the sliding glass doors and wake up to the stunning valley mist right from your bedroom.",
    image: "/images/VV5.jpeg"
  },
  {
    time: "1:00 PM",
    label: "Refresh & Recharge",
    title: "Clean & Modern Amenities",
    desc: "Freshen up for the day in our clean, well-equipped en-suite bathrooms featuring modern fixtures and hot water.",
    image: "/images/VV7.jpeg"
  },
  {
    time: "5:30 PM",
    label: "Nighttime Comfort",
    title: "Rest & Recharge",
    desc: "After a long day exploring Mahabaleshwar, retreat to your cozy bedroom for a peaceful night's sleep.",
    image: "/images/VV1.jpeg"
  },
  {
    time: "8:00 PM",
    label: "Evening Bonding",
    title: "Family Time in the Lounge",
    desc: "Gather around in the spacious living area for movie night on the flat-screen TV, surrounded by cozy seating and rustic stone walls.",
    image: "/images/VV6.jpeg"
  }
];

const attractionsData = [
  {
    category: "Scenic Viewpoints",
    icon: MapPin,
    places: [
      { name: "Arthur's Seat", desc: "Known as the 'Queen of Points', offering dramatic, plunging views of the deep Savitri valley." },
      { name: "Kate's Point & Echo Point", desc: "Famous for breathtaking views of the Krishna Valley and Dhom Dam. Hear your voice echo across the valley." },
      { name: "Lodwick Point", desc: "Offers a stunning view of the Western Ghats and is known for its peaceful, forested trail." },
      { name: "Elephant's Head Point", desc: "A popular spot to watch the sunset with unique rock formations." },
      { name: "Sydney & Parsi Point", desc: "Excellent viewpoints overlooking the Krishna River valley and Dhom Dam in Panchgani." }
    ]
  },
  {
    category: "Nature & Water",
    icon: Waves,
    places: [
      { name: "Venna Lake", desc: "A must-visit destination in Mahabaleshwar, perfect for boating and relaxing with family and friends." },
      { name: "Lingmala Waterfall", desc: "A spectacular waterfall, especially beautiful and robust during the monsoon season." },
      { name: "Tapola", desc: "Known as the 'Mini Kashmir of Maharashtra', famous for Shivsagar Lake and water sports like kayaking." }
    ]
  },
  {
    category: "Historical Landmarks",
    icon: Castle,
    places: [
      { name: "Pratapgad Fort", desc: "A historically significant fort where Shivaji Maharaj met Afzal Khan. Offers both history and great valley views." },
      { name: "Mahabaleshwar Temple", desc: "An ancient, highly significant temple dedicated to Lord Shiva." }
    ]
  },
  {
    category: "Family & Fun",
    icon: Camera,
    places: [
      { name: "Mapro Garden", desc: "A popular stop for food lovers, famous for its strawberry-based products, chocolates, and garden setting." },
      { name: "Table Land", desc: "One of the largest volcanic plateaus in Asia, great for horse riding and sweeping sunset views." }
    ]
  }
];

export default function Home() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHeroBg, setCurrentHeroBg] = useState(0);

  // Auto-advance hero background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Booking details & Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("4");
  const [minCheckout, setMinCheckout] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Interactive UI states
  const [activeSpace, setActiveSpace] = useState("master");
  const [activeTimeIndex, setActiveTimeIndex] = useState(0);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Dynamic pricing calculation states
  const [nights, setNights] = useState(1);
  const [pricing, setPricing] = useState({
    baseRate: 45000,
    subtotal: 45000,
    gst: 8100,
    serviceFee: 5000,
    total: 58100
  });

  const heroRef = useRef<HTMLDivElement>(null);

  // Auto-play reviews slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Recalculate estimated pricing dynamically based on checkout / checkin dates
  useEffect(() => {
    if (!checkin || !checkout) {
      setNights(1);
      return;
    }
    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    if (timeDiff <= 0) {
      setNights(1);
      return;
    }
    const computedNights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
    setNights(computedNights);

    const baseRate = 45000;
    const subtotal = computedNights * baseRate;
    const serviceFee = 5000;
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + serviceFee + gst;

    setPricing({
      baseRate,
      subtotal,
      gst,
      serviceFee,
      total
    });
  }, [checkin, checkout]);

  // Pre-populate and validate dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date: Date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const todayStr = formatDate(today);
    const tomorrowStr = formatDate(tomorrow);

    setCheckin(todayStr);
    setCheckout(tomorrowStr);
    setMinCheckout(tomorrowStr);
  }, []);

  // Update check-out bounds when check-in shifts
  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCheckin(val);

    const checkinDate = new Date(val);
    const nextDay = new Date(checkinDate);
    nextDay.setDate(checkinDate.getDate() + 1);

    const nextDayStr = nextDay.toISOString().split("T")[0];
    setMinCheckout(nextDayStr);

    if (new Date(checkout) <= checkinDate) {
      setCheckout(nextDayStr);
    }
  };

  // Listen to window scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 700;

      // Header state
      setIsScrolled(scrollPos > 60);

      // Sticky booking bar state
      setShowStickyBar(scrollPos > heroHeight - 150);

      // Active section update
      const sections = ["hero", "about", "highlights", "gallery"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkout]);

  // Listen to keyboard for Lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
        document.body.style.overflow = "";
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === null ? null : (prev === 0 ? galleryItems.length - 1 : prev - 1)));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === null ? null : (prev === galleryItems.length - 1 ? 0 : prev + 1)));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Form submission handler
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Lock scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Restore scroll
  };

  // Helper to format date display ("Jul 10, 2026")
  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Scroll reveal animation utility parameters
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 w-full h-[100px] flex items-center z-[1000] border-b transition-all duration-500 ease-in-out md:h-[85px] ${
          isScrolled
            ? "bg-bg-primary/95 border-gold/10 shadow-sm backdrop-blur-md"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-12 flex justify-between items-center md:px-8">
          {/* Logo brand */}
          <a href="#hero" className="flex items-center group" aria-label="Avenor Hospitality Home">
            <AvenorLogo
              className={`w-14 h-14 transition-all duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-105 ${
                isScrolled ? "text-text-primary" : "text-white"
              }`}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "The Villa" },
              { id: "highlights", label: "Highlights" },
              { id: "gallery", label: "Gallery" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium tracking-wide relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === link.id
                    ? isScrolled
                      ? "text-text-primary after:w-full font-semibold"
                      : "text-white after:w-full font-medium"
                    : isScrolled
                    ? "text-text-secondary hover:text-text-primary after:w-0"
                    : "text-white/80 hover:text-white after:w-0"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Links */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsAvailabilityModalOpen(true)}
              className={`flex items-center justify-center gap-2 transition-colors duration-300 border px-4 py-2 rounded-sm shadow-sm hover:shadow-md ${
                isScrolled
                  ? "text-text-primary border-gold/30 hover:border-gold hover:bg-gold/5"
                  : "text-white border-white/30 hover:border-white hover:bg-white/10"
              } text-[10px] font-bold tracking-[0.1em] uppercase`}
              aria-label="Check Availability"
            >
              Availability
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden flex-col justify-between w-6 h-4 z-[1001]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-text-primary" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-text-primary" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-bg-primary shadow-2xl z-[999] flex flex-col justify-center items-center gap-8"
          >
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "The Villa" },
              { id: "highlights", label: "Highlights" },
              { id: "gallery", label: "Gallery" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium text-text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 ${
                  activeSection === link.id ? "font-semibold after:w-full" : "after:w-0"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white px-5 overflow-hidden md:h-auto md:min-h-screen md:pt-32 md:pb-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-bg-primary z-[1]" />
        
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHeroBg ? "opacity-100" : "opacity-0"
            }`}
          >
            {bg.type === "video" ? (
              <video
                src={bg.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={bg.src}
                alt={`Velora Valley Villa view ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        <div className="relative z-10 max-w-[900px] mb-12 md:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="font-serif italic text-[17px] tracking-[0.1em] text-gold-light drop-shadow-md block mb-5"
          >
            Velora Valley Villa
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="font-serif text-[42px] leading-tight font-light sm:text-[38px] md:text-[54px] lg:text-[68px] mb-6 drop-shadow-lg"
          >
            Your Perfect Family Stay Amidst the Mountains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white/90 max-w-[650px] mx-auto leading-relaxed drop-shadow text-base sm:text-sm md:text-lg"
          >
            A sanctuary of architectural excellence, absolute privacy, and stunning panoramic views of the Western Ghats.
          </motion.p>
        </div>

        {/* Floating Search Bar Replaced with elegant Check Availability CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="relative z-10"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-3 bg-forest hover:bg-forest-hover border border-gold/30 text-white text-sm font-semibold tracking-widest uppercase py-4.5 px-9 rounded-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-gold-light" />
          </button>
        </motion.div>
      </section>

      {/* About/Narrative Section */}
      <section id="about" className="bg-bg-secondary py-28 md:py-20 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6 flex flex-col md:flex-row items-center gap-20 md:gap-12">
          {/* Image Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg z-10">
              <Image
                src="/images/VV1.jpeg"
                alt="Velora Valley Villa architectural exterior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-5 -left-5 right-5 bottom-[-20px] border border-gold rounded-md z-0 pointer-events-none" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex-[1.1] flex flex-col items-start w-full"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              THE ESTATE
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary text-left mb-6">
              Where Serenity Meets Architecture
            </h2>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-5">
              Velora Valley Villa is a carefully curated architectural masterwork operating under the premium standards of <strong>Avenor Hospitality</strong>. Poised gracefully on the ridge of Velora Valley, it blends clean, minimalist lines with the raw, untamed beauty of the surrounding mountains.
            </p>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              Designed to foster connection and peace, our 3 BHK sanctuary offers expansive glass walls that blur the line between nature and home. Here, you are invited to disconnect from the noise of the world and immerse your family in a peaceful mountain rhythm.
            </p>

            <div className="flex flex-col gap-3 w-full">
              {[
                "Private heated infinity edge framing",
                "Personal butler and gourmet chef service",
                "Bespoke regional guided itineraries",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3.5 text-sm font-medium text-text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,1)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="bg-bg-primary pt-36 pb-20 md:pt-28">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              UNPARALLELED AMENITIES
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary">
              Designed for Extraordinary Living
            </h2>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7">
            {/* Highlight 1: 3 BHK Villa */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-bg-secondary border border-gold/15 rounded-md p-8 md:p-14 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-gold-light hover:-translate-y-2 transition-all duration-500 ease-out group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gold-light/20 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold transition-all duration-500">
                <HomeIcon className="w-8 h-8 text-gold-dark group-hover:scale-105 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-normal text-text-primary mb-4">3 BHK Villa</h3>
              <p className="text-text-secondary text-sm leading-relaxed tracking-wide">
                Spacious architectural layout tailored for family comfort, featuring private en-suite bedrooms and open lounging quarters.
              </p>
            </motion.div>

            {/* Highlight 2: Elephant Head Point View */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-bg-secondary border border-gold/15 rounded-md p-8 md:p-14 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-gold-light hover:-translate-y-2 transition-all duration-500 ease-out group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gold-light/20 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold transition-all duration-500">
                <Mountain className="w-8 h-8 text-gold-dark group-hover:scale-105 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-normal text-text-primary mb-4">Elephant Head Point View</h3>
              <p className="text-text-secondary text-sm leading-relaxed tracking-wide">
                Wake up to iconic cliffside silhouettes and dramatic gorges directly framing the villa&apos;s private sunrise deck.
              </p>
            </motion.div>

            {/* Highlight 3: Dhom Dam View */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-bg-secondary border border-gold/15 rounded-md p-8 md:p-14 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-gold-light hover:-translate-y-2 transition-all duration-500 ease-out group"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gold-light/20 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold transition-all duration-500">
                <Waves className="w-8 h-8 text-gold-dark group-hover:scale-105 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-normal text-text-primary mb-4">Dhom Dam View</h3>
              <p className="text-text-secondary text-sm leading-relaxed tracking-wide">
                Overlook the sparkling azure waters of Dhom Dam, reflecting the changing pastel colors of the evening sky.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-bg-primary py-28 md:py-20">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              VISUAL GALLERY
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary">
              A Glimpse of the Sanctuary
            </h2>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                onClick={() => {
                  setLightboxIndex(index);
                  document.body.style.overflow = "hidden";
                }}
                className={`rounded-md overflow-hidden relative shadow-sm group cursor-pointer ${
                  index === 0 ? "col-span-1 md:col-span-3" : "col-span-1"
                }`}
              >
                <div className={`relative w-full overflow-hidden ${
                  index === 0 ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10] md:aspect-[4/5]"
                }`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent/10 flex flex-col justify-end p-8">
                    <span className="text-[9px] font-bold tracking-widest text-gold-light uppercase mb-2">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-2xl font-light text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-white/75 text-xs opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Space Explorer Section */}
      <section id="explore-spaces" className="bg-bg-primary py-24 border-b border-gold/10">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center mb-12"
          >
            <span className="font-serif italic text-base tracking-[0.1em] text-gold-dark block mb-3 font-light">
              Sanctuary Spaces
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary">
              Explore the Villa Interiors
            </h2>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-5" />
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-gold/15 mb-14 pb-px">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-6 px-4">
              {spaceData.map((space) => (
                <button
                  key={space.id}
                  onClick={() => setActiveSpace(space.id)}
                  className={`relative py-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    activeSpace === space.id ? "text-gold-dark" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {space.name}
                  {activeSpace === space.id && (
                    <motion.div
                      layoutId="activeSpaceTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Space Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {spaceData.map((space) => {
              if (space.id !== activeSpace) return null;
              return (
                <React.Fragment key={space.id}>
                  {/* Left Column: Image with zoom transition */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55 }}
                    className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      priority
                    />
                  </motion.div>

                  {/* Right Column: Specifications and Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase mb-3">
                      {space.name}
                    </span>
                    <h3 className="font-serif text-[34px] font-light text-text-primary mb-5">
                      {space.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-8">
                      {space.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 w-full">
                      {space.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-semibold text-text-primary">
                          <div className="w-4.5 h-4.5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-gold-dark" strokeWidth={3} />
                          </div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curated Day Timeline Section */}
      <section id="experiences" className="bg-bg-secondary py-28 border-b border-gold/15 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center mb-14"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              A CURATED DAY
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary">
              A Day at Velora Valley
            </h2>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-5" />
          </motion.div>

          {/* Timeline steps */}
          <div className="flex mb-16 w-full overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            <div className="flex flex-row items-start justify-between min-w-full w-max md:w-full max-w-[800px] mx-auto relative px-6 md:px-0 gap-6 md:gap-0 z-10">
              {/* Horizontal connecting line for both mobile and desktop */}
              <div className="absolute top-[22px] left-[72px] right-[72px] md:left-[48px] md:right-[48px] h-[1px] bg-gold/30 z-[-1]" />
              
              {dayTimeline.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimeIndex(index)}
                  className="flex flex-col items-center group focus:outline-none w-24 relative snap-center shrink-0"
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border text-xs font-semibold tracking-wider transition-all duration-500 shadow-md flex-shrink-0 ${
                      activeTimeIndex === index
                        ? "bg-forest border-gold text-white scale-110"
                        : "bg-white border-gold/20 text-text-secondary hover:border-gold hover:text-text-primary group-hover:scale-105"
                    }`}
                  >
                    {item.time.split(" ")[0]}
                  </div>
                  <span
                    className={`text-[9px] text-center font-bold tracking-widest uppercase mt-4 transition-colors duration-300 ${
                      activeTimeIndex === index ? "text-gold-dark" : "text-text-secondary group-hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active timeline slide */}
          <div className="max-w-[1000px] mx-auto bg-bg-secondary border border-gold/20 rounded-md p-10 md:p-6 shadow-sm">
            <AnimatePresence mode="wait">
              {dayTimeline.map((item, index) => {
                if (index !== activeTimeIndex) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center"
                  >
                    {/* Slide Text */}
                    <div className="flex flex-col items-start text-left">
                      <span className="text-[10px] font-bold text-gold tracking-widest uppercase mb-2">
                        {item.time} — {item.label}
                      </span>
                      <h3 className="font-serif text-[32px] font-light text-text-primary mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Slide Image */}
                    <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials / Guest Reviews Section */}
      <section id="reviews" className="bg-bg-secondary py-28 border-b border-gold/15 overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-10 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center mb-12"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              GUEST JOURNALS
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary">
              Tales of the Valley
            </h2>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mt-5" />
          </motion.div>

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {reviews.map((review, index) => {
                if (index !== activeReviewIndex) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col items-center max-w-[800px]"
                  >
                    <p className="font-serif text-2xl md:text-xl font-light text-text-primary leading-relaxed italic mb-8">
                      "{review.quote}"
                    </p>
                    <span className="text-xs font-bold tracking-widest text-gold-dark uppercase block mb-1">
                      {review.author}
                    </span>
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider block">
                      {review.stay}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Testimonial Nav Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReviewIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeReviewIndex === index ? "bg-gold w-6" : "bg-gold/30 hover:bg-gold/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore the Environs Section */}
      <section className="bg-bg-primary py-28 border-b border-gold/15">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-dark uppercase mb-3">
              EXPLORE THE ENVIRONS
            </span>
            <h2 className="font-serif text-[42px] leading-tight font-normal text-text-primary mb-6">
              Discover Mahabaleshwar & Panchgani
            </h2>
            <p className="text-text-secondary max-w-[700px] text-sm leading-relaxed mb-6">
              Velora Valley is located in the beautiful area of Avakali, surrounded by scenic viewpoints, historical landmarks, and lush nature. Whether you are looking for adventure, history, or simply a quiet place to relax away from the bustling city, you are perfectly positioned for memorable day trips.
            </p>
            <div className="w-[60px] h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          <div className="overflow-hidden w-full relative pt-4 pb-8 mask-image-fade">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[
                { name: "Arthur's Seat", desc: "The 'Queen of Points' offering dramatic, plunging views of the deep Savitri valley.", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80" },
                { name: "Venna Lake", desc: "A serene lake perfect for evening boating surrounded by lush green mountains.", image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&q=80" },
                { name: "Lingmala Waterfall", desc: "A spectacular cascading waterfall nestled deep within a lush forest trail.", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" },
                { name: "Table Land", desc: "Asia's second-longest mountain plateau featuring vast open spaces and panoramic sunsets.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" },
                // Duplicated for infinite scroll illusion
                { name: "Arthur's Seat", desc: "The 'Queen of Points' offering dramatic, plunging views of the deep Savitri valley.", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80" },
                { name: "Venna Lake", desc: "A serene lake perfect for evening boating surrounded by lush green mountains.", image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&q=80" },
                { name: "Lingmala Waterfall", desc: "A spectacular cascading waterfall nestled deep within a lush forest trail.", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80" },
                { name: "Table Land", desc: "Asia's second-longest mountain plateau featuring vast open spaces and panoramic sunsets.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" }
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="w-[85vw] sm:w-[300px] md:w-[360px] aspect-[4/5] relative rounded-md overflow-hidden group shadow-md flex-shrink-0"
                >
                  <img src={loc.image} alt={loc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <h3 className="font-serif text-2xl text-white mb-2">{loc.name}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 rounded-sm overflow-hidden border border-gold/15 shadow-sm"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121477.36861801073!2d73.6735216328147!3d17.924327268178267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26521c40f5049%3A0x20db8525b801375b!2sVelora%20Vally!5e0!3m2!1sen!2sin!4v1783693087487!5m2!1sen!2sin" 
              className="w-full h-[450px] md:h-[350px] grayscale-[20%] contrast-125" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Sticky Booking Footer */}
      <div
        className={`fixed left-0 w-full bg-bg-primary/95 border-t border-gold/25 py-3 shadow-[0_-10px_30px_rgba(28,27,26,0.08)] z-[990] transition-all duration-500 ease-in-out backdrop-blur-md ${
          showStickyBar ? "bottom-0" : "bottom-[-100px]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-10 md:px-4 flex items-center justify-between gap-6">
          {/* Desktop Left Branding */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 shrink-0 overflow-hidden rounded-full flex items-center justify-center bg-gold/5 border border-gold/20">
              <AvenorLogo className="w-[50px] h-[50px] text-gold" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-[16px] leading-tight font-medium text-text-primary whitespace-nowrap">Velora Valley</span>
              <span className="text-[9px] text-text-secondary tracking-[0.15em] uppercase">3 BHK VILLA</span>
            </div>
          </div>

          {/* Desktop/Tablet Horizontal Booking Form */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 items-center justify-end gap-6">
            <div className="flex flex-col items-start min-w-[130px]">
              <label htmlFor="checkin-date-sticky" className="text-[8px] font-bold text-text-secondary tracking-widest mb-0.5">
                CHECK IN
              </label>
              <input
                type="date"
                id="checkin-date-sticky"
                required
                value={checkin}
                onChange={handleCheckinChange}
                className="w-full text-xs font-semibold text-text-primary bg-transparent outline-none cursor-pointer border-b border-transparent focus:border-gold"
              />
            </div>
            
            <div className="w-[1px] h-6 bg-gold/20" />
            
            <div className="flex flex-col items-start min-w-[130px]">
              <label htmlFor="checkout-date-sticky" className="text-[8px] font-bold text-text-secondary tracking-widest mb-0.5">
                CHECK OUT
              </label>
              <input
                type="date"
                id="checkout-date-sticky"
                required
                value={checkout}
                min={minCheckout}
                onChange={(e) => setCheckout(e.target.value)}
                className="w-full text-xs font-semibold text-text-primary bg-transparent outline-none cursor-pointer border-b border-transparent focus:border-gold"
              />
            </div>

            <div className="w-[1px] h-6 bg-gold/20" />

            <div className="flex flex-col items-start min-w-[100px]">
              <label htmlFor="guest-count-sticky" className="text-[8px] font-bold text-text-secondary tracking-widest mb-0.5">
                GUESTS
              </label>
              <select
                id="guest-count-sticky"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-xs font-semibold text-text-primary bg-transparent outline-none cursor-pointer border-b border-transparent focus:border-gold"
              >
                <option value="1" className="bg-bg-primary">1 Guest</option>
                <option value="2" className="bg-bg-primary">2 Guests</option>
                <option value="3" className="bg-bg-primary">3 Guests</option>
                <option value="4" className="bg-bg-primary">4 Guests</option>
                <option value="5" className="bg-bg-primary">5 Guests</option>
                <option value="6" className="bg-bg-primary">6+ Guests (Family)</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-forest hover:bg-forest-hover text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 px-6 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </form>

          {/* Mobile Booking Bar Fallback */}
          <div className="flex md:hidden items-center justify-between w-full gap-3">
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm font-medium text-text-primary">Velora Valley</span>
              <a href="tel:+919892773225" className="text-xs font-semibold text-gold-dark">+91 98927 73225</a>
            </div>
            <div className="flex items-center gap-2 flex-1 justify-end">
              <a
                href={`https://wa.me/919892773225?text=${encodeURIComponent(
                  checkin && checkout
                    ? `Hi Velora Valley Villa! I am interested in booking the 3 BHK villa from ${formatDisplayDate(checkin)} to ${formatDisplayDate(checkout)} for ${guests === "6" ? "6+" : guests} guests.`
                    : "I am interested in booking Velora Valley Villa"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-[11px] font-semibold py-2.5 px-3.5 rounded-sm shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.885-6.978C16.586 1.946 14.11 .92 11.48.919c-5.442 0-9.866 4.42-9.87 9.86-.001 1.702.46 3.366 1.332 4.836l-.99 3.613 3.695-.97zM17.52 14.48c-.324-.162-1.92-.949-2.217-1.057-.297-.108-.513-.162-.73.162-.216.324-.838 1.057-1.027 1.273-.189.216-.378.243-.702.08-1.58-.79-2.673-1.398-3.738-3.228-.28-.481.28-.446.802-1.488.087-.162.043-.324-.022-.486-.065-.162-.513-1.243-.702-1.702-.184-.443-.37-.383-.513-.39-.13-.006-.28-.007-.43-.007-.15 0-.395.056-.602.28-.207.225-.79.771-.79 1.882 0 1.111.808 2.184.92 2.337.112.152 1.59 2.428 3.85 3.4.538.231 1.06.39 1.424.506.54.172 1.03.148 1.418.09.432-.064 1.92-.786 2.19-1.505.27-.718.27-1.333.189-1.46-.082-.127-.298-.19-.622-.352z" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-forest hover:bg-forest-hover text-white text-[11px] font-semibold py-2.5 px-4 rounded-sm shadow-md flex-1 text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <footer className="bg-bg-secondary text-white/70 pt-16 md:pt-24 pb-28 md:pb-32 border-t border-gold/15">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 md:mb-6">
              <AvenorLogo className="w-20 h-20 text-white/90" />
            </div>
            <p className="text-sm leading-relaxed max-w-[320px]">
              Providing bespoke, luxury hospitality in curated destinations of stunning natural beauty.
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h4 className="font-serif text-lg font-normal text-white tracking-wide mb-4 md:mb-6">
              Navigation
            </h4>
            <div className="flex flex-row flex-wrap md:flex-col gap-5 md:gap-3 justify-center md:justify-start items-center md:items-start text-sm">
              <a href="#hero" className="hover:text-gold-light hover:-translate-y-0.5 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300">Home</a>
              <a href="#about" className="hover:text-gold-light hover:-translate-y-0.5 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300">The Villa</a>
              <a href="#highlights" className="hover:text-gold-light hover:-translate-y-0.5 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300">Highlights</a>
              <a href="#experiences" className="hover:text-gold-light hover:-translate-y-0.5 md:hover:translate-y-0 md:hover:translate-x-1 transition-all duration-300">Experiences</a>
            </div>
          </div>

          {/* Connect Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-sm">
            <h4 className="font-serif text-lg font-normal text-white tracking-wide mb-4 md:mb-6">
              Connect
            </h4>
            <p className="leading-relaxed mb-4">
              Elephant Head Point Road,<br />Mahabaleshwar, Maharashtra
            </p>
            <p className="mb-6">
              Inquiries: <a href="tel:+919892773225" className="text-gold-light hover:text-white transition-colors">+91 98927 73225</a>
            </p>
            <div className="flex items-center gap-5 text-[11px] font-bold tracking-[0.2em] uppercase mt-2">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/5 flex flex-col gap-4 items-center justify-between md:flex-row text-[12px] text-white/40">
          <p>&copy; 2026 Avenor Hospitality. All rights reserved.</p>
          <p className="font-semibold tracking-[0.1em] uppercase text-gold/50">
            DESIGNED FOR LUXURY
          </p>
        </div>
      </footer>

      {/* Availability Selection Modal */}
      <AnimatePresence>
        {isAvailabilityModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-md flex justify-center items-center z-[2000] px-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="bg-bg-primary border border-gold rounded-md w-full max-w-[480px] p-8 md:p-10 relative shadow-2xl"
            >
              <button
                onClick={() => setIsAvailabilityModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 text-text-secondary hover:text-text-primary hover:rotate-90 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-8">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold-dark uppercase mb-2 block">
                  Select Dates
                </span>
                <h3 className="font-serif text-3xl font-normal text-text-primary mb-2">
                  Check Availability
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAvailabilityModalOpen(false);
                  setIsModalOpen(true);
                }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-checkin" className="text-[10px] font-bold text-text-secondary tracking-widest uppercase">
                    Check In
                  </label>
                  <input
                    type="date"
                    id="modal-checkin"
                    required
                    value={checkin}
                    onChange={handleCheckinChange}
                    className="w-full text-sm font-medium text-text-primary bg-bg-secondary border border-gold/20 p-3 rounded-sm outline-none focus:border-gold transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-checkout" className="text-[10px] font-bold text-text-secondary tracking-widest uppercase">
                    Check Out
                  </label>
                  <input
                    type="date"
                    id="modal-checkout"
                    required
                    value={checkout}
                    min={minCheckout}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full text-sm font-medium text-text-primary bg-bg-secondary border border-gold/20 p-3 rounded-sm outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-guests" className="text-[10px] font-bold text-text-secondary tracking-widest uppercase">
                    Guests
                  </label>
                  <select
                    id="modal-guests"
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full text-sm font-medium text-text-primary bg-bg-secondary border border-gold/20 p-3 rounded-sm outline-none focus:border-gold transition-colors"
                  >
                    <option value="1" className="bg-bg-primary">1 Guest</option>
                    <option value="2" className="bg-bg-primary">2 Guests</option>
                    <option value="3" className="bg-bg-primary">3 Guests</option>
                    <option value="4" className="bg-bg-primary">4 Guests</option>
                    <option value="5" className="bg-bg-primary">5 Guests</option>
                    <option value="6" className="bg-bg-primary">6+ Guests (Family)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-forest hover:bg-forest-hover text-white text-xs font-semibold tracking-widest uppercase py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Confirm Dates
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Confirmation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-md flex justify-center items-center z-[2000] px-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="bg-bg-primary border border-gold rounded-md w-full max-w-[520px] p-11 md:p-8 relative shadow-2xl text-center"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 text-text-secondary hover:text-text-primary hover:rotate-90 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex justify-center mb-5">
                <AvenorLogo className="w-20 h-20 text-text-primary" />
              </div>

              <h3 className="font-serif text-3.5xl font-normal text-text-primary mb-4 leading-tight">
                Booking Inquiry Received
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Thank you for choosing <strong>Velora Valley Villa</strong>.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                A dedicated guest relationship executive from <strong>Avenor Hospitality</strong> will connect with you at your preferred contact details within 15 minutes to coordinate availability and finalize your bespoke booking itinerary.
              </p>

              {/* Reservation summary */}
              <div className="bg-bg-secondary border border-gold/15 rounded-sm p-5 my-7 flex flex-col gap-2.5 text-left text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">VILLA</span>
                  <span className="font-medium text-text-primary">Velora Valley Villa (3 BHK)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">CHECK-IN</span>
                  <span className="font-medium text-text-primary">{formatDisplayDate(checkin)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">CHECK-OUT</span>
                  <span className="font-medium text-text-primary">{formatDisplayDate(checkout)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">DURATION</span>
                  <span className="font-medium text-text-primary">{nights} night{nights > 1 ? "s" : ""}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">GUESTS</span>
                  <span className="font-medium text-text-primary">{guests === "6" ? "6+ Guests (Family)" : `${guests} Guests`}</span>
                </div>

              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/919892773225?text=${encodeURIComponent(
                    `Hi Velora Valley Villa! I am interested in booking the 3 BHK villa from ${formatDisplayDate(checkin)} to ${formatDisplayDate(checkout)} for ${guests === "6" ? "6+" : guests} guests.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1BD741] text-white text-sm font-semibold tracking-wide py-3.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.885-6.978C16.586 1.946 14.11 .92 11.48.919c-5.442 0-9.866 4.42-9.87 9.86-.001 1.702.46 3.366 1.332 4.836l-.99 3.613 3.695-.97zM17.52 14.48c-.324-.162-1.92-.949-2.217-1.057-.297-.108-.513-.162-.73.162-.216.324-.838 1.057-1.027 1.273-.189.216-.378.243-.702.08-1.58-.79-2.673-1.398-3.738-3.228-.28-.481.28-.446.802-1.488.087-.162.043-.324-.022-.486-.065-.162-.513-1.243-.702-1.702-.184-.443-.37-.383-.513-.39-.13-.006-.28-.007-.43-.007-.15 0-.395.056-.602.28-.207.225-.79.771-.79 1.882 0 1.111.808 2.184.92 2.337.112.152 1.59 2.428 3.85 3.4.538.231 1.06.39 1.424.506.54.172 1.03.148 1.418.09.432-.064 1.92-.786 2.19-1.505.27-.718.27-1.333.189-1.46-.082-.127-.298-.19-.622-.352z" />
                  </svg>
                  <span>Inquire via WhatsApp</span>
                </a>
                <a
                  href="tel:+919892773225"
                  className="flex items-center justify-center gap-2 border border-forest/20 hover:border-forest text-text-primary hover:bg-forest/5 text-sm font-semibold tracking-wide py-3 rounded-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>Call to Book</span>
                </a>
                <button
                  onClick={closeModal}
                  className="text-text-secondary hover:text-text-primary text-xs font-medium py-1"
                >
                  Back to Site
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center z-[3000] px-10 py-16"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setLightboxIndex(null);
                document.body.style.overflow = "";
              }}
              className="absolute top-8 right-8 w-11 h-11 md:top-4 md:right-4 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 hover:rotate-90 z-[3010]"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 md:w-4 md:h-4" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev === null ? null : (prev === 0 ? galleryItems.length - 1 : prev - 1)))}
              className="absolute left-8 w-12 h-12 md:left-2 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 z-[3010]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-4.5 md:h-4.5" />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev === null ? null : (prev === galleryItems.length - 1 ? 0 : prev + 1)))}
              className="absolute right-8 w-12 h-12 md:right-2 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 z-[3010]"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-4.5 md:h-4.5" />
            </button>

            {/* Active Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-[1000px] h-[65vh] md:h-[45vh] flex justify-center items-center"
            >
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                loading="eager"
              />
            </motion.div>

            {/* Captions / Meta */}
            <div className="text-center mt-8 md:mt-4 text-white max-w-[600px] px-4">
              <span className="text-[10px] font-bold text-gold tracking-widest uppercase block mb-1">
                {galleryItems[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-2xl md:text-xl font-light mb-2">
                {galleryItems[lightboxIndex].title}
              </h4>
              <p className="text-white/60 text-xs md:text-[11px]">
                {galleryItems[lightboxIndex].desc}
              </p>
              <span className="inline-block mt-4 md:mt-2 text-[10px] text-white/40 tracking-wider">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
