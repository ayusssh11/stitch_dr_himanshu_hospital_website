"use client";

import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import CampusLocation from "@/components/sections/CampusLocation";

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        badge="24x7 Open Campus &amp; Helpdesk"
        title="Contact Dr. Himanshu Hospital &amp;"
        highlightText="Campus Location"
        description="Located centrally near Canara Bank in Aruna Nagar, Shanti Nagar, Etah. Reach out for OPD bookings, emergency trauma inquiries, Ayushman guidelines, or general hospital support."
        breadcrumb={[{ label: "Contact & Location" }]}
      />

      {/* Main Contact Directory Cards */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Address */}
            <div className="p-6 rounded-2xl bg-brand-ice border border-brand-border/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-deepteal flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">location_on</span>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-1.5">Campus Address</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>96, near Canara Bank</strong>, Aruna Nagar, Shanti Nagar, ETAH, Uttar Pradesh (207001)
                </p>
              </div>
              <div className="pt-4 border-t border-brand-border/40 mt-4">
                <a
                  href="https://maps.google.com/?q=Dr+Himanshu+Hospital+Aruna+Nagar+Etah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Box 2: 24/7 Phone */}
            <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-100 text-crimson flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">emergency</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">24x7 Emergency Line</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For acute facial trauma, ambulance coordination, or ICU admissions.
                </p>
                <div className="text-lg font-extrabold text-crimson mt-2">
                  +91 97590 08704
                </div>
              </div>
              <div className="pt-4 border-t border-red-100 mt-4">
                <a
                  href="tel:+919759008704"
                  className="text-xs font-bold text-crimson hover:underline inline-flex items-center gap-1"
                >
                  <span>Dial Immediately</span>
                  <span className="material-symbols-outlined text-[14px]">call</span>
                </a>
              </div>
            </div>

            {/* Box 3: Email */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-lightcyan text-brand-teal flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">mail</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">Official Email</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For medical records, TPA queries, or administrative correspondence.
                </p>
                <div className="text-xs font-bold text-brand-navy break-all mt-2">
                  drhimanshumaxfax@gmail.com
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 mt-4">
                <a
                  href="mailto:drhimanshumaxfax@gmail.com"
                  className="text-xs font-bold text-brand-teal hover:underline inline-flex items-center gap-1"
                >
                  <span>Send an Email</span>
                  <span className="material-symbols-outlined text-[14px]">send</span>
                </a>
              </div>
            </div>

            {/* Box 4: Timings & Social */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">schedule</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">Hospital Timings</h3>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Emergency / ICU:</strong> 24x7 Open</div>
                  <div><strong>OPD Desk:</strong> 9:00 AM – 8:00 PM</div>
                  <div className="text-emerald-700 font-bold">Open Monday through Sunday</div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 mt-4 flex items-center gap-2">
                <a
                  href="https://www.instagram.com/dr.himanshu_upadhyay_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-200 hover:bg-brand-teal hover:text-white text-slate-700 text-xs font-bold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/dr.himanshu.upadhyayEtah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-200 hover:bg-brand-teal hover:text-white text-slate-700 text-xs font-bold transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Landmark Section */}
      <CampusLocation />

      {/* Online Query & Feedback Form */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                Patient Support Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                Send Us An Inquiry Or Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Have a question regarding treatments, reports, or insurance empanelment? Write to us and our front desk will get back to you promptly.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">done</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{contactData.name}</strong>. Our hospital reception desk at Aruna Nagar, Etah has received your inquiry and will contact you at <strong>{contactData.phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setContactData({
                      name: "",
                      phone: "",
                      email: "",
                      subject: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="mt-3 px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={contactData.name}
                      onChange={(e) =>
                        setContactData({ ...contactData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={contactData.phone}
                      onChange={(e) =>
                        setContactData({ ...contactData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData({ ...contactData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Subject
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) =>
                        setContactData({ ...contactData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                    >
                      <option value="General Inquiry">General Hospital Inquiry</option>
                      <option value="Maxillofacial Surgery">Maxillofacial Surgery Inquiry</option>
                      <option value="Ayushman PM-JAY">Ayushman / TPA Insurance Help</option>
                      <option value="OPD Schedule">Doctor Consultation Timings</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your question or message here..."
                      value={contactData.message}
                      onChange={(e) =>
                        setContactData({ ...contactData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-deepteal hover:bg-brand-navy text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-all active:scale-98"
                  >
                    Submit Hospital Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
