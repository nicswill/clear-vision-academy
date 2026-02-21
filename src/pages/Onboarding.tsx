import { Link } from 'react-router-dom';
import {
  Video,
  Target,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

function Onboarding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-[#0a1628]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d4af37]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a
              href="https://clearvisionleader.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img src="/logo.png" alt="Clear Vision Consulting Logo" className="h-14 w-auto mr-4" />
            </a>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Home
              </Link>
              <Link
                to="/certification"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Certification
              </Link>
              <Link
                to="/assessments"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Assessments
              </Link>
              <a
                href="https://clearvisionleader.com/student-portal/"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
              >
                Student Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <img
                src="/academy_logo.PNG"
                alt="Clear Vision Academy"
                className="w-64 sm:w-80 h-auto drop-shadow-xl"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">Welcome to Clear Vision Academy</h1>
            <p className="text-xl text-gray-700">Let's get you started on your leadership journey.</p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#d4af37] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-[#0a1628]">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-white flex items-center space-x-3">
                    <Video className="w-8 h-8 text-[#d4af37]" />
                    <span>Welcome Video</span>
                  </h2>
                  <p className="text-gray-200 mb-6">
                    Watch Dr. Kennita "Coach Kay" Williams introduce you to the Clear Vision Academy experience,
                    the learning journey ahead, and what you can expect from the program.
                  </p>
                  <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-center border-2 border-[#d4af37]/30">
                    <div className="text-center">
                      <div className="bg-[#d4af37] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-10 h-10 text-[#0a1628] ml-1" />
                      </div>
                      <p className="text-gray-400 text-sm">Welcome video will be available here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#d4af37] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-white">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-[#0a1628] flex items-center space-x-3">
                    <Target className="w-8 h-8 text-[#d4af37]" />
                    <span>Take Your First Assessment</span>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We recommend starting with the Vision Clarity Assessment to establish your leadership baseline
                    and identify areas of focus for your learning journey.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      to="/assessment/vision-clarity"
                      className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-4 rounded-lg font-bold text-center hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all inline-flex items-center justify-center space-x-2"
                    >
                      <span>Vision Clarity Assessment</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/assessments"
                      className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-4 rounded-lg font-bold text-center hover:bg-[#d4af37]/10 transition-all"
                    >
                      View All Assessments
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-gray-600">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-[#0a1628] flex items-center space-x-3">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                    <span>Platform Tutorial</span>
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Learn how to navigate the student dashboard, access course materials, track your progress,
                    and use all the features available to you.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <p className="text-gray-500 text-sm italic">Interactive tutorial coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-gray-600">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-[#0a1628] flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-gray-400" />
                    <span>Course Placement Recommendation</span>
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Based on your assessment results, we'll recommend the best courses and learning path for
                    your leadership development goals.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <p className="text-gray-500 text-sm italic">Recommendations available after assessment completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Ready to Continue?</h2>
            <p className="text-lg text-[#0a1628] mb-6">
              Head to your dashboard to explore courses and continue your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center bg-[#0a1628] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-all shadow-xl space-x-2"
              >
                <span>Continue to Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/certification"
                className="inline-flex items-center justify-center bg-white text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all border-2 border-[#0a1628]"
              >
                Back to Certification Hub
              </Link>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-[#d4af37]/30 text-center">
              <CheckCircle className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
              <h3 className="font-bold text-[#0a1628] mb-1">Step 1</h3>
              <p className="text-sm text-gray-600">Watch Welcome Video</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#d4af37]/30 text-center">
              <Target className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
              <h3 className="font-bold text-[#0a1628] mb-1">Step 2</h3>
              <p className="text-sm text-gray-600">Complete Assessment</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#d4af37]/30 text-center">
              <BookOpen className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
              <h3 className="font-bold text-[#0a1628] mb-1">Step 3</h3>
              <p className="text-sm text-gray-600">Start Learning</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1628] to-[#1e3a5f] border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-[#d4af37] italic mb-4">See Well. Be Well. Lead Well.</p>
          <a href="mailto:drkay@clearvisionleader.com" className="text-[#d4af37] hover:underline text-lg">
            drkay@clearvisionleader.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Onboarding;
