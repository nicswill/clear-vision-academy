import { Link } from 'react-router-dom';
import {
  Award,
  Calendar,
  Users,
  Clock,
  Eye,
  CheckCircle,
  FileText,
  Video,
  Target,
  BookOpen,
  ArrowRight,
  Shield,
  TrendingUp
} from 'lucide-react';

function CertificationHub() {
  const weeks = [
    { num: 0, title: 'Pre-Work & Orientation', competency: 'Ethics • Mindset • Foundation' },
    { num: 1, title: 'Foundation of Coaching', competency: 'Coaching Presence' },
    { num: 2, title: 'Power of Pause™', competency: 'Active Listening' },
    { num: 3, title: 'Trust & Safety', competency: 'Establishing Trust & Intimacy' },
    { num: 4, title: 'Deep Listening', competency: 'Active Listening Mastery' },
    { num: 5, title: 'Powerful Questioning', competency: 'Powerful Questioning' },
    { num: 6, title: 'Awareness Tools', competency: 'Creating Awareness' },
    { num: 7, title: 'P3 Method® in Action', competency: 'Designing Actions' },
    { num: 8, title: 'Presence Under Pressure', competency: 'Managing Progress & Accountability' },
    { num: 9, title: 'Client Growth Design', competency: 'Facilitating Client Growth' },
    { num: 10, title: 'Ethical Practice Building', competency: 'Ethics & Standards' },
    { num: 11, title: 'Observed Coaching', competency: 'Demonstrating Competence' },
    { num: 12, title: 'Integration & Graduation', competency: 'Completion & Next Steps' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-[#0a1628]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d4af37]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a
              href="https://clearvisionleader.com"
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Whole Health Leadership Coach Certification
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              <span className="font-semibold">ICF-Aligned</span> | Powered by the P3 Method®
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md">
                <Award className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">Dr. Kennita &quot;Coach Kay&quot; Williams, ACC</span>
              </div>
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md">
                <Video className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">Live Virtual + Practice Labs</span>
              </div>
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md">
                <Calendar className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">12 Weeks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all space-x-2"
              >
                <span>Start Onboarding</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center border-2 border-[#d4af37] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d4af37]/10 transition-all space-x-2"
              >
                <span>Go to Dashboard</span>
                <TrendingUp className="w-5 h-5" />
              </Link>

              <button className="inline-flex items-center justify-center bg-white border-2 border-[#0a1628]/20 text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0a1628]/5 transition-all">
                Request Enrollment Info
              </button>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent mb-16" />

          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Program Welcome</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  Welcome to the Whole Health Leadership Coach Certification program, a transformational
                  12-week experience designed to equip emerging and developing coaches with the mindset,
                  skillset, and toolset to coach individuals and leaders effectively.
                </p>
                <p className="text-lg">
                  This program is ICF-aligned, teaching core coaching competencies while integrating the
                  proprietary P3 Method® framework. You will engage in live virtual training, practice
                  coaching labs, peer coaching hours, and an observed coaching session to demonstrate
                  your competence.
                </p>
                <p className="text-lg font-semibold text-[#0a1628]">
                  Upon completion, you will receive a digital certificate and badge recognizing your
                  achievement as a Whole Health Leadership Coach.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent mb-16" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#d4af37]">
              12-Week Curriculum Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weeks.map((week) => (
                <div
                  key={week.num}
                  className="group bg-white rounded-2xl p-6 border-2 border-[#d4af37]/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {week.num}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628]">{week.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 italic">{week.competency}</p>
                  <Link
                    to={`/certification/week-${week.num}`}
                    className="inline-flex items-center text-[#d4af37] font-semibold hover:text-[#b8941f] transition-colors space-x-1"
                  >
                    <span>Open Week</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent mb-16" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#d4af37]">
              Completion Requirements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Calendar />, text: 'Attend live sessions' },
                { icon: <Clock />, text: 'Minimum 10 peer coaching hours' },
                { icon: <Users />, text: 'Minimum 3 practice clients' },
                { icon: <Eye />, text: '1 observed coaching session' },
                { icon: <FileText />, text: 'Reflection submissions' },
                { icon: <CheckCircle />, text: 'Self-evaluation submission' }
              ].map((req, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-[#d4af37]/30 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-[#d4af37] mb-4">{req.icon}</div>
                  <p className="text-lg font-semibold text-[#0a1628]">{req.text}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent mb-16" />

          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] text-center shadow-xl">
              <Shield className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Values & Ethics</h2>
              <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
                Clear Vision Academy honors the whole person — mind, body, and spirit — while maintaining
                professional, client-centered coaching aligned with ICF ethical standards.
              </p>
            </div>
          </section>

          <div className="flex justify-center gap-4 mt-12">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all space-x-2"
            >
              <span>Start Onboarding</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center border-2 border-[#d4af37] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d4af37]/10 transition-all space-x-2"
            >
              <span>Go to Dashboard</span>
              <TrendingUp className="w-5 h-5" />
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

export default CertificationHub;
