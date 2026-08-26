import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, BookOpen, GraduationCap } from 'lucide-react';
import { CONTACT } from '../data/contact';
import { SectionReveal } from '../components/ui/SectionReveal';

export function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-white/80 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-700 text-white mb-4">
              About Aakash Associates
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              A professional accounting, taxation services and training centre based in Ambattur Industrial Estate, Chennai.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-display font-700 text-primary mb-5">
                Who We Are
              </h2>
              <p className="text-primary/70 leading-relaxed mb-5">
                Aakash Associates is an accounting and taxation services firm and practical training centre
                located in Ambattur Industrial Estate, Chennai. We serve two distinct audiences — businesses
                and organisations that need professional accounting and compliance services, and learners
                who want to build practical skills in Tally, GST, TDS, PF and ESI.
              </p>
              <p className="text-primary/70 leading-relaxed mb-6">
                Our approach is practical and straightforward: we focus on the real requirements of
                businesses and the real skills that learners need — without unnecessary complexity.
              </p>
              <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary/10">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-sm mb-0.5">Our Office</p>
                  <address className="not-italic text-sm text-primary/70 leading-relaxed">
                    {CONTACT.address.line1}<br />
                    {CONTACT.address.line2}<br />
                    {CONTACT.address.line3}<br />
                    {CONTACT.address.city}
                  </address>
                </div>
              </div>
            </SectionReveal>

            {/* Visual Block */}
            <SectionReveal delay={2} className="space-y-4">
              <div className="rounded-2xl bg-primary p-8 text-white">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="font-display font-700 text-xl mb-2">Accounts & Taxation Services</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Professional accounting, GST, TDS, PF & ESI services and registration support for
                  businesses and entrepreneurs.
                </p>
              </div>
              <div className="rounded-2xl bg-white border-2 border-accent/30 p-8">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="font-display font-700 text-xl text-primary mb-2">Accounts & GST Training Centre</h3>
                <p className="text-primary/70 text-sm leading-relaxed">
                  Practical training in Tally, GST, TDS, PF & ESI and management reporting — for students,
                  freshers and working professionals.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-700 text-primary mb-3">What We Do</h2>
            <p className="text-primary/70 max-w-xl mx-auto">
              Two focused verticals, serving different needs within accounting and taxation.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Businesses */}
            <SectionReveal delay={1} className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-5">
                <BookOpen size={24} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-display font-700 text-primary mb-4">For Businesses & Entrepreneurs</h3>
              <ul className="space-y-3">
                {[
                  'Accounting and bookkeeping using Tally',
                  'GST registration and return filing',
                  'TDS calculation, deduction and e-filing',
                  'PF and ESI procedures and e-filing',
                  'Management reporting support',
                  'Udyam (MSME) registration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-primary/70">
                    <CheckCircle size={16} className="mt-0.5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:gap-3 transition-all">
                View All Services <ArrowRight size={16} />
              </Link>
            </SectionReveal>

            {/* For Learners */}
            <SectionReveal delay={2} className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <GraduationCap size={24} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-display font-700 text-primary mb-4">For Students & Working Professionals</h3>
              <ul className="space-y-3">
                {[
                  'Full Tally accounts entry and workflows',
                  'GST filing and related procedures',
                  'TDS filing and practical procedures',
                  'PF & ESI procedures and e-filing',
                  'Management report preparation and understanding',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-primary/70">
                    <CheckCircle size={16} className="mt-0.5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/training" className="inline-flex items-center gap-2 mt-6 text-accent font-semibold text-sm hover:gap-3 transition-all">
                View Training Programs <ArrowRight size={16} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-display font-700 text-primary mb-5">Our Approach</h2>
            <p className="text-primary/70 leading-relaxed text-lg mb-6">
              At Aakash Associates, we take a practical, client-focused approach to everything we do.
              Whether we are supporting a business with GST compliance or guiding a student through Tally
              entries, our focus is on clear, accurate and useful outcomes.
            </p>
            <p className="text-primary/70 leading-relaxed">
              We believe accounting and taxation knowledge should be accessible — and that the best learning
              comes from working with real-world scenarios and procedures.
            </p>
          </SectionReveal>

          {/* Placeholder section for future company info */}
          <SectionReveal delay={2} className="mt-12 p-6 rounded-xl border-2 border-dashed border-primary/20 bg-white">
            <p className="text-sm text-primary/70 italic">
              Additional company information, team details and milestones can be added here.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-display font-700 text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-white/70 mb-8">
              Contact Aakash Associates for accounting services or training enquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquire" className="btn-accent py-3 px-7">
                Enquire Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline-white py-3 px-7">
                Contact Details
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
