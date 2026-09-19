"use client";

import React, { useState } from "react";

interface Doctor {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  image: string;
  type: "core" | "visiting";
  badge?: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Himanshu",
    role: "Chief Oral & Maxillofacial Surgeon & Hospital Director",
    specialty: "Facial Trauma, Jaw Surgery & Reconstructive Specialist",
    credentials: "BDS, MDS (Oral & Maxillofacial Surgery), FIBOMS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ24fCOba-EZSROLPc74tfYOrQpFYpMWnGHtjx1-30_TKDxVAU0kVN_E_Owj7chll7zBo_xD1zyAmPq9nPW23ELhvZ1ZKOA3QumcFivr-YmqVY_1UPi1p12-y-MrkNfvYjBQhJ8fFh8JTkicGAROZQ8h_zrnGRM8ZsGMPhSoU-6TYdylkzYJWeghJDcNXuMHJQldgst6CakFRuMzw46luPTInxF6Ixul2AXQrXzMy1HqIlEoZRpie5aQ",
    type: "core",
    badge: "Director & Chief MaxFax Surgeon",
  },
  {
    name: "Dr. R. K. Sharma",
    role: "Neuro & Spine Surgery",
    specialty: "Brain & Spinal Trauma Care",
    credentials: "MBBS, MS (General Surgery), MCh (Neuro)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBqpC2lAYBLvp5RBI6u2_dl1eaHa84Xgx2V_q1-h18EayL0uuvj38YLE-WigbmpBPs9HIPhmpdtxEmBcdZmVFjd4sWPrsAwSCEGtKIXqtxASRhB7dUjVGWQZOdbpSJNpwX09ZAq4v-vriNP9C7Y9Tfiq48NLDN2iWs6HvaEp55z9oivMJiuRrBlvqTVFwg4mKlGWrj2l0Ppszfft9I_o5EQRygTKlrZc9Bx6fmIHkW4zAHGW5A1-mTg",
    type: "core",
  },
  {
    name: "Dr. Sunita Verma",
    role: "Gynaecology & Obstetrics",
    specialty: "High-Risk Pregnancy & Laparoscopy",
    credentials: "MBBS, MS (Obstetrics & Gynaecology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz21l8dF1sV9JQNfXb3wOjHZl3snBbdt0OL7B1avLxQ7lVmmiFu-U5bnsjhEz5aaDnk4pUDo3q0LI1RDZx59qTwoKGeG8m6tkYfs_dRX-HA-Jb4rVasQePbEyyi0Qub1shp8wRCOGeKT0-fLgHT44uKmk7ZfVOceCgfEEAJ0MG9T9tDs7sNWySblIbmEQl-HXtK6SG0CJKif9sswOZgmm7JFWEw1fdIEFzHjT6XXZlS9U2QpUiQ6xZJA",
    type: "core",
  },
  {
    name: "Dr. Amit Saxena",
    role: "Internal Medicine & Critical Care",
    specialty: "Diabetes, Cardiology & ICU Specialist",
    credentials: "MBBS, MD (Medicine), C.C.M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3rT6L7bmQ5fD2j9G5jBi7DvWwHZW03cRc53JMY99lS9xKUQlK9y0y9qLJGdCbVD1kii3IuHyXBgNviKifWam_RiXN_NXMFSCzcbV9JBGxPlVL84zMztRoVT7uiJILMZPAy4eVVQN9yHJWf1scNL-8z_djkZc5HFkAugnITuTXc70ml1kvtKG-BGFLVzm93uDI_XtFppkfITjlTfSKo_X6dinuqX3k29ah9hC0jYTb_vfuaUsVVQx3Yw",
    type: "core",
  },
  {
    name: "Dr. Pradeep Yadav",
    role: "Surgical Oncologist (Cancer)",
    specialty: "Head, Neck & Breast Cancer Surgery",
    credentials: "MBBS, MS (Surgery), DNB (Surgical Oncology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDBVn1dnNt_y9y88bdAT7oT7Cqmb8n_ezkAb47Lzc7U7g_4aGfk12BnovWhoowALE6fA7UuVn5oP5sqPXTrw6c1wF9JGhYe-RaO--8-hVqqL05PipRPZcOptW5SR2Wa14rF2ESIoHc8Guj96bTXjRViTUZZZ3xcBuRaSZ8V9XjcxA2N9DGPlv6PhD26XHHgyJ0xwBVnxEGTWQ23QSYb413WMGSvVdfno-Gdd1z6rsBwhobtiP67Jvemg",
    type: "visiting",
  },
  {
    name: "Dr. Alok Gupta",
    role: "Senior ENT Specialist",
    specialty: "Micro-Ear & Endoscopic Sinus Surgery",
    credentials: "MBBS, MS (ENT, Otorhinolaryngology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGP0A6dehJj3BQ6i55kEtv38IcVtmEC1jBA47q4X3MgKlbu2EXysMC8LqjjmQ-j31lR_hcB2hW6F9wlSGuciTcg5O-Eubd6OTOZF5MEBi35KOUU9WGNFgxOS7T6vuAB0v4HexfFm2kklEIpYEpq61o0UvU941ywq_Xl9PmfwCnTKf5NZ59cIKHHRjqUJ3STbtMhqfgDEGRQbYVDsZzMXSRYUlbtM717MifFXr9Fg2nBHLPudpOftsTvw",
    type: "visiting",
  },
  {
    name: "Dr. Megha Bansal",
    role: "Dentistry & Oral Rehabilitation",
    specialty: "Cosmetic & Conservative Dentistry",
    credentials: "BDS, MDS, FICD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ecfA0acsr1RCXlAT4Hbf5Bc4ZZFqPKernU_ABl99fjy7NoN86JO7mu1kFq5Z7sBYnt8eHXti_8KH0HKiaDubxl8xFrc7XOh87orIZoEv3qq78q_Whsq-K3dgh3R5OMceCyqzOD1yISd1UVQjbmAWRYE3c3N4lblXfmbLpmW8umimMlm9U2nHbsl-7ngplIae4h07oi-lyw1_X1_BACQEGRHLDMshCZuu47s9ObanzbiERs017G54BQ",
    type: "visiting",
  },
  {
    name: "Dr. N. K. Singh",
    role: "Anaesthesiology & Critical Care",
    specialty: "Head of Level-3 Telemetry ICU",
    credentials: "MBBS, MD (Anaesthesiology & Resuscitation)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhc8N9IJ301InEk18wAgOaEUDgsmtzbUNstEr-6oNV0hSG_GYb7RHoJyADNp2ekTIN1N1jXCa2kunaw0ICc2v1aMeYBm834oVF2TftPfrjg-a_kFEFYgA8SwGWSX_Ro_HssoRNwwfvkMTaX_qVNZzG4nz7wjN_YLOve9iX_CCPJfoILOWuOWZRLB2DJ9W7G8Y-Y2iYi2HlSrPPPcYipDQu27dNG0iKRtBePctwWOMYIfaQjhrY3kP7hg",
    type: "visiting",
  },
];

export default function DoctorsSection() {
  const [filter, setFilter] = useState<"all" | "core" | "visiting">("all");

  const displayedDoctors =
    filter === "all" ? doctors : doctors.filter((d) => d.type === filter);

  return (
    <section className="py-20 bg-white" data-purpose="medical-specialists" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            Dedicated Care Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Specialists
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Our team of highly qualified and experienced surgical doctors is committed to delivering
            precision healthcare with human warmth.
          </p>

          {/* Toggle buttons pill matching reference */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 mt-2">
            <button
              className={`px-5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === "all" || filter === "core"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => setFilter("core")}
            >
              Core Faculty
            </button>
            <button
              className={`px-5 py-1.5 text-xs font-bold rounded-full transition-all ${
                filter === "visiting"
                  ? "bg-brand-navy text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => setFilter("visiting")}
            >
              Visiting Consultants
            </button>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 bg-slate-100 overflow-hidden relative group">
                <img
                  alt={`${doc.name} - ${doc.role}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  src={doc.image}
                />
                {doc.badge && (
                  <div className="absolute top-3 left-3 bg-brand-teal text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {doc.badge}
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col text-center">
                <h3 className="text-base font-extrabold text-slate-900">{doc.name}</h3>
                <span className="text-xs font-bold text-brand-teal block mt-1">{doc.role}</span>
                <p className="text-[11px] text-slate-600 font-medium mt-0.5">{doc.specialty}</p>
                <p className="text-[10px] text-slate-400 font-medium mt-1">{doc.credentials}</p>
                <div className="mt-auto pt-4 flex items-center justify-center gap-2">
                  <a
                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-teal hover:border-brand-teal text-xs"
                    href="tel:+919759008704"
                    title={`Call for appointment with ${doc.name}`}
                  >
                    <i className="fa-solid fa-phone"></i>
                  </a>
                  <a
                    className="px-4 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold hover:bg-brand-teal transition-colors"
                    href="#book-appointment"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
