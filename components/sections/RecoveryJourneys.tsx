import React from "react";

export default function RecoveryJourneys() {
  return (
    <section className="py-14 sm:py-20 bg-brand-ice border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-deepteal">
            Real Clinical Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
            Documented Patient Recovery Journeys
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/75 mt-2">
            Verified recovery stories from families across Etah, Kasganj, and neighboring towns
            treated at Dr. Himanshu Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-lightcyan text-brand-deepteal">
                  Trauma Reconstruction
                </span>
                <div className="flex text-amber-500 text-xs">
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-brand-navy leading-snug">
                &ldquo;My son&apos;s jaw was rebuilt without having to rush to Agra.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed">
                &ldquo;Following a heavy highway bike accident near Nidhauli road, my son had
                multiple broken jaw bones. Dr. Himanshu performed open titanium plating late at
                night. Within 10 days, his bite was fully restored.&rdquo;
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-navy block">
                  Ramesh Chandra Sharma
                </span>
                <span className="text-[10px] text-brand-navy/60">
                  Awagarh, Etah • Mandibular Fixation
                </span>
              </div>
              <span className="material-symbols-outlined text-brand-teal text-[20px]">
                verified
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-lightcyan text-brand-teal">
                  ICU &amp; Ventilator Recovery
                </span>
                <div className="flex text-amber-500 text-xs">
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-brand-navy leading-snug">
                &ldquo;Severe respiratory failure reversed in the ICU.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed">
                &ldquo;My 68-year-old father suffered severe bilateral pneumonia with acute
                delirium. He was put on invasive mechanical ventilation within 20 minutes of arrival.
                The continuous intensivist care saved his life.&rdquo;
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-navy block">Sunil Kumar Yadav</span>
                <span className="text-[10px] text-brand-navy/60">
                  Aruna Nagar, Etah • Level-III ICU
                </span>
              </div>
              <span className="material-symbols-outlined text-brand-teal text-[20px]">
                verified
              </span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-6 border border-brand-border shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand-lightcyan text-brand-navy">
                  High-Risk Obstetrics
                </span>
                <div className="flex text-amber-500 text-xs">
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                  <span className="material-symbols-outlined text-[16px]">star</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-brand-navy leading-snug">
                &ldquo;Painless, safe delivery despite acute pregnancy complications.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed">
                &ldquo;We were turned away elsewhere due to sudden severe hypertension at 37 weeks.
                Dr. Himanshu Hospital&apos;s gynaecology and surgical team performed a prompt, safe
                Caesarean. Mother and newborn both healthy.&rdquo;
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-navy block">Pooja &amp; Amit Verma</span>
                <span className="text-[10px] text-brand-navy/60">
                  Ganjdundwara Road, Etah • Maternity
                </span>
              </div>
              <span className="material-symbols-outlined text-brand-teal text-[20px]">
                verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
