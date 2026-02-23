import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';

function EnrollmentTest() {
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const enrolled = localStorage.getItem('cva_enrolled') === 'true';
    setIsEnrolled(enrolled);
  }, []);

  const toggleEnrollment = () => {
    const newStatus = !isEnrolled;
    localStorage.setItem('cva_enrolled', String(newStatus));
    setIsEnrolled(newStatus);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-[#0a1628] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border-2 border-[#d4af37]/30 shadow-lg">
          <h1 className="text-3xl font-bold text-[#d4af37] mb-6">Enrollment Testing Tool</h1>

          <div className="mb-6 p-4 rounded-lg bg-gray-50 border border-[#d4af37]/20">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Current Status:</span>
              <div className="flex items-center space-x-2">
                {isEnrolled ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-green-600">Enrolled</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-600" />
                    <span className="font-bold text-red-600">Not Enrolled</span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={toggleEnrollment}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
            >
              Toggle Enrollment Status
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              This page helps you test the enrollment gating feature. Use the button above to toggle between enrolled and not enrolled states.
            </p>

            <div className="bg-[#d4af37]/5 rounded-lg p-4 border-l-4 border-[#d4af37]">
              <h3 className="font-bold text-[#0a1628] mb-2">Testing Instructions:</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                <li>Click the toggle button to change enrollment status</li>
                <li>Try accessing Week 1 (Pre-Work & Orientation) page</li>
                <li>When NOT enrolled, you should be redirected to the Certification page</li>
                <li>When enrolled, you should be able to access the Week 1 page</li>
              </ol>
            </div>

            <div className="flex flex-col space-y-3 mt-6">
              <Link
                to="/certification/week-0"
                className="bg-white border-2 border-[#d4af37] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#d4af37]/10 transition-all text-center"
              >
                Go to Week 1 (Gated Page)
              </Link>

              <Link
                to="/certification"
                className="bg-gray-100 border-2 border-gray-300 text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all text-center"
              >
                Go to Certification (Public Page)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentTest;
