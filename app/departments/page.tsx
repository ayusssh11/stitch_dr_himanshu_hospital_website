"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

interface Facility {
  id: number;
  name: string;
  category: "surgical" | "medical" | "critical" | "inpatient";
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  equipment: string;
  specialist: string;
  badge?: string;
  ctaLink?: string;
  ctaText?: string;
}

const facilitiesData: Facility[] = [
  {
    id: 1,
    name: "Dental (Oral & Maxillofacial Surgery)",
    category: "surgical",
    tagline: "Western UP's Center of Excellence for Craniofacial & Jaw Reconstruction",
    description:
      "Advanced treatment for mandibular and maxillary fractures, zygomatic bone fixation, orthognathic corrective jaw surgeries, TMJ arthroscopy/ankylosis, oral benign/malignant tumors, and permanent basal/zygomatic dental implants.",
    icon: "face",
    features: [
      "Rigid Titanium 3D Plating (AO CMF Protocol)",
      "Corrective Orthognathic Jaw Surgery",
      "Painless Dental Implants & Bone Grafting",
      "Oral Cancer Screening & Surgical Biopsies",
      "TMJ Pain & Jaw Locking Treatment",
    ],
    equipment: "Piezosurgery® Ultrasonic Bone Saw, Digital OPG, 3D C-Arm, Micro-Surgical Loupes",
    specialist: "Directed by Dr. Himanshu Upadhyay (BDS, MDS Oral & Maxillofacial Surgery)",
    badge: "Flagship Super-Specialty",
    ctaLink: "/maxillofacial",
    ctaText: "Explore MaxFax Wing",
  },
  {
    id: 2,
    name: "General Physician & Internal Medicine",
    category: "medical",
    tagline: "Comprehensive Adult Health, Chronic Disease & Infectious Disease Care",
    description:
      "Comprehensive diagnostic workups and therapeutic management for diabetes mellitus, hypertension, cardiopulmonary illnesses, seasonal viral/dengue/typhoid fevers, thyroid disorders, and complex multisystem conditions.",
    icon: "stethoscope",
    features: [
      "Uncontrolled Diabetes & Glycemic Stabilization",
      "Hypertensive Crisis & Cardiovascular Monitoring",
      "Severe Vector-Borne & Infectious Fevers",
      "Gastrointestinal & Hepatic Medical Management",
      "Geriatric & Preventive Health Checkups",
    ],
    equipment: "Bedside Arterial Blood Gas (ABG), 12-Lead ECG, Multipara Monitors, Automated Biochemistry",
    specialist: "Senior MD Internal Medicine & Critical Care Physicians",
    ctaLink: "/appointment?dept=general-medicine",
  },
  {
    id: 3,
    name: "ENT (Ear, Nose & Throat)",
    category: "medical",
    tagline: "Endoscopic Sinus Surgery, Micro-Ear Procedures & Head-Neck Diagnostics",
    description:
      "Specialized diagnosis and treatment of chronic sinusitis, nasal polyps, deviated nasal septum (DNS), perforated eardrums, hearing loss, chronic tonsillitis, and vocal cord pathologies with minimal invasion.",
    icon: "head_side_mask",
    features: [
      "Endoscopic Sinus Surgery (FESS)",
      "Microscopic Tympanoplasty & Mastoidectomy",
      "Nasal Bone Fracture Realignment",
      "Coblation Assisted Tonsillectomy & Adenoidectomy",
      "Audiometry & Hearing Assessment",
    ],
    equipment: "High-Definition Video Endoscopy System, Operating Otomicroscope, Micro-debriders",
    specialist: "Senior MS ENT Visiting & Core Consultants",
    ctaLink: "/appointment?dept=ent",
  },
  {
    id: 4,
    name: "Neuro Surgeon (Brain & Spine)",
    category: "surgical",
    tagline: "Emergency Cranial Trauma & Minimally Invasive Spine Surgery",
    description:
      "24/7 surgical triage and intervention for traumatic brain injuries (extradural/subdural hematomas), skull fractures, spinal cord decompression, lumbar disc herniations, and cervical spondylosis.",
    icon: "neurology",
    features: [
      "Emergency Decompressive Craniotomy for Trauma",
      "Spinal Fixation & Disc Decompression",
      "Cranial Burr Hole Evacuation",
      "Post-Concussion Intensive Neuro-Monitoring",
      "Neuropathy & Chronic Sciatica Management",
    ],
    equipment: "3D Image Intensifier C-Arm, High-Speed Neuro-Drill, Invasive Intracranial Pressure (ICP) Monitors",
    specialist: "Visiting MCh Neurosurgeons & Trauma Critical Care Team",
    ctaLink: "/appointment?dept=neurosurgery",
  },
  {
    id: 5,
    name: "Cancer Surgeon (Surgical Oncology)",
    category: "surgical",
    tagline: "Head & Neck, Oral Cavity and Breast Onco-Surgical Resections",
    description:
      "Comprehensive surgical oncology focusing on oral cavity cancers, buccal mucosa lesions, tongue tumors, neck dissection, salivary gland tumors, and breast cancer surgeries with immediate functional flap reconstruction.",
    icon: "ribbon",
    features: [
      "Wide Local Excision with Safe Margin Verification",
      "Functional & Radical Neck Dissection",
      "Local & Locoregional Flap Reconstruction",
      "Breast Conserving Surgery & Mastectomy",
      "Pre-Cancerous Leukoplakia & Submucous Fibrosis Interventions",
    ],
    equipment: "High-Resolution Electro-Surgical Cautery, Bipolar Sealer, Frozen Section Pathology Liaison",
    specialist: "MCh / DNB Surgical Oncologists with MaxFax Team",
    ctaLink: "/appointment?dept=oncology",
  },
  {
    id: 6,
    name: "Gynaecologist & Obstetrics",
    category: "medical",
    tagline: "Safe Motherhood, High-Risk Pregnancy & Gynaecological Surgeries",
    description:
      "Dedicated women&apos;s healthcare covering antenatal care, normal delivery, cesarean sections, management of pre-eclampsia/gestational diabetes, hysterectomy, ovarian cyst removal, and laparoscopic gynaecological procedures.",
    icon: "pregnant_woman",
    features: [
      "24x7 Emergency Obstetric & Delivery Suites",
      "High-Risk Pregnancy Intensive Monitoring",
      "Laparoscopic Ovarian & Uterine Surgeries",
      "Infertility Workups & Hormonal Evaluation",
      "Post-Partum Mother & Neonatal Care",
    ],
    equipment: "Digital Fetal Cardiotocography (CTG), Dedicated Delivery Bed, Neonatal Resuscitation Unit",
    specialist: "Senior MS Obstetrics & Gynaecology Specialists",
    ctaLink: "/appointment?dept=gynaecology",
  },
  {
    id: 7,
    name: "Private & Deluxe AC Rooms",
    category: "inpatient",
    tagline: "Restful Inpatient Suites with 100+ Bed Capacity",
    description:
      "Designed for maximum patient comfort and recovery. Options include Private Air-Conditioned rooms with attendant beds, Deluxe suites with private washrooms and televisions, semi-private dual-sharing rooms, and general wards.",
    icon: "hotel",
    features: [
      "100+ Total Inpatient Bed Capacity",
      "Centrally Oxygenated Bedside Supply",
      "Comfortable Attendant Sofa-cum-Bed",
      "Nurse Call Intercom System",
      "Hygienic Housekeeping & Sanitized Facilities",
    ],
    equipment: "Multi-Position Hospital Electric/Manual Beds, Bedside Infusion Monitors",
    specialist: "24/7 Ward Medical Officers & Dedicated Nursing Staff",
    ctaLink: "/appointment?dept=rooms",
  },
  {
    id: 8,
    name: "Intensive Care Unit (ICU)",
    category: "critical",
    tagline: "Level-III Telemetry ICU with Continuous Vital Monitoring",
    description:
      "Equipped for severe septicemia, respiratory failure, multiple organ dysfunction, post-operative high-risk monitoring, and acute cardiac events. Managed 24x7 by intensivists and trained critical care nursing teams.",
    icon: "vital_signs",
    features: [
      "1:1 Critical Patient-to-Nurse Ratio in High Dependency",
      "Continuous Electrocardiography, SpO2 & Capnography",
      "Emergency Defibrillator & Crash Cart",
      "Central Line & Arterial Line Monitoring",
      "Bedside Dialysis Ready Ports",
    ],
    equipment: "Multipara Telemetry Monitors, Syringe Micro-Pumps, ABG Gas Analyzer",
    specialist: "24x7 Intensivists & Critical Care Anaesthesiologists",
    ctaLink: "/emergency-trauma",
    badge: "24x7 Critical Care",
  },
  {
    id: 9,
    name: "Modular Operation Theatres (OT)",
    category: "critical",
    tagline: "Class-100 HEPA Laminar Airflow Ultra-Clean Suites",
    description:
      "Multi-suite surgical theater equipped with seamless antibacterial wall panels, positive air pressure differential, HEPA filtration down to 0.3 microns, and sterile zones ensuring zero surgical site contamination.",
    icon: "precision_manufacturing",
    features: [
      "Class-100 Laminar Airflow Filtration",
      "Seamless Anti-Microbial PU Flooring & Walls",
      "LED Dual-Dome Surgical Shadowless Lights",
      "Digital X-Ray & Live C-Arm Fluoroscopy",
      "Central Medical Gas Pipeline System (MGPS)",
    ],
    equipment: "Workstation Anaesthesia Stations, High-Frequency C-Arm, Hermetic Sliding Doors",
    specialist: "Surgical Team led by Dr. Himanshu Upadhyay & Consultant Surgeons",
    badge: "HEPA Class-100",
  },
  {
    id: 10,
    name: "Advanced Ventilator Facilities",
    category: "critical",
    tagline: "Invasive & Non-Invasive Mechanical Life Support",
    description:
      "Modern microprocessor-controlled ventilators capable of Volume Control, Pressure Control, SIMV, CPAP, and BiPAP ventilation for acute respiratory distress syndrome (ARDS), head trauma, and critical post-surgical recovery.",
    icon: "air",
    features: [
      "Invasive Endotracheal / Tracheostomy Support",
      "Non-Invasive BiPAP & CPAP High-Flow Ventilation",
      "Real-Time Lung Mechanics & Pressure-Volume Loops",
      "Backup Medical Air & Oxygen Supply Lines",
      "Rapid Weaning Protocols supervised by Intensivists",
    ],
    equipment: "Advanced ICU Ventilators, High-Flow Nasal Cannula (HFNC), Ultrasonic Nebulizers",
    specialist: "Chest & Critical Care Specialists with Respiratory Therapists",
    badge: "Life Support",
  },
  {
    id: 11,
    name: "24x7 Emergency & Trauma Care",
    category: "critical",
    tagline: "Golden Hour Casualty Bay with Zero Admission Delay",
    description:
      "Western UP's dedicated emergency bay prepared round the clock for road traffic accidents, maxillofacial fractures, acute surgical abdomen, burns, cardiac arrest resuscitation, and pediatric medical emergencies.",
    icon: "emergency",
    features: [
      "Door-to-Triage Under 3 Minutes",
      "Emergency Resuscitation & Airway Bay",
      "On-Site 24x7 Digital Diagnostics & Pharmacy",
      "Direct Stretcher Ramp & Ambulance Parking",
      "Ayushman Bharat Golden Card Instant Desk",
    ],
    equipment: "Emergency Crash Carts, Multi-Frequency Ultrasound, Defibrillators, Mobile Suction",
    specialist: "24x7 Emergency Medical Officers, Trauma Surgeons & Critical Nurses",
    badge: "Immediate Attention",
    ctaLink: "/emergency-trauma",
    ctaText: "Emergency Protocol",
  },
];

export default function DepartmentsPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "surgical" | "medical" | "critical" | "inpatient"
  >("all");

  const filteredFacilities =
    activeCategory === "all"
      ? facilitiesData
      : facilitiesData.filter((f) => f.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Multispeciality Medical & Surgical Wings"
        title="Our 11 Accredited Facilities &"
        highlightText="Clinical Departments"
        description="Dr. Himanshu Hospital offers comprehensive multispeciality medical and surgical care under one roof. From our flagship Maxillofacial surgery center to 24x7 ICU, Modular OTs, and General Specialties."
        breadcrumb={[{ label: "Facilities & Wings" }]}
      />

      {/* Category Filter Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === "all"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All 11 Facilities
            </button>
            <button
              onClick={() => setActiveCategory("surgical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === "surgical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Surgical Super-Specialties
            </button>
            <button
              onClick={() => setActiveCategory("medical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === "medical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Medicine &amp; Clinical Care
            </button>
            <button
              onClick={() => setActiveCategory("critical")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === "critical"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Critical Care &amp; OTs
            </button>
            <button
              onClick={() => setActiveCategory("inpatient")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === "inpatient"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Inpatient &amp; Deluxe Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Cards List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[26px]">
                          {facility.icon}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-teal">
                          Facility #{facility.id}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy leading-snug">
                          {facility.name}
                        </h3>
                      </div>
                    </div>

                    {facility.badge && (
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-teal text-white shadow-xs">
                        {facility.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-brand-deepteal">
                    {facility.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                      Key Capabilities &amp; Treatments:
                    </span>
                    {facility.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="material-symbols-outlined text-brand-teal text-[16px] shrink-0">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Specs */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Equipment &amp; Infrastructure:
                    </div>
                    <div className="text-slate-800 font-medium">{facility.equipment}</div>
                    <div className="text-[11px] text-brand-teal font-semibold pt-1">
                      {facility.specialist}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Ayushman &amp; TPA Cashless Applicable
                  </span>

                  <div className="flex items-center gap-2">
                    {facility.ctaLink ? (
                      <Link
                        href={facility.ctaLink}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-teal hover:bg-brand-deepteal text-white font-bold text-xs transition-colors shadow-2xs"
                      >
                        <span>{facility.ctaText || "Book Consultation"}</span>
                        <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                      </Link>
                    ) : (
                      <Link
                        href={`/appointment?facility=${encodeURIComponent(facility.name)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-deepteal text-white font-bold text-xs transition-colors shadow-2xs"
                      >
                        <span className="material-symbols-outlined text-[15px]">calendar_month</span>
                        <span>Book OPD</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & Ayushman Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-brand-ice via-white to-brand-lightcyan p-6 sm:p-10 border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Ayushman PM-JAY 100% Cashless Treatment Available
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                Have questions about which department you need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Call our 24x7 helpdesk at <strong>+91 97590 08704</strong>. Our casualty and triage staff will guide you immediately to the right specialist doctor.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/appointment"
                className="px-5 py-2.5 rounded-xl bg-brand-deepteal hover:bg-brand-navy text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
              >
                Book OPD Consultation
              </Link>
              <a
                href="tel:+919759008704"
                className="px-5 py-2.5 rounded-xl border border-brand-border bg-white hover:bg-brand-ice text-brand-deepteal text-xs sm:text-sm font-bold transition-colors"
              >
                Call Hotline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
