import { Link } from 'react-router-dom';
import {
  BookOpen,
  Target,
  Clock,
  Star,
  Heart,
  Award,
  ArrowRight,
  Eye
} from 'lucide-react';

function Courses() {
  const courses = [
    {
      id: 'whole-health-leadership',
      icon: <BookOpen className="w-12 h-12 text-[#d4af37]" />,
      title: 'Whole Health Leadership™',
      description: 'Master the foundational framework for leading with clarity, wholeness, and sustainable impact. Align vision, values, and execution.',
      modules: '6 Modules',
      duration: '8 Weeks',
      level: 'Foundation',
      path: '/courses/whole-health-leadership'
    },
    {
      id: 'p3-method',
      icon: <Target className="w-12 h-12 text-[#d4af37]" />,
      title: 'P3 Method® Leadership Course',
      description: 'Learn the signature Pause → Plan → Proceed framework for intentional decision-making and strategic leadership.',
      modules: '4 Modules',
      duration: '4 Weeks',
      level: 'Core Skills',
      path: '/courses/p3-method'
    },
    {
      id: 'permission-to-pause',
      icon: <Clock className="w-12 h-12 text-[#d4af37]" />,
      title: 'Permission to Pause™',
      description: 'Prevent burnout and lead from rest. Discover the power of strategic pausing and sustainable leadership rhythms.',
      modules: '5 Modules',
      duration: '5 Weeks',
      level: 'Sustainability',
      path: '/courses/permission-to-pause'
    },
    {
      id: 'vision-builders-youth',
      icon: <Star className="w-12 h-12 text-[#d4af37]" />,
      title: 'Vision Builders Youth Leadership',
      description: 'Empower young leaders with identity, confidence, and vision-casting skills. Designed for ages 13-18.',
      modules: '6 Modules',
      duration: '6 Weeks',
      level: 'Youth Program',
      path: '/courses/vision-builders-youth'
    },
    {
      id: 'devotional-track',
      icon: <Heart className="w-12 h-12 text-[#d4af37]" />,
      title: 'Clear Vision Devotional Track',
      description: 'Faith-integrated leadership devotionals combining scripture, reflection, and journaling for spiritual wellness.',
      modules: '30 Days',
      duration: 'Self-Paced',
      level: 'Spiritual Growth',
      path: '/courses/devotional-track'
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
              <Link
                to="/assessments"
                className="border-2 border-[#d4af37] text-[#0a1628] px-5 py-2 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all"
              >
                Assessments
              </Link>
              <a
                href="https://clearvisionleader.com/login/"
                target="_blank"
                rel="noreferrer"
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">Course Library</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your pathway to Whole Health Leadership certification and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={course.path}
                className="group bg-white rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-shrink-0">{course.icon}</div>
                  <ArrowRight className="w-6 h-6 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                </div>

                <h2 className="text-2xl font-bold mb-3 text-[#0a1628]">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#d4af37]/10 text-[#0a1628] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                    {course.modules}
                  </span>
                  <span className="bg-[#d4af37]/10 text-[#0a1628] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                    {course.duration}
                  </span>
                  <span className="bg-[#d4af37]/10 text-[#0a1628] px-3 py-1 rounded-full text-sm font-semibold border border-[#d4af37]/30">
                    {course.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] text-center shadow-xl">
            <Award className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Whole Health Leadership Coach Certification</h2>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              Complete these courses along with live training, practice labs, and observed coaching sessions
              to earn your ICF-aligned certification.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all space-x-2"
            >
              <span>Learn About Certification</span>
              <ArrowRight className="w-5 h-5" />
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

export default Courses;
