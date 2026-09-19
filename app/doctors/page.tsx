"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

interface Doctor {
  id: string;
  name: string;
  role: string;
  department: string;
  category: "all" | "maxfax" | "surgical" | "medical" | "critical";
  credentials: string;
  experience: string;
  opdTimings: string;
  image: string;
  badge?: string;
  bio: string;
}

const doctorsList: Doctor[] = [
  {
    id: "dr-himanshu-upadhyay",
    name: "Dr. Himanshu Upadhyay",
    role: "Hospital Director & Chief Maxillofacial Surgeon",
    department: "Oral & Maxillofacial Super-Specialty",
    category: "maxfax",
    credentials: "BDS, MDS (Oral & Maxillofacial Surgery), FIBOMS",
    experience: "15+ Years Clinical & Surgical Experience",
    opdTimings: "Monday - Sunday: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ24fCOba-EZSROLPc74tfYOrQpFYpMWnGHtjx1-30_TKDxVAU0kVN_E_Owj7chll7zBo_xD1zyAmPq9nPW23ELhvZ1ZKOA3QumcFivr-YmqVY_1UPi1p12-y-MrkNfvYjBQhJ8fFh8JTkicGAROZQ8h_zrnGRM8ZsGMPhSoU-6TYdylkzYJWeghJDcNXuMHJQldgst6CakFRuMzw46luPTInxF6Ixul2AXQrXzMy1HqIlEoZRpie5aQ",
    badge: "Medical Director & Lead Specialist",
    bio: "Pioneer in cranio-maxillofacial trauma reconstruction, orthognathic jaw realignment, and titanium osteosynthesis in Western UP. Trained under renowned academic faculty and active fellow of AO CMF & AOMSI.",
  },
  {
    id: "dr-rk-sharma",
    name: "Dr. R. K. Sharma",
    role: "Senior Consultant Neurosurgeon",
    department: "Neurosurgery & Spine Care",
    category: "surgical",
    credentials: "MBBS, MS (General Surgery), MCh (Neuro Surgery)",
    experience: "14+ Years in Cranial & Spinal Trauma",
    opdTimings: "Visiting Consultant: Tuesday & Friday (By Prior Token)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBqpC2lAYBLvp5RBI6u2_dl1eaHa84Xgx2V_q1-h18EayL0uuvj38YLE-WigbmpBPs9HIPhmpdtxEmBcdZmVFjd4sWPrsAwSCEGtKIXqtxASRhB7dUjVGWQZOdbpSJNpwX09ZAq4v-vriNP9C7Y9Tfiq48NLDN2iWs6HvaEp55z9oivMJiuRrBlvqTVFwg4mKlGWrj2l0Ppszfft9I_o5EQRygTKlrZc9Bx6fmIHkW4zAHGW5A1-mTg",
    badge: "Neuro & Spine",
    bio: "Expert in emergency management of traumatic brain injuries (EDH/SDH), skull fractures, micro-lumbar discectomy, and cervical decompression.",
  },
  {
    id: "dr-sunita-verma",
    name: "Dr. Sunita Verma",
    role: "Senior Obstetrician & Gynaecologist",
    department: "Gynaecology & Obstetrics",
    category: "medical",
    credentials: "MBBS, MS (Obstetrics & Gynaecology)",
    experience: "12+ Years in Maternal Care",
    opdTimings: "Monday - Saturday: 11:00 AM - 3:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz21l8dF1sV9JQNfXb3wOjHZl3snBbdt0OL7B1avLxQ7lVmmiFu-U5bnsjhEz5aaDnk4pUDo3q0LI1RDZx59qTwoKGeG8m6tkYfs_dRX-HA-Jb4rVasQePbEyyi0Qub1shp8wRCOGeKT0-fLgHT44uKmk7ZfVOceCgfEEAJ0MG9T9tDs7sNWySblIbmEQl-HXtK6SG0CJKif9sswOZgmm7JFWEw1fdIEFzHjT6XXZlS9U2QpUiQ6xZJA",
    badge: "Maternity & Gynae",
    bio: "Specializing in high-risk pregnancy monitoring, painless normal deliveries, elective/emergency cesarean sections, and minimally invasive laparoscopic gynaecological procedures.",
  },
  {
    id: "dr-amit-saxena",
    name: "Dr. Amit Saxena",
    role: "Senior Consultant Physician & Intensivist",
    department: "General Medicine & Critical Care",
    category: "medical",
    credentials: "MBBS, MD (Medicine), C.C.M",
    experience: "13+ Years in Internal Medicine",
    opdTimings: "Monday - Saturday: 9:00 AM - 2:00 PM & 6:00 PM - 8:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3rT6L7bmQ5fD2j9G5jBi7DvWwHZW03cRc53JMY99lS9xKUQlK9y0y9qLJGdCbVD1kii3IuHyXBgNviKifWam_RiXN_NXMFSCzcbV9JBGxPlVL84zMztRoVT7uiJILMZPAy4eVVQN9yHJWf1scNL-8z_djkZc5HFkAugnITuTXc70ml1kvtKG-BGFLVzm93uDI_XtFppkfITjlTfSKo_X6dinuqX3k29ah9hC0jYTb_vfuaUsVVQx3Yw",
    badge: "Internal Medicine",
    bio: "Dedicated physician handling complex diabetes management, hypertension, sepsis, cardiac emergencies, vector fevers, and multi-organ ICU stabilization.",
  },
  {
    id: "dr-pradeep-yadav",
    name: "Dr. Pradeep Yadav",
    role: "Consultant Surgical Oncologist",
    department: "Cancer Surgery (Surgical Oncology)",
    category: "surgical",
    credentials: "MBBS, MS (Surgery), DNB (Surgical Oncology)",
    experience: "11+ Years in Cancer Resections",
    opdTimings: "Visiting Specialist: Wednesday & Saturday (Token Required)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDBVn1dnNt_y9y88bdAT7oT7Cqmb8n_ezkAb47Lzc7U7g_4aGfk12BnovWhoowALE6fA7UuVn5oP5sqPXTrw6c1wF9JGhYe-RaO--8-hVqqL05PipRPZcOptW5SR2Wa14rF2ESIoHc8Guj96bTXjRViTUZZZ3xcBuRaSZ8V9XjcxA2N9DGPlv6PhD26XHHgyJ0xwBVnxEGTWQ23QSYb413WMGSvVdfno-Gdd1z6rsBwhobtiP67Jvemg",
    badge: "Onco-Surgeon",
    bio: "Skilled in wide surgical excision of head, neck, and oral malignancies, radical neck dissections, and breast cancer surgeries with reconstructive coordination.",
  },
  {
    id: "dr-alok-gupta",
    name: "Dr. Alok Gupta",
    role: "Consultant ENT & Head-Neck Surgeon",
    department: "ENT (Ear, Nose & Throat)",
    category: "medical",
    credentials: "MBBS, MS (Otorhinolaryngology)",
    experience: "10+ Years in ENT Procedures",
    opdTimings: "Monday - Friday: 10:00 AM - 1:30 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGP0A6dehJj3BQ6i55kEtv38IcVtmEC1jBA47q4X3MgKlbu2EXysMC8LqjjmQ-j31lR_hcB2hW6F9wlSGuciTcg5O-Eubd6OTOZF5MEBi35KOUU9WGNFgxOS7T6vuAB0v4HexfFm2kklEIpYEpq61o0UvU941ywq_Xl9PmfwCnTKf5NZ59cIKHHRjqUJ3STbtMhqfgDEGRQbYVDsZzMXSRYUlbtM717MifFXr9Fg2nBHLPudpOftsTvw",
    badge: "ENT Specialist",
    bio: "Expertise in functional endoscopic sinus surgery (FESS), tympanoplasty for eardrum perforation, nasal polyps, and chronic throat conditions.",
  },
  {
    id: "dr-megha-bansal",
    name: "Dr. Megha Bansal",
    role: "Dental Surgeon & Oral Rehabilitation",
    department: "Dental & Oral Healthcare",
    category: "maxfax",
    credentials: "BDS, MDS, FICD",
    experience: "9+ Years in Conservative Dentistry",
    opdTimings: "Monday - Saturday: 9:30 AM - 3:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ecfA0acsr1RCXlAT4Hbf5Bc4ZZFqPKernU_ABl99fjy7NoN86JO7mu1kFq5Z7sBYnt8eHXti_8KH0HKiaDubxl8xFrc7XOh87orIZoEv3qq78q_Whsq-K3dgh3R5OMceCyqzOD1yISd1UVQjbmAWRYE3c3N4lblXfmbLpmW8umimMlm9U2nHbsl-7ngplIae4h07oi-lyw1_X1_BACQEGRHLDMshCZuu47s9ObanzbiERs017G54BQ",
    badge: "Dental Care",
    bio: "Comprehensive cosmetic dentistry, root canal treatments, crowns, bridges, pediatric dental care, and routine oral hygiene maintenance.",
  },
  {
    id: "dr-nk-singh",
    name: "Dr. N. K. Singh",
    role: "Head of Anaesthesiology & Critical Care",
    department: "Critical Care & ICU Telemetry",
    category: "critical",
    credentials: "MBBS, MD (Anaesthesiology & Resuscitation)",
    experience: "16+ Years in Trauma Resuscitation",
    opdTimings: "24x7 In-House Trauma & OT Coverage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhc8N9IJ301InEk18wAgOaEUDgsmtzbUNstEr-6oNV0hSG_GYb7RHoJyADNp2ekTIN1N1jXCa2kunaw0ICc2v1aMeYBm834oVF2TftPfrjg-a_kFEFYgA8SwGWSX_Ro_HssoRNwwfvkMTaX_qVNZzG4nz7wjN_YLOve9iX_CCPJfoILOWuOWZRLB2DJ9W7G8Y-Y2iYi2HlSrPPPcYipDQu27dNG0iKRtBePctwWOMYIfaQjhrY3kP7hg",
    badge: "Critical Care Head",
    bio: "Supervising intraoperative surgical anaesthesia in Class-100 Modular OTs and directing round-the-clock hemodynamics in the Level-III Telemetry ICU.",
  },
];

export default function DoctorsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredDoctors =
    filter === "all"
      ? doctorsList
      : doctorsList.filter((doc) => doc.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Multi-Disciplinary Medical Faculty"
        title="Meet Our Highly Qualified"
        highlightText="Doctors & Specialists"
        description="Our team of dedicated surgical directors, visiting super-specialists, and emergency intensivists brings tertiary-grade clinical care and human empathy to Etah and surrounding regions."
        breadcrumb={[{ label: "Our Specialists" }]}
      />

      {/* Filter Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === "all"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Specialists ({doctorsList.length})
            </button>
            <button
              onClick={() => setFilter("maxfax")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === "maxfax"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Maxillofacial &amp; Dental
            </button>
            <button
              onClick={() => setFilter("surgical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === "surgical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Neurosurgery &amp; Oncology
            </button>
            <button
              onClick={() => setFilter("medical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === "medical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Medicine, ENT &amp; Gynae
            </button>
            <button
              onClick={() => setFilter("critical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === "critical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Anaesthesia &amp; ICU
            </button>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner with Badges */}
                  <div className="h-64 sm:h-72 bg-slate-100 relative overflow-hidden group">
                    <img
                      src={doc.image}
                      alt={`${doc.name} - ${doc.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {doc.badge && (
                      <div className="absolute top-3 left-3 bg-brand-deepteal text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {doc.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                        {doc.department}
                      </div>
                      <h3 className="text-lg font-extrabold text-white leading-tight">
                        {doc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div>
                      <div className="text-xs font-extrabold text-brand-deepteal">
                        {doc.role}
                      </div>
                      <div className="text-xs text-slate-500 font-semibold mt-0.5">
                        {doc.credentials}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {doc.experience}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {doc.bio}
                    </p>

                    {/* OPD Timings Pill */}
                    <div className="p-2.5 rounded-xl bg-brand-ice border border-brand-border/60 text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-teal text-[16px] shrink-0">
                        schedule
                      </span>
                      <span className="text-[11px] font-semibold text-brand-navy">
                        {doc.opdTimings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:+919759008704"
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-brand-teal hover:border-brand-teal text-xs transition-colors"
                    title={`Call for OPD Token with ${doc.name}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </a>

                  <Link
                    href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                    className="flex-1 text-center py-2 px-3 rounded-xl bg-brand-navy hover:bg-brand-deepteal text-white text-xs font-bold transition-colors shadow-2xs"
                  >
                    Book OPD Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPD Guidance & Multi-Disciplinary Board */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="material-symbols-outlined text-brand-teal text-[28px] mb-2">
                how_to_reg
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Easy OPD Registration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tokens are issued daily from 8:30 AM at the hospital reception desk or online. Prior appointment holders get priority seating.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="material-symbols-outlined text-emerald-600 text-[28px] mb-2">
                verified
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Ayushman Golden Card</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eligible patients can receive specialist consultations, pre-op workups, and surgical operations 100% free under PM-JAY.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="material-symbols-outlined text-crimson text-[28px] mb-2">
                emergency
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">24/7 Trauma Calling</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                For acute fractures, road accident injuries, or urgent emergencies, call <strong>+91 97590 08704</strong> for instant surgeon standby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
