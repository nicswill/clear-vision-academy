import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  FileText,
  Download,
  Lightbulb,
  Target
} from 'lucide-react';

interface WeekPageProps {
  weekNumber: number;
  title: string;
  competency: string;
  objectives?: string[];
  lessons?: { title: string; description: string }[];
  reflectionPrompt?: string;
}

function WeekPage({
  weekNumber,
  title,
  competency,
  objectives = [
    'Understand core concepts and frameworks',
    'Apply principles to real coaching scenarios',
    'Develop practical skills through exercises',
    'Integrate learning with previous weeks'
  ],
  lessons = [
    { title: 'Lesson 1: Introduction', description: 'Overview of key concepts and frameworks' },
    { title: 'Lesson 2: Core Principles', description: 'Deep dive into foundational principles' },
    { title: 'Lesson 3: Practical Application', description: 'Hands-on practice and skill development' },
    { title: 'Lesson 4: Integration', description: 'Connecting concepts to coaching practice' }
  ],
  reflectionPrompt = 'Reflect on how this week\'s learning applies to your coaching practice. What insights did you gain? How will you apply these concepts with your clients?'
}: WeekPageProps) {
  const prevWeek = weekNumber > 0 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 12 ? weekNumber + 1 : null;

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
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#d4af37] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                {weekNumber}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#d4af37]">Week {weekNumber}</h1>
                <p className="text-2xl font-bold text-[#0a1628] mt-1">{title}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-lg p-4 border-l-4 border-[#d4af37]">
              <p className="text-lg font-semibold text-[#0a1628]">
                <span className="text-[#d4af37]">Primary Competency:</span> {competency}
              </p>
            </div>
          </div>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Target className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Learning Objectives</h2>
                <ul className="space-y-2">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <BookOpen className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6 text-[#0a1628]">Lessons</h2>
                <div className="grid gap-4">
                  {lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:shadow-md transition-all"
                    >
                      <h3 className="text-lg font-bold mb-2 text-[#0a1628]">{lesson.title}</h3>
                      <p className="text-gray-700">{lesson.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Lightbulb className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Reflection Prompt</h2>
                <p className="text-gray-200 leading-relaxed">{reflectionPrompt}</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4">
              <Download className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Downloads</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-[#d4af37]/20">
                    <FileText className="w-6 h-6 text-[#d4af37] mb-2" />
                    <p className="font-semibold text-[#0a1628] mb-1">Week {weekNumber} Workbook</p>
                    <p className="text-sm text-gray-600 italic">Available after enrollment</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-[#d4af37]/20">
                    <FileText className="w-6 h-6 text-[#d4af37] mb-2" />
                    <p className="font-semibold text-[#0a1628] mb-1">Supplemental Materials</p>
                    <p className="text-sm text-gray-600 italic">Available after enrollment</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-2xl p-8 border border-[#d4af37]/30 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Notes for Coach/Facilitator</h2>
            <div className="bg-white rounded-lg p-6 border border-[#d4af37]/20">
              <p className="text-gray-600 italic">
                Facilitator notes and guidance will be available here for instructors leading this week's
                session. This section includes tips for group discussions, coaching demonstrations, and
                practice exercises.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevWeek !== null ? (
              <Link
                to={`/certification/week-${prevWeek}`}
                className="flex-1 inline-flex items-center justify-center bg-white border-2 border-[#d4af37] text-[#0a1628] px-6 py-4 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous Week</span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link
              to="/certification"
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
            >
              Back to Certification Hub
            </Link>

            {nextWeek !== null ? (
              <Link
                to={`/certification/week-${nextWeek}`}
                className="flex-1 inline-flex items-center justify-center bg-white border-2 border-[#d4af37] text-[#0a1628] px-6 py-4 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all space-x-2"
              >
                <span>Next Week</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
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

export default WeekPage;
