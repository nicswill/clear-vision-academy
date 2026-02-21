import { useEffect } from 'react';
import {
  Target,
  Clock,
  Heart,
  Eye,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

function AssessmentsHub() {
  // ✅ Always start at top when this route loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src="/logo.png" alt="Clear Vision Consulting Logo" className="h-14 w-auto mr-4" />
            </Link>

            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-[#d4af37] hover:underline font-semibold">
              Return to Academy
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <Eye className="w-16 h-16 text-[#d4af37]" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#d4af37]">Leadership Assessments</h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Gain insight. Lead with clarity.</p>

            <p className="text-lg text-gray-200 max-w-4xl mx-auto">
              Clear Vision Academy assessments are designed to help leaders, coaches, and professionals identify
              growth opportunities, strengthen decision-making, and move forward with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Target />, text: 'Real-time scoring' },
              { icon: <TrendingUp />, text: 'Visual dashboards' },
              { icon: <FileText />, text: 'Personalized feedback' },
              { icon: <CheckCircle />, text: 'Progress tracking' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1e3a5f] rounded-xl p-6 border border-[#d4af37]/30 text-center shadow-md"
              >
                <div className="flex justify-center mb-3 text-[#d4af37]">{feature.icon}</div>
                <p className="font-semibold text-white">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 mb-16">
            {/* Vision Clarity Assessment */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <Eye className="w-12 h-12 text-[#d4af37]" />
                    <h2 className="text-3xl font-bold text-white">Vision Clarity Assessment</h2>
                  </div>

                  <p className="text-lg text-gray-200 mb-4">
                    Identify how clearly your vision, direction, and leadership focus are currently aligned.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      10 Questions
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      5 Minutes
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      Instant Results
                    </span>
                  </div>

                  <p className="text-sm text-gray-100/90">
                    Measures: Vision alignment • Strategic focus • Decision-making clarity • Forward momentum
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Link
                    to="/assessment/vision-clarity"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all inline-flex items-center space-x-2"
                  >
                    <span>Take Assessment</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* P3 Leadership Assessment (NOW LIVE) */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="w-12 h-12 text-[#d4af37]" />
                    <h2 className="text-3xl font-bold text-white">P3 Method® Leadership Assessment</h2>
                  </div>

                  <p className="text-lg text-gray-200 mb-4">
                    Evaluate how you apply Pause, Plan, and Proceed in leadership decision-making.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      15 Questions
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      6 Minutes
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      Instant Results
                    </span>
                  </div>

                  <p className="text-sm text-gray-100/90">
                    Measures: Pause awareness • Planning clarity • Execution confidence
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Link
                    to="/assessment/p3-method"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all inline-flex items-center space-x-2"
                  >
                    <span>Take Assessment</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Power in the Pause */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="w-12 h-12 text-[#d4af37]" />
                    <h2 className="text-3xl font-bold text-white">Power in the Pause™ Profile</h2>
                  </div>

                  <p className="text-lg text-gray-200 mb-4">
                    Measure how well you use the Power in the Pause™ across six pause dimensions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      18 Questions
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      7 Minutes
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      Instant Results
                    </span>
                  </div>

                  <p className="text-sm text-gray-100/90">
                    Measures: Physical • Mental • Emotional • Spiritual • Relational • Purpose pause dimensions
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Link
                    to="/assessment/power-pause"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all inline-flex items-center space-x-2"
                  >
                    <span>Take Assessment</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Whole Health Leadership */}
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <Heart className="w-12 h-12 text-[#d4af37]" />
                    <h2 className="text-3xl font-bold text-white">Whole Health Leadership Assessment</h2>
                  </div>

                  <p className="text-lg text-gray-200 mb-4">
                    Measure your alignment across the Rhythm of Whole Health Leadership™.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      16 Questions
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      6 Minutes
                    </span>
                    <span className="bg-[#0a1628] text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                      Instant Results
                    </span>
                  </div>

                  <p className="text-sm text-gray-100/90">
                    Measures: Clarity Beat • Wholeness Beat • Execution Beat • Legacy Beat
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Link
                    to="/assessment/whole-health"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all inline-flex items-center space-x-2"
                  >
                    <span>Take Assessment</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Ready to Take Your Leadership Further?</h2>
            <p className="text-lg text-[#0a1628] mb-6">
              Transform insights into action with the Whole Health Leadership Coach Certification.
            </p>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center bg-[#0a1628] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-all shadow-xl space-x-2"
            >
              <span>Request Enrollment Info</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a1628] border-t border-[#d4af37]/20">
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

export default AssessmentsHub;