import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-darknavy text-white pt-14 pb-8 border-t border-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Official Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                alt="Dr. Himanshu Hospital Official Logo"
                className="h-14 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJQwI5xnYnkNRsOzzcBBBER7JzY3uhQYMLLGZnhA7hwqP2cEezL2cODCZ2rumI7j8p-qqqbKthWL1avqbF-DXug3u8tA6iEDZ2Ok22fy4k9-qZ1miY_tsY9iseaaUHnxtNmEvy6OB9B_WzazktCq9gh65r5UjzMbhD0nLPCKzE179S0Mlz1_YZERqjt1DnuaAN9JL33q-tI0Lcbym9iiS_BSTcGh3mDlf2w_Yghx03-IeQEMu9qxP0aLx_LZ25NiqVC1E"
              />
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-white tracking-tight leading-none">
                  DR. HIMANSHU HOSPITAL
                </span>
                <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase mt-1">
                  Care • Precision • Confidence
                </span>
              </div>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed">
              <strong>Dr. Himanshu Hospital</strong> (Dr. Himanshu Upadhyay&apos;s Face Hospital) is a multispeciality medical and dental center located in Aruna Nagar, Etah. Directed by <strong>Dr. Himanshu Upadhyay (MDS, Oral &amp; Maxillofacial Surgeon)</strong>.
            </p>
            <div className="text-[11px] text-brand-cyan flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Multispeciality Care Under One Roof • 24x7 Open
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dr.himanshu_upadhyay_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-teal text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/dr.himanshu.upadhyayEtah/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-teal text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="tel:+919759008704"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-crimson text-white flex items-center justify-center transition-colors text-xs"
                aria-label="Call 24x7 Hotline"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
              </a>
            </div>
          </div>

          {/* Col 2: 11 Clinical Facilities Quick Access */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase flex items-center justify-between">
              <span>The 11 Facilities</span>
              <Link href="/departments" className="text-[11px] text-brand-cyan lowercase hover:underline">
                view all &rarr;
              </Link>
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-white/70">
              <Link className="hover:text-brand-cyan transition-colors" href="/maxillofacial">
                1. Dental (Oral &amp; Maxillofacial)
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                2. General Physician
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                3. ENT (Ear, Nose &amp; Throat)
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                4. Neuro Surgeon (Spine &amp; Cranial)
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                5. Cancer Surgeon (Oncology)
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                6. Gynaecologist &amp; Obstetrics
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                7. Private &amp; Deluxe AC Rooms
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                8. Intensive Care Unit (ICU)
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                9. Modular Operation Theatres
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/departments">
                10. Ventilator Support
              </Link>
              <Link className="hover:text-brand-cyan transition-colors" href="/emergency-trauma">
                11. 24x7 Emergency &amp; Trauma Care
              </Link>
            </div>
          </div>

          {/* Col 3: Hospital Timings & Pages */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">
              Quick Links &amp; Timings
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-0.5">
                <span className="font-bold text-brand-cyan flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan beacon-pulse" />
                  Emergency &amp; Trauma (Casualty)
                </span>
                <span className="text-white font-bold">Open 24 Hours / 7 Days</span>
                <span className="text-white/60 block">Monday through Sunday</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-0.5">
                <span className="font-bold text-brand-cyan block">OPD Consultations</span>
                <span className="text-white">Monday – Sunday</span>
                <span className="text-white/60 block">Morning: 9:00 AM – Evening: 8:00 PM</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-white/70">
                <Link href="/about" className="hover:text-brand-cyan">About</Link> • 
                <Link href="/doctors" className="hover:text-brand-cyan">Doctors</Link> • 
                <Link href="/ayushman-insurance" className="hover:text-brand-cyan">Ayushman</Link> • 
                <Link href="/contact" className="hover:text-brand-cyan">Contact</Link> • 
                <Link href="/appointment" className="text-brand-cyan font-bold hover:underline">Book OPD</Link>
              </div>
            </div>
          </div>

          {/* Col 4: Campus Coordinates */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">
              Hospital Contact
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-cyan text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  96, near Canara Bank, Aruna Nagar, Shanti Nagar, ETAH, Uttar Pradesh (207001)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-cyan text-[18px] shrink-0">
                  call
                </span>
                <a
                  className="hover:text-brand-cyan font-bold text-white transition-colors"
                  href="tel:+919759008704"
                >
                  +91 97590 08704
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-cyan text-[18px] shrink-0">
                  mail
                </span>
                <a
                  className="hover:text-brand-cyan text-white/80 break-all transition-colors"
                  href="mailto:drhimanshumaxfax@gmail.com"
                >
                  drhimanshumaxfax@gmail.com
                </a>
              </div>
              <div className="bg-brand-deepteal/30 p-2.5 rounded-lg border border-brand-cyan/20 mt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan block">
                  Empaneled Schemes:
                </span>
                <span className="text-[11px] text-white/90">
                  Ayushman Bharat (PM-JAY), UP State Schemes &amp; All Leading TPA Cashless Networks
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Dr. Himanshu Hospital (Dr. Himanshu Upadhyay&apos;s Face Hospital). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link className="hover:text-brand-cyan transition-colors" href="/emergency-trauma">
              Trauma Protocol
            </Link>
            <Link className="hover:text-brand-cyan transition-colors" href="/ayushman-insurance">
              Ayushman Guidelines
            </Link>
            <Link className="hover:text-brand-cyan transition-colors" href="/appointment">
              Book OPD Token
            </Link>
            <Link className="hover:text-brand-cyan transition-colors" href="/contact">
              Location Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
