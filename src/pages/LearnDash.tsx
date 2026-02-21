import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight, ExternalLink, Settings } from 'lucide-react';

function LearnDash() {
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
                to="/dashboard"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-full p-6 border-2 border-[#d4af37]">
                <Settings className="w-16 h-16 text-[#d4af37]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">LearnDash Integration</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Clear Vision Academy courses are LearnDash-ready for seamless LMS integration.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#0a1628]">About LearnDash Integration</h2>
            <p className="text-gray-700 mb-4">
              All Clear Vision Academy courses are structured and formatted for compatibility with LearnDash LMS.
              This allows for streamlined course delivery, progress tracking, and certification management.
            </p>
            <p className="text-gray-700 mb-6">
              LearnDash provides the learning management infrastructure while Clear Vision Academy delivers
              the transformational curriculum content.
            </p>

            <div className="bg-[#d4af37]/10 rounded-xl p-6 border border-[#d4af37]/30">
              <h3 className="text-lg font-bold mb-3 text-[#0a1628]">LearnDash Features:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Course progress tracking',
                  'Quiz and assessment tools',
                  'Certificate generation',
                  'Drip-feed content scheduling',
                  'Student dashboard',
                  'Reporting and analytics'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] shadow-lg">
              <BookOpen className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">For Students</h3>
              <p className="text-gray-200 mb-4">
                Access your courses through the LearnDash-powered student portal on the main Clear Vision website.
              </p>
              <a
                href="https://clearvisionleader.com/login/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#d4af37] hover:underline space-x-2"
              >
                <span>Student Login</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-lg">
              <Settings className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#0a1628]">Technical Details</h3>
              <p className="text-gray-700 mb-4">
                Course content is structured with lessons, topics, quizzes, and assignments compatible with LearnDash LMS architecture.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-[#0a1628] mb-6">
              Access your courses through the student portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://clearvisionleader.com/login/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#0a1628] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-all shadow-xl space-x-2"
              >
                <span>Student Login</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center border-2 border-[#0a1628] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0a1628]/10 transition-all space-x-2"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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

export default LearnDash;
