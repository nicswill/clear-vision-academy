import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

function ThankYouEnrollment() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
            <CheckCircle className="w-16 h-16 text-[#d4af37]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
            You're One Step Closer
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Thank you for requesting enrollment information for Clear Vision Academy.
          </p>
        </div>

        <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]/30 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#0a1628] font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Check Your Email</h3>
                <p className="text-gray-300">
                  You'll receive a confirmation email with additional program details shortly.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#0a1628] font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">We'll Review Your Request</h3>
                <p className="text-gray-300">
                  Our team will review your submission and follow up with next steps within 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#d4af37] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#0a1628] font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Connect with Our Team</h3>
                <p className="text-gray-300">
                  We'll provide you with enrollment details, answer your questions, and guide you through the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37] text-center">
          <Calendar className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Move Faster?</h2>
          <p className="text-gray-300 mb-6">
            Don't wait for us to reach out. Schedule your Enrollment Clarity Call now and get your questions answered directly.
          </p>
          <a
            href="https://calendly.com/clearvisionconsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all space-x-2"
          >
            <span>Book Your Enrollment Clarity Call</span>
            <ArrowRight className="w-5 h-5" />
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

export default ThankYouEnrollment;
