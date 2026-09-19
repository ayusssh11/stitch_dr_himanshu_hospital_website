export interface Specialty {
  id: string;
  name: string;
  iconName: string;
  isFlagship?: boolean;
}

export const specialities: Specialty[] = [
  {
    id: "maxfax",
    name: "Dental & Maxillofacial",
    iconName: "Smile",
    isFlagship: true,
  },
  {
    id: "medicine",
    name: "General Medicine",
    iconName: "Stethoscope",
  },
  {
    id: "ent",
    name: "ENT Specialist",
    iconName: "Ear",
  },
  {
    id: "neuro",
    name: "Neuro Surgery",
    iconName: "Brain",
  },
  {
    id: "cancer",
    name: "Cancer Surgery",
    iconName: "Ribbon",
  },
  {
    id: "gynaecology",
    name: "Gynaecology & OBS",
    iconName: "HeartHandshake",
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics & Trauma",
    iconName: "Activity",
  },
  {
    id: "icu",
    name: "Intensive Care (ICU)",
    iconName: "Bed",
  },
  {
    id: "modular-ot",
    name: "Modular OT & Lap",
    iconName: "Scissors",
  },
  {
    id: "ventilator",
    name: "Ventilator Support",
    iconName: "Wind",
  },
  {
    id: "emergency",
    name: "24x7 Emergency",
    iconName: "Ambulance",
  },
  {
    id: "ayushman-tpa",
    name: "Ayushman & TPA",
    iconName: "CreditCard",
  },
];
