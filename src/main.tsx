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
import Dashboard from './pages/Dashboard.tsx';
import Onboarding from './pages/Onboarding.tsx';
import CertificationHub from './pages/CertificationHub.tsx';
import Courses from './pages/Courses.tsx';
import CourseWholeHealth from './pages/CourseWholeHealth.tsx';
import CourseP3Method from './pages/CourseP3Method.tsx';
import CoursePermissionToPause from './pages/CoursePermissionToPause.tsx';
import CourseVisionBuilders from './pages/CourseVisionBuilders.tsx';
import CourseDevotional from './pages/CourseDevotional.tsx';
import LearnDash from './pages/LearnDash.tsx';
import Week0 from './pages/Week0.tsx';
import Week1 from './pages/Week1.tsx';
import Week2 from './pages/Week2.tsx';
import Week3 from './pages/Week3.tsx';
import Week4 from './pages/Week4.tsx';
import Week5 from './pages/Week5.tsx';
import Week6 from './pages/Week6.tsx';
import Week7 from './pages/Week7.tsx';
import Week8 from './pages/Week8.tsx';
import Week9 from './pages/Week9.tsx';
import Week10 from './pages/Week10.tsx';
import Week11 from './pages/Week11.tsx';
import Week12 from './pages/Week12.tsx';
import EnrollmentTest from './pages/EnrollmentTest.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

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
            to="/dashboard"
            className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all"
          >
            Dashboard
          </Link>

          <Link
            to="/courses"
            className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all"
          >
            Courses
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

        {/* Dashboard & Onboarding */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/enrollment-test" element={<EnrollmentTest />} />

        {/* Certification Hub */}
        <Route path="/certification" element={<CertificationHub />} />
        <Route path="/certification/week-0" element={<ProtectedRoute><Week0 /></ProtectedRoute>} />
        <Route path="/certification/week-1" element={<ProtectedRoute><Week1 /></ProtectedRoute>} />
        <Route path="/certification/week-2" element={<ProtectedRoute><Week2 /></ProtectedRoute>} />
        <Route path="/certification/week-3" element={<ProtectedRoute><Week3 /></ProtectedRoute>} />
        <Route path="/certification/week-4" element={<ProtectedRoute><Week4 /></ProtectedRoute>} />
        <Route path="/certification/week-5" element={<ProtectedRoute><Week5 /></ProtectedRoute>} />
        <Route path="/certification/week-6" element={<ProtectedRoute><Week6 /></ProtectedRoute>} />
        <Route path="/certification/week-7" element={<ProtectedRoute><Week7 /></ProtectedRoute>} />
        <Route path="/certification/week-8" element={<ProtectedRoute><Week8 /></ProtectedRoute>} />
        <Route path="/certification/week-9" element={<ProtectedRoute><Week9 /></ProtectedRoute>} />
        <Route path="/certification/week-10" element={<ProtectedRoute><Week10 /></ProtectedRoute>} />
        <Route path="/certification/week-11" element={<ProtectedRoute><Week11 /></ProtectedRoute>} />
        <Route path="/certification/week-12" element={<ProtectedRoute><Week12 /></ProtectedRoute>} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/whole-health-leadership" element={<CourseWholeHealth />} />
        <Route path="/courses/p3-method" element={<CourseP3Method />} />
        <Route path="/courses/permission-to-pause" element={<CoursePermissionToPause />} />
        <Route path="/courses/vision-builders-youth" element={<CourseVisionBuilders />} />
        <Route path="/courses/devotional-track" element={<CourseDevotional />} />

        {/* LearnDash Integration */}
        <Route path="/learn-dash" element={<LearnDash />} />

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