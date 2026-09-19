export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  focus: string;
  qualifications: string;
  image: string;
  type: "core" | "visiting";
  badge?: string;
  badgeColor?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-himanshu",
    name: "Dr. Himanshu",
    specialty: "Oral & Maxillofacial Surgeon",
    focus: "Facial Trauma & Reconstructive Surgery",
    qualifications: "BDS, MDS (Maxillofacial), FIBOMS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ24fCOba-EZSROLPc74tfYOrQpFYpMWnGHtjx1-30_TKDxVAU0kVN_E_Owj7chll7zBo_xD1zyAmPq9nPW23ELhvZ1ZKOA3QumcFivr-YmqVY_1UPi1p12-y-MrkNfvYjBQhJ8fFh8JTkicGAROZQ8h_zrnGRM8ZsGMPhSoU-6TYdylkzYJWeghJDcNXuMHJQldgst6CakFRuMzw46luPTInxF6Ixul2AXQrXzMy1HqIlEoZRpie5aQ",
    type: "core",
    badge: "Chief Surgeon",
    badgeColor: "bg-brand-teal",
  },
  {
    id: "dr-sharma",
    name: "Dr. R. K. Sharma",
    specialty: "Neuro & Spine Surgery",
    focus: "Brain & Spinal Trauma Care",
    qualifications: "MBBS, MS (General Surgery), MCh (Neuro)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBqpC2lAYBLvp5RBI6u2_dl1eaHa84Xgx2V_q1-h18EayL0uuvj38YLE-WigbmpBPs9HIPhmpdtxEmBcdZmVFjd4sWPrsAwSCEGtKIXqtxASRhB7dUjVGWQZOdbpSJNpwX09ZAq4v-vriNP9C7Y9Tfiq48NLDN2iWs6HvaEp55z9oivMJiuRrBlvqTVFwg4mKlGWrj2l0Ppszfft9I_o5EQRygTKlrZc9Bx6fmIHkW4zAHGW5A1-mTg",
    type: "core",
  },
  {
    id: "dr-verma",
    name: "Dr. Sunita Verma",
    specialty: "Gynaecology & Obstetrics",
    focus: "High-Risk Pregnancy & Laparoscopy",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz21l8dF1sV9JQNfXb3wOjHZl3snBbdt0OL7B1avLxQ7lVmmiFu-U5bnsjhEz5aaDnk4pUDo3q0LI1RDZx59qTwoKGeG8m6tkYfs_dRX-HA-Jb4rVasQePbEyyi0Qub1shp8wRCOGeKT0-fLgHT44uKmk7ZfVOceCgfEEAJ0MG9T9tDs7sNWySblIbmEQl-HXtK6SG0CJKif9sswOZgmm7JFWEw1fdIEFzHjT6XXZlS9U2QpUiQ6xZJA",
    type: "core",
  },
  {
    id: "dr-saxena",
    name: "Dr. Amit Saxena",
    specialty: "Internal Medicine & Critical Care",
    focus: "Diabetes, Cardiology & ICU Specialist",
    qualifications: "MBBS, MD (Medicine), C.C.M",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3rT6L7bmQ5fD2j9G5jBi7DvWwHZW03cRc53JMY99lS9xKUQlK9y0y9qLJGdCbVD1kii3IuHyXBgNviKifWam_RiXN_NXMFSCzcbV9JBGxPlVL84zMztRoVT7uiJILMZPAy4eVVQN9yHJWf1scNL-8z_djkZc5HFkAugnITuTXc70ml1kvtKG-BGFLVzm93uDI_XtFppkfITjlTfSKo_X6dinuqX3k29ah9hC0jYTb_vfuaUsVVQx3Yw",
    type: "core",
  },
  {
    id: "dr-yadav",
    name: "Dr. Pradeep Yadav",
    specialty: "Surgical Oncologist (Cancer)",
    focus: "Head, Neck & Breast Cancer Surgery",
    qualifications: "MBBS, MS (Surgery), DNB (Surgical Oncology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDBVn1dnNt_y9y88bdAT7oT7Cqmb8n_ezkAb47Lzc7U7g_4aGfk12BnovWhoowALE6fA7UuVn5oP5sqPXTrw6c1wF9JGhYe-RaO--8-hVqqL05PipRPZcOptW5SR2Wa14rF2ESIoHc8Guj96bTXjRViTUZZZ3xcBuRaSZ8V9XjcxA2N9DGPlv6PhD26XHHgyJ0xwBVnxEGTWQ23QSYb413WMGSvVdfno-Gdd1z6rsBwhobtiP67Jvemg",
    type: "visiting",
    badge: "Visiting Specialist",
    badgeColor: "bg-blue-600",
  },
  {
    id: "dr-gupta",
    name: "Dr. Alok Gupta",
    specialty: "Senior ENT Specialist",
    focus: "Micro-Ear & Endoscopic Sinus Surgery",
    qualifications: "MBBS, MS (ENT, Otorhinolaryngology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGP0A6dehJj3BQ6i55kEtv38IcVtmEC1jBA47q4X3MgKlbu2EXysMC8LqjjmQ-j31lR_hcB2hW6F9wlSGuciTcg5O-Eubd6OTOZF5MEBi35KOUU9WGNFgxOS7T6vuAB0v4HexfFm2kklEIpYEpq61o0UvU941ywq_Xl9PmfwCnTKf5NZ59cIKHHRjqUJ3STbtMhqfgDEGRQbYVDsZzMXSRYUlbtM717MifFXr9Fg2nBHLPudpOftsTvw",
    type: "visiting",
    badge: "Visiting Specialist",
    badgeColor: "bg-blue-600",
  },
  {
    id: "dr-bansal",
    name: "Dr. Megha Bansal",
    specialty: "Dentistry & Oral Rehabilitation",
    focus: "Cosmetic & Conservative Dentistry",
    qualifications: "BDS, MDS, FICD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ecfA0acsr1RCXlAT4Hbf5Bc4ZZFqPKernU_ABl99fjy7NoN86JO7mu1kFq5Z7sBYnt8eHXti_8KH0HKiaDubxl8xFrc7XOh87orIZoEv3qq78q_Whsq-K3dgh3R5OMceCyqzOD1yISd1UVQjbmAWRYE3c3N4lblXfmbLpmW8umimMlm9U2nHbsl-7ngplIae4h07oi-lyw1_X1_BACQEGRHLDMshCZuu47s9ObanzbiERs017G54BQ",
    type: "visiting",
    badge: "Visiting Specialist",
    badgeColor: "bg-blue-600",
  },
  {
    id: "dr-singh",
    name: "Dr. N. K. Singh",
    specialty: "Anaesthesiology & Critical Care",
    focus: "Head of Level-3 Telemetry ICU",
    qualifications: "MBBS, MD (Anaesthesiology & Resuscitation)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhc8N9IJ301InEk18wAgOaEUDgsmtzbUNstEr-6oNV0hSG_GYb7RHoJyADNp2ekTIN1N1jXCa2kunaw0ICc2v1aMeYBm834oVF2TftPfrjg-a_kFEFYgA8SwGWSX_Ro_HssoRNwwfvkMTaX_qVNZzG4nz7wjN_YLOve9iX_CCPJfoILOWuOWZRLB2DJ9W7G8Y-Y2iYi2HlSrPPPcYipDQu27dNG0iKRtBePctwWOMYIfaQjhrY3kP7hg",
    type: "visiting",
    badge: "Visiting Specialist",
    badgeColor: "bg-blue-600",
  },
];
