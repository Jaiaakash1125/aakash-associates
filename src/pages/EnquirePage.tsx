import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, GraduationCap } from 'lucide-react';
import { ServiceEnquiryForm } from '../components/forms/ServiceEnquiryForm';
import { TrainingRegistrationForm } from '../components/forms/TrainingRegistrationForm';
import { SectionReveal } from '../components/ui/SectionReveal';
import { SERVICES } from '../data/services';
import { COURSES } from '../data/training';

type TabType = 'services' | 'training';

export function EnquirePage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('services');

  // Read default service/course from URL query params
  const defaultService = searchParams.get('service') || '';
  const defaultCourse = searchParams.get('course') || '';
  const tabParam = searchParams.get('tab') as TabType | null;

  useEffect(() => {
    if (tabParam === 'training' || defaultCourse) {
      setActiveTab('training');
    } else if (tabParam === 'services' || defaultService) {
      setActiveTab('services');
    }
  }, [tabParam, defaultService, defaultCourse]);

  // Map service/course id to human label for form
  const serviceLabel = SERVICES.find((s) => s.id === defaultService)?.title ?? defaultService;
  const courseLabel = COURSES.find((c) => c.id === defaultCourse)?.formValue ?? defaultCourse;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-display font-700 text-white mb-3">
              Register / Enquire
            </h1>
            <p className="text-white/70 text-lg">How can we help you?</p>
          </SectionReveal>
        </div>
      </section>

      {/* Tab chooser */}
      <section className="bg-white border-b border-border sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button
              id="tab-services"
              onClick={() => setActiveTab('services')}
              className={`
                flex items-center gap-2.5 px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-200
                ${activeTab === 'services'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-primary/70 hover:text-primary hover:border-gray-200'
                }
              `}
            >
              <BookOpen size={18} />
              Business / Service Enquiry
            </button>
            <button
              id="tab-training"
              onClick={() => setActiveTab('training')}
              className={`
                flex items-center gap-2.5 px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-200
                ${activeTab === 'training'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-primary/70 hover:text-primary hover:border-gray-200'
                }
              `}
            >
              <GraduationCap size={18} />
              Training Registration / Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'services' ? (
            <SectionReveal>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-700 text-primary">Service Enquiry</h2>
                    <p className="text-primary/70 text-sm">For businesses, entrepreneurs and organisations.</p>
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-primary/40 to-transparent rounded-full" />
              </div>
              <div className="card p-6 sm:p-8">
                <ServiceEnquiryForm defaultService={serviceLabel} />
              </div>
            </SectionReveal>
          ) : (
            <SectionReveal>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-700 text-primary">Training Registration</h2>
                    <p className="text-primary/70 text-sm">For students, learners and working professionals.</p>
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-accent/40 to-transparent rounded-full" />
              </div>
              <div className="card p-6 sm:p-8">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-sm text-amber-800">
                  This form registers your interest. Our training team will contact you with course details,
                  batch timings and further information.
                </div>
                <TrainingRegistrationForm defaultCourse={courseLabel} />
              </div>
            </SectionReveal>
          )}
        </div>
      </section>
    </>
  );
}
