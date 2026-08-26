import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, BookOpen, GraduationCap, CheckCircle, ChevronRight, Star } from 'lucide-react';
import { SERVICES } from '../data/services';
import { COURSES } from '../data/training';
import { CONTACT, WHATSAPP_MESSAGES, makeWhatsAppUrl } from '../data/contact';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SectionReveal } from '../components/ui/SectionReveal';

const WHY_REASONS = [
  {
    icon: '📊',
    title: 'Practical Approach',
    desc: 'Focused on real-world accounting and taxation requirements — not just theory.',
  },
  {
    icon: '🤝',
    title: 'Professional Support',
    desc: 'Clear, step-by-step assistance with accounting and compliance procedures.',
  },
  {
    icon: '📋',
    title: 'Business-Focused Reporting',
    desc: 'Management reports designed to make financial information clear and useful.',
  },
  {
    icon: '🎓',
    title: 'Practical Training',
    desc: 'Training grounded in actual accounting, taxation and compliance workflows.',
  },
];

export function HomePage() {
  const servicesWaUrl = makeWhatsAppUrl(CONTACT.services.whatsapp, WHATSAPP_MESSAGES.services);
  const trainingWaUrl = makeWhatsAppUrl(CONTACT.training.whatsapp, WHATSAPP_MESSAGES.training);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Subtle abstract background blobs */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-primary text-sm font-semibold">Asia's Top Consulting Experts</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-primary leading-tight mb-6">
                Tax Consultancy <br />
                Services In <br />
                <span className="text-accent">Chennai</span>
              </h1>

              <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-10 max-w-xl">
                Aakash Associates provides professional accounting, GST, taxation and compliance services
                while offering practical training in Tally, GST, TDS, PF, ESI and management reporting.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/services" className="btn-primary text-base py-3.5 px-7">
                  Learn More <ArrowRight size={18} />
                </Link>
                <div className="flex flex-col gap-1 ml-4">
                  <span className="text-sm font-bold text-primary">Trusted by more than</span>
                  <span className="text-accent font-black text-lg">150+ <span className="text-primary text-sm font-semibold">companies</span></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              {/* Abstract decorative shape behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-accent-light rounded-[3rem] rotate-3 opacity-20 blur-lg" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-primary-light rounded-[3rem] -rotate-3 opacity-10" />
              <img
                src="/images/hero.jpg"
                alt="Professional Consultant"
                className="relative z-10 w-full h-[600px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
              />

              {/* Floating Widget */}
              <div className="absolute -right-8 top-32 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Star className="text-accent" fill="currentColor" size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary text-lg">4.9/5</div>
                  <div className="text-sm text-muted">Client Rating</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHO WE ARE ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side: Images */}
            <SectionReveal className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img
                  src="/images/about.jpg"
                  alt="Team Meeting"
                  className="rounded-t-[4rem] rounded-bl-[4rem] rounded-br-xl object-cover h-[400px] w-full shadow-lg border-8 border-white"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-accent text-white p-8 rounded-3xl shadow-2xl z-20 w-48 hidden md:block">
                <div className="text-5xl font-black mb-2">25+</div>
                <div className="text-lg font-bold leading-tight">Years Of<br />Experience</div>
              </div>
            </SectionReveal>

            {/* Right side: Text */}
            <SectionReveal delay={1}>
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-display font-800 text-primary mb-6 leading-tight">
                Your Trusted Partner for Financial Excellence
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Designed by experts with proven competence in the industry. Aakash Associates is thrilled to have happy clients across Chennai. Our crew is professional, and one of our strengths is that we complete our projects on time and always race against the clock before deadlines!
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Our experienced consultants are committed to offering timely filings and smart tax-saving strategies. Whether you need to file your taxes, manage GST, or need end-to-end support for your finances — we are your trusted partner.
              </p>
              <Link to="/about" className="btn-primary">
                Discover More <ArrowRight size={18} />
              </Link>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-display font-800 text-primary mb-4">
              Our Professional Services
            </h3>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive accounting, taxation and compliance support for businesses of all sizes.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <SectionReveal key={service.id} delay={(i % 3) as 0 | 1 | 2}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-card-hover transition-all duration-300 group">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    {/* We'll use a placeholder icon style for now */}
                    <span className="text-2xl text-primary group-hover:text-white transition-colors">✦</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-primary mb-3">{service.title}</h4>
                  <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">{service.desc}</p>
                  <Link to={`/services#${service.id}`} className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRAINING PREVIEW ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="text-accent" size={24} />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">Training Centre</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-800 text-white mb-4">
              Learn Practical Accounts & Taxation
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Develop practical knowledge in Tally, GST, TDS, PF, ESI and management reporting.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <SectionReveal key={course.id} delay={(i % 3) as 0 | 1 | 2}>
                <div className="bg-primary-light border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 h-full flex flex-col">
                  <h4 className="font-display font-bold text-xl text-white mb-3">{course.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">{course.shortDesc}</p>
                  <Link
                    to={`/training#${course.id}`}
                    className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors"
                  >
                    View Program <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link to="/training" className="btn-accent py-3 px-8">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-800 text-primary mb-4">
              Why Choose Aakash Associates?
            </h3>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_REASONS.map((reason, i) => (
              <SectionReveal key={reason.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto bg-cream rounded-full flex items-center justify-center text-3xl mb-6">
                    {reason.icon}
                  </div>
                  <h4 className="font-display font-bold text-primary text-lg mb-3">{reason.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{reason.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden bg-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-display font-900 text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Whether you need accounting services or want to enrol in a training program, our experts are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquire" className="btn-primary py-3.5 px-8 shadow-xl">
                Enquire Now <ArrowRight size={18} />
              </Link>
              <a href={`tel:${CONTACT.services.phone}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                <Phone size={18} /> Call Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
