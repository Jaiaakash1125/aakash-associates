import { Link } from 'react-router-dom';
import { DynamicIcon } from './Icons';
import { CONTACT, WHATSAPP_MESSAGES, makeWhatsAppUrl } from '../../data/contact';
import type { Course } from '../../data/training';
import { SectionReveal } from './SectionReveal';

interface TrainingCardProps {
  course: Course;
  variant?: 'compact' | 'full';
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function TrainingCard({ course, variant = 'compact', delay = 0 }: TrainingCardProps) {
  const waUrl = makeWhatsAppUrl(
    CONTACT.training.whatsapp,
    WHATSAPP_MESSAGES[course.whatsappKey] ?? WHATSAPP_MESSAGES.training
  );

  if (variant === 'compact') {
    return (
      <SectionReveal delay={delay} className="card p-6 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
          <DynamicIcon name={course.icon} size={24} strokeWidth={1.8} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-display font-700 text-charcoal mb-2">{course.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{course.shortDesc}</p>
        </div>
        <Link
          to={`/training#${course.id}`}
          className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all duration-200"
        >
          View Program <DynamicIcon name="ArrowRight" size={16} />
        </Link>
      </SectionReveal>
    );
  }

  return (
    <SectionReveal delay={delay} className="card p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <DynamicIcon name={course.icon} size={28} strokeWidth={1.8} />
          </div>
        </div>
        <div className="flex-1">
          <h2 id={course.id} className="text-2xl font-display font-700 text-charcoal mb-3">
            {course.title}
          </h2>
          <p className="text-muted leading-relaxed mb-5">{course.fullDesc}</p>
          <div className="mb-6">
            <p className="text-sm font-semibold text-charcoal mb-3">Topics covered:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-muted">
                  <DynamicIcon name="CheckCircle" size={16} className="mt-0.5 text-accent flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm text-amber-800">
            For course details, batch timings and further information, please enquire directly with our training centre.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/enquire?course=${course.id}&tab=training`}
              className="btn-accent text-sm py-2.5 px-5"
            >
              Enquire for Course Details
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold text-sm rounded-lg hover:bg-[#1dba58] transition-colors duration-200"
            >
              <DynamicIcon name="MessageCircle" size={16} />
              WhatsApp Training
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
