import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
  showCta?: boolean;
}

export default function PageHeader({
  badge,
  title,
  highlightText,
  description,
  breadcrumb,
  showCta = true,
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-brand-darknavy via-brand-navy to-brand-darknavy text-white py-12 sm:py-16 overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70 mb-4">
          <Link href="/" className="hover:text-brand-cyan transition-colors">
            Home
          </Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-white/40">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-cyan transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-cyan font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/25 text-brand-cyan border border-brand-teal/40 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-cyan beacon-pulse" />
              {badge}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}{" "}
              {highlightText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-teal-200">
                  {highlightText}
                </span>
              )}
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
              {description}
            </p>

            {showCta && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-teal/25 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Book Consultation</span>
                </Link>

                <a
                  href="tel:+919759008704"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-brand-cyan">call</span>
                  <span>24/7 Helpline: +91 97590 08704</span>
                </a>
              </div>
            )}
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3 shadow-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Dr. Himanshu Hospital • Etah
            </div>
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="border-l-2 border-brand-teal pl-3 py-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white">24x7</div>
                <div className="text-[11px] text-white/70">Emergency &amp; Trauma</div>
              </div>
              <div className="border-l-2 border-cyan-400 pl-3 py-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white">100+</div>
                <div className="text-[11px] text-white/70">Inpatient Beds</div>
              </div>
              <div className="border-l-2 border-emerald-400 pl-3 py-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white">100%</div>
                <div className="text-[11px] text-white/70">Ayushman / TPA Cashless</div>
              </div>
              <div className="border-l-2 border-brand-cyan pl-3 py-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white">11+</div>
                <div className="text-[11px] text-white/70">Clinical Facilities</div>
              </div>
            </div>
            <div className="pt-2 border-t border-white/10 text-[11px] text-white/70 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-brand-cyan text-[16px]">location_on</span>
              <span>96, Near Canara Bank, Aruna Nagar, Etah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
