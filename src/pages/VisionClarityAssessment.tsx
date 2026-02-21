import { useMemo, useState } from 'react';
import { Eye, ArrowRight, CheckCircle } from 'lucide-react';

const WP_RESULTS_FORM_URL = "https://clearvisionleader.com/get-results";

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: 'I clearly understand my leadership calling.' },
  { id: 2, text: 'I have written leadership goals.' },
  { id: 3, text: 'My daily work aligns with my long-term vision.' },
  { id: 4, text: 'I can articulate my leadership mission easily.' },
  { id: 5, text: 'I feel confident about my leadership direction.' },
  { id: 6, text: 'I revisit my leadership goals regularly.' },
  { id: 7, text: 'I seek clarity when my vision feels unclear.' },
  { id: 8, text: 'I align leadership decisions with core values.' },
  { id: 9, text: 'I understand the impact I want to make as a leader.' },
  { id: 10, text: 'I feel motivated by my leadership purpose.' },
];

function VisionClarityAssessment() {
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

  // Total range: 10–50
  const getScoreAnalysis = (score: number) => {
    if (score >= 42) {
      return {
        level: 'Clear Vision Leader',
        subtitle: 'Purpose-Aligned + Direction-Driven',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'Your leadership purpose is clear and your direction is aligned. You’re motivated by mission and move with confident focus.',
        insights: [
          'You have strong clarity around calling, mission, and impact',
          'Your goals are defined and revisited consistently',
          'Your daily actions align with long-term direction',
          'Values guide your decisions with confidence and consistency',
          'You lead with motivation rooted in purpose',
        ],
        recommendations: [
          'Document your mission in one sentence and teach it to your team',
          'Build a quarterly vision review rhythm to protect alignment',
          'Mentor someone who is still clarifying their vision',
          'Explore the Whole Health Leadership Coach Certification to multiply impact',
        ],
      };
    }

    if (score >= 32) {
      return {
        level: 'Focused Vision',
        subtitle: 'Clear Direction + Growing Consistency',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        borderColor: 'border-green-400',
        description:
          'Your direction is solid and your purpose is becoming more consistent. With a stronger review rhythm, your clarity will stay steady under pressure.',
        insights: [
          'You have a clear sense of direction in most seasons',
          'Goals and impact are present, but review rhythms may be inconsistent',
          'Values generally guide decisions, even when stress rises',
          'Motivation is strong when priorities stay focused',
        ],
        recommendations: [
          'Create a weekly “vision check” (10 minutes) to stay aligned',
          'Clarify your top 3 priorities and protect them on your calendar',
          'Write one measurable goal for the next 30 days',
          'Use the P3 rhythm (Pause → Plan → Proceed) when decisions feel crowded',
        ],
      };
    }

    if (score >= 22) {
      return {
        level: 'Clarifying Vision',
        subtitle: 'Awareness is Growing',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400',
        description:
          'You’re developing clarity, but direction may still feel inconsistent. You’ll gain focus by turning purpose into written goals and weekly alignment.',
        insights: [
          'You have pieces of vision, but it may not be fully articulated',
          'Goals may exist mentally, but writing them will strengthen clarity',
          'Decision-making can be influenced by shifting priorities',
          'You’re learning to seek clarity when vision feels unclear',
        ],
        recommendations: [
          'Write a one-sentence mission statement and refine it weekly',
          'Set 1–2 written goals for the next 14 days',
          'Choose one core value to guide decisions this week',
          'Consider coaching/certification for structure, rhythm, and accountability',
        ],
      };
    }

    return {
      level: 'Searching for Vision',
      subtitle: 'Direction Needed',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400',
      description:
        'You may feel uncertain about calling, mission, or direction right now. Building clarity is the first step toward confident leadership and momentum.',
      insights: [
        'Calling and mission may feel unclear or hard to articulate',
        'Goals may not be written or consistently revisited',
        'Daily actions can feel disconnected from long-term direction',
        'Motivation may drop when purpose feels uncertain',
        'Decision-making may feel heavy without a clear “why”',
      ],
      recommendations: [
        'Start with one page: “What impact do I want to make as a leader?”',
        'Write 3 values that matter most and use them as a compass',
        'Choose ONE priority for the next 7 days and follow through',
        'Use P3: Pause → identify purpose → Plan one step → Proceed',
      ],
    };
  };

  const analysis = getScoreAnalysis(totalScore);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
              <Eye className="w-16 h-16 text-[#d4af37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
              Vision Clarity Assessment
            </h1>
            <p className="text-xl text-gray-300">
              Measure leadership purpose alignment and direction.
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
                <p className="text-sm text-gray-300">
                  This assessment helps you identify your current level of vision clarity and purpose alignment.
                </p>
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
              Your Vision Clarity Results
            </h1>
            <p className="text-xl text-gray-300">
              Hi {userInfo.firstName}, here&apos;s your personalized assessment.
            </p>
          </div>

          <div className={`${analysis.bgColor} border-2 ${analysis.borderColor} rounded-2xl p-8 mb-8`}>
            <div className="text-center mb-6">
              <p className="text-sm text-gray-300 mb-2">Your Score</p>
              <p className="text-6xl font-bold mb-2">{totalScore}</p>
              <p className="text-sm text-gray-400">out of 50</p>
            </div>

            <div className="text-center">
              <p className={`text-2xl font-bold ${analysis.color} mb-2`}>{analysis.level}</p>
              <p className="text-lg font-semibold text-gray-300 mb-3">{analysis.subtitle}</p>
              <p className="text-gray-300 mb-6">{analysis.description}</p>

              <a
                href={`${WP_RESULTS_FORM_URL}?assessment=vision-clarity&score=${totalScore}&level=${encodeURIComponent(
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
              <h3 className="text-xl font-bold mb-3">Ready for Transformation?</h3>
              <p className="text-gray-300 text-sm mb-4">Get certified as a Whole Health Leadership Coach</p>
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
            <Eye className="w-10 h-10 text-[#d4af37] mb-4" />
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

export default VisionClarityAssessment;