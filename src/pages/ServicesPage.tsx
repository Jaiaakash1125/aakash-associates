import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SectionReveal } from '../components/ui/SectionReveal';
import { CONTACT } from '../data/contact';

export function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-white/80 text-sm font-medium">Business Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-700 text-white mb-4">
              Accounts & Taxation Services
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Professional accounting, GST, TDS, PF & ESI and registration services for businesses
              and entrepreneurs in Chennai.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Quick overview cards */}
      <section className="py-12 bg-primary-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-sm text-primary/70 mb-6">
            Jump to:&nbsp;
            {SERVICES.map((s, i) => (
              <span key={s.id}>
                <a href={`#${s.id}`} className="text-primary hover:underline">{s.title}</a>
                {i < SERVICES.length - 1 && ' · '}
              </span>
            ))}
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} variant="compact" delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Full service detail sections */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionReveal>
            <h2 className="text-2xl font-display font-700 text-primary mb-2">Service Details</h2>
            <p className="text-primary/70">Each service includes professional guidance and support throughout the process.</p>
          </SectionReveal>

          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} variant="full" delay={(i % 2) as 0 | 1} />
          ))}
        </div>
      </section>

      {/* Contact prompt */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="text-2xl font-display font-700 text-primary mb-3">
              Not sure which service you need?
            </h2>
            <p className="text-primary/70 mb-6">
              Contact our team and describe your requirement — we'll help you identify the right service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquire?tab=services" className="btn-primary py-3 px-6">
                Submit Enquiry <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${CONTACT.services.phone}`}
                className="btn-secondary py-3 px-6"
              >
                Call Services Team
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
