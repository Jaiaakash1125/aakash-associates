export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  icon: string;
  whatsappKey: string;
  formValue: string;
}

export const COURSES: Course[] = [
  {
    id: 'tally-accounts',
    title: 'Full Tally Accounts Entry',
    shortDesc: 'Hands-on training covering practical accounting entries and Tally workflows.',
    fullDesc:
      'This program provides practical training in Tally — covering the complete accounting workflow from basic entries to organised financial records. Suitable for students, job seekers and working professionals looking to build hands-on Tally skills.',
    topics: [
      'Introduction to Tally and accounting concepts',
      'Company creation and configuration',
      'Ledger and group creation',
      'Voucher entries (payments, receipts, journals, sales, purchases)',
      'Bank reconciliation',
      'Practical accounting scenarios',
    ],
    icon: 'Monitor',
    whatsappKey: 'tallyTraining',
    formValue: 'Full Tally Accounts Entry',
  },
  {
    id: 'gst-training',
    title: 'GST Filing & Procedures',
    shortDesc: 'Practical understanding of GST procedures, returns and compliance filing.',
    fullDesc:
      'This program covers GST from a practical standpoint — helping learners understand GST registration, return preparation and filing procedures. Ideal for those looking to handle GST compliance independently or as part of a business or accounting role.',
    topics: [
      'Overview of GST — concepts and structure',
      'GST registration process',
      'Understanding GSTR forms (GSTR-1, GSTR-3B)',
      'Input Tax Credit (ITC) basics',
      'GST return filing procedure',
      'Practical filing exercises',
    ],
    icon: 'FileCheck',
    whatsappKey: 'gstTraining',
    formValue: 'GST Filing & Procedures',
  },
  {
    id: 'tds-training',
    title: 'TDS Filing & Procedures',
    shortDesc: 'Practical TDS training covering deduction, documentation and e-filing.',
    fullDesc:
      'Understand TDS from a practical perspective — from calculating the correct TDS amount to preparing and filing TDS returns. This program is suitable for accounting professionals, payroll handlers and learners entering the tax compliance field.',
    topics: [
      'What is TDS and when it applies',
      'TDS rates and threshold limits',
      'TDS deduction calculation',
      'Preparing TDS returns',
      'TDS e-filing procedure',
      'Practical TDS scenarios',
    ],
    icon: 'ClipboardList',
    whatsappKey: 'tdsTraining',
    formValue: 'TDS Filing & Procedures',
  },
  {
    id: 'pf-esi-training',
    title: 'PF & ESI Filing & Procedures',
    shortDesc: 'Comprehensive practical training on PF and ESI compliance and e-filing.',
    fullDesc:
      'This program provides practical knowledge of PF (Provident Fund) and ESI (Employee State Insurance) — two key components of payroll compliance in India. Learn the procedures, contribution calculations and e-filing steps used in practice.',
    topics: [
      'Overview of PF and ESI regulations',
      'PF and ESI applicability and registration',
      'Monthly contribution calculations',
      'PF and ESI challan preparation',
      'E-filing of PF and ESI returns',
      'Practical exercises',
    ],
    icon: 'Users',
    whatsappKey: 'pfTraining',
    formValue: 'PF & ESI Filing & Procedures',
  },
  {
    id: 'management-reports-training',
    title: 'Management Reports',
    shortDesc: 'Learn to prepare and present business financial management reports.',
    fullDesc:
      'Management reports are a key part of financial communication in any business. This program teaches learners how to understand, prepare and present financial data in the form of management reports — an essential skill for anyone working in accounting or business finance.',
    topics: [
      'What are management reports and why they matter',
      'Profit & Loss statement preparation',
      'Balance sheet fundamentals',
      'Cash flow and liquidity reports',
      'Presenting financial information clearly',
      'Practical report preparation exercises',
    ],
    icon: 'PieChart',
    whatsappKey: 'reportsTraining',
    formValue: 'Management Reports',
  },
];
