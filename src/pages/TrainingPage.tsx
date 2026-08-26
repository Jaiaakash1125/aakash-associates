import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Phone, MessageCircle } from 'lucide-react';
import { COURSES } from '../data/training';
import { TrainingCard } from '../components/ui/TrainingCard';
import { SectionReveal } from '../components/ui/SectionReveal';
import { CONTACT, WHATSAPP_MESSAGES, makeWhatsAppUrl } from '../data/contact';

export function TrainingPage() {
  const trainingWaUrl = makeWhatsAppUrl(CONTACT.training.whatsapp, WHATSAPP_MESSAGES.training);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <GraduationCap size={14} className="text-accent" />
              <span className="text-white/80 text-sm font-medium">Training Centre</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-700 text-white mb-4">
              Accounts & GST Training Centre
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Learn practical accounting and taxation procedures with focused training in Tally, GST, TDS,
              PF, ESI and management reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/enquire?tab=training" className="btn-accent py-3 px-6">
                Register Your Interest <ArrowRight size={18} />
              </Link>
              <a
                href={trainingWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1dba58] transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp Training Centre
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-accent/10 border-y border-accent/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-primary/80">
              <strong className="text-primary">Training Centre Contact:</strong>&nbsp;
              <a href={`tel:${CONTACT.training.phone}`} className="text-primary font-semibold hover:underline">
                {CONTACT.training.display}
              </a>
            </p>
            <p className="text-sm text-primary/70">
              Course fees, batch timings and duration — enquire directly with the training team.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="text-2xl font-display font-700 text-primary mb-1">Training Programs</h2>
            <p className="text-primary/70 text-sm">Practical, focused training in each area of accounting and taxation compliance.</p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map((course, i) => (
              <TrainingCard key={course.id} course={course} variant="compact" delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Detail Sections */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionReveal>
            <h2 className="text-2xl font-display font-700 text-primary mb-2">Course Details</h2>
            <p className="text-primary/70">Each program is focused on practical, real-world accounting and taxation procedures.</p>
          </SectionReveal>
          {COURSES.map((course, i) => (
            <TrainingCard key={course.id} course={course} variant="full" delay={(i % 2) as 0 | 1} />
          ))}
        </div>
      </section>

      {/* Contact the Training Centre */}
      <section className="py-14 bg-primary-50/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="text-2xl font-display font-700 text-primary mb-3">
              Interested in Our Training Programs?
            </h2>
            <p className="text-primary/70 mb-6">
              Contact our training centre directly or submit your details and we will get in touch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquire?tab=training" className="btn-accent py-3 px-6">
                Register Interest <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${CONTACT.training.phone}`}
                className="btn-secondary py-3 px-6"
              >
                <Phone size={18} /> Call Training Centre
              </a>
              <a
                href={trainingWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1dba58] transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
