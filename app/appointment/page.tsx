"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const preselectedDoctor = searchParams.get("doctor") || "";
  const preselectedFacility =
    searchParams.get("facility") || searchParams.get("dept") || "";

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "male",
    phone: "",
    department: "",
    doctor: "",
    appointmentDate: "",
    timeSlot: "morning",
    hasAyushman: false,
    symptoms: "",
  });

  const [tokenGenerated, setTokenGenerated] = useState(false);
  const [tokenNumber, setTokenNumber] = useState("");

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctor: preselectedDoctor }));
    }
    if (preselectedFacility) {
      setFormData((prev) => ({ ...prev, department: preselectedFacility }));
    }
  }, [preselectedDoctor, preselectedFacility]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(2, 4);
    setTokenNumber(`DHH-${dateStr}-${randomNum}`);
    setTokenGenerated(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const departmentsList = [
    "Dental (Oral & Maxillofacial Surgery)",
    "General Physician & Internal Medicine",
    "ENT (Ear, Nose & Throat)",
    "Neuro Surgeon (Brain & Spine Care)",
    "Cancer Surgeon (Surgical Oncology)",
    "Gynaecologist & Obstetrics",
    "Private / Deluxe AC Inpatient Rooms",
    "Intensive Care Unit (ICU Consultation)",
    "Modular OT Surgical Evaluation",
    "Other Medical Consultation",
  ];

  const doctorsList = [
    "Dr. Himanshu Upadhyay (Director & Chief MaxFax Surgeon)",
    "Dr. R. K. Sharma (MCh Neurosurgeon)",
    "Dr. Sunita Verma (MS Gynaecology & Obstetrics)",
    "Dr. Amit Saxena (MD Medicine & Critical Care)",
    "Dr. Pradeep Yadav (DNB Surgical Oncology)",
    "Dr. Alok Gupta (MS ENT Specialist)",
    "Dr. Megha Bansal (MDS Conservative Dentistry)",
    "Any Available Senior Specialist",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {tokenGenerated ? (
        /* Confirmation Voucher View */
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-emerald-500 shadow-2xl p-6 sm:p-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Registration Confirmed
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              OPD Token Reserved
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Dr. Himanshu Hospital • Aruna Nagar, Etah
            </p>
          </div>

          {/* Token Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs text-slate-500 font-semibold uppercase">Token Number:</span>
              <span className="text-xl font-extrabold text-brand-deepteal tracking-wider">
                {tokenNumber}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Patient:</span>
                <span className="font-bold text-slate-800">{formData.patientName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Mobile:</span>
                <span className="font-bold text-slate-800">{formData.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Department:</span>
                <span className="font-bold text-slate-800">{formData.department || "General Consultation"}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Preferred Slot:</span>
                <span className="font-bold text-slate-800 capitalize">
                  {formData.appointmentDate || "Today"} ({formData.timeSlot})
                </span>
              </div>
              {formData.doctor && (
                <div className="col-span-2 pt-1 border-t border-slate-100">
                  <span className="text-slate-400 block font-medium">Consultant:</span>
                  <span className="font-bold text-brand-teal">{formData.doctor}</span>
                </div>
              )}
              {formData.hasAyushman && (
                <div className="col-span-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Ayushman PM-JAY Golden Card Holder (Bring Original Aadhar &amp; Card)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Reporting Guidance */}
          <div className="text-xs text-slate-600 bg-brand-ice p-4 rounded-xl border border-brand-border text-left space-y-1">
            <div className="font-bold text-brand-navy">Instructions for Visit:</div>
            <div>• Please report to <strong>Registration Counter #1</strong> at Dr. Himanshu Hospital, 96, Aruna Nagar, Etah.</div>
            <div>• Show this token number or mention your registered phone number.</div>
            <div>• For any immediate changes or urgent trauma, call <strong>+91 97590 08704</strong>.</div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+919759008704"
              className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-darknavy text-white text-xs font-bold transition-all shadow-md"
            >
              Call Hospital: +91 97590 08704
            </a>
            <button
              onClick={() => {
                setTokenGenerated(false);
                setFormData({
                  patientName: "",
                  age: "",
                  gender: "male",
                  phone: "",
                  department: "",
                  doctor: "",
                  appointmentDate: "",
                  timeSlot: "morning",
                  hasAyushman: false,
                  symptoms: "",
                });
              }}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all"
            >
              Book Another Token
            </button>
          </div>
        </div>
      ) : (
        /* The Booking Form */
        <div className="bg-white rounded-3xl border border-brand-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Guidance Panel */}
          <div className="lg:col-span-4 bg-brand-navy text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                OPD &amp; Surgical Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Schedule Your Appointment
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Book a consultation token in advance for Dr. Himanshu Upadhyay or our specialist consultants.
              </p>

              <div className="space-y-3 pt-2 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-cyan text-[18px]">
                    verified
                  </span>
                  <span>Zero Advance Booking Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-cyan text-[18px]">
                    verified
                  </span>
                  <span>Ayushman (PM-JAY) Golden Card Honored</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-cyan text-[18px]">
                    verified
                  </span>
                  <span>Priority Token Allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-cyan text-[18px]">
                    verified
                  </span>
                  <span>Open 7 Days a Week (Mon-Sun)</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs space-y-2">
              <div className="font-bold text-brand-cyan flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-red-400">emergency</span>
                <span>Acute Emergency or Facial Trauma?</span>
              </div>
              <p className="text-white/70">
                Do not wait for an OPD slot. Call our 24/7 Casualty Hotline directly:
              </p>
              <a
                href="tel:+919759008704"
                className="block text-center py-2 px-3 bg-crimson hover:bg-red-700 text-white font-extrabold rounded-lg transition-colors"
              >
                +91 97590 08704
              </a>
            </div>
          </div>

          {/* Right Input Form */}
          <div className="lg:col-span-8 p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Patient Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.patientName}
                    onChange={(e) =>
                      setFormData({ ...formData, patientName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                  />
                </div>

                {/* Age & Gender */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="110"
                    placeholder="e.g. 35"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Mobile Number */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Contact Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-400 text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Department Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Select Department / Facility *
                  </label>
                  <select
                    required
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">-- Choose Department --</option>
                    {departmentsList.map((dept, i) => (
                      <option key={i} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Select Specialist Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) =>
                      setFormData({ ...formData, doctor: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">-- Select Specialist --</option>
                    {doctorsList.map((doc, i) => (
                      <option key={i} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Consultation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.appointmentDate}
                    onChange={(e) =>
                      setFormData({ ...formData, appointmentDate: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>

                {/* Preferred Slot */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="evening">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>

                {/* Symptoms / Notes */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Brief Symptoms / Concerns (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe symptoms, previous surgery or fracture, facial injury details, etc."
                    value={formData.symptoms}
                    onChange={(e) =>
                      setFormData({ ...formData, symptoms: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>

                {/* Ayushman Checkbox */}
                <div className="sm:col-span-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="hasAyushman"
                    checked={formData.hasAyushman}
                    onChange={(e) =>
                      setFormData({ ...formData, hasAyushman: e.target.checked })
                    }
                    className="mt-1 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                  <label htmlFor="hasAyushman" className="text-xs text-emerald-900 font-medium">
                    <span className="font-bold">Patient is an Ayushman Bharat (PM-JAY) Golden Card holder.</span>
                    <span className="block text-emerald-800/80 text-[11px] mt-0.5">
                      Check this box to alert our Ayushman helpdesk for zero-cash verification upon your arrival.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-deepteal hover:bg-brand-navy text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-brand-deepteal/25 transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    confirmation_number
                  </span>
                  <span>Generate OPD Consultation Token</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="Online Patient Registration"
        title="Book Specialist Consultation &amp;"
        highlightText="OPD Token"
        description="Reserve your consultation with Dr. Himanshu Upadhyay and specialist doctors in advance. Walk-ins and 24x7 emergencies are always welcome at Dr. Himanshu Hospital, Etah."
        breadcrumb={[{ label: "Book Appointment" }]}
      />

      <Suspense
        fallback={
          <div className="py-20 text-center text-sm font-semibold text-slate-500">
            Loading appointment console...
          </div>
        }
      >
        <AppointmentFormContent />
      </Suspense>
    </div>
  );
}
