import { useMemo, useState } from 'react';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WP_RESULTS_FORM_URL = "https://clearvisionleader.com/get-results";

interface Question {
  id: number;
  text: string;
  section: 'Pause' | 'Plan' | 'Proceed';
}

const questions: Question[] = [
  // Section A: PAUSE AWARENESS (1–5)
  { id: 1, text: 'I intentionally pause before making major leadership decisions.', section: 'Pause' },
  { id: 2, text: 'I create space for reflection before responding to challenges.', section: 'Pause' },
  { id: 3, text: 'I recognize signs of leadership fatigue or overwhelm.', section: 'Pause' },
  { id: 4, text: 'I allow myself time to think before speaking or acting.', section: 'Pause' },
  { id: 5, text: 'I practice structured reflection in my leadership role.', section: 'Pause' },

  // Section B: PLANNING CLARITY (6–10)
  { id: 6, text: 'I set clear leadership priorities before taking action.', section: 'Plan' },
  { id: 7, text: 'I develop written plans for major leadership initiatives.', section: 'Plan' },
  { id: 8, text: 'I seek input before implementing strategic decisions.', section: 'Plan' },
  { id: 9, text: 'I regularly review progress toward leadership goals.', section: 'Plan' },
  { id: 10, text: 'I align daily actions with long-term leadership vision.', section: 'Plan' },

  // Section C: EXECUTION CONFIDENCE (11–15)
  { id: 11, text: 'I take decisive action after planning.', section: 'Proceed' },
  { id: 12, text: 'I follow through on leadership commitments.', section: 'Proceed' },
  { id: 13, text: 'I remain confident when implementing leadership decisions.', section: 'Proceed' },
  { id: 14, text: 'I adjust strategy without abandoning vision.', section: 'Proceed' },
  { id: 15, text: 'I evaluate outcomes after completing initiatives.', section: 'Proceed' },
];

type SectionKey = 'Pause' | 'Plan' | 'Proceed';

function P3LeadershipAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ firstName: '', email: '' });
  const [showForm, setShowForm] = useState(true);

  const handleAnswer = (score: number) => {
    const q = questions[currentQuestion];
    const newAnswers = { ...answers, [q.id]: score };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  }, [answers]);

  const sectionScores = useMemo(() => {
    const sums: Record<SectionKey, number> = { Pause: 0, Plan: 0, Proceed: 0 };
    for (const q of questions) {
      const v = answers[q.id];
      if (typeof v === 'number') sums[q.section] += v;
    }
    return sums;
  }, [answers]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Profile logic based on pattern + balance (simple + robust)
  const getProfile = (pause: number, plan: number, proceed: number) => {
    // Range per section: 5–25. Total range: 15–75.
    const avg = (pause + plan + proceed) / 3;
    const hi = 19; // "high" threshold
    const lo = 13; // "low" threshold

    // Clear Vision Leader: balanced and strong
    const balanced = Math.max(pause, plan, proceed) - Math.min(pause, plan, proceed) <= 4;
    if (balanced && avg >= 17) {
      return {
        level: 'The Clear Vision Leader',
        subtitle: 'Balanced across Pause, Plan, Proceed',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'You lead with clarity, intention, and confidence. Your rhythm is balanced: you pause with awareness, plan with clarity, and proceed with strong follow-through.',
        insights: [
          'You slow down long enough to lead with intention',
          'You plan strategically and align actions to vision',
          'You execute consistently with confidence and adaptability',
          'You evaluate outcomes and learn without losing momentum',
        ],
        recommendations: [
          'Keep a weekly P3 review (15 minutes): Pause → Plan → Proceed',
          'Teach your team your decision rhythm using the P3 Method®',
          'Use your sub-scores to refine your weakest phase over the next 14 days',
          'Explore the Whole Health Leadership Coach Certification to multiply your impact',
        ],
      };
    }

    // Reactor: low pause, moderate plan, high proceed (moves fast, burnout risk)
    if (pause <= lo && proceed >= hi) {
      return {
        level: 'The Reactor',
        subtitle: 'Fast Execution • Risk of Reactive Leadership',
        color: 'text-red-400',
        bgColor: 'bg-red-400/10',
        borderColor: 'border-red-400',
        description:
          'You tend to act quickly and push forward, but may skip the pause that protects clarity and sustainability.',
        insights: [
          'You move fast, even under pressure',
          'Decisions may be made before emotions or fatigue are processed',
          'Planning can be rushed when urgency rises',
          'Burnout risk increases without intentional pause rhythms',
        ],
        recommendations: [
          'Add a “60-second Pause” before major decisions this week',
          'Schedule 1 reflection block (10 minutes) mid-week',
          'Create a simple Plan template: priority → next step → deadline',
          'Consider Permission to Pause™ for structure and renewal',
        ],
      };
    }

    // Overthinker: high pause, low proceed (reflects, struggles to execute)
    if (pause >= hi && proceed <= lo) {
      return {
        level: 'The Overthinker',
        subtitle: 'Deep Reflection • Needs Execution Confidence',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You pause and reflect well, but may hesitate to proceed. Clarity is present—confidence to execute needs strengthening.',
        insights: [
          'You take time to process decisions thoughtfully',
          'You may delay action while trying to “get it perfect”',
          'Momentum can be lost due to hesitation or uncertainty',
        ],
        recommendations: [
          'Use a “2-step Proceed”: decide 1 action + set a 24-hour start deadline',
          'Practice completion over perfection for 7 days',
          'Pick one small initiative and finish it end-to-end this week',
          'Consider coaching/certification to build execution rhythm',
        ],
      };
    }

    // Strategist: balanced pause & plan, needs proceed
    if (pause >= 16 && plan >= 16 && proceed < 16) {
      return {
        level: 'The Strategist',
        subtitle: 'Strong Pause + Plan • Build Follow-Through',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You think and plan strategically. Your next level is building execution confidence and consistent follow-through.',
        insights: [
          'You can see the path clearly and plan it well',
          'You may struggle to maintain momentum once you start',
          'Follow-through can fluctuate when obstacles arise',
        ],
        recommendations: [
          'Create a 7-day execution sprint: 1 priority, 1 daily action',
          'Track progress with a simple checklist (no over-planning)',
          'Do a Friday review: what worked, what to adjust, what to repeat',
          'Consider the Whole Health Leadership Coach Certification to strengthen execution',
        ],
      };
    }

    // Default: Rhythmic Builder
    return {
      level: 'Rhythmic Builder',
      subtitle: 'Growing Consistency in the P3 Rhythm',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400',
      description:
        'You’re building a strong leadership rhythm. With a few targeted adjustments, your P3 consistency will increase under pressure.',
      insights: [
        'You understand the value of Pause → Plan → Proceed™',
        'Consistency may vary depending on stress and urgency',
        'Some phases of P3 are stronger than others',
      ],
      recommendations: [
        'Focus on your lowest sub-score for the next 14 days',
        'Add a weekly planning block (30 minutes) and protect it',
        'Use a “Pause prompt” when stressed: What matters most right now?',
        'Explore certification to strengthen rhythm and accountability',
      ],
    };
  };

  const analysis = getProfile(sectionScores.Pause, sectionScores.Plan, sectionScores.Proceed);

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <Clock className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              P3 Method® Leadership Assessment
            </h1>
            <p className="text-xl text-gray-300">
              Evaluate how you apply Pause, Plan, and Proceed in decision-making.
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
                  This assessment evaluates leadership decision rhythm across three phases:
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Pause Awareness (self-regulation + reflection)</li>
                  <li>• Planning Clarity (priorities + strategy)</li>
                  <li>• Execution Confidence (follow-through + evaluation)</li>
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
            <Link to="/assessments" className="text-[#d4af37] hover:underline font-semibold">
              ← Back to Assessments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const resultsUrl =
      `${WP_RESULTS_FORM_URL}?assessment=p3-method` +
      `&score=${encodeURIComponent(String(totalScore))}` +
      `&pause=${encodeURIComponent(String(sectionScores.Pause))}` +
      `&plan=${encodeURIComponent(String(sectionScores.Plan))}` +
      `&proceed=${encodeURIComponent(String(sectionScores.Proceed))}` +
      `&level=${encodeURIComponent(analysis.level)}` +
      `&email=${encodeURIComponent(userInfo.email)}` +
      `&firstName=${encodeURIComponent(userInfo.firstName)}`;

    return (
      <div className="min-h-screen bg-[#0a1628] px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <CheckCircle className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Your P3 Method® Results
            </h1>
            <p className="text-xl text-gray-300">
              Hi {userInfo.firstName}, here&apos;s your personalized assessment.
            </p>
          </div>

          <div className={`${analysis.bgColor} border-2 ${analysis.borderColor} rounded-2xl p-8 mb-8`}>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-300 mb-2">Your Total Score</p>
              <p className="text-6xl font-bold mb-2">{totalScore}</p>
              <p className="text-sm text-gray-400">out of 75</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {(['Pause', 'Plan', 'Proceed'] as SectionKey[]).map((k) => (
                <div key={k} className="bg-[#0a1628] rounded-xl p-4 border border-[#d4af37]/20 text-center">
                  <p className="text-xs text-gray-400 mb-1">{k} Score</p>
                  <p className="text-2xl font-bold text-[#d4af37]">{sectionScores[k]}</p>
                  <p className="text-xs text-gray-500">out of 25</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className={`text-2xl font-bold ${analysis.color} mb-2`}>{analysis.level}</p>
              <p className="text-lg font-semibold text-gray-300 mb-3">{analysis.subtitle}</p>
              <p className="text-gray-300 mb-6">{analysis.description}</p>

              <a
                href={resultsUrl}
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
              <Link
                to="/assessments"
                className="bg-transparent border-2 border-[#d4af37] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all w-full inline-block"
              >
                View All Assessments
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
              <h3 className="text-xl font-bold mb-3">Deepen Your Leadership</h3>
              <p className="text-gray-300 text-sm mb-4">Transform through coach certification</p>
              <Link
                to="/"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all w-full inline-block"
              >
                Request Enrollment Info
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="text-[#d4af37] hover:underline font-semibold">
              ← Return to Clear Vision Academy
            </Link>
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
            />
          </div>
        </div>

        <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-10 h-10 text-[#d4af37]" />
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
          <Link to="/assessments" className="text-[#d4af37] hover:underline font-semibold">
            ← Exit Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default P3LeadershipAssessment;