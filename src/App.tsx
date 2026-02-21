import { useState } from 'react';
import {
  Award,
  CheckCircle,
  Users,
  BookOpen,
  Calendar,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Star,
  Clock,
  Video,
  FileText,
  Menu,
  X,
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const goToAssessments = () => {
    setMobileMenuOpen(false);
    navigate('/assessments');
    // Safe even if you later add a ScrollToTop component.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const SectionDivider = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/35 to-transparent" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-[#0a1628]">
  {/* Navigation */}
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d4af37]/30 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo (Clear Vision Consulting → Main Website) */}
        <a
          href="https://clearvisionleader.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-80 transition-opacity duration-300"
          aria-label="Go to Clear Vision Consulting main website"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Clear Vision Consulting Logo"
            className="h-14 w-auto mr-4"
          />
        </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="text-[#0a1628] px-4 py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Home
              </Link>

              <Link
                to="/certification"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="text-[#0a1628] px-4 py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Certification
              </Link>

              <Link
                to="/assessments"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="text-[#0a1628] px-4 py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Assessments
              </Link>

              <a
                href="https://clearvisionleader.com/student-portal/"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-5 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
              >
                Student Login
              </a>

              {/* Desktop CTA Button */}
              <button
                onClick={() => setShowEnrollmentForm(true)}
                className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Request Info
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#0a1628] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#d4af37]/20">
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="text-[#0a1628] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d4af37]/10 transition-all"
                >
                  Home
                </Link>

                <Link
                  to="/certification"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="text-[#0a1628] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d4af37]/10 transition-all"
                >
                  Certification
                </Link>

                <Link
                  to="/assessments"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                  className="text-[#0a1628] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d4af37]/10 transition-all"
                >
                  Assessments
                </Link>

                <a
                  href="https://clearvisionleader.com/student-portal/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-3 rounded-lg font-semibold text-center"
                >
                  Student Login
                </a>

                <button
                  onClick={() => {
                    setShowEnrollmentForm(true);
                    setMobileMenuOpen(false);
                  }}
                  className="border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#d4af37]/10 transition-all"
                >
                  Request Info
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-[#fff7e1] overflow-hidden"
      >
        {/* subtle gold ambient accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Academy Logo - Prominently Displayed */}
            <div className="mb-12 flex justify-center">
              <img
                src="/academy_logo.PNG"
                alt="Clear Vision Academy - est. 2021"
                className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#0a1628]">
              Become a Certified <br />
              <span className="text-[#d4af37]">Whole Health Leadership Coach</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              A 12-week ICF-aligned certification experience designed to equip you with clarity, coaching
              skill, and transformational leadership tools.
            </p>

            {/* Badge Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/15">
                <Award className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">ICF-Aligned</span>
              </div>
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/15">
                <Target className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">Powered by the P3 Method®</span>
              </div>
              <div className="bg-white border-2 border-[#d4af37] rounded-full px-6 py-3 flex items-center space-x-2 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/15">
                <Video className="w-5 h-5 text-[#d4af37]" />
                <span className="font-semibold text-[#0a1628]">Live Virtual + Practice Labs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => setShowEnrollmentForm(true)}
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/30 flex items-center justify-center space-x-2"
              >
                <span>Request Enrollment Info</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('certification')}
                className="bg-transparent border-2 border-[#d4af37] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4af37]/10 hover:shadow-lg hover:shadow-[#d4af37]/10"
              >
                Explore the Academy
              </button>

              {/* Quick link to Assessments from hero */}
              <button
                onClick={goToAssessments}
                className="bg-transparent border-2 border-[#0a1628]/20 text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a1628]/5 hover:shadow-lg"
              >
                Take an Assessment
              </button>
            </div>

            {/* Credibility Line */}
            <div className="border-t border-[#d4af37]/30 pt-8">
              <p className="text-lg text-gray-600 mb-2">
                <span className="text-[#d4af37] font-semibold">Clear Vision Consulting®</span> | Led by
                Dr. Kennita &quot;Coach Kay&quot; Williams, ACC
              </p>
              <p className="text-2xl font-bold text-[#d4af37] italic">See Well. Be Well. Lead Well.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Flagship Program Section */}
      <section id="certification" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Flagship Program</h2>
            <h3 className="text-3xl font-bold mb-4 text-[#0a1628]">
              Whole Health Leadership Coach Certification
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              A transformational coach training experience designed to equip emerging and developing coaches
              with the mindset, skillset, and toolset to coach individuals and leaders effectively.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Calendar className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: '12 Weeks Live Virtual Training',
                body: 'Interactive sessions with expert instruction and real-time learning'
              },
              {
                icon: <Users className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Practice Coaching Labs',
                body: 'Hands-on experience with guided practice opportunities'
              },
              {
                icon: <Clock className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Peer Coaching Hours',
                body: 'Build skills through structured peer-to-peer coaching'
              },
              {
                icon: <Eye className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Observed Coaching Session',
                body: 'Professional evaluation and personalized feedback'
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Certification Evaluation',
                body: 'Comprehensive assessment of coaching competencies'
              },
              {
                icon: <Award className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Digital Certificate + Badge',
                body: 'Official certification to showcase your achievement'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white text-[#0a1628] rounded-2xl p-6 border-2 border-[#d4af37] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* gold glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(212,175,55,0.22)]" />

                <div className="relative">
                  {card.icon}
                  <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                  <p className="text-gray-700">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instructor */}
          <div className="group relative bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_55px_rgba(212,175,55,0.28)]" />
            <div className="relative">
              <p className="text-sm text-[#d4af37] font-semibold mb-2">LEAD INSTRUCTOR</p>
              <h4 className="text-3xl font-bold mb-2 text-white">Dr. Kennita &quot;Coach Kay&quot; Williams, ACC</h4>
              <p className="text-gray-300 text-lg">International Coach Federation Associate Certified Coach</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Learning Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Learning Outcomes</h2>
            <p className="text-xl text-gray-700">Upon completion, graduates will:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              'Demonstrate ICF Core Coaching Competencies',
              'Practice active listening and powerful questioning',
              'Establish coaching agreements',
              'Evoke awareness and client action',
              'Apply the P3 Method® in sessions',
              'Integrate Whole Health Leadership principles',
              'Conduct professional coaching sessions',
              'Launch or strengthen a coaching practice'
            ].map((outcome, index) => (
              <div
                key={index}
                className="group relative flex items-start space-x-4 bg-gray-50 rounded-xl p-6 border border-[#d4af37]/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_35px_rgba(212,175,55,0.18)]" />
                <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1 relative" />
                <p className="text-lg text-[#0a1628] relative">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 12-Week Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">
              12-Week Certification Journey
            </h2>
            <p className="text-xl text-gray-700">Your transformational pathway to certified coach</p>
          </div>

          <div className="space-y-8">
            {/* Pre-Work */}
            <div className="group relative bg-white text-[#0a1628] rounded-2xl p-8 border-l-8 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(212,175,55,0.18)]" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    0
                  </div>
                  <h3 className="text-2xl font-bold">Pre-Work</h3>
                </div>
                <p className="text-lg ml-16">Orientation • Ethics • Mindset</p>
              </div>
            </div>

            {/* Weeks 1-7 */}
            <div className="group relative bg-white text-[#0a1628] rounded-2xl p-8 border-l-8 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(212,175,55,0.18)]" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    1-7
                  </div>
                  <h3 className="text-2xl font-bold">Foundation Phase</h3>
                </div>
                <div className="ml-16 space-y-2">
                  <p className="text-lg font-semibold">Core Coaching Foundations:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Foundation of Coaching</li>
                    <li>Power of Pause™</li>
                    <li>Trust &amp; Safety</li>
                    <li>Deep Listening</li>
                    <li>Powerful Questioning</li>
                    <li>Awareness Tools</li>
                    <li>P3 Method® in Action</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weeks 8-12 */}
            <div className="group relative bg-white text-[#0a1628] rounded-2xl p-8 border-l-8 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(212,175,55,0.18)]" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    8-12
                  </div>
                  <h3 className="text-2xl font-bold">Integration &amp; Mastery Phase</h3>
                </div>
                <div className="ml-16 space-y-2">
                  <p className="text-lg font-semibold">Advanced Practice &amp; Certification:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Presence Under Pressure</li>
                    <li>Client Growth Design</li>
                    <li>Ethical Practice Building</li>
                    <li>Observed Coaching</li>
                    <li>Integration &amp; Graduation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Completion Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">
              Completion Requirements
            </h2>
            <p className="text-xl text-gray-700">Professional standards for certification</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Calendar />, text: 'Attend live sessions' },
              { icon: <Clock />, text: 'Minimum 10 peer coaching hours' },
              { icon: <Users />, text: 'Minimum 3 practice clients' },
              { icon: <Eye />, text: '1 observed coaching session' },
              { icon: <FileText />, text: 'Reflection submissions' },
              { icon: <CheckCircle />, text: 'Self-evaluation' }
            ].map((req, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl p-6 border-2 border-[#d4af37]/30 flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_35px_rgba(212,175,55,0.16)]" />
                <div className="text-[#d4af37] mb-4 relative">{req.icon}</div>
                <p className="text-lg font-semibold text-[#0a1628] relative">{req.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Clear Vision Framework Section */}
      <section id="framework" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        {/* Ambient gold accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">
              Clear Vision Framework
            </h2>
            <p className="text-xl text-gray-700">
              Three Pillars of Whole Health Leadership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-16 h-16 text-[#d4af37] mb-6" />,
                title: 'See Well',
                sub: 'Clarity',
                body: 'Vision, identity, mindset, purpose alignment'
              },
              {
                icon: <Heart className="w-16 h-16 text-[#d4af37] mb-6" />,
                title: 'Be Well',
                sub: 'Wholeness',
                body: 'Emotional, relational, spiritual, wellness leadership'
              },
              {
                icon: <TrendingUp className="w-16 h-16 text-[#d4af37] mb-6" />,
                title: 'Lead Well',
                sub: 'Execution & Legacy',
                body: 'Strategic leadership, courage, long-term impact'
              }
            ].map((c, idx) => (
              <div
                key={idx}
                className="
                  group relative rounded-2xl p-8 border-2 border-[#d4af37]/70
                  bg-gradient-to-br from-[#07101e] via-[#0a1628] to-[#0f2542]
                  shadow-xl transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-2xl
                "
              >
                {/* gold glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_55px_rgba(212,175,55,0.35)]" />
                <div className="relative">
                  {c.icon}
                  <h3 className="text-2xl font-bold mb-3 text-[#d4af37]">{c.title}</h3>
                  <p className="text-lg mb-3 font-semibold text-white">{c.sub}</p>
                  <p className="text-white/95 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Signature Frameworks Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-[#fff7e1] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Signature Frameworks</h2>
            <p className="text-xl text-gray-700">Proprietary tools that power transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'P3 Method®',
                sub: 'Pause → Plan → Proceed',
                body: 'Strategic decision-making framework for intentional leadership',
                to: '/courses/p3-method'
              },
              {
                icon: <Sparkles className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Rhythm of Whole Health Leadership™',
                sub: 'Clarity • Wholeness • Execution • Legacy',
                body: 'Holistic approach to sustainable leadership excellence',
                to: '/courses/whole-health-leadership'
              },
              {
                icon: <Clock className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Permission to Pause™',
                sub: 'Reset, breathe, and lead from clarity',
                body: 'Burnout prevention and leadership renewal methodology',
                to: '/courses/permission-to-pause'
              }
            ].map((card, idx) => (
              <Link
                key={idx}
                to={card.to}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="group relative bg-white text-[#0a1628] rounded-2xl p-8 border-2 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_45px_rgba(212,175,55,0.20)]" />
                <div className="relative">
                  {card.icon}
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-xl font-semibold text-[#d4af37] mb-4">{card.sub}</p>
                  <p className="text-gray-700">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="max-w-5xl mx-auto px-4 mt-16">
            <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Assessments Section */}
      <section id="assessments" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Personalized Assessments</h2>
            <p className="text-xl text-gray-700">Data-driven insights for your leadership journey</p>

            {/* CTA to open the Assessments Hub */}
            <div className="mt-6">
              <Link
                to="/assessments"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/30 space-x-2"
              >
                <span>Take an Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
  { title: 'P3 Method® Leadership Assessment', to: '/assessment/p3-method' },
  { title: 'Power in the Pause™ Profile Assessment', to: '/assessment/power-pause' },
  { title: 'Whole Health Leadership Assessment', to: '/assessment/whole-health' },
  { title: 'Vision Clarity Assessment', to: '/assessment/vision-clarity' }
].map((item, index) => (
  <Link
    key={index}
    to={item.to}
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    className="bg-white text-[#0a1628] rounded-xl p-6 border-2 border-[#d4af37] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
  >
    <CheckCircle className="w-10 h-10 text-[#d4af37] mb-3" />
    <h3 className="text-xl font-bold">{item.title}</h3>
  </Link>
))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Target />, text: 'Real-time scoring' },
              { icon: <TrendingUp />, text: 'Visual dashboards' },
              { icon: <FileText />, text: 'Personalized feedback' },
              { icon: <CheckCircle />, text: 'Progress tracking' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border border-[#d4af37]/30 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_50px_rgba(212,175,55,0.25)]" />
                <div className="relative">
                  <div className="flex justify-center mb-3 text-[#d4af37]">{feature.icon}</div>
                  <p className="font-semibold text-white">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Supporting Courses Section */}
      <section id="courses" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-[#fff7e1] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Supporting Courses</h2>
            <p className="text-xl text-gray-700">Your Academy Learning Pathway</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Whole Health Leadership™',
                body: 'Foundational leadership transformation.',
                bg: 'bg-gray-50'
              },
              {
                icon: <Target className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'P3 Method® Leadership Course',
                body: 'Decision-making mastery.',
                bg: 'bg-gray-50'
              },
              {
                icon: <Clock className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Permission to Pause™',
                body: 'Burnout recovery + leadership reset.',
                bg: 'bg-gray-50'
              },
              {
                icon: <Star className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Vision Builders Youth Leadership',
                body: 'Identity, confidence, vision.',
                bg: 'bg-gray-50'
              },
              {
                icon: <Heart className="w-12 h-12 text-[#d4af37] mb-4" />,
                title: 'Clear Vision Devotional Track',
                body: 'Scripture + journaling wellness.',
                bg: 'bg-gray-50'
              }
            ].map((c, idx) => (
              <div
                key={idx}
                className={`group relative ${c.bg} rounded-2xl p-8 border-2 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_45px_rgba(212,175,55,0.16)]" />
                <div className="relative">
                  {c.icon}
                  <h3 className="text-xl font-bold mb-3 text-[#0a1628]">{c.title}</h3>
                  <p className="text-gray-700">{c.body}</p>
                </div>
              </div>
            ))}

            <div className="group relative bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_55px_rgba(212,175,55,0.22)]" />
              <div className="relative text-center text-white">
                <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
                <p className="text-lg font-bold">Coach Certification</p>
              </div>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="group relative bg-gray-50 rounded-2xl p-8 border-2 border-[#d4af37] shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_55px_rgba(212,175,55,0.14)]" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-center mb-8 text-[#0a1628]">Learning Pathway</h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold">Foundation</div>
                <ArrowRight className="text-[#d4af37]" />
                <div className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold">Skills</div>
                <ArrowRight className="text-[#d4af37]" />
                <div className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-bold">Sustainability</div>
                <ArrowRight className="text-[#d4af37]" />
                <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-6 py-3 rounded-lg font-bold">
                  Certification
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Student Journey Section */}
      <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Student Journey</h2>
            <p className="text-xl text-gray-700">Your path from enrollment to certification</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: 1, text: 'Request enrollment info' },
              { step: 2, text: 'Complete onboarding + assessments' },
              { step: 3, text: 'Enter student dashboard' },
              { step: 4, text: 'Complete coursework + practice labs' },
              { step: 5, text: 'Graduate + receive certification' },
              { step: 6, text: 'Coaching + advanced pathways offered' }
            ].map((item) => (
              <div
                key={item.step}
                className="group relative flex items-center space-x-6 bg-white rounded-xl p-6 border-l-4 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_45px_rgba(212,175,55,0.16)]" />
                <div className="relative bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <p className="relative text-lg font-semibold text-[#0a1628]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Who This Is For Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-[#fff7e1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Who This Is For</h2>
            <p className="text-xl text-gray-700">
              Especially those seeking clarity, confidence, and sustainable leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users />, title: 'Aspiring Coaches', desc: 'Ready to launch a coaching career' },
              { icon: <TrendingUp />, title: 'Leaders Transitioning', desc: 'Moving into coaching roles' },
              { icon: <Heart />, title: 'Ministry Leaders', desc: 'Serving with coaching skills' },
              { icon: <Target />, title: 'Entrepreneurs', desc: 'Building with leadership clarity' },
              { icon: <Star />, title: 'Professionals', desc: 'Expanding career capabilities' },
              { icon: <Shield />, title: 'Organizations', desc: 'Developing internal coaches' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl p-6 border-2 border-[#d4af37]/30 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(212,175,55,0.14)]" />
                <div className="relative">
                  <div className="flex justify-center mb-4 text-[#d4af37]">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#0a1628]">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What You Receive Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">What You Receive</h2>
            <p className="text-xl text-gray-700">Comprehensive resources for your success</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Live instruction',
              'Practice labs',
              'LMS lessons (LearnDash-ready)',
              'Workbooks',
              'Reflection exercises',
              'Group discussion tools',
              'Coaching notes',
              'Leadership assessments',
              'Certification preparation',
              'Digital certificate + badge'
            ].map((item, index) => (
              <div
                key={index}
                className="group relative flex items-center space-x-3 bg-white rounded-lg p-4 border border-[#d4af37]/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_35px_rgba(212,175,55,0.12)]" />
                <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 relative" />
                <span className="relative font-semibold text-[#0a1628]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values & Ethics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-[#fff7e1]">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Values &amp; Ethics</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Clear Vision Academy honors the whole person — mind, body, and spirit — while maintaining
            professional, client-centered coaching aligned with ICF ethical standards.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is this faith-based?',
                a: 'Yes — values-driven and scripture-integrated while maintaining professional coaching standards.'
              },
              {
                q: 'Is this self-paced?',
                a: 'Certification includes live sessions for real-time learning. Some supporting courses are self-paced.'
              },
              {
                q: 'Do I need prior coaching experience?',
                a: 'No prior experience required. We provide complete training from foundation to certification.'
              },
              {
                q: 'Is this ICF-recognized?',
                a: 'The program is ICF-aligned, teaching core competencies. Hours can count toward ICF credentialing requirements.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-8 border-l-4 border-[#d4af37] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_45px_rgba(212,175,55,0.14)]" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 text-[#0a1628]">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#d4af37] to-[#b8941f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0a1628]">
            Ready to Begin Your Coaching Certification Journey?
          </h2>
          <button
            onClick={() => setShowEnrollmentForm(true)}
            className="bg-[#0a1628] text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a5f] hover:shadow-2xl hover:shadow-black/20 flex items-center justify-center space-x-3 mx-auto"
          >
            <span>Request Enrollment Info</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1628] to-[#1e3a5f] border-t border-[#d4af37]/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <a
              href="https://clearvisionleader.com/"
              className="inline-flex items-center justify-center hover:opacity-80 transition-opacity duration-300 mb-6"
            >
              <img src="/academy_logo.PNG" alt="Clear Vision Academy Logo" className="h-16 w-auto" />
            </a>
            <p className="text-2xl font-bold text-[#d4af37] italic mb-6">See Well. Be Well. Lead Well.</p>
            <p className="text-gray-300 mb-4">Curriculum developed by Dr. Kennita Williams</p>
            <a href="mailto:drkay@clearvisionleader.com" className="text-[#d4af37] hover:underline text-lg">
              drkay@clearvisionleader.com
            </a>
          </div>

          <div className="border-t border-[#d4af37]/20 pt-8 text-center text-sm text-gray-400">
            <p className="mb-4">
              All content is proprietary curriculum developed by Clear Vision Consulting® and Dr. Kennita Williams.
              <br />
              Unauthorized reproduction prohibited.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="hover:text-[#d4af37] transition-colors">Privacy</button>
              <button className="hover:text-[#d4af37] transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <button
          onClick={() => setShowEnrollmentForm(true)}
          className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#d4af37]/25"
        >
          Request Enrollment Info
        </button>
      </div>

      {/* Enrollment Form Modal */}
      {showEnrollmentForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#d4af37] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-[#d4af37]">Request Enrollment Info</h3>
              <button
                onClick={() => setShowEnrollmentForm(false)}
                className="text-[#0a1628] hover:text-[#d4af37] transition-colors"
                aria-label="Close enrollment form"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your interest! We will contact you soon.');
                setShowEnrollmentForm(false);
              }}
            >
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#0a1628]">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#d4af37]/30 text-[#0a1628] focus:border-[#d4af37] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#0a1628]">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#d4af37]/30 text-[#0a1628] focus:border-[#d4af37] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#0a1628]">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#d4af37]/30 text-[#0a1628] focus:border-[#d4af37] focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#0a1628]">Current Role/Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#d4af37]/30 text-[#0a1628] focus:border-[#d4af37] focus:outline-none"
                  placeholder="e.g., Team Leader, Pastor, Entrepreneur"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#0a1628]">
                  What interests you most about this program?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#d4af37]/30 text-[#0a1628] focus:border-[#d4af37] focus:outline-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/30"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;