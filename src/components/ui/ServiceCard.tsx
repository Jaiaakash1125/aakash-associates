import { Link } from 'react-router-dom';
import { DynamicIcon } from './Icons';
import { CONTACT, WHATSAPP_MESSAGES, makeWhatsAppUrl } from '../../data/contact';
import type { Service } from '../../data/services';
import { SectionReveal } from './SectionReveal';

interface ServiceCardProps {
  service: Service;
  variant?: 'compact' | 'full';
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function ServiceCard({ service, variant = 'compact', delay = 0 }: ServiceCardProps) {
  const waUrl = makeWhatsAppUrl(
    CONTACT.services.whatsapp,
    WHATSAPP_MESSAGES[service.whatsappKey] ?? WHATSAPP_MESSAGES.services
  );

  if (variant === 'compact') {
    return (
      <SectionReveal delay={delay} className="card p-6 flex flex-col gap-4">
        <div className="service-icon-wrap">
          <DynamicIcon name={service.icon} size={24} strokeWidth={1.8} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-display font-700 text-charcoal mb-2">{service.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{service.shortDesc}</p>
        </div>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all duration-200"
        >
          Learn More <DynamicIcon name="ArrowRight" size={16} />
        </Link>
      </SectionReveal>
    );
  }

  return (
    <SectionReveal delay={delay} className="card p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
            <DynamicIcon name={service.icon} size={28} strokeWidth={1.8} />
          </div>
        </div>
        <div className="flex-1">
          <h2 id={service.id} className="text-2xl font-display font-700 text-charcoal mb-3">
            {service.title}
          </h2>
          <p className="text-muted leading-relaxed mb-5">{service.fullDesc}</p>
          <div className="mb-6">
            <p className="text-sm font-semibold text-charcoal mb-3">What we cover:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                  <DynamicIcon name="CheckCircle" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/enquire?service=${service.id}`}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Enquire About This Service
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold text-sm rounded-lg hover:bg-[#1dba58] transition-colors duration-200"
            >
              <DynamicIcon name="MessageCircle" size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
