// Contact & brand data
export const CONTACT = {
  services: {
    phone: '7603922177',
    display: '+91 76039 22177',
    whatsapp: '917603922177',
  },
  training: {
    phone: '7708818088',
    display: '+91 77088 18088',
    whatsapp: '917708818088',
  },
  email: 'aakashassociates2024@gmail.com',
  address: {
    line1: 'Plot No: 4, Shop No: FFS-1, 2nd Floor,',
    line2: 'Meenambedu Road,',
    line3: 'Ambattur Industrial Estate,',
    city: 'Chennai – 600058',
    full: 'Plot No: 4, Shop No: FFS-1, 2nd Floor, Meenambedu Road, Ambattur Industrial Estate, Chennai – 600058',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7!2d80.1492!3d13.1050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzE4LjAiTiA4MMKwMDgnNTcuMSJF!5e0!3m2!1sen!2sin!4v1',
};

export const BRAND = {
  name: 'Aakash Associates',
  tagline: 'Accounts & Taxation Services and Training Centre',
  taglineShort: 'Accounting · Taxation · Training',
  location: 'Chennai, Tamil Nadu',
};

export function makeWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hello Aakash Associates, I would like to know more about your services.',
  services: 'Hello Aakash Associates, I would like to enquire about your accounting and taxation services.',
  training: 'Hello Aakash Associates, I would like to enquire about your Accounts & GST Training programs.',
  gst: 'Hello Aakash Associates, I would like to enquire about GST Registration & Filing services.',
  tds: 'Hello Aakash Associates, I would like to enquire about TDS Deduction & E-Filing services.',
  tally: 'Hello Aakash Associates, I would like to enquire about Accounting in Tally services.',
  pf: 'Hello Aakash Associates, I would like to enquire about PF & ESI Procedures & E-Filing services.',
  reports: 'Hello Aakash Associates, I would like to enquire about Management Reports services.',
  udyam: 'Hello Aakash Associates, I would like to enquire about Udyam Registration services.',
  tallyTraining: 'Hello Aakash Associates, I would like to enquire about the Full Tally Accounts Entry training program.',
  gstTraining: 'Hello Aakash Associates, I would like to enquire about the GST Filing & Procedures training program.',
  tdsTraining: 'Hello Aakash Associates, I would like to enquire about the TDS Filing & Procedures training program.',
  pfTraining: 'Hello Aakash Associates, I would like to enquire about the PF & ESI Filing & Procedures training program.',
  reportsTraining: 'Hello Aakash Associates, I would like to enquire about the Management Reports training program.',
};
