import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import TriageNavigator from "@/components/sections/TriageNavigator";
import AboutSection from "@/components/sections/AboutSection";
import MaxFaxSuperSpecialty from "@/components/sections/MaxFaxSuperSpecialty";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import CriticalCareSection from "@/components/sections/CriticalCareSection";
import TraumaTimeline from "@/components/sections/TraumaTimeline";
import AyushmanDesk from "@/components/sections/AyushmanDesk";
import RecoveryJourneys from "@/components/sections/RecoveryJourneys";
import ConsultationForm from "@/components/sections/ConsultationForm";
import CampusLocation from "@/components/sections/CampusLocation";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TriageNavigator />
      <AboutSection />
      <MaxFaxSuperSpecialty />
      <FacilitiesSection />
      <CriticalCareSection />
      <TraumaTimeline />
      <AyushmanDesk />

      {/* Meet Our Specialists Banner linking to /doctors */}
      <section className="py-14 bg-gradient-to-r from-brand-navy via-brand-darknavy to-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Multi-Specialty Care Under One Roof
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Consult With Our Senior Doctors &amp; Surgeons
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
              From Chief Maxillofacial Surgeon Dr. Himanshu Upadhyay to consultants in Neurosurgery, Oncology, Gynaecology, ENT, and Internal Medicine.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/doctors"
              className="px-6 py-3 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              Meet All Doctors &amp; Timings &rarr;
            </Link>
            <Link
              href="/appointment"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all active:scale-95"
            >
              Book OPD Token
            </Link>
          </div>
        </div>
      </section>

      <RecoveryJourneys />
      <ConsultationForm />
      <CampusLocation />
    </>
  );
}
