import { ArrowRight, CheckCircle, Download, Mail } from 'lucide-react';

function ThankYouOverview() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#d4af37]/10 rounded-full p-6 mb-6">
            <CheckCircle className="w-16 h-16 text-[#d4af37]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#d4af37]">
            Thank You!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Your program overview request has been received.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8c] rounded-2xl p-8 border-2 border-[#d4af37] mb-8 text-center">
          <Mail className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
          <p className="text-gray-300 mb-6">
            We've sent the Clear Vision Academy Program Overview to your inbox. If you don't see it within a few minutes, please check your spam folder.
          </p>
          <div className="bg-[#0a1628] rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-400">
              Email sent to: <span className="text-[#d4af37] font-semibold">your@email.com</span>
            </p>
          </div>
        </div>

        <div className="bg-[#1e3a5f] rounded-2xl p-8 border-2 border-[#d4af37]/30 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">What's Inside the Program Overview</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
              <p className="text-gray-300">Complete 12-week certification curriculum</p>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
              <p className="text-gray-300">Learning outcomes and competencies</p>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
              <p className="text-gray-300">Certification requirements and process</p>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
              <p className="text-gray-300">Investment details and enrollment options</p>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
              <p className="text-gray-300">Next steps to begin your journey</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
            <Download className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-3">Download Your Copy</h3>
            <p className="text-gray-300 text-sm mb-4">
              Access your program overview PDF
            </p>
            <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all w-full">
              Download Program Overview
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-xl p-6 border-2 border-[#d4af37] text-center">
            <ArrowRight className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Request enrollment information now
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
          <h3 className="text-lg font-bold mb-2">Have Questions?</h3>
          <p className="text-gray-300 mb-4">
            Connect with our team to learn more about the certification program.
          </p>
          <a
            href="mailto:drkay@clearvisionleader.com"
            className="text-[#d4af37] hover:underline font-semibold"
          >
            drkay@clearvisionleader.com
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

export default ThankYouOverview;
