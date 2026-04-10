import { Radio } from 'lucide-react';

const BreakingNews = () => {
  const breakingHeadlines = [
    "শিগগিরই স্থানীয় সরকার নির্বাচনের প্রস্তুতি শুরু হবে: এলজিআরডি প্রতিমন্ত্রী",
    "৩০ উপজেলায় হামের বিশেষ টিকাদান কার্যক্রম শুরু রবিবার: স্বাস্থ্যমন্ত্রী",
    "ফরিদপুরে টানা দ্বিতীয় দিন চার গ্রামের মধ্যে সংঘর্ষ, আহত অর্ধশতাধিক",
    "যুক্তরাষ্ট্রের ৪৮ ঘণ্টার যুদ্ধবিরতি প্রস্তাব প্রত্যাখ্যান করেছে তেহরান",
    "বাংলাদেশ ক্রিকেট দলের ঐতিহাসিক জয়, বিশ্বচ্যাম্পিয়নদের হারালো টাইগাররা",
  ];

  return (
    <div className="bg-green-600 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Breaking News Label */}
          <div className="flex-shrink-0 flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-lg pulse-badge">
            <Radio className="w-4 h-4" />
            <span className="font-bold text-sm whitespace-nowrap">ব্রেকিং নিউজ</span>
          </div>

          {/* Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="breaking-ticker flex items-center gap-8">
              {[...breakingHeadlines, ...breakingHeadlines].map((headline, index) => (
                <span key={index} className="text-sm font-medium whitespace-nowrap flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                  {headline}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
