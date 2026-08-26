import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TrainingPage } from './pages/TrainingPage';
import { EnquirePage } from './pages/EnquirePage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Per-page SEO title update
const PAGE_TITLES: Record<string, string> = {
  '/': 'Aakash Associates | Accounts & Taxation Services and Training Centre, Chennai',
  '/about': 'About Us | Aakash Associates | Chennai',
  '/services': 'Accounting & Taxation Services | Aakash Associates | Chennai',
  '/training': 'Accounts & GST Training Centre | Aakash Associates | Chennai',
  '/enquire': 'Register / Enquire | Aakash Associates',
  '/contact': 'Contact | Aakash Associates | Chennai',
};

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES['/'];
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/enquire" element={<EnquirePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
              <div className="text-7xl mb-4">🔍</div>
              <h1 className="text-3xl font-display font-700 text-charcoal mb-3">Page Not Found</h1>
              <p className="text-muted mb-6">The page you are looking for does not exist.</p>
              <a href="/" className="btn-primary">Go to Home</a>
            </div>
          } />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
