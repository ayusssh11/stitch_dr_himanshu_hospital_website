import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-brand-ice via-white to-white py-8 lg:py-16 border-b border-brand-border/60"
      id="overview"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7_wI_q1xs8dtkl46uX_Z6DKFMLfQhNqUFV-I3SpfJBR-_Q6NZuUzIXhxhQm9MMvulx3CHdMbcspcDCkPfFwIyuCNlcAnr3GM0sn0J41GBf2LY9d95u_bKqBC8yqxSn7VcWf7hD7EvK-AatWHP0osMi5knO9ktXxIEoj1El4LfDKABmFrRNLK3SH1I1aXMNzT5rAw0AbkQBzmO61iulwKo2NCE63hQ-PV9jTwClkOitrdzQNNJ6GHqDg"
          alt="Hospital entrance atrium and surgical center background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-brand-ice/85 backdrop-blur-xs"></div>
      </div>

      {/* Ambient Branding Geometry */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] rounded-full bg-brand-teal/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            {/* Institute Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-lightcyan border border-brand-border px-3.5 py-1.5 rounded-full text-brand-navy w-fit shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-teal beacon-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
                Etah’s Premier Maxillofacial &amp; Advanced Surgical Hospital
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Transforming <span className="text-brand-deepteal">Facial Trauma</span>, Oral
              Reconstruction &amp; <span className="text-brand-teal">Critical Care</span> in Western
              U.P.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-navy/75 leading-relaxed font-normal">
              Dr. Himanshu Hospital delivers tertiary-grade maxillofacial reconstructive surgery,
              Class-100 HEPA laminar airflow modular operation theatres, and 24x7 intensivist-led ICU
              care in Aruna Nagar, Etah—eliminating risky emergency referrals to Agra or Delhi during
              vital golden hours.
            </p>

            {/* CTA Action Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-deepteal text-white hover:bg-brand-navy transition-all font-bold text-sm shadow-md shadow-brand-deepteal/25 hover:shadow-lg"
                href="/appointment"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                <span>Book Consultation Token</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white hover:bg-brand-darknavy transition-all font-bold text-sm shadow-md shadow-brand-deepteal/20"
                href="tel:+919759008704"
              >
                <span className="material-symbols-outlined text-[20px] text-brand-cyan">
                  e911_emergency
                </span>
                <span>Trauma Desk: +91 97590 08704</span>
              </a>
            </div>

            {/* Trust Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="bg-white border border-brand-border/80 rounded-xl p-3 shadow-xs">
                <div className="text-2xl font-extrabold text-brand-deepteal">15,000+</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/70 mt-0.5">
                  Surgeries &amp; OPD
                </div>
              </div>
              <div className="bg-white border border-brand-border/80 rounded-xl p-3 shadow-xs">
                <div className="text-2xl font-extrabold text-brand-teal">Class 100</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/70 mt-0.5">
                  Laminar Flow OT
                </div>
              </div>
              <div className="bg-white border border-brand-border/80 rounded-xl p-3 shadow-xs">
                <div className="text-2xl font-extrabold text-brand-navy">Level-III</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/70 mt-0.5">
                  ICU &amp; Ventilators
                </div>
              </div>
              <div className="bg-white border border-brand-border/80 rounded-xl p-3 shadow-xs">
                <div className="text-2xl font-extrabold text-brand-deepteal">100% Free</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/70 mt-0.5">
                  PM-JAY Ayushman
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase: High-Tech Surgical OT Image Embed (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-border bg-brand-navy">
              <img
                alt="High-Tech Modular Laminar Operation Theatre at Dr. Himanshu Hospital"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1QFujBGKcrZzNF56YTY_jn9xOf5Od0xj4X54XWbXMAzd7Iy0exB5h0X2px86w-TFhjexmbwbH6keucV6YfWhKFfR-CulxtfT1z7sCiTHAf_CHOGnO8EIykRQ58XFPvsBMxNVSmiTk_kGI2LcTT8nYEZljBAEko9YGiwowGvxNxPR9Kk2t2YnBzbm4QWJ53tGQ05I_cM6JWPLql0RdL_9tctCuybXYFJASa_Eiz7zqMX7MxqAev5IfQw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy/90 via-brand-darknavy/20 to-transparent"></div>

              {/* Floating Live Badge on Image */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-brand-darknavy/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-cyan/40 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-cyan beacon-pulse"></span>
                <span>Active Modular OT: Positive Air Pressure</span>
              </div>

              {/* Floating Bottom Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-brand-border shadow-lg">
                <div className="flex items-center justify-between text-xs font-bold text-brand-deepteal uppercase tracking-wider mb-1">
                  <span>Surgical Traumatology Infrastructure</span>
                  <span className="text-brand-navy flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-brand-teal">
                      verified
                    </span>{" "}
                    0% Infection Protocol
                  </span>
                </div>
                <p className="text-xs text-brand-navy/80 leading-snug">
                  Equipped with micro-titanium plating systems, piezoelectric bone saws, and
                  real-time anesthesia telemetry for complicated mandibular, zygomatic, and
                  craniofacial fixation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
