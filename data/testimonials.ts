export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  initials: string;
  initialsBg: string;
  initialsColor: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My brother had a severe facial bone fracture after a road accident. Dr. Himanshu performed reconstructive surgery with incredible precision. There are no scars, and the recovery was completely smooth. Best maxillofacial center in the entire region.",
    author: "Gaurav Kashyap",
    location: "Etah",
    initials: "GK",
    initialsBg: "bg-cyan-100",
    initialsColor: "text-brand-teal",
  },
  {
    quote:
      "We were admitted under the Ayushman Bharat card for my mother's surgery. We were treated with absolute dignity and zero charges were asked. The nursing staff and doctor guidance were extraordinary. Truly a blessing for common citizens.",
    author: "Anuj Shakya",
    location: "Etah",
    initials: "AS",
    initialsBg: "bg-emerald-100",
    initialsColor: "text-emerald-700",
  },
  {
    quote:
      "I had a great experience in their ICU and inpatient wing. The medical hygiene is comparable to top metropolitan hospitals in Delhi or Agra. The staff is polite, available round the clock, and the overall process was prompt.",
    author: "Chitransh Gupta",
    location: "Etah",
    initials: "CG",
    initialsBg: "bg-blue-100",
    initialsColor: "text-blue-700",
  },
];
