import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT, WHATSAPP_MESSAGES, makeWhatsAppUrl } from '../data/contact';
import { ServiceEnquiryForm } from '../components/forms/ServiceEnquiryForm';
import { SectionReveal } from '../components/ui/SectionReveal';

export function ContactPage() {
  const servicesWaUrl = makeWhatsAppUrl(CONTACT.services.whatsapp, WHATSAPP_MESSAGES.services);
  const trainingWaUrl = makeWhatsAppUrl(CONTACT.training.whatsapp, WHATSAPP_MESSAGES.training);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-white/80 text-sm font-medium">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-700 text-white mb-4">
              Contact Aakash Associates
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Reach out to our team for accounting services enquiries, taxation support or training program information.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Cards + Map */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <SectionReveal>
                <h2 className="text-2xl font-display font-700 text-primary mb-6">Get in Touch</h2>
              </SectionReveal>

              {/* Services Card */}
              <SectionReveal delay={1} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary mb-1">Services</p>
                    <a
                      href={`tel:${CONTACT.services.phone}`}
                      className="text-primary font-700 text-xl hover:underline block mb-3"
                    >
                      {CONTACT.services.display}
                    </a>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${CONTACT.services.phone}`}
                        className="btn-primary text-sm py-2 px-4"
                        id="call-services-btn"
                      >
                        <Phone size={15} /> Call Services
                      </a>
                      <a
                        href={servicesWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-semibold text-sm rounded-lg hover:bg-[#1dba58] transition-colors"
                        id="whatsapp-services-btn"
                      >
                        <MessageCircle size={15} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Training Card */}
              <SectionReveal delay={2} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary mb-1">Training Centre</p>
                    <a
                      href={`tel:${CONTACT.training.phone}`}
                      className="text-accent font-700 text-xl hover:underline block mb-3"
                    >
                      {CONTACT.training.display}
                    </a>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${CONTACT.training.phone}`}
                        className="btn-accent text-sm py-2 px-4"
                        id="call-training-btn"
                      >
                        <Phone size={15} /> Call Training
                      </a>
                      <a
                        href={trainingWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-semibold text-sm rounded-lg hover:bg-[#1dba58] transition-colors"
                        id="whatsapp-training-btn"
                      >
                        <MessageCircle size={15} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Email */}
              <SectionReveal delay={3} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-primary hover:underline font-medium break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </SectionReveal>

              {/* Office Address */}
              <SectionReveal delay={4} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Office Address</p>
                    <address className="not-italic text-sm text-primary/70 leading-relaxed">
                      {CONTACT.address.line1}<br />
                      {CONTACT.address.line2}<br />
                      {CONTACT.address.line3}<br />
                      <strong className="text-primary">{CONTACT.address.city}</strong>
                    </address>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-primary text-sm font-semibold hover:underline"
                    >
                      <MapPin size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Google Map */}
            <SectionReveal delay={2} className="space-y-4">
              <h2 className="text-2xl font-display font-700 text-primary">Find Our Office</h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-card h-80 lg:h-full min-h-72">
                <iframe
                  title="Aakash Associates Office Location — Ambattur Industrial Estate, Chennai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7290647735!2d80.14499!3d13.0987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52636c3eab7fab%3A0x1b2e89e3ab8c3c5e!2sAmbattur+Industrial+Estate!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-primary/70">
                Meenambedu Road, Ambattur Industrial Estate, Chennai – 600058
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-2xl font-display font-700 text-primary mb-2">Send an Enquiry</h2>
            <p className="text-primary/70 mb-8">Fill in the form below and we'll get back to you.</p>
          </SectionReveal>
          <SectionReveal delay={1} className="card p-6 sm:p-8">
            <ServiceEnquiryForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
