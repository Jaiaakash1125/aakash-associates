import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  businessName: z.string().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address').or(z.literal('')).optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your requirement (min 10 characters)'),
  contactMethod: z.enum(['Phone', 'WhatsApp', 'Email']),
});

type FormData = z.infer<typeof schema>;

interface ServiceEnquiryFormProps {
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'Accounting in Tally',
  'GST Registration',
  'GST Filing',
  'TDS Services',
  'PF & ESI',
  'Management Reports',
  'Udyam Registration',
  'Other',
];

export function ServiceEnquiryForm({ defaultService = '' }: ServiceEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService, contactMethod: 'Phone' },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      
      if (!endpoint) {
        console.error('Formspree endpoint is not configured.');
        alert('Form submission is not configured properly. Please contact support.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        alert('There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-display font-700 text-charcoal mb-2">Enquiry Received</h3>
        <p className="text-muted text-sm max-w-sm mx-auto mb-6">
          Thank you for reaching out. Our team will contact you on your preferred channel shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); reset(); }}
          className="btn-secondary text-sm py-2.5"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" id="service-enquiry-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="se-fullName" className="form-label">Full Name <span className="text-red-500">*</span></label>
          <input
            id="se-fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`form-input ${errors.fullName ? 'border-red-400 focus:border-red-400' : ''}`}
            {...register('fullName')}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="se-businessName" className="form-label">Business / Company Name</label>
          <input
            id="se-businessName"
            type="text"
            placeholder="Your business name (optional)"
            className="form-input"
            {...register('businessName')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="se-mobile" className="form-label">Mobile Number <span className="text-red-500">*</span></label>
          <input
            id="se-mobile"
            type="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`form-input ${errors.mobile ? 'border-red-400' : ''}`}
            {...register('mobile')}
          />
          {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="se-email" className="form-label">Email Address</label>
          <input
            id="se-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com (optional)"
            className={`form-input ${errors.email ? 'border-red-400' : ''}`}
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="se-service" className="form-label">Service Required <span className="text-red-500">*</span></label>
        <div className="relative">
          <select
            id="se-service"
            className={`form-select pr-10 ${errors.service ? 'border-red-400' : ''}`}
            {...register('service')}
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="se-message" className="form-label">Message / Requirement <span className="text-red-500">*</span></label>
        <textarea
          id="se-message"
          rows={4}
          placeholder="Briefly describe your accounting or taxation requirement..."
          className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
          {...register('message')}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div>
        <label className="form-label">Preferred Contact Method <span className="text-red-500">*</span></label>
        <div className="flex flex-wrap gap-3">
          {(['Phone', 'WhatsApp', 'Email'] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value={method} className="accent-primary" {...register('contactMethod')} />
              <span className="text-sm text-charcoal">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        id="service-enquiry-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </button>

      <p className="text-xs text-muted">
        * Required fields. Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
