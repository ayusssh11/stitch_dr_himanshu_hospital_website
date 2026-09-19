"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/maxillofacial", label: "Maxillofacial" },
    { href: "/departments", label: "Facilities & Wings" },
    { href: "/doctors", label: "Specialists" },
    { href: "/ayushman-insurance", label: "Ayushman / TPA" },
    { href: "/emergency-trauma", label: "24x7 Trauma" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/60 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* Brand Identity with Official Logo */}
          <Link
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
            href="/"
            aria-label="Dr. Himanshu Hospital Home"
          >
            <img
              alt="Dr. Himanshu Hospital Official Logo"
              className="h-10 sm:h-12 xl:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyGHh3xNpZMquSVx2SrKUkBhgrKvO-lmI1LGyoqluAuMaGibTFHXEwEmWOOSdQv8vPuTpDz137x7XEVRY7OjGZXB4azdAzOutzrXHJKTwfziLvGKi2eTxPBpWde4M-WrjovArJxfh-ZhipkUOLJEyQU1WY7_oBiPOI8fEs-tWzrGvK2FgYslgsGU8mqw4JXckK1OITfYP10cp17XNbccEKa6tb6XizZgCclpVp2BONsLyVyE-WX0htVH60HOWGlwaiql4"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base xl:text-lg font-extrabold tracking-tight text-brand-navy leading-none font-sans">
                DR. HIMANSHU <span className="text-brand-teal">HOSPITAL</span>
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-widest text-brand-deepteal uppercase mt-1 leading-none">
                Care • Precision • Confidence
              </span>
              <span className="text-[8px] xl:text-[9px] text-brand-navy/60 font-medium hidden 2xl:block mt-0.5">
                Dr. Himanshu Upadhyay&apos;s Face Hospital • Etah
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 2xl:gap-2 text-xs 2xl:text-[13px] font-semibold text-brand-navy/80"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 2xl:px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-brand-teal bg-brand-ice font-bold border border-brand-border/40"
                      : "hover:text-brand-teal hover:bg-brand-ice text-brand-navy/85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct Call / Trauma Desk Button */}
            <a
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-lightcyan text-brand-deepteal hover:bg-brand-deepteal hover:text-white transition-all text-xs font-bold border border-brand-border whitespace-nowrap shadow-2xs"
              href="tel:+919759008704"
              title="24/7 Trauma Desk Hotline: +91 97590 08704"
            >
              <span className="material-symbols-outlined text-[16px] text-brand-teal group-hover:text-white">
                call
              </span>
              <span className="hidden xl:inline">24x7 Trauma</span>
              <span className="xl:hidden">Trauma</span>
            </a>

            {/* Primary Appointment / Consultation Button */}
            <Link
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 2xl:px-5 py-2 sm:py-2.5 rounded-lg bg-brand-deepteal text-white hover:bg-brand-navy transition-all text-xs sm:text-sm font-bold shadow-sm shadow-brand-deepteal/20 whitespace-nowrap active:scale-95"
              href="/appointment"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                calendar_month
              </span>
              <span>Book OPD / OT</span>
            </Link>

            {/* Mobile / Tablet Menu Hamburger Button */}
            <button
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="xl:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-ice active:bg-brand-lightcyan border border-brand-border flex items-center justify-center transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full Backdrop & Drawer Nav Menu */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 bg-brand-darknavy/50 backdrop-blur-xs z-40 animate-in fade-in duration-200"
          onClick={closeMenu}
        >
          <div
            className="bg-white border-b border-brand-border shadow-2xl px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-85px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-2 border-b border-brand-border/60 flex items-center justify-between text-xs text-brand-navy/60 font-semibold px-2">
              <span>Navigation Menu</span>
              <span className="text-[11px] text-brand-deepteal font-bold uppercase tracking-wider">
                Dr. Himanshu Hospital
              </span>
            </div>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-teal text-[20px]">
                home
              </span>
              <span>Home Overview</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/about"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/about"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                domain
              </span>
              <span>About Dr. Himanshu Hospital</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/maxillofacial"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/maxillofacial"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                face
              </span>
              <span>Maxillofacial Super-Specialty</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/departments"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/departments"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                local_hospital
              </span>
              <span>11 Facilities &amp; Clinical Wings</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/doctors"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/doctors"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                medical_services
              </span>
              <span>Our Specialist Doctors</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/ayushman-insurance"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/ayushman-insurance"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-emerald-700 text-[20px]">
                verified_user
              </span>
              <span>Ayushman Bharat &amp; TPA Cashless</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/emergency-trauma"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/emergency-trauma"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-crimson text-[20px]">
                emergency
              </span>
              <span>24x7 Emergency &amp; Trauma Care</span>
            </Link>

            <Link
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "bg-brand-ice text-brand-deepteal font-bold"
                  : "text-brand-navy hover:bg-brand-ice"
              }`}
              href="/contact"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-brand-deepteal text-[20px]">
                location_on
              </span>
              <span>Hospital Location &amp; Contact</span>
            </Link>

            {/* Mobile Actions in Drawer */}
            <div className="pt-3 mt-2 border-t border-brand-border space-y-2">
              <a
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-darknavy text-white font-bold text-sm shadow-md transition-colors"
                href="tel:+919759008704"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined text-[20px] text-brand-cyan">
                  emergency
                </span>
                <span>Casualty Line: +91 97590 08704</span>
              </a>
              <Link
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-lightcyan hover:bg-brand-deepteal hover:text-white text-brand-deepteal font-bold text-sm border border-brand-border transition-colors"
                href="/appointment"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Book OPD / OT Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
