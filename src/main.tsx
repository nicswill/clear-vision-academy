import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';

import App from './App.tsx';
import ThankYouEnrollment from './pages/ThankYouEnrollment.tsx';
import ThankYouOverview from './pages/ThankYouOverview.tsx';
import ThankYouAssessment from './pages/ThankYouAssessment.tsx';
import AssessmentsHub from './pages/AssessmentsHub.tsx';
import P3LeadershipAssessment from './pages/P3LeadershipAssessment.tsx';
import VisionClarityAssessment from './pages/VisionClarityAssessment.tsx';
import PowerPauseAssessment from './pages/PowerPauseAssessment.tsx';
import WholeHealthAssessment from './pages/WholeHealthAssessment.tsx';

import './index.css';

// Vite sets BASE_URL from vite.config.ts "base" (ex: "/" OR "/academy/")
const rawBase = import.meta.env.BASE_URL || '/';
const basename = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Simple branded 404
function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center border-2 border-[#d4af37]/40 rounded-2xl p-10 shadow-lg">
        <div className="flex justify-center mb-6">
          <img src="/academy_logo.PNG" alt="Clear Vision Academy" className="h-16 w-auto" />
        </div>

        <h1 className="text-4xl font-bold text-[#0a1628] mb-3">Page Not Found</h1>

        <p className="text-gray-700 mb-8">
          The page you’re looking for doesn’t exist (or may have moved).
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-3 rounded-lg font-bold"
          >
            Go to Home
          </Link>

          <Link
            to="/assessments"
            className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all"
          >
            Assessments Hub
          </Link>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      {/* Global scroll handler */}
      <ScrollToTop />

      <Routes>
        {/* Main Academy */}
        <Route path="/" element={<App />} />

        {/* Thank You Pages */}
        <Route path="/thank-you-enrollment" element={<ThankYouEnrollment />} />
        <Route path="/thank-you-overview" element={<ThankYouOverview />} />
        <Route path="/thank-you-assessment" element={<ThankYouAssessment />} />

                {/* Assessments Hub */}
        <Route path="/assessments" element={<AssessmentsHub />} />

        {/* Individual Assessments (NEW, plural) */}
        <Route path="/assessments/p3-method" element={<P3LeadershipAssessment />} />
        <Route path="/assessments/power-pause" element={<PowerPauseAssessment />} />
        <Route path="/assessments/whole-health" element={<WholeHealthAssessment />} />
        <Route path="/assessments/vision-clarity" element={<VisionClarityAssessment />} />

        {/* Backwards compatible routes (OLD, singular) */}
        <Route path="/assessment/p3-method" element={<P3LeadershipAssessment />} />
        <Route path="/assessment/power-pause" element={<PowerPauseAssessment />} />
        <Route path="/assessment/whole-health" element={<WholeHealthAssessment />} />
        <Route path="/assessment/vision-clarity" element={<VisionClarityAssessment />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);