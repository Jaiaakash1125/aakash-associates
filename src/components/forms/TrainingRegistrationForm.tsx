import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  studentName: z.string().min(2, 'Please enter your name'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  course: z.string().min(1, 'Please select a course'),
  qualification: z.string().optional(),
  contactMethod: z.enum(['Phone', 'WhatsApp', 'Email']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface TrainingRegistrationFormProps {
  defaultCourse?: string;
}

const COURSE_OPTIONS = [
  'Full Tally Accounts Entry',
  'GST Filing & Procedures',
  'TDS Filing & Procedures',
  'PF & ESI Filing & Procedures',
  'Management Reports',
  'Multiple / Full Training',
  'Other',
];

export function TrainingRegistrationForm({ defaultCourse = '' }: TrainingRegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { course: defaultCourse, contactMethod: 'Phone' },
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
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-display font-700 text-charcoal mb-2">Interest Registered</h3>
        <p className="text-muted text-sm max-w-sm mx-auto mb-6">
          Thank you for your interest in our training programs. Our training team will get in touch with you shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); reset(); }}
          className="btn-secondary text-sm py-2.5"
        >
          Register Another Interest
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" id="training-registration-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="tr-name" className="form-label">Student Name <span className="text-red-500">*</span></label>
          <input
            id="tr-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`form-input ${errors.studentName ? 'border-red-400' : ''}`}
            {...register('studentName')}
          />
          {errors.studentName && <p className="mt-1 text-xs text-red-600">{errors.studentName.message}</p>}
        </div>

        <div>
          <label htmlFor="tr-mobile" className="form-label">Mobile Number <span className="text-red-500">*</span></label>
          <input
            id="tr-mobile"
            type="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            className={`form-input ${errors.mobile ? 'border-red-400' : ''}`}
            {...register('mobile')}
          />
          {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="tr-email" className="form-label">Email Address</label>
        <input
          id="tr-email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com (optional)"
          className="form-input"
          {...register('email')}
        />
      </div>

      <div>
        <label htmlFor="tr-course" className="form-label">Course Interested In <span className="text-red-500">*</span></label>
        <div className="relative">
          <select
            id="tr-course"
            className={`form-select pr-10 ${errors.course ? 'border-red-400' : ''}`}
            {...register('course')}
          >
            <option value="">Select a course...</option>
            {COURSE_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course.message}</p>}
      </div>

      <div>
        <label htmlFor="tr-qualification" className="form-label">Current Qualification / Background</label>
        <input
          id="tr-qualification"
          type="text"
          placeholder="e.g. B.Com, Working Professional, Fresher (optional)"
          className="form-input"
          {...register('qualification')}
        />
      </div>

      <div>
        <label className="form-label">Preferred Contact Method <span className="text-red-500">*</span></label>
        <div className="flex flex-wrap gap-3">
          {(['Phone', 'WhatsApp', 'Email'] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value={method} className="accent-accent" {...register('contactMethod')} />
              <span className="text-sm text-charcoal">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="tr-message" className="form-label">Any Message or Question</label>
        <textarea
          id="tr-message"
          rows={3}
          placeholder="Any specific questions about the training program? (optional)"
          className="form-input resize-none"
          {...register('message')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        id="training-register-submit"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          'Register Interest'
        )}
      </button>

      <p className="text-xs text-muted">
        * Required fields. This registers your interest — the training team will contact you with full details.
      </p>
    </form>
  );
}
