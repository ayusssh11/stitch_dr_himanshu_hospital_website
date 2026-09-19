# Walkthrough - Dr. Himanshu Hospital Next.js Website

We have implemented the full high-fidelity website for **Dr. Himanshu Hospital** using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, strictly matching the requested design and branding.

---

## 🎨 Theme & Brand Identity

- **Color Palette**:
  - `brand-teal`: `#008891`
  - `brand-deepteal`: `#007A87`
  - `brand-darkteal`: `#005e68`
  - `brand-navy`: `#0A1E34`
  - `brand-darknavy`: `#061322`
  - `brand-cyan`: `#00B4D8`
  - `brand-lightcyan`: `#E6F7F9`
  - `brand-ice`: `#F0F9FA`
  - `brand-border`: `#CBE8EB`
  - `crimson`: `#B91C1C`
- **Typography & Icons**:
  - **Fonts**: *Plus Jakarta Sans* via `next/font/google`
  - **Icons**: *Google Material Symbols Outlined*

---

## 🏗️ Structure & Implemented Components

1. **[TopBar.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/layout/TopBar.tsx)**
   - 24x7 Trauma & Facial Injury Hotline: `+91 97590 08704` with live beacon pulse.
   - Campus location: `96, Aruna Nagar, Etah (U.P)`.
   - Ayushman Bharat PM-JAY Empaneled 100% Cashless Treatment badge.

2. **[Header.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/layout/Header.tsx)**
   - Sticky navigation header with official Dr. Himanshu Hospital logo.
   - Links to all primary sections (`#overview`, `#maxfax-wing`, `#facilities`, `#critical-icu`, `#trauma-protocol`, `#ayushman-desk`, `#campus-location`).
   - Quick CTAs: *Trauma Desk* (`tel:+919759008704`) and *Book OPD / OT* (`#consultation-form`).
   - Responsive mobile drawer navigation menu.

3. **[HeroSection.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/HeroSection.tsx)**
   - High-Tech Surgical Suite Embedded Hero with entrance atrium backdrop.
   - Headline: *"Transforming Facial Trauma, Oral Reconstruction & Critical Care in Western U.P."*
   - Trust metrics: *15,000+ Surgeries & OPD*, *Class 100 Laminar Flow OT*, *Level-III ICU & Ventilators*, *100% Free PM-JAY Ayushman*.
   - Modular OT photo showcase with live positive air pressure status badge and surgical traumatology infrastructure specs.

4. **[TriageNavigator.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/TriageNavigator.tsx)**
   - Interactive intake console with 4 triage tabs:
     - *Facial / Jaw Trauma* (Priority 1 Trauma Triage, Door-to-OT under 20 mins)
     - *Critical Care & ICU* (Level-III ICU & Ventilators)
     - *Multispecialty OPD* (Same-day diagnostic workups)
     - *Ayushman PM-JAY* (100% cashless coverage check)

5. **[MaxFaxSuperSpecialty.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/MaxFaxSuperSpecialty.tsx)**
   - Western UP's Apex Facial Trauma & Craniofacial Reconstructive Wing.
   - AO CMF rigid titanium osteosynthesis breakdown.
   - 4 specialty areas: Orthognathic surgery, TMJ arthroscopy & ankylosis release, oral oncology, and zygomatic/basal complex implants.
   - Profile card for **Dr. Himanshu** (BDS, MDS Oral & Maxillofacial Surgery, AOMSI Fellow, AO CMF Member, Ex-PGIMS Faculty) with his studio portrait (`public/dr himashu .png`), clinical quote, and consultation timings.
   - Technology suite bar: Digital OPG & 3D C-Arm, Piezosurgery® saws, Door-to-OT response time, and surgical loupes/microvascular OT.

6. **[FacilitiesSection.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/FacilitiesSection.tsx)**
   - The 11 accredited facilities:
     1. Dental & Maxillofacial Surgery
     2. General Physician & Internal Medicine
     3. ENT (Ear, Nose & Throat)
     4. Neuro Surgeon & Spine Care
     5. Cancer Surgeon (Surgical Oncology)
     6. Gynaecologist & Obstetrics
     7. Private & Deluxe AC Rooms
     8. Intensive Care Unit (ICU)
     9. Modular Operation Theatres (OT)
     10. Advanced Ventilator Facilities
     11. 24x7 Emergency & Trauma Care Bay

7. **[CriticalCareSection.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/CriticalCareSection.tsx)**
   - Level-III Advanced Telemetry ICU room visual.
   - Laminar airflow Class-100 HEPA filtration, ABG testing telemetry, and automated micro-infusion syringe pumps.

8. **[TraumaTimeline.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/TraumaTimeline.tsx)**
   - 4-step emergency golden-hour protocol (Arrival & Immediate Triage < 3 mins, Bedside Ultrasound & Imaging, Direct Modular OT/ICU Access, Intensivist-Led Post-Op Recovery).
   - 24-Hour Ambulance Hotline Banner (`+91 97590 08704`).

9. **[AyushmanDesk.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/AyushmanDesk.tsx)**
   - PM-JAY ₹5,00,000 cashless hospitalization details.
   - 8 private TPA network partners (Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, Bajaj Allianz, Vidal Health, Paramount).
   - On-site insurance helpdesk and document requirements.

10. **[RecoveryJourneys.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/RecoveryJourneys.tsx)**
    - 3 documented recovery testimonials with procedures and 5-star patient satisfaction ratings.

11. **[ConsultationForm.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/ConsultationForm.tsx)**
    - Interactive appointment & surgical intake registration.
    - Specialty selector covering all 11 facilities, date picker, time slot, and Ayushman holder checkbox.
    - Verified registration state banner with confirmation feedback.

12. **[CampusLocation.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/sections/CampusLocation.tsx)**
    - Map overview of `96, Aruna Nagar, ETAH, U.P. (207001)`.
    - Landmark directions, stretcher zero-level ambulance ramp, and 24x7 pharmacy notes.

13. **[Footer.tsx](file:///Users/ayushchauhan/codes/stitch_dr_himanshu_hospital_website/components/layout/Footer.tsx)**
    - Dark navy branding with official logo, accredited units links, hospital OPD & trauma timings, contact details, and copyright.

---

## 🚀 Verification & Results

- **Build Check**: `npm run build` completed with code `0`, generating static pages cleanly without warnings or errors.
- **Local Dev Server**: Verified live on `http://localhost:3002` returning `HTTP 200 OK` with full hydrated components.
