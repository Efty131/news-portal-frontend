import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const latestNews = [
    {
      id: '5',
      image: '/images/dhaka-skyline.jpg',
      category: 'বাংলাদেশ',
      categoryClass: 'category-national',
      title: 'ঢাকার আকাশে আজ দেখা যাবে বিশেষ জ্যোতির্বিজ্ঞান ঘটনা',
      excerpt: 'রাজধানী ঢাকাসহ দেশের বিভিন্ন স্থানে আজ সন্ধ্যায় দেখা যাবে একটি বিশেষ জ্যোতির্বিজ্ঞান ঘটনা। আবহাওয়া অফিস জানিয়েছে, আকাশ পরিষ্কার থাকলে এই দৃশ্য দেখা যাবে।',
      time: '৩০ মিনিট আগে',
    },
    {
      id: '6',
      image: '/images/agriculture.jpg',
      category: 'কৃষি',
      categoryClass: 'category-sports',
      title: 'ধানের বাম্পার ফলনে কৃষকের মুখে হাসি',
      excerpt: 'এবারের মৌসুমে ধানের বাম্পার ফলন হয়েছে। কৃষকরা জানিয়েছেন, আবহাওয়া অনুকূলে থাকায় এবং সরকারি সহায়তা পাওয়ায় ভালো ফলন হয়েছে।',
      time: '১ ঘণ্টা আগে',
    },
    {
      id: '7',
      image: '/images/technology.jpg',
      category: 'প্রযুক্তি',
      categoryClass: 'category-tech',
      title: 'বাংলাদেশে ৫জি ইন্টারনেট সেবা শুরু',
      excerpt: 'দেশের প্রধান শহরগুলোতে ৫জি ইন্টারনেট সেবা চালু করেছে টেলিকম অপারেটরগুলো। প্রথম পর্যায়ে ঢাকা, চট্টগ্রাম ও সিলেটে এই সেবা পাওয়া যাবে।',
      time: '২ ঘণ্টা আগে',
    },
    {
      id: '8',
      image: '/images/education.jpg',
      category: 'শিক্ষা',
      categoryClass: 'category-business',
      title: 'বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষার সময়সূচি প্রকাশ',
      excerpt: 'আগামী মাস থেকে শুরু হতে যাওয়া বিশ্ববিদ্যালয় ভর্তি পরীক্ষার সময়সূচি প্রকাশ করা হয়েছে। এবারে সবগুলো পরীক্ষা ডিজিটাল পদ্ধতিতে নেওয়া হবে।',
      time: '৩ ঘণ্টা আগে',
    },
    {
      id: '1',
      image: '/images/healthcare.jpg',
      category: 'স্বাস্থ্য',
      categoryClass: 'category-politics',
      title: 'স্বাস্থ্যখাতে নতুন প্রকল্প অনুমোদন',
      excerpt: 'সরকার স্বাস্থ্যখাতে একটি নতুন প্রকল্প অনুমোদন করেছে। এই প্রকল্পের আওতায় দেশের প্রত্যন্ত অঞ্চলে আধুনিক স্বাস্থ্যসেবা পৌঁছে দেওয়া হবে।',
      time: '৪ ঘণ্টা আগে',
    },
    {
      id: '2',
      image: '/images/cox-bazar.jpg',
      category: 'পর্যটন',
      categoryClass: 'category-entertainment',
      title: 'কক্সবাজারে পর্যটকদের ঢল, হোটেল বুকিং ফুল',
      excerpt: 'পর্যটন মৌসুমে কক্সবাজারে পর্যটকদের ভিড় বেড়েছে। সব হোটেল ও রিসোর্ট প্রায় পূর্ণ capacity তে চলছে বলে জানিয়েছেন ব্যবসায়ীরা।',
      time: '৫ ঘণ্টা আগে',
    },
    {
      id: '3',
      image: '/images/sunderbans.jpg',
      category: 'পরিবেশ',
      categoryClass: 'category-sports',
      title: 'সুন্দরবনে বাঘের সংখ্যা বাড়ছে',
      excerpt: 'সর্বশেষ জরিপে সুন্দরবনে রয়েল বেঙ্গল টাইগারের সংখ্যা বেড়েছে বলে জানিয়েছে বন বিভাগ। সংরক্ষণ প্রচেষ্টার ফলে এই সাফল্য এসেছে বলে মনে করা হচ্ছে।',
      time: '৬ ঘণ্টা আগে',
    },
    {
      id: '4',
      image: '/images/cultural-festival.jpg',
      category: 'সংস্কৃতি',
      categoryClass: 'category-entertainment',
      title: 'ঢাকায় শুরু হলো আন্তর্জাতিক সাংস্কৃতিক উৎসব',
      excerpt: 'রাজধানী ঢাকায় তিন দিনব্যাপী আন্তর্জাতিক সাংস্কৃতিক উৎসব শুরু হয়েছে। বিভিন্ন দেশের শিল্পীরা এতে অংশ নিচ্ছেন।',
      time: '৭ ঘণ্টা আগে',
    },
  ];

  return (
    <section id="latest" className="scroll-reveal">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">সর্বশেষ খবর</h2>
        <a 
          href="#all-news" 
          className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
        >
          সব দেখুন
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {latestNews.map((news, index) => (
          <Link 
            key={index}
            to={`/article/${news.id}`}
            className="news-card group cursor-pointer block"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article>
              <div className="news-card-image aspect-video">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className={`category-badge ${news.categoryClass} mb-2`}>
                  {news.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-700">
                  <Clock className="w-3 h-3" />
                  {news.time}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
