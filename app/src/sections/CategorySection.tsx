import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  category: string;
  color: 'blue' | 'green' | 'red' | 'orange' | 'purple';
  featuredImage: string;
  featuredTitle: string;
  featuredExcerpt: string;
}

const CategorySection = ({ 
  title, 
  category, 
  color,
  featuredImage, 
  featuredTitle, 
  featuredExcerpt 
}: CategorySectionProps) => {
  const colorClasses = {
    blue: 'bg-blue-600 text-blue-600 border-blue-600',
    green: 'bg-green-600 text-green-600 border-green-600',
    red: 'bg-red-600 text-red-600 border-red-600',
    orange: 'bg-orange-600 text-orange-600 border-orange-600',
    purple: 'bg-purple-600 text-purple-600 border-purple-600',
  };

  const articleIds: Record<string, string[]> = {
    politics: ['2', '1', '5', '6'],
    sports: ['3', '6', '7', '8'],
    entertainment: ['4', '5', '7', '8'],
  };

  const sideNews = [
    {
      title: `${title} সংক্রান্ত গুরুত্বপূর্ণ খবর শিরোনাম এখানে দেখানো হচ্ছে`,
      time: '১ ঘণ্টা আগে',
    },
    {
      title: `আরেকটি ${title} খবর যা পাঠকদের জন্য গুরুত্বপূর্ণ`,
      time: '২ ঘণ্টা আগে',
    },
    {
      title: `${title} বিভাগের সর্বশেষ আপডেট ও বিশ্লেষণ`,
      time: '৩ ঘণ্টা আগে',
    },
    {
      title: `জনপ্রিয় ${title} খবর যা সোশ্যাল মিডিয়ায় ভাইরাল`,
      time: '৪ ঘণ্টা আগে',
    },
  ];

  const ids = articleIds[category] || ['1', '2', '3', '4'];

  return (
    <section id={category} className="scroll-reveal mt-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <div className={`w-12 h-1 rounded ${colorClasses[color].split(' ')[0]}`}></div>
        </div>
        <a 
          href={`#${category}-all`} 
          className={`flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-colors ${colorClasses[color].split(' ')[1]}`}
        >
          সব দেখুন
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured Article */}
        <Link to={`/article/${ids[0]}`} className="group block">
          <article className="relative overflow-hidden rounded-xl">
            <div className="aspect-video overflow-hidden">
              <img
                src={featuredImage}
                alt={featuredTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-gray-200 transition-colors">
                {featuredTitle}
              </h3>
              <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                {featuredExcerpt}
              </p>
            </div>
          </article>
        </Link>

        {/* Side Articles List */}
        <div className="flex flex-col gap-3">
          {sideNews.map((news, index) => (
            <Link 
              key={index}
              to={`/article/${ids[index + 1] || '1'}`}
              className="group cursor-pointer flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold ${colorClasses[color].split(' ')[0]}`}>
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {news.title}
                </h4>
                <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {news.time}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
