"use client";

import React, { useState } from "react";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    facility: "",
    date: "",
    timeSlot: "morning",
    hasAyushman: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-20 bg-white" id="consultation-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-brand-ice to-white rounded-3xl border-2 border-brand-border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Guidance Side (4 Cols) */}
          <div className="lg:col-span-4 bg-brand-navy text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Priority Patient Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Direct Access to Senior Medical Consultants
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Reserve your consultation slot in advance. For acute trauma, severe facial injuries,
                or high-risk emergency distress, please contact our 24/7 hotline directly.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-cyan text-[18px]">
                    verified
                  </span>
                  <span>Zero Advance Registration Fee</span>
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
                  <span>Direct Digital Token Confirmation</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-brand-cyan tracking-wider">
                Hospital Central Call Desk:
              </span>
              <a
                className="text-lg font-extrabold text-white block hover:text-brand-cyan transition-colors"
                href="tel:+919759008704"
              >
                +91 97590 08704
              </a>
              <span className="text-xs text-white/70 block truncate">
                drhimanshumaxfax@gmail.com
              </span>
            </div>
          </div>

          {/* Right Form Side (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                Consultation &amp; Surgical Intake
              </h3>
              <p className="text-xs sm:text-sm text-brand-navy/70 mt-1">
                Select from the 11 accredited facilities and receive prompt confirmation token:
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-700 text-[32px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="space-y-1">
                    <strong className="font-extrabold text-base sm:text-lg block text-emerald-950">
                      Consultation Token Registered Successfully!
                    </strong>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      Thank you, <span className="font-bold">{formData.patientName || "Patient"}</span>.
                      Our front desk admissions team will call your phone number directly at{" "}
                      <span className="font-bold">{formData.phone || "your number"}</span> within 15
                      minutes to verify your token details and schedule your specialist appointment.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-xl border border-emerald-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-emerald-700 font-semibold block">Preferred Schedule:</span>
                    <span className="font-bold text-emerald-950">
                      {formData.date || "Scheduled Date"} •{" "}
                      {formData.timeSlot === "morning"
                        ? "Morning (09:30 AM – 01:30 PM)"
                        : formData.timeSlot === "evening"
                        ? "Evening (04:30 PM – 08:00 PM)"
                        : "Immediate Emergency Walk-In"}
                    </span>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors"
                  >
                    Register Another Token
                  </button>
                </div>
              </div>
            ) : (
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleSubmit}>
                {/* Patient Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Patient Full Name *
                  </label>
                  <input
                    className="w-full h-11 px-3.5 rounded-lg border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                    placeholder="e.g., Arvind Sharma"
                    required
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    className="w-full h-11 px-3.5 rounded-lg border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                    placeholder="+91 97590 XXXXX"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Specialty Selector (All 11 Facilities) */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Clinical Facility / Specialty *
                  </label>
                  <select
                    className="w-full h-11 px-3.5 rounded-lg border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                    required
                    value={formData.facility}
                    onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
                  >
                    <option disabled value="">
                      Choose from 11 Accredited Facilities
                    </option>
                    <option value="1">
                      1. Dental &amp; Maxillofacial Surgery (Dr. Himanshu, MDS)
                    </option>
                    <option value="2">2. General Physician &amp; Internal Medicine</option>
                    <option value="3">3. ENT (Micro-Endoscopic Ear, Nose &amp; Throat)</option>
                    <option value="4">4. Neuro Surgeon (Cranial Trauma &amp; Spine)</option>
                    <option value="5">5. Cancer Surgeon (Surgical Oncology)</option>
                    <option value="6">6. Gynaecologist &amp; High-Risk Obstetrics</option>
                    <option value="7">7. Private &amp; Deluxe AC Rooms Admission Inquiry</option>
                    <option value="8">8. Intensive Care Unit (ICU Admission / Referral)</option>
                    <option value="9">
                      9. Modular Operation Theatre (Laminar OT Scheduled Surgeries)
                    </option>
                    <option value="10">10. Advanced Ventilator Support Consultation</option>
                    <option value="11">11. 24x7 Emergency Casualty &amp; Trauma Resuscitation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Preferred Date *
                  </label>
                  <input
                    className="w-full h-11 px-3.5 rounded-lg border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                {/* Time Slot */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                    Preferred Time Window *
                  </label>
                  <select
                    className="w-full h-11 px-3.5 rounded-lg border border-brand-border bg-white text-xs sm:text-sm text-brand-navy focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all"
                    required
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option value="morning">Morning Slot (09:30 AM – 01:30 PM)</option>
                    <option value="evening">Evening Slot (04:30 PM – 08:00 PM)</option>
                    <option value="emergency">Emergency Walk-In / Immediate Triage</option>
                  </select>
                </div>

                {/* Cashless Scheme Checkbox */}
                <div className="sm:col-span-2 flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-border">
                  <input
                    className="w-4 h-4 text-brand-deepteal rounded focus:ring-brand-teal border-brand-border"
                    id="ayushman-checkbox"
                    type="checkbox"
                    checked={formData.hasAyushman}
                    onChange={(e) => setFormData({ ...formData, hasAyushman: e.target.checked })}
                  />
                  <label
                    className="text-xs text-brand-navy font-medium cursor-pointer select-none"
                    htmlFor="ayushman-checkbox"
                  >
                    I hold an{" "}
                    <strong className="text-brand-deepteal">Ayushman Bharat (PM-JAY) Golden Card</strong>{" "}
                    or private cashless health insurance.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-brand-deepteal text-white hover:bg-brand-navy transition-all font-bold text-sm shadow-md hover:shadow-lg shadow-brand-deepteal/20"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Confirm Consultation Token</span>
                  </button>
                  <span className="text-xs text-brand-navy/60 text-center sm:text-right">
                    Token dispatch &amp; confirmation phone call within 15 minutes.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
