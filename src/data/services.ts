export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  icon: string; // lucide icon name
  whatsappKey: string;
}

export const SERVICES: Service[] = [
  {
    id: 'accounting-tally',
    title: 'Accounting in Tally',
    shortDesc: 'Structured accounting and bookkeeping using Tally for businesses of all sizes.',
    fullDesc:
      "We provide professional accounting and bookkeeping services powered by Tally — one of India's most widely used accounting platforms. Our team ensures your accounts are maintained accurately, your records are well-organised, and your financial data is always accessible and reliable.",
    topics: [
      'Tally-based bookkeeping',
      'Ledger maintenance',
      'Voucher entry and reconciliation',
      'Accounts organisation and structuring',
    ],
    icon: 'BookOpen',
    whatsappKey: 'tally',
  },
  {
    id: 'gst',
    title: 'GST Registration & Filing',
    shortDesc: 'End-to-end GST registration support and timely GST return filing.',
    fullDesc:
      'Our team assists businesses and entrepreneurs with GST registration and ongoing GST compliance. Whether you need to register under GST for the first time or require support with your regular GST return filing, we provide clear, step-by-step assistance to keep your business compliant.',
    topics: [
      'New GST registration',
      'GST return filing (GSTR-1, GSTR-3B)',
      'GST compliance support',
      'GST procedures and documentation',
    ],
    icon: 'FileText',
    whatsappKey: 'gst',
  },
  {
    id: 'tds',
    title: 'TDS Deduction & E-Filing',
    shortDesc: 'Accurate TDS computation, deduction support and e-filing assistance.',
    fullDesc:
      'Tax Deducted at Source (TDS) compliance requires timely and accurate processing. We help businesses with TDS calculations, the deduction process and e-filing of TDS returns — keeping you aligned with your obligations under the Income Tax Act.',
    topics: [
      'TDS calculation and deduction',
      'TDS return preparation',
      'TDS e-filing',
      'TDS compliance documentation',
    ],
    icon: 'ReceiptText',
    whatsappKey: 'tds',
  },
  {
    id: 'pf-esi',
    title: 'PF & ESI Procedures & E-Filing',
    shortDesc: 'Provident Fund and ESI compliance, procedures and e-filing support.',
    fullDesc:
      'Managing PF (Provident Fund) and ESI (Employee State Insurance) compliance involves both procedural requirements and timely e-filing. We guide businesses through the procedures, registration, monthly contributions and e-filing processes to ensure full compliance.',
    topics: [
      'PF registration and procedures',
      'ESI registration and procedures',
      'Monthly PF/ESI contribution processing',
      'PF and ESI e-filing support',
    ],
    icon: 'ShieldCheck',
    whatsappKey: 'pf',
  },
  {
    id: 'management-reports',
    title: 'Management Reports',
    shortDesc: 'Clear financial management reports to support better business decisions.',
    fullDesc:
      'Well-structured management reports give business owners and decision-makers a clear picture of their financial position. We assist in the preparation and presentation of management reports that translate financial data into useful, accessible information.',
    topics: [
      'Profit & Loss summaries',
      'Balance Sheet preparation support',
      'Cash flow and business performance reports',
      'Periodic financial reporting',
    ],
    icon: 'BarChart3',
    whatsappKey: 'reports',
  },
  {
    id: 'udyam',
    title: 'Udyam Registration',
    shortDesc: 'Hassle-free Udyam (MSME) registration support for small businesses.',
    fullDesc:
      'Udyam Registration (formerly Udyog Aadhaar) is the official MSME registration for micro, small and medium enterprises in India. We assist entrepreneurs and small business owners with the complete Udyam registration process so they can access MSME benefits and recognition.',
    topics: [
      'Udyam registration procedure',
      'Document preparation and submission',
      'MSME classification guidance',
      'Registration certificate support',
    ],
    icon: 'Building2',
    whatsappKey: 'udyam',
  },
];
