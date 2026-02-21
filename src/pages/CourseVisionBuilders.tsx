import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowLeft } from 'lucide-react';

function CourseVisionBuilders() {
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
              <Link to="/dashboard" className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all">
                Dashboard
              </Link>
              <Link to="/courses" className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all">
                Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/courses" className="inline-flex items-center text-[#d4af37] hover:underline mb-8 space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Link>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl mb-12">
            <Star className="w-16 h-16 text-[#d4af37] mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Vision Builders Youth Leadership</h1>
            <p className="text-xl text-gray-200 mb-6">
              Empower young leaders with identity, confidence, and vision-casting skills. Designed for ages 13-18.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">6 Modules</span>
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">6 Weeks</span>
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">Youth Program</span>
            </div>

            <div className="border-t border-[#d4af37]/30 pt-6">
              <h3 className="text-xl font-bold text-white mb-3">What Students Will Learn:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Identity and self-awareness',
                  'Building confidence',
                  'Vision casting',
                  'Goal setting',
                  'Leadership skills',
                  'Communication essentials'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-[#d4af37]/30 shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#d4af37]">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              Vision Builders is specifically designed for young leaders ages 13-18. Through engaging lessons, interactive
              activities, and real-world applications, students develop the confidence and skills to lead with purpose.
            </p>
            <p className="text-gray-700">
              Perfect for youth groups, schools, or individual students ready to discover their leadership potential.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Enroll to Access</h2>
            <p className="text-lg text-[#0a1628] mb-6">Contact us for youth program enrollment.</p>
            <a
              href="mailto:drkay@clearvisionleader.com"
              className="inline-block bg-[#0a1628] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-all shadow-xl"
            >
              Contact Us
            </a>
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

export default CourseVisionBuilders;
