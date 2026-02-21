import { Link } from 'react-router-dom';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Award,
  ArrowLeft,
  Play,
  FileText
} from 'lucide-react';

function CourseWholeHealth() {
  const modules = [
    {
      number: 1,
      title: 'Introduction to Whole Health Leadership',
      lessons: [
        'What is Whole Health Leadership?',
        'The Clear Vision Framework: See Well, Be Well, Lead Well',
        'Rhythm of Whole Health Leadership™',
        'Self-Assessment: Where Am I Now?'
      ]
    },
    {
      number: 2,
      title: 'Clarity Beat: See Well',
      lessons: [
        'Vision Clarity and Purpose Alignment',
        'Identity Formation in Leadership',
        'Mindset Mastery',
        'Strategic Focus and Direction Setting'
      ]
    },
    {
      number: 3,
      title: 'Wholeness Beat: Be Well',
      lessons: [
        'Emotional Intelligence in Leadership',
        'Relational Health and Team Dynamics',
        'Spiritual Wellness and Values Integration',
        'Physical and Mental Well-being'
      ]
    },
    {
      number: 4,
      title: 'Execution Beat: Lead Well',
      lessons: [
        'From Vision to Action',
        'Decision-Making Frameworks',
        'Accountability and Follow-Through',
        'Leading Through Change'
      ]
    },
    {
      number: 5,
      title: 'Legacy Beat: Lasting Impact',
      lessons: [
        'Building for the Long Term',
        'Developing Others as Leaders',
        'Creating Sustainable Systems',
        'Your Leadership Legacy'
      ]
    },
    {
      number: 6,
      title: 'Integration and Practice',
      lessons: [
        'Bringing It All Together',
        'Creating Your Personal Leadership Plan',
        'Maintaining the Rhythm',
        'Next Steps and Continued Growth'
      ]
    }
  ];

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
                to="/dashboard"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="text-[#0a1628] px-4 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center text-[#d4af37] hover:underline mb-8 space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Link>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-xl mb-12">
            <BookOpen className="w-16 h-16 text-[#d4af37] mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Whole Health Leadership™</h1>
            <p className="text-xl text-gray-200 mb-6">
              Master the foundational framework for leading with clarity, wholeness, and sustainable impact.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">
                6 Modules
              </span>
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">
                8 Weeks
              </span>
              <span className="bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded-full text-sm font-bold">
                Foundation Level
              </span>
            </div>

            <div className="border-t border-[#d4af37]/30 pt-6">
              <h3 className="text-xl font-bold text-white mb-3">What You'll Learn:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">The Rhythm of Whole Health Leadership™</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Vision clarity and purpose alignment</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Emotional and relational health</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Strategic execution frameworks</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Building lasting leadership legacy</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Personal leadership development plan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#d4af37]">Course Curriculum</h2>
            <div className="space-y-4">
              {modules.map((module) => (
                <div
                  key={module.number}
                  className="bg-white rounded-xl border-2 border-[#d4af37]/30 shadow-md overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent p-6 border-b border-[#d4af37]/20">
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#d4af37] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {module.number}
                      </div>
                      <h3 className="text-xl font-bold text-[#0a1628]">{module.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3">
                      {module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <Play className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-md">
              <FileText className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#0a1628]">Course Materials</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Video lessons for each module</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Downloadable workbook</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Reflection exercises</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Leadership assessment tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-[#d4af37]/30 shadow-md">
              <Award className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#0a1628]">Certificate of Completion</h3>
              <p className="text-gray-700 mb-4">
                Earn a digital certificate upon completing all modules and assessments. This course contributes
                to your Whole Health Leadership Coach Certification pathway.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">Ready to Begin?</h2>
            <p className="text-lg text-[#0a1628] mb-6">
              Enroll in the certification program to access this course.
            </p>
            <a
              href="https://clearvisionleader.com/login/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#0a1628] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-all shadow-xl"
            >
              Student Login
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

export default CourseWholeHealth;
