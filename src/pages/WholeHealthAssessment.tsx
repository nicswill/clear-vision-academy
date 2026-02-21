import { useMemo, useState } from 'react';
import { Heart, ArrowRight, CheckCircle } from 'lucide-react';

const WP_RESULTS_FORM_URL = "https://clearvisionleader.com/get-results";

interface Question {
  id: number;
  text: string;
  section: 'Clarity Beat' | 'Wholeness Beat' | 'Execution Beat' | 'Legacy Beat';
}

const questions: Question[] = [
  // Clarity Beat (Head/Eyes) — 1–5
  { id: 1, text: 'I have a clear leadership vision.', section: 'Clarity Beat' },
  { id: 2, text: 'I understand my leadership values.', section: 'Clarity Beat' },
  { id: 3, text: 'I communicate vision effectively.', section: 'Clarity Beat' },
  { id: 4, text: 'I understand my leadership identity.', section: 'Clarity Beat' },
  { id: 5, text: 'I maintain clarity during leadership stress.', section: 'Clarity Beat' },

  // Wholeness Beat (Heart) — 6–10
  { id: 6, text: 'I maintain emotional wellness.', section: 'Wholeness Beat' },
  { id: 7, text: 'I build healthy leadership relationships.', section: 'Wholeness Beat' },
  { id: 8, text: 'I manage stress effectively.', section: 'Wholeness Beat' },
  { id: 9, text: 'I practice self-care as a leadership strategy.', section: 'Wholeness Beat' },
  { id: 10, text: 'I demonstrate empathy in leadership.', section: 'Wholeness Beat' },

  // Execution Beat (Hands) — 11–15
  { id: 11, text: 'I translate vision into action.', section: 'Execution Beat' },
  { id: 12, text: 'I complete leadership initiatives consistently.', section: 'Execution Beat' },
  { id: 13, text: 'I hold myself accountable.', section: 'Execution Beat' },
  { id: 14, text: 'I lead with confidence during change.', section: 'Execution Beat' },
  { id: 15, text: 'I maintain productivity without burnout.', section: 'Execution Beat' },

  // Legacy Beat (Core) — 16–20
  { id: 16, text: 'I mentor emerging leaders.', section: 'Legacy Beat' },
  { id: 17, text: 'I focus on long-term leadership impact.', section: 'Legacy Beat' },
  { id: 18, text: 'I lead beyond position or title.', section: 'Legacy Beat' },
  { id: 19, text: 'I model leadership integrity.', section: 'Legacy Beat' },
  { id: 20, text: 'I invest in leadership succession.', section: 'Legacy Beat' },
];

type SectionKey = Question['section'];

function WholeHealthAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ firstName: '', email: '' });
  const [showForm, setShowForm] = useState(true);

  const handleAnswer = (score: number) => {
    const q = questions[currentQuestion];
    const next = { ...answers, [q.id]: score };
    setAnswers(next);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  }, [answers]);

  const beatScores = useMemo(() => {
    const sums: Record<SectionKey, number> = {
      'Clarity Beat': 0,
      'Wholeness Beat': 0,
      'Execution Beat': 0,
      'Legacy Beat': 0,
    };

    for (const q of questions) {
      const v = answers[q.id];
      if (typeof v === 'number') sums[q.section] += v;
    }
    return sums;
  }, [answers]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Total range: 20–100
  const getProfile = (score: number, beats: Record<SectionKey, number>) => {
    const values = Object.values(beats);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const balanced = max - min <= 4; // each beat is 5–25

    if (score >= 85 && balanced) {
      return {
        level: 'Legacy Leader',
        subtitle: 'Integrated + Multiplying Impact',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'You lead with strong integration across clarity, wholeness, execution, and legacy—your rhythm is sustainable and multiplied through others.',
        insights: [
          'Your vision and values create steady clarity under pressure',
          'You sustain leadership through wholeness and emotional health',
          'You execute consistently while avoiding burnout patterns',
          'You lead beyond title and invest in others intentionally',
          'Your integrity and succession focus multiplies long-term impact',
        ],
        recommendations: [
          'Document your leadership rhythm and teach it to others',
          'Formalize mentoring: monthly development plans + check-ins',
          'Strengthen succession by delegating ownership (not just tasks)',
          'Explore the Whole Health Leadership Coach Certification to scale this impact',
        ],
      };
    }

    if (score >= 70) {
      return {
        level: 'Confident Leader',
        subtitle: 'Strong Rhythm + Growing Legacy',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'You demonstrate a strong leadership rhythm and are building sustainable practices that support effective execution and growing influence.',
        insights: [
          'You maintain clarity in direction and decision-making',
          'Wholeness practices support stability in your leadership',
          'Execution is consistent—momentum is a strength',
          'Legacy is present and ready to deepen through mentoring',
        ],
        recommendations: [
          'Target your weakest beat for the next 14 days',
          'Add a weekly rhythm review: clarity + wholeness + execution + legacy',
          'Create a simple mentoring pipeline for emerging leaders',
          'Consider certification to build a repeatable coaching framework',
        ],
      };
    }

    if (score >= 50) {
      return {
        level: 'Developing Leader',
        subtitle: 'Building Rhythms + Consistency',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You are building a healthy rhythm, but consistency varies by beat. Strengthening one or two areas will unlock greater alignment and effectiveness.',
        insights: [
          'Some beats are strong while others need reinforcement',
          'Clarity can shift under stress or competing demands',
          'Wholeness practices may be inconsistent during busy seasons',
          'Execution happens, but systems may need strengthening',
          'Legacy focus is emerging but not yet consistent',
        ],
        recommendations: [
          'Choose ONE beat to strengthen first (don’t fix everything at once)',
          'Use P3 weekly: Pause → Plan → Proceed to stabilize your rhythm',
          'Build one non-negotiable wholeness practice into your week',
          'Consider coaching/certification for structure and accountability',
        ],
      };
    }

    return {
      level: 'Emerging Leader',
      subtitle: 'Clarity + Rhythm Needed',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400',
      description:
        'Your leadership may feel stretched across competing demands. Establishing clarity and consistent rhythms will increase stability, confidence, and impact.',
      insights: [
        'Vision and identity may not feel fully anchored yet',
        'Stress and wellbeing can impact leadership effectiveness',
        'Execution may be reactive due to unclear priorities',
        'Legacy may not be defined or consistently practiced',
        'Greater alignment across beats will increase confidence and results',
      ],
      recommendations: [
        'Start with clarity: write a one-sentence leadership vision',
        'Add one weekly rhythm review (10 minutes) to reset priorities',
        'Choose one execution system (checklist, time block, routine) this week',
        'Consider Permission to Pause™ and Whole Health certification for support',
      ],
    };
  };

  const analysis = getProfile(totalScore, beatScores);

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <Heart className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Whole Health Leadership Assessment
            </h1>
            <p className="text-xl text-gray-300">
              Evaluate your leadership wellness across the Rhythm of Whole Health Leadership™.
            </p>
          </div>

          <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (userInfo.firstName && userInfo.email) setShowForm(false);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  value={userInfo.firstName}
                  onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a1628] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0a1628] border border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="bg-[#0a1628] rounded-lg p-4 border border-[#d4af37]/20">
                <p className="text-sm text-gray-300 mb-3">
                  This assessment evaluates your rhythm across four beats:
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Clarity Beat (Head/Eyes)</li>
                  <li>• Wholeness Beat (Heart)</li>
                  <li>• Execution Beat (Hands)</li>
                  <li>• Legacy Beat (Core)</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all flex items-center justify-center space-x-2"
              >
                <span>Begin Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="text-center mt-8">
            <a href="/assessments" className="text-[#d4af37] hover:underline font-semibold">
              ← Back to Assessments
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#0a1628] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <CheckCircle className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Your Whole Health Leadership Results
            </h1>
            <p className="text-xl text-gray-300">
              Hi {userInfo.firstName}, here&apos;s your personalized assessment.
            </p>
          </div>

          <div className={`${analysis.bgColor} border-2 ${analysis.borderColor} rounded-2xl p-8 mb-8`}>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-300 mb-2">Your Total Score</p>
              <p className="text-6xl font-bold mb-2">{totalScore}</p>
              <p className="text-sm text-gray-400">out of 100</p>
            </div>

            <div className="grid md:grid-cols-4 gap-3 mb-8">
              {(
                ['Clarity Beat', 'Wholeness Beat', 'Execution Beat', 'Legacy Beat'] as SectionKey[]
              ).map((k) => (
                <div key={k} className="bg-[#0a1628] rounded-xl p-3 border border-[#d4af37]/20 text-center">
                  <p className="text-[10px] leading-tight text-gray-400 mb-1">{k}</p>
                  <p className="text-xl font-bold text-[#d4af37]">{beatScores[k]}</p>
                  <p className="text-[10px] text-gray-500">out of 25</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className={`text-2xl font-bold ${analysis.color} mb-2`}>{analysis.level}</p>
              <p className="text-lg font-semibold text-gray-300 mb-3">{analysis.subtitle}</p>
              <p className="text-gray-300 mb-6">{analysis.description}</p>

              <a
                href={`${WP_RESULTS_FORM_URL}?assessment=whole-health&score=${totalScore}&level=${encodeURIComponent(
                  analysis.level
                )}&email=${encodeURIComponent(userInfo.email)}&firstName=${encodeURIComponent(userInfo.firstName)}`}
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
              >
                Get My Results + Next Steps
              </a>

              <p className="text-xs text-gray-400 mt-3">
                You’ll be taken to a secure form to receive your detailed results and next steps.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Key Insights</h3>
              <ul className="space-y-3">
                {analysis.insights.map((insight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span className="text-gray-300">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37]/30">
              <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Recommendations</h3>
              <ul className="space-y-3">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span className="text-gray-300">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Get Your Results Email</h2>
            <p className="text-gray-300 mb-6">
              Enter your details on the secure form to receive your full results + next steps at{' '}
              <span className="text-[#d4af37] font-semibold">{userInfo.email}</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
              <h3 className="text-xl font-bold mb-3">Take Another Assessment</h3>
              <p className="text-gray-300 text-sm mb-4">Explore additional leadership insights</p>
              <a
                href="/assessments"
                className="bg-transparent border-2 border-[#d4af37] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all w-full inline-block"
              >
                View All Assessments
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
              <h3 className="text-xl font-bold mb-3">Deepen Your Leadership</h3>
              <p className="text-gray-300 text-sm mb-4">Transform through coach certification</p>
              <a
                href="/"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all w-full inline-block"
              >
                Request Enrollment Info
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="/" className="text-[#d4af37] hover:underline font-semibold">
              ← Return to Clear Vision Academy
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-[#1e3a5f] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-10 h-10 text-[#d4af37]" />
              <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                {questions[currentQuestion].section}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].text}</h2>
            <p className="text-sm text-gray-400">Select what is most true for you right now</p>
          </div>

          <div className="space-y-3">
            {[
              { score: 5, label: 'Strongly True', color: 'from-green-600 to-green-500' },
              { score: 4, label: 'Consistently True', color: 'from-green-700 to-green-600' },
              { score: 3, label: 'Often True', color: 'from-yellow-600 to-yellow-500' },
              { score: 2, label: 'Sometimes True', color: 'from-orange-600 to-orange-500' },
              { score: 1, label: 'Rarely True', color: 'from-red-600 to-red-500' },
            ].map((option) => (
              <button
                key={option.score}
                onClick={() => handleAnswer(option.score)}
                className={`w-full bg-gradient-to-r ${option.color} text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-left flex items-center justify-between group`}
              >
                <span>{option.label}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/assessments" className="text-[#d4af37] hover:underline font-semibold">
            ← Exit Assessment
          </a>
        </div>
      </div>
    </div>
  );
}

export default WholeHealthAssessment;