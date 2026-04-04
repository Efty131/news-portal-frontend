import { useState } from 'react';
import { Clock, TrendingUp, Mail, Send, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Sidebar = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const popularNews = [
    {
      title: 'শিগগিরই স্থানীয় সরকার নির্বাচনের প্রস্তুতি শুরু হবে',
      views: '২৫,৪৩২',
    },
    {
      title: 'বাংলাদেশ ক্রিকেট দলের ঐতিহাসিক জয়',
      views: '২১,৮৯০',
    },
    {
      title: '৩০ উপজেলায় হামের বিশেষ টিকাদান কার্যক্রম শুরু',
      views: '১৮,৭৬৫',
    },
    {
      title: 'ঢাকায় শুরু হলো আন্তর্জাতিক চলচ্চিত্র উৎসব',
      views: '১৫,২৩৪',
    },
    {
      title: 'বাংলাদেশে ৫জি ইন্টারনেট সেবা শুরু',
      views: '১২,৯৮৭',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <aside className="space-y-8">
      {/* Popular News */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-black">জনপ্রিয় খবর</h3>
        </div>
        <div className="space-y-4">
          {popularNews.map((news, index) => (
            <article 
              key={index}
              className="group cursor-pointer flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-sm font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-black line-clamp-2 group-hover:text-red-600 transition-colors">
                  {news.title}
                </h4>
                <span className="text-xs text-black mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {news.views} বার পড়া
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-5 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5" />
          <h3 className="text-lg font-bold">নিউজলেটার</h3>
        </div>
        <p className="text-sm text-red-100 mb-4">
          প্রতিদিনের সেরা খবর পেতে সাবস্ক্রাইব করুন
        </p>
        
        {subscribed ? (
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <p className="text-sm font-medium">সাবস্ক্রিপশন সফল!</p>
            <p className="text-xs text-red-100 mt-1">আপনার ইমেইলে নিউজলেটার পাঠানো হবে</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="email"
                placeholder="আপনার ইমেইল"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white border-0 text-gray-900 placeholder:text-gray-400"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              সাবস্ক্রাইব
            </Button>
          </form>
        )}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-4">দ্রুত লিংক</h3>
        <div className="space-y-2">
          {[
            { label: 'ই-পেপার', href: '#epaper' },
            { label: 'আর্কাইভ', href: '#archive' },
            { label: 'বিজ্ঞাপন', href: '#advertise' },
            { label: 'যোগাযোগ', href: '#contact' },
            { label: 'আমাদের সম্পর্কে', href: '#about' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                {link.label}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-500 mb-2">বিজ্ঞাপন</p>
        <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
          <p className="text-gray-400 text-sm">৩০০ x ২৫০</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
