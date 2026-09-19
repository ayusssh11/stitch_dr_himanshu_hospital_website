import React from "react";

export default function CampusLocation() {
  return (
    <section className="py-14 sm:py-20 bg-brand-ice border-t border-brand-border/60" id="campus-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
                Campus Access &amp; Navigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">
                Hospital Campus &amp; Emergency Dispatch Hub
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/70 mt-1">
                Centrally located in Aruna Nagar, Etah for smooth ambulance and patient access from
                Kasganj, Aliganj, and Shikohabad routes.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-lightcyan text-brand-deepteal hover:bg-brand-deepteal hover:text-white transition-all text-xs font-bold border border-brand-border self-start md:self-auto"
              href="https://maps.google.com/?q=Dr+Himanshu+Hospital+Aruna+Nagar+Etah"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Map Card (7 Cols) */}
            <div className="lg:col-span-7 h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-brand-border relative shadow-xs bg-brand-ice">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV_JRmdil0HVB-4rjAUKOc6CXdaGUODQKmIbv6qPF44EtSJg5StCYOp_VFTW83qJ81TyBGTk7e_eFVakwEO-N4QyssMANRh3bO6IUe8IJdX4Z1oMwtAUfW0YF7pD8QP27Qtb8LjnfSgXGl17bXDqiMG8XIxztFa5zlyywJxZSErJZeo4ZQc-djaDfgohtSGBQEKRdNhCDeSUYwWxOMo-vyElOtLTPsirEEXrhB6nBky5DKS_VdhrbDjQ')",
                }}
              ></div>
              {/* Overlay Location Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-brand-border shadow-md flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-deepteal text-[26px]">
                  location_on
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-brand-navy">
                    Dr. Himanshu Hospital
                  </div>
                  <div className="text-[11px] text-brand-navy/70">
                    96, near Canara Bank, Aruna Nagar, Shanti Nagar, ETAH, U.P. (207001)
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines & Direct Numbers (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="bg-brand-ice rounded-2xl p-5 border border-brand-border space-y-3">
                <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Campus Transit Highlights
                </h4>
                <div className="flex items-start gap-2.5 text-xs text-brand-navy/80">
                  <span className="material-symbols-outlined text-brand-deepteal text-[18px] shrink-0 mt-0.5">
                    near_me
                  </span>
                  <span>
                    <strong>Landmark:</strong> Near Canara Bank, Aruna Nagar, Shanti Nagar, Etah. Open 24 hours Monday to Sunday.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-brand-navy/80">
                  <span className="material-symbols-outlined text-brand-deepteal text-[18px] shrink-0 mt-0.5">
                    accessible_forward
                  </span>
                  <span>
                    <strong>Stretcher Ramp:</strong> Direct level-zero ambulance bay into casualty
                    resuscitation room without stairs.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-brand-navy/80">
                  <span className="material-symbols-outlined text-brand-deepteal text-[18px] shrink-0 mt-0.5">
                    local_pharmacy
                  </span>
                  <span>
                    <strong>24x7 Pharmacy:</strong> Fully-stocked medical store adjacent to the
                    admission counter.
                  </span>
                </div>
              </div>

              {/* Quick Action Dispatch Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  className="p-3.5 rounded-xl bg-brand-navy text-white hover:bg-brand-darknavy transition-colors flex items-center gap-3 shadow-xs border border-brand-cyan/30"
                  href="tel:+919759008704"
                >
                  <span className="material-symbols-outlined text-brand-cyan text-[24px]">call</span>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider opacity-90">
                      Ambulance Hotline
                    </span>
                    <span className="text-xs font-bold">+91 97590 08704</span>
                  </div>
                </a>
                <a
                  className="p-3.5 rounded-xl bg-brand-lightcyan text-brand-navy hover:bg-brand-border transition-colors flex items-center gap-3 border border-brand-border shadow-xs"
                  href="mailto:drhimanshumaxfax@gmail.com"
                >
                  <span className="material-symbols-outlined text-brand-deepteal text-[24px]">
                    mail
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-brand-navy/60">
                      Official Email
                    </span>
                    <span className="text-xs font-bold truncate block">
                      drhimanshumaxfax@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
