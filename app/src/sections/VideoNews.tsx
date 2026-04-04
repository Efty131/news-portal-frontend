import { Play, Clock, ArrowRight } from 'lucide-react';

const VideoNews = () => {
  const videos = [
    {
      id: '1',
      thumbnail: '/images/news-anchor.jpg',
      title: 'আজকের প্রধান খবর সংক্ষেপে দেখে নিন',
      duration: '০৫:৩০',
      time: '২ ঘণ্টা আগে',
    },
    {
      id: '2',
      thumbnail: '/images/parliament.jpg',
      title: 'সংসদে বাজেট উপস্থাপনের মুহূর্ত',
      duration: '০৮:১৫',
      time: '৪ ঘণ্টা আগে',
    },
    {
      id: '3',
      thumbnail: '/images/sports-victory.jpg',
      title: 'ম্যাচ শেষে টাইগারদের উদযাপন',
      duration: '০৩:৪৫',
      time: '৬ ঘণ্টা আগে',
    },
    {
      id: '4',
      thumbnail: '/images/cultural-festival.jpg',
      title: 'ঢাকার রাস্তায় সাংস্কৃতিক উৎসবের রঙ',
      duration: '০৬:২০',
      time: '৮ ঘণ্টা আগে',
    },
    {
      id: '5',
      thumbnail: '/images/technology.jpg',
      title: '৫জি ইন্টারনেট কিভাবে কাজ করে?',
      duration: '০৪:১০',
      time: '১০ ঘণ্টা আগে',
    },
    {
      id: '6',
      thumbnail: '/images/agriculture.jpg',
      title: 'ধান কাটার মৌসুমে কৃষকদের ব্যস্ততা',
      duration: '০৭:০০',
      time: '১২ ঘণ্টা আগে',
    },
  ];

  return (
    <section id="video" className="scroll-reveal mt-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">ভিডিও নিউজ</h2>
        </div>
        <a 
          href="#all-videos" 
          className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          সব দেখুন
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div 
            key={index}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <article>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <span className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.time}
                </span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoNews;
