import { ArrowRight, CheckCircle, Mail, Target } from 'lucide-react';

function ThankYouAssessment() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
            <CheckCircle className="w-16 h-16 text-[#d4af37]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
            Assessment Complete!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Thank you for completing the Vision Clarity Assessment.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] mb-8 text-center">
          <Mail className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Results Are Being Prepared</h2>
          <p className="text-gray-300 mb-6">
            Your assessment responses have been received. We're preparing your personalized results and insights.
          </p>
          <div className="bg-[#0a1628] rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">
              A detailed results report will be sent to your email shortly, including:
            </p>
            <div className="text-left space-y-1 text-sm">
              <p className="text-gray-300">• Your clarity score and assessment</p>
              <p className="text-gray-300">• Personalized insights and recommendations</p>
              <p className="text-gray-300">• Next steps for your leadership journey</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]/30 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-10 h-10 text-[#d4af37]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">What Your Assessment Reveals</h2>
          <p className="text-gray-300 mb-6 text-center">
            The Vision Clarity Assessment evaluates your current alignment across vision, decision-making, and strategic focus.
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] rounded-lg p-4 border-l-4 border-[#d4af37]">
              <h3 className="font-bold mb-2">Clarity Level: Needs Clarity (10-24)</h3>
              <p className="text-sm text-gray-300">
                Indicates opportunities to strengthen vision alignment and decision-making rhythm.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] rounded-lg p-4 border-l-4 border-[#d4af37]">
              <h3 className="font-bold mb-2">Clarity Level: Emerging Clarity (25-39)</h3>
              <p className="text-sm text-gray-300">
                Shows growing clarity with room for refinement in strategic execution.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] rounded-lg p-4 border-l-4 border-[#d4af37]">
              <h3 className="font-bold mb-2">Clarity Level: Strong Clarity (40-50)</h3>
              <p className="text-sm text-gray-300">
                Demonstrates strong vision alignment and consistent forward momentum.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
            <h3 className="text-xl font-bold mb-3">Take Another Assessment</h3>
            <p className="text-gray-300 text-sm mb-4">
              Explore additional leadership assessments
            </p>
            <a
              href="/assessments"
              className="bg-transparent border-2 border-[#d4af37] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all w-full inline-block"
            >
              View All Assessments
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
            <h3 className="text-xl font-bold mb-3">Ready for Certification?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transform your leadership with coach training
            </p>
            <a
              href="/"
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all w-full inline-block"
            >
              Request Enrollment Info
            </a>
          </div>
        </div>

        <div className="bg-[#1e3a5f] rounded-xl p-6 border border-[#d4af37]/30 text-center">
          <h3 className="text-lg font-bold mb-2 text-[#d4af37]">Based on Your Results...</h3>
          <p className="text-gray-300 mb-4">
            You may benefit from strengthening your clarity, decision-making rhythm, and leadership focus. The Whole Health Leadership Coach Certification equips you with proven frameworks and tools to lead with confidence.
          </p>
          <a
            href="/"
            className="text-[#d4af37] hover:underline font-semibold inline-flex items-center space-x-2"
          >
            <span>Learn about our certification program</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="text-[#d4af37] hover:underline font-semibold"
          >
            ← Return to Clear Vision Academy
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThankYouAssessment;
