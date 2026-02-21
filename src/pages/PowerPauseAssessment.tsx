import { useMemo, useState } from 'react';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';

const WP_RESULTS_FORM_URL = "https://clearvisionleader.com/get-results";

interface Question {
  id: number;
  text: string;
  section: 'Physical Pause' | 'Mental Pause' | 'Emotional Pause' | 'Spiritual Pause' | 'Relational Pause';
}

const questions: Question[] = [
  // Physical Pause (1–3)
  { id: 1, text: 'I prioritize rest and recovery.', section: 'Physical Pause' },
  { id: 2, text: 'I recognize when my body needs a break.', section: 'Physical Pause' },
  { id: 3, text: 'I schedule downtime intentionally.', section: 'Physical Pause' },

  // Mental Pause (4–6)
  { id: 4, text: 'I allow time to reset my thinking.', section: 'Mental Pause' },
  { id: 5, text: 'I step away when overwhelmed.', section: 'Mental Pause' },
  { id: 6, text: 'I limit mental overload intentionally.', section: 'Mental Pause' },

  // Emotional Pause (7–9)
  { id: 7, text: 'I process emotions before responding.', section: 'Emotional Pause' },
  { id: 8, text: 'I recognize emotional triggers.', section: 'Emotional Pause' },
  { id: 9, text: 'I practice emotional self-regulation.', section: 'Emotional Pause' },

  // Spiritual Pause (10–12)
  { id: 10, text: 'I seek spiritual clarity during decisions.', section: 'Spiritual Pause' },
  { id: 11, text: 'I intentionally create time for reflection or prayer.', section: 'Spiritual Pause' },
  { id: 12, text: 'I align leadership choices with spiritual values.', section: 'Spiritual Pause' },

  // Relational Pause (13–15)
  { id: 13, text: 'I pause to consider relationship impact before decisions.', section: 'Relational Pause' },
  { id: 14, text: 'I check in with team members regularly.', section: 'Relational Pause' },
  { id: 15, text: 'I value relationship clarity before conflict resolution.', section: 'Relational Pause' },
];

type SectionKey =
  | 'Physical Pause'
  | 'Mental Pause'
  | 'Emotional Pause'
  | 'Spiritual Pause'
  | 'Relational Pause';

function PowerPauseAssessment() {
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

  const dimensionScores = useMemo(() => {
    const sums: Record<SectionKey, number> = {
      'Physical Pause': 0,
      'Mental Pause': 0,
      'Emotional Pause': 0,
      'Spiritual Pause': 0,
      'Relational Pause': 0,
    };

    for (const q of questions) {
      const v = answers[q.id];
      if (typeof v === 'number') sums[q.section] += v;
    }
    return sums;
  }, [answers]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Total range: 15–75 (15 questions)
  const getProfile = (score: number, dims: Record<SectionKey, number>) => {
    const values = Object.values(dims);
    const min = Math.min(...values);
    const max = Math.max(...values);

    // Whole Health Leader: strong + balanced
    const balanced = max - min <= 3; // dimensions are 3–15 each
    if (score >= 63 && balanced) {
      return {
        level: 'The Whole Health Leader',
        subtitle: 'Balanced across pause dimensions',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'You practice pause consistently across your life and leadership. Your rhythms support clarity, sustainability, and healthy influence.',
        insights: [
          'You build rest and recovery into your rhythm',
          'You reset your thinking under pressure',
          'You regulate emotions before responding',
          'You seek alignment through reflection/prayer',
          'You protect relationships through presence and clarity',
        ],
        recommendations: [
          'Keep a weekly “pause inventory” (5 minutes): what needs reset?',
          'Teach your pause practices to others you lead',
          'Strengthen one dimension further over the next 14 days',
          'Explore the Whole Health Leadership Coach Certification to multiply your impact',
        ],
      };
    }

    // Pusher: generally low pause
    if (score <= 36) {
      return {
        level: 'The Pusher',
        subtitle: 'Avoids rest and reflection',
        color: 'text-red-400',
        bgColor: 'bg-red-400/10',
        borderColor: 'border-red-400',
        description:
          'You may be operating in constant motion. Without intentional pause, clarity drops and burnout risk rises.',
        insights: [
          'Rest and recovery may be inconsistent or absent',
          'Mental overload may build without reset',
          'Emotional regulation becomes harder under stress',
          'Reflection/prayer rhythms may be minimal',
          'Relationships can suffer when urgency leads',
        ],
        recommendations: [
          'Start with one daily pause (3–5 minutes) for the next 7 days',
          'Schedule one recovery block this week (30–60 minutes)',
          'Use P3: Pause → Plan → Proceed when stress spikes',
          'Consider Permission to Pause™ for structure and support',
        ],
      };
    }

    // Protector: relational high, risk-avoidant / over-buffering
    const relational = dims['Relational Pause'];
    const physical = dims['Physical Pause'];
    const mental = dims['Mental Pause'];
    const emotional = dims['Emotional Pause'];
    const spiritual = dims['Spiritual Pause'];

    if (relational >= 12 && (mental <= 9 || physical <= 9)) {
      return {
        level: 'The Protector',
        subtitle: 'Strong relational awareness • avoids risk',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You lead with strong relationship awareness, but may hesitate to move forward when risk or conflict is present.',
        insights: [
          'You consider relational impact before decisions',
          'You prioritize harmony and psychological safety',
          'You may delay decisions to avoid tension or uncertainty',
          'Your mental/physical reset may need strengthening under stress',
        ],
        recommendations: [
          'Name the decision + set a deadline (don’t let it linger)',
          'Use a “hard conversation” script to reduce anxiety',
          'Add a weekly mental reset block (15 minutes)',
          'Strengthen your proceed rhythm using P3 planning',
        ],
      };
    }

    // Planner: reflects but struggles to move forward (mental/spiritual higher than physical/execution)
    if ((mental >= 11 || spiritual >= 11) && (physical <= 10 || emotional <= 10) && score >= 37 && score <= 58) {
      return {
        level: 'The Planner',
        subtitle: 'Reflects deeply • struggles to move forward',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You value reflection and alignment, but may struggle to translate pause into confident forward movement when pressure rises.',
        insights: [
          'You think deeply and value clarity',
          'You may pause and process longer than needed',
          'Energy and emotional bandwidth may fluctuate',
          'Action can stall when decisions feel heavy',
        ],
        recommendations: [
          'After pausing, choose ONE next step and start within 24 hours',
          'Build a physical reset rhythm (sleep, movement, downtime)',
          'Use a simple decision filter: values → priority → next step',
          'Consider certification/coaching for accountability and momentum',
        ],
      };
    }

    // Practitioner: actively practices pause strategies (moderate-high overall)
    return {
      level: 'The Practitioner',
      subtitle: 'Actively practices pause strategies',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400',
      description:
        'You practice pause in meaningful ways. With a little more consistency and balance, your leadership rhythm becomes even stronger.',
      insights: [
        'You have real pause practices that support clarity',
        'You reset thinking and emotions more often than not',
        'You’re building sustainable leadership rhythms',
        'Some dimensions may still be uneven under stress',
      ],
      recommendations: [
        'Target your lowest pause dimension for 14 days',
        'Add a weekly reflection/prayer block and protect it',
        'Strengthen your boundaries around mental overload',
        'Explore the Whole Health Leadership Coach Certification to deepen your rhythm',
      ],
    };
  };

  const analysis = getProfile(totalScore, dimensionScores);

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <Clock className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Power in the Pause™ Profile
            </h1>
            <p className="text-xl text-gray-300">
              Identify how you engage with rest, reflection, and reset strategies.
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
                  This profile evaluates five pause dimensions:
                </p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Physical Pause</li>
                  <li>• Mental Pause</li>
                  <li>• Emotional Pause</li>
                  <li>• Spiritual Pause</li>
                  <li>• Relational Pause</li>
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
              Your Power in the Pause™ Results
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

            <div className="grid md:grid-cols-5 gap-3 mb-8">
              {(
                [
                  'Physical Pause',
                  'Mental Pause',
                  'Emotional Pause',
                  'Spiritual Pause',
                  'Relational Pause',
                ] as SectionKey[]
              ).map((k) => (
                <div key={k} className="bg-[#0a1628] rounded-xl p-3 border border-[#d4af37]/20 text-center">
                  <p className="text-[10px] leading-tight text-gray-400 mb-1">{k}</p>
                  <p className="text-xl font-bold text-[#d4af37]">{dimensionScores[k]}</p>
                  <p className="text-[10px] text-gray-500">out of 15</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className={`text-2xl font-bold ${analysis.color} mb-2`}>{analysis.level}</p>
              <p className="text-lg font-semibold text-gray-300 mb-3">{analysis.subtitle}</p>
              <p className="text-gray-300 mb-6">{analysis.description}</p>

              <a
                href={`${WP_RESULTS_FORM_URL}?assessment=power-pause&score=${totalScore}&level=${encodeURIComponent(
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
              <h3 className="text-xl font-bold mb-3">Ready to Deepen This Skill?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Strengthen your pause capacity through certification
              </p>
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
          <a href="/assessments" className="text-[#d4af37] hover:underline font-semibold">
            ← Exit Assessment
          </a>
        </div>
      </div>
    </div>
  );
}

export default PowerPauseAssessment;