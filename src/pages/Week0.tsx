import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  FileText,
  Download,
  Lightbulb,
  Target,
  CheckCircle2,
  Shield,
  Heart,
  Users
} from 'lucide-react';

function Week0() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [signatureDate, setSignatureDate] = useState('');

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
                0
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#d4af37]">Week 0</h1>
                <p className="text-2xl font-bold text-[#0a1628] mt-1">Pre-Work & Orientation</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-lg p-4 border-l-4 border-[#d4af37]">
              <p className="text-lg font-semibold text-[#0a1628]">
                <span className="text-[#d4af37]">Primary Competency:</span> Ethics • Mindset • Foundation
              </p>
            </div>
          </div>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Target className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Learning Objectives</h2>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                    <span className="text-gray-700">Understand ICF Core Competencies and ethical standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                    <span className="text-gray-700">Explore the coaching mindset vs. consulting/advising</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                    <span className="text-gray-700">Review and commit to CVA coaching agreements and ground rules</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                    <span className="text-gray-700">Set personal learning goals for the 12-week certification journey</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <BookOpen className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6 text-[#0a1628]">Lessons</h2>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3 mb-4">
                      <Heart className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Lesson 1: Welcome & Program Overview</h3>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        <strong className="text-[#d4af37]">Welcome to Clear Vision Academy!</strong>
                      </p>
                      <p>
                        Dear Future Coach, we are thrilled to have you join us on this transformative 12-week journey!
                        Under the guidance of Coach Kay (Kennita Williams, CPLC), you will be equipped and empowered
                        to build a successful coaching practice grounded in faith, professionalism, and excellence.
                      </p>

                      <div className="bg-[#d4af37]/5 rounded-lg p-4 border-l-4 border-[#d4af37]">
                        <h4 className="font-bold text-[#0a1628] mb-2">What to Expect:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span><strong>12 Weeks of Comprehensive Training:</strong> Weekly live virtual labs, coaching practice sessions, and asynchronous learning</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span><strong>ICF-Aligned Curriculum:</strong> Learn the 8 Core Coaching Competencies recognized globally</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span><strong>Faith-Centered Approach:</strong> Integrate your Christian values with professional coaching excellence</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span><strong>Hands-On Practice:</strong> Real coaching opportunities with feedback and mentorship</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                            <span><strong>Community & Support:</strong> Join a cohort of like-minded Christian coaches on the same journey</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                        <h4 className="font-bold text-[#0a1628] mb-2">Program Structure:</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Week 0:</strong> Orientation & Foundation</li>
                          <li><strong>Weeks 1-3:</strong> Coaching Foundations & Competencies 1-3</li>
                          <li><strong>Weeks 4-6:</strong> Advanced Competencies & Communication Skills</li>
                          <li><strong>Weeks 7-9:</strong> Mastering the Coaching Process & Client Management</li>
                          <li><strong>Weeks 10-12:</strong> Business Development & Final Certification</li>
                        </ul>
                      </div>

                      <p className="italic text-[#0a1628]">
                        Remember: You are part of a vision unfolding as we rest in His presence, plans, and purposes
                        for us all in His glorious name!
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Lesson 2: ICF Core Competencies</h3>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        The International Coaching Federation (ICF) is the world's leading organization for professional
                        coaches. Clear Vision Academy's curriculum is fully aligned with the <strong>ICF's 8 Core Coaching Competencies</strong>,
                        ensuring you receive world-class training that is globally recognized.
                      </p>

                      <div className="bg-[#d4af37]/5 rounded-lg p-5 border border-[#d4af37]/30">
                        <h4 className="font-bold text-[#0a1628] mb-3 text-lg">The 8 ICF Core Competencies:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">1. Demonstrates Ethical Practice</h5>
                            <p className="text-sm">Understands and consistently applies coaching ethics and standards</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">2. Embodies a Coaching Mindset</h5>
                            <p className="text-sm">Develops and maintains a mindset that is open, curious, flexible, and client-centered</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">3. Establishes and Maintains Agreements</h5>
                            <p className="text-sm">Partners with the client to create clear agreements about the coaching relationship</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">4. Cultivates Trust and Safety</h5>
                            <p className="text-sm">Partners with the client to create a safe, supportive environment</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">5. Maintains Presence</h5>
                            <p className="text-sm">Is fully conscious and present with the client, employing a style that is open, flexible, grounded, and confident</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">6. Listens Actively</h5>
                            <p className="text-sm">Focuses on what the client is saying and not saying to understand meaning and emotion</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">7. Evokes Awareness</h5>
                            <p className="text-sm">Facilitates client insight and learning by using tools and techniques such as powerful questioning</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-[#d4af37]/20">
                            <h5 className="font-bold text-[#d4af37] mb-2">8. Facilitates Client Growth</h5>
                            <p className="text-sm">Partners with the client to transform learning and insight into action</p>
                          </div>
                        </div>
                      </div>

                      <p>
                        Throughout this 12-week program, each competency will be explored in depth with practical application,
                        skill-building exercises, and coaching practice sessions. You will learn to embody these competencies
                        in a way that honors both professional standards and your faith values.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-[#d4af37]/20 hover:border-[#d4af37]/40 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3 mb-4">
                      <Users className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-[#0a1628]">Lesson 3: Coaching Mindset</h3>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="text-lg font-semibold text-[#0a1628]">
                        What Makes Coaching Different?
                      </p>
                      <p>
                        As you begin your coaching journey, it's essential to understand what coaching is—and what it is not.
                        Many helping professions share the goal of supporting others, but each has a distinct approach and purpose.
                      </p>

                      <div className="bg-white rounded-lg p-5 border border-[#d4af37]/20">
                        <h4 className="font-bold text-[#0a1628] mb-3">Understanding the Distinctions:</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-[#d4af37] pl-4">
                            <h5 className="font-bold text-[#d4af37] mb-1">Coaching</h5>
                            <p className="text-sm"><strong>Focus:</strong> Empowering the client to find their own answers</p>
                            <p className="text-sm"><strong>Approach:</strong> Asking powerful questions, active listening, evoking awareness</p>
                            <p className="text-sm"><strong>Belief:</strong> The client is creative, resourceful, and whole</p>
                            <p className="text-sm"><strong>Outcome:</strong> Client-generated insights, goals, and action plans</p>
                          </div>

                          <div className="border-l-4 border-gray-400 pl-4">
                            <h5 className="font-bold text-gray-700 mb-1">Consulting</h5>
                            <p className="text-sm"><strong>Focus:</strong> Providing expert advice and solutions</p>
                            <p className="text-sm"><strong>Approach:</strong> Analyzing problems and recommending strategies</p>
                            <p className="text-sm"><strong>Belief:</strong> The consultant has expertise the client needs</p>
                            <p className="text-sm"><strong>Outcome:</strong> Expert-driven recommendations and implementation plans</p>
                          </div>

                          <div className="border-l-4 border-gray-400 pl-4">
                            <h5 className="font-bold text-gray-700 mb-1">Mentoring</h5>
                            <p className="text-sm"><strong>Focus:</strong> Sharing experience and guidance based on the mentor's journey</p>
                            <p className="text-sm"><strong>Approach:</strong> Teaching, advising, and modeling behavior</p>
                            <p className="text-sm"><strong>Belief:</strong> The mentor's experience provides valuable lessons</p>
                            <p className="text-sm"><strong>Outcome:</strong> Mentee learns from mentor's wisdom and experience</p>
                          </div>

                          <div className="border-l-4 border-gray-400 pl-4">
                            <h5 className="font-bold text-gray-700 mb-1">Counseling/Therapy</h5>
                            <p className="text-sm"><strong>Focus:</strong> Healing emotional or psychological issues</p>
                            <p className="text-sm"><strong>Approach:</strong> Exploring past experiences and processing emotions</p>
                            <p className="text-sm"><strong>Belief:</strong> Understanding the past helps heal the present</p>
                            <p className="text-sm"><strong>Outcome:</strong> Emotional healing and psychological wellness</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#d4af37]/5 rounded-lg p-4 border-l-4 border-[#d4af37]">
                        <h4 className="font-bold text-[#0a1628] mb-2">The Coaching Mindset: Core Principles</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                            <span><strong>Empowerment over Advice:</strong> Trust that clients have their own answers within them</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                            <span><strong>Presence over Performance:</strong> Be fully present with the client, not focused on having the "right" answer</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                            <span><strong>Curiosity over Judgment:</strong> Approach each client and session with genuine curiosity</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                            <span><strong>Partnership over Hierarchy:</strong> The client is the expert on their life; you partner with them</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-[#d4af37] rounded-full w-2 h-2 flex-shrink-0 mt-2" />
                            <span><strong>Action over Analysis:</strong> Focus on forward movement and client-driven action</span>
                          </li>
                        </ul>
                      </div>

                      <p className="italic text-[#0a1628]">
                        As Christian coaches, we trust that the Holy Spirit is already at work in our clients' lives.
                        Our role is to create space for them to hear God's voice and discover His plans for them.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] shadow-lg">
                    <div className="flex items-start space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-white">Lesson 4: Ethics & Professional Standards</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-center mb-6">
                        <img
                          src="/39E8BEF0-F16E-4709-9832-2C654597A45D.PNG"
                          alt="Clear Vision Academy Logo"
                          className="h-32 w-auto"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>

                      <div className="bg-white/95 rounded-lg p-6 space-y-4 text-gray-800">
                        <h4 className="text-2xl font-bold text-[#0a1628] text-center mb-4">Clear Vision Academy Coaching Agreement</h4>

                        <div className="space-y-3 text-sm leading-relaxed">
                          <h5 className="font-bold text-[#d4af37] text-lg">Letter of Notice Regarding Clear Vision Academy</h5>
                          <p className="font-semibold">Coaches,</p>
                          <p>
                            Please note that the purpose and intent of this course is to empower, equip and prepare you to frame up
                            and fully manifest your own successful coaching practice. I ask that you please keep in mind that these
                            documents, processes, protocols and information are proprietary to Clear Vision Academy a program under
                            Clear Vision Consulting, LLC and unless given permission in advance are not to be shared or copied.
                          </p>
                          <p>
                            In addition, this collective is the frame I am using to build my coaching school and referral-coaching base.
                            Given this you will be part of the building phase and will see the wonderful work of the Father as it unfolds.
                            This is a true vision unfolding as we move into and take this journey. I appreciate your understanding, your
                            patience, your loving grace and your humble feedback as we rest in His presence, plans and purposes for us
                            all in His glorious name!
                          </p>
                          <p className="font-semibold">
                            Kennita "Coach Kay" Williams, CPLC<br />
                            CEO, Clear Vision Consulting, LLC
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/95 rounded-lg p-6 space-y-4 text-gray-800">
                        <h4 className="text-xl font-bold text-[#0a1628] mb-4">Code of Ethics</h4>

                        <p className="text-sm leading-relaxed">
                          Clear Vision Coaching Academy supports and stands in agreement with the Code of Ethics set forth by the
                          International Coaching Federation at{' '}
                          <a
                            href="http://coachfederation.org/about/ethics.aspx?ItemNumber=854"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#d4af37] hover:underline"
                          >
                            http://coachfederation.org/about/ethics.aspx?ItemNumber=854
                          </a>
                          {' '}which outlines standards for professional coaching.
                        </p>

                        <h5 className="font-bold text-[#0a1628] mt-4 mb-2">As a Christian Coach:</h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">1.</span>
                            <p>I will uphold the highest standards of integrity, truth and honesty with my clients, personal relationships and professional interactions.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">2.</span>
                            <p>I will safeguard all discussions and interactions with my clients, to the extent they do not violate or go against established laws.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">3.</span>
                            <p>I will be transparent and forthcoming with my clients regarding our coaching relationship and what this involves. This encompasses the coaching process and program structure, associate costs/investment and policies related to discounts, reimbursements and expectations.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">4.</span>
                            <p>I will never give a client's name, details regarding our coaching sessions, personal information or related items to anyone without my client's express written and signed Consent.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">5.</span>
                            <p>I will give proper reference for all sources and materials utilized in the process of coaching. I will respect all copyrights, trademarks and intellectual property.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">6.</span>
                            <p>I will be prudent to avoid conflicts of interest. If any should arise, I shall, without delay, inform concerned parties of my position.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">7.</span>
                            <p>I will represent myself honestly and clearly to my clients, and coach only within my areas of expertise.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">8.</span>
                            <p>I will wholeheartedly pursue self-care and personal and professional growth in all areas of my life and encourage my clients to do the same.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">9.</span>
                            <p>I will refer a client to another coach if I am not within my area of expertise or comfort so that the client gets the best possible coaching. In addition, I will refer clients who need counseling to reputable, licensed counselors who will provide them with the best quality of care.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">10.</span>
                            <p>I will honor my Christian values and the values of the clients I serve in my personal and professional conduct so as to present Jesus Christ, the CVCA, and the coaching profession as a whole in an excellent manner.</p>
                          </div>
                        </div>

                        <p className="text-xs italic text-gray-600 mt-4">
                          I understand that my printed name shall stand as my electronic signature to acknowledge and agree that I shall abide by the set Code of Ethics.
                        </p>
                      </div>

                      <div className="bg-white/95 rounded-lg p-6 space-y-4 text-gray-800">
                        <h4 className="text-xl font-bold text-[#0a1628] mb-4">Ground Rules</h4>

                        <p className="text-sm leading-relaxed mb-4">
                          As we embark on our coaching journey, I want to lay down a few ground rules and I ask that you honor them and comply.
                        </p>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">1.</span>
                            <div>
                              <p>Complete, Sign and Return NLT one (1) week prior to the course commencement date, the:</p>
                              <ul className="ml-6 mt-1 space-y-1">
                                <li>a. Coaching Agreement and,</li>
                                <li>b. Ethics and Confidentiality Statement.</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">2.</span>
                            <p>ALL assignments and discussion posts are due weekly no later than Tuesdays at 10pm, EST</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">3.</span>
                            <p>Be in class ready to work during all scheduled meeting times with your computer camera switched "on".</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">4.</span>
                            <p>I have an open "door" policy. We can schedule a time to speak by phone anytime you need to discuss concerns, issues, etc.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">5.</span>
                            <p>Respond to all forms of communication, to include emails, texts or phone calls within 24-48 hours and expect the same from CVA faculty.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">6.</span>
                            <p>We are all coaches in our own right and taking this journey together. In the spirit of this, we will respect one another's differences and honor each other's gifts.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">7.</span>
                            <p>Be present for all meetings. You cannot miss more than two sessions.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">8.</span>
                            <p>Prepare a place in your home and be seated in this space during class or a quiet space (hotel room, conference center, etc. if traveling) that is quiet and will allow you to fully focus on coaching with the group as well as your clients. In addition, this space can be used for your coaching homework and prayer time.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">9.</span>
                            <p>Have a strong WiFi signal.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">10.</span>
                            <p>Have textbooks available and all assignments completed.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">11.</span>
                            <p>Be fully present and engaged during the class meeting as well as asynchronous class meeting (Blackboard courseroom).</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">12.</span>
                            <p>Complete all assignments before or by the due date and be ready to discuss, facilitate or engage in class, regarding the assignments.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">13.</span>
                            <p>We will NOT say, "I don't know" or use this as a means to "cop out" or avoid hard conversations or challenges.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">14.</span>
                            <p>We WILL be fully present in the courseroom and in our videoconferences and will make time to seek the Lord for ourselves, our fellow Coaches, Coach Kay, and CVA faculty. Use one another as referral sources as we come across those who may need a form of coaching that we don't specialize in.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">15.</span>
                            <p>Refer the Clear Vision Coaching Academy to other coaches whom you feel may be served by taking this journey.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">16.</span>
                            <p>We are helpers one to the other. As a CVA graduate you are now part of the family. CVA will refer you to clients, give you opportunities to serve at booked CVA events, and we will give you a referral fee for referring prospective coaches who successfully complete CVA courses/certifications.</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="font-bold text-[#d4af37] flex-shrink-0">17.</span>
                            <div>
                              <p>Repeated attendance issues, non-compliance of signed ethics agreement, rules of conduct and missed assignments will result in the following:</p>
                              <ul className="ml-6 mt-1 space-y-1">
                                <li>a. 1st Offense: Phone discussion with Coach in question</li>
                                <li>b. 2nd Offense: Removal from the course. No refund of course fees or textbooks</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs italic text-gray-600 mt-4">
                          I understand that my printed name shall stand as my electronic signature to acknowledge and agree that I shall abide by the set Ground Rules.
                        </p>
                      </div>

                      <div className="bg-white/95 rounded-lg p-6 space-y-4">
                        <h4 className="text-xl font-bold text-[#0a1628] mb-4">Agreement Acceptance</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          By completing this section, you acknowledge that you have read, understood, and agree to abide by the
                          CVA Coaching Agreement, Code of Ethics, and Ground Rules outlined above.
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              id="agreement-checkbox"
                              checked={agreedToTerms}
                              onChange={(e) => setAgreedToTerms(e.target.checked)}
                              className="mt-1 w-5 h-5 text-[#d4af37] border-gray-300 rounded focus:ring-[#d4af37]"
                            />
                            <label htmlFor="agreement-checkbox" className="text-sm text-gray-800 cursor-pointer">
                              I agree to the CVA Coaching Agreement, Code of Ethics, and Ground Rules
                            </label>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="signer-name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name (Electronic Signature)
                              </label>
                              <input
                                type="text"
                                id="signer-name"
                                value={signerName}
                                onChange={(e) => setSignerName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                              />
                            </div>

                            <div>
                              <label htmlFor="signature-date" className="block text-sm font-semibold text-gray-700 mb-2">
                                Date
                              </label>
                              <input
                                type="date"
                                id="signature-date"
                                value={signatureDate}
                                onChange={(e) => setSignatureDate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div className="bg-[#d4af37]/5 rounded-lg p-4 border-l-4 border-[#d4af37]">
                            <p className="text-xs text-gray-600">
                              <strong>Note:</strong> This is a visual-only form for preview purposes. Official agreement submission
                              will be completed through the student portal after enrollment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] shadow-lg mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Lightbulb className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Reflection Prompt</h2>
                <p className="text-gray-200 leading-relaxed">
                  What draws you to coaching? What mindset shifts might you need to make as you transition into the role of coach?
                  How do you currently see the difference between coaching and other helping professions? Take time to journal your
                  thoughts and bring them to your first class session.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg mb-8">
            <div className="flex items-start space-x-4">
              <Download className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[#0a1628]">Downloads</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all">
                    <FileText className="w-6 h-6 text-[#d4af37] mb-2" />
                    <p className="font-semibold text-[#0a1628] mb-1">Week 0 Workbook</p>
                    <p className="text-sm text-gray-600 italic">Available after enrollment</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all">
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
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-[#0a1628]">Week 0 Facilitation Guide:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Ensure all students have completed and signed the coaching agreement before Week 1</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Create a welcoming atmosphere that honors both professional excellence and faith values</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Allow time for students to ask questions about program expectations and commitments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Emphasize the distinction between coaching and other helping professions from day one</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Set the tone for confidentiality, mutual respect, and collaborative learning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Review the reflection prompt and encourage journaling as an ongoing practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1" />

            <Link
              to="/certification"
              className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
            >
              Back to Certification Hub
            </Link>

            <Link
              to="/certification/week-1"
              className="flex-1 inline-flex items-center justify-center bg-white border-2 border-[#d4af37] text-[#0a1628] px-6 py-4 rounded-lg font-bold hover:bg-[#d4af37]/10 transition-all space-x-2"
            >
              <span>Next Week</span>
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

export default Week0;
