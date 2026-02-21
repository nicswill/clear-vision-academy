import { Link } from 'react-router-dom';
import {
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Users,
  Video,
  Download,
  ArrowRight,
  Calendar,
  Bell
} from 'lucide-react';

function Dashboard() {
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <img
                src="/academy_logo.PNG"
                alt="Clear Vision Academy"
                className="w-64 sm:w-80 h-auto drop-shadow-xl"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">Student Dashboard</h1>
            <p className="text-xl text-gray-700">Welcome back! Continue your leadership journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              to="/certification/week-1"
              className="group bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-12 h-12 text-[#d4af37] mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-white">This Week</h2>
              <p className="text-gray-200 mb-6">Week 1: Foundation of Coaching</p>
              <div className="inline-flex items-center text-[#d4af37] font-semibold space-x-2">
                <span>Open Week 1</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#d4af37] mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Progress</h2>
              <p className="text-gray-700 mb-4">Track your milestones and completion status.</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Weeks Completed</span>
                  <span className="text-[#d4af37] font-bold">0 / 13</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] h-3 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Peer Coaching Hours</span>
                  <span className="text-[#d4af37] font-bold">0 / 10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Practice Clients</span>
                  <span className="text-[#d4af37] font-bold">0 / 3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              to="/assessments"
              className="group bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Target className="w-10 h-10 text-[#d4af37]" />
                <ArrowRight className="w-6 h-6 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0a1628]">Assessments</h3>
              <p className="text-gray-700">Take leadership assessments to identify growth areas.</p>
            </Link>

            <div className="bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Download className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#0a1628]">Resources</h3>
              <p className="text-gray-700 mb-4">Access workbooks and course materials.</p>
              <div className="text-sm text-gray-500 italic">Available after enrollment</div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Video className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#0a1628]">Coaching Labs</h3>
              <p className="text-gray-700 mb-4">Schedule and join practice sessions.</p>
              <div className="text-sm text-gray-500 italic">No sessions scheduled</div>
            </div>
          </div>

          <section className="bg-gray-50 rounded-2xl p-8 border border-[#d4af37]/30 shadow-sm mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <Bell className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2 text-[#0a1628]">Announcements</h2>
                <p className="text-gray-600 mb-4">Stay updated with the latest from Clear Vision Academy.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-[#d4af37]/20">
                <p className="text-gray-600 italic">No new announcements at this time.</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <Link
              to="/certification"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all space-x-2"
            >
              <span>Back to Certification Hub</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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

export default Dashboard;
