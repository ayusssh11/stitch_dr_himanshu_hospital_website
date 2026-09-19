"use client";

import React, { useState } from "react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" data-purpose="appointment-booking-form" id="book-appointment">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Card Container matching the clean form card in reference snapshot */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-10">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Book an Appointment
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Select a doctor, choose an available time, and fill out your details. Or call us directly at{" "}
              <a href="tel:+919759008704" className="text-brand-teal font-bold hover:underline">
                +91 97590 08704
              </a>
              .
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Appointment Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you! Our hospital registration desk will call you or connect on WhatsApp shortly
                to confirm your consultation slot.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href="https://wa.me/918445234962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  <i className="fa-brands fa-whatsapp mr-1.5"></i> Chat on WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors"
                >
                  Book Another
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" data-purpose="registration-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Doctor Selection Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Doctor / Department *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <i className="fa-solid fa-user-doctor text-xs"></i>
                    </span>
                    <select
                      className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Doctor / Department
                      </option>
                      <option value="dr-himanshu">
                        Dr. Himanshu (Chief Oral &amp; Maxillofacial Surgeon)
                      </option>
                      <option value="dr-sharma">Dr. R. K. Sharma (Neuro Surgery)</option>
                      <option value="dr-verma">Dr. Sunita Verma (Gynaecology &amp; OBS)</option>
                      <option value="dr-saxena">Dr. Amit Saxena (General Medicine)</option>
                      <option value="dr-yadav">Dr. Pradeep Yadav (Cancer Surgery)</option>
                      <option value="dr-gupta">Dr. Alok Gupta (ENT Specialist)</option>
                      <option value="dr-bansal">Dr. Megha Bansal (Dentistry &amp; Rehab)</option>
                      <option value="dr-singh">Dr. N. K. Singh (ICU &amp; Critical Care)</option>
                    </select>
                  </div>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <i className="fa-solid fa-user text-xs"></i>
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                      placeholder="Your Name"
                      required
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <i className="fa-solid fa-phone text-xs"></i>
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                      placeholder="10 Digit Mobile Number"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <i className="fa-solid fa-envelope text-xs"></i>
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                      placeholder="name@domain.com"
                      type="email"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes / Reason for Consultation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Symptoms or Reason for Consultation
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-3 text-slate-400">
                    <i className="fa-regular fa-comment-dots text-xs"></i>
                  </span>
                  <textarea
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                    placeholder="Briefly specify medical problem or required surgery..."
                    rows={3}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="w-full sm:w-auto px-8 py-3 bg-brand-navy hover:bg-brand-teal text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md transition-colors duration-200 active:scale-95"
                  type="submit"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
