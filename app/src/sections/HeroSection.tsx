import { Link } from 'react-router-dom';
import { Clock, Eye } from 'lucide-react';

const HeroSection = () => {
  const featuredNews = {
    id: '1',
    image: '/images/news-anchor.jpg',
    category: 'জাতীয়',
    title: 'শিগগিরই স্থানীয় সরকার নির্বাচনের প্রস্তুতি শুরু হবে: এলজিআরডি প্রতিমন্ত্রী',
    excerpt: 'শিগগিরই স্থানীয় সরকার নির্বাচনের প্রস্তুতি শুরু করা হবে জানিয়ে এলজিআরডি প্রতিমন্ত্রী মীর শাহে আলম বলেছেন, সংশ্লিষ্ট অধ্যাদেশগুলো আইন হিসেবে প্রকাশের পরই এ কার্যক্রম শুরু হবে।',
    time: '২ ঘণ্টা আগে',
    views: '১২,৫৪৩',
  };

  const sideNews = [
    {
      id: '2',
      image: '/images/parliament.jpg',
      category: 'রাজনীতি',
      title: 'জাতীয় সংসদের বাজেট অধিবেশন শুরু হচ্ছে আগামী সপ্তাহে',
      time: '১ ঘণ্টা আগে',
    },
    {
      id: '3',
      image: '/images/sports-victory.jpg',
      category: 'খেলা',
      title: 'বাংলাদেশ ক্রিকেট দলের ঐতিহাসিক জয়',
      time: '৩ ঘণ্টা আগে',
    },
    {
      id: '4',
      image: '/images/business-meeting.jpg',
      category: 'বাণিজ্য',
      title: 'দেশীয় বিনিয়োগ বাড়ছে, আশাবাদী ব্যবসায়ীরা',
      time: '৪ ঘণ্টা আগে',
    },
  ];

  return (
    <section className="scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Featured News - Main */}
        <div className="lg:col-span-3">
          <Link to={`/article/${featuredNews.id}`} className="group block">
            <article className="relative overflow-hidden rounded-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded mb-3">
                  {featuredNews.category}
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-green-300 transition-colors">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-2">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredNews.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {featuredNews.views}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>

        {/* Side News */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {sideNews.map((news, index) => (
            <Link 
              key={index}
              to={`/article/${news.id}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <article className="flex gap-4 p-3">
                <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className={`text-xs font-semibold uppercase mb-1 ${
                    news.category === 'রাজনীতি' ? 'text-blue-600' :
                    news.category === 'খেলা' ? 'text-green-600' :
                    'text-orange-600'
                  }`}>
                    {news.category}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {news.title}
                  </h3>
                  <span className="text-xs text-gray-700 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {news.time}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
