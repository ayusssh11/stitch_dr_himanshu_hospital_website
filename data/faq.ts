export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const faqs: FaqItem[] = [
  {
    question: "What are Dr. Himanshu Hospital's OPD and emergency hours?",
    answer:
      "Our Outpatient Department (OPD) operates from 9:00 AM to 8:00 PM Monday through Saturday. The Casualty, Emergency, Trauma care, and Intensive Care Units are open 24 Hours a Day, 365 Days a Year.",
    defaultOpen: true,
  },
  {
    question: "Do you accept Ayushman Bharat PM-JAY Golden Card?",
    answer:
      "Yes, Dr. Himanshu Hospital is an active empanelled hospital under Ayushman Bharat PM-JAY. Eligible cardholders receive 100% cashless treatment across covered medical and surgical procedures. Please present your Ayushman Golden Card and Aadhaar card at our help desk.",
  },
  {
    question: "How can I book an appointment with Dr. Himanshu?",
    answer:
      "You can book an appointment instantly using the booking form below, or by calling our direct registration desk at +91 97590 08704, or via our 24/7 WhatsApp concierge.",
  },
  {
    question: "What facilities are available for trauma and fracture cases?",
    answer:
      "We feature a dedicated trauma bay, high-resolution digital X-ray, specialized maxillofacial plating systems, orthopedic C-arm image intensifiers, and immediate blood cross-matching protocols.",
  },
  {
    question: "Are private and deluxe air-conditioned inpatient rooms available?",
    answer:
      "Yes, we provide General Wards, Semi-Private Rooms, and Fully Furnished Deluxe AC Rooms with attendant sleeper facilities, television, and customized dietary meal plans.",
  },
];
