import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Calendar, 
  User, 
  Facebook, 
  Twitter, 
  Link as LinkIcon,
  MessageCircle,
  Printer,
  Bookmark,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { getArticleById, getRelatedArticles } from '@/data/newsData';
import TopBar from '@/sections/TopBar';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = article ? getRelatedArticles(article.id, article.category, 4) : [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article?.title || '';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('লিংক কপি হয়েছে!');
        break;
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? 'বুকমার্ক সরানো হয়েছে' : 'বুকমার্ক করা হয়েছে!');
  };

  const handlePrint = () => {
    window.print();
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <Header scrolled={scrolled} />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">খবরটি পাওয়া যায়নি</h1>
          <p className="text-gray-600 mb-6">আপনি যে খবরটি খুঁজছেন তা পাওয়া যায়নি।</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            হোমপেজে ফিরে যান
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header scrolled={scrolled} />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600 transition-colors">হোম</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{article.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-500 truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-2">
            {/* Article Header */}
            <header className="bg-white rounded-xl shadow-sm p-6 mb-6">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`category-badge ${article.categoryClass}`}>
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-black">
                  <Clock className="w-4 h-4" />
                  {article.readTime} পড়া
                </span>
                <span className="flex items-center gap-1 text-sm text-black">
                  <Eye className="w-4 h-4" />
                  {article.views} বার দেখা
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
                {article.title}
              </h1>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-black">{article.author}</p>
                    <div className="flex items-center gap-3 text-sm text-black">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        প্রকাশিত: {article.publishedAt}
                      </span>
                      {article.updatedAt && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          আপডেট: {article.updatedAt}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare('copy')}
                    className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleBookmark}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      bookmarked ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
                  </button>
                  <button 
                    onClick={handlePrint}
                    className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="aspect-video">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 p-4 bg-gray-50">
                ছবি: {article.title} (সংগৃহীত)
              </p>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6 border-l-4 border-red-600 pl-4">
                  {article.excerpt}
                </p>
                
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-black leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-gray-500 mb-3">ট্যাগ:</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-gray-500 mb-3">শেয়ার করুন:</p>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span className="text-sm">Facebook</span>
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-sm">Twitter</span>
                  </button>
                  <button 
                    onClick={() => handleShare('copy')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-sm">লিংক কপি</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">মন্তব্য (০)</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-500 mb-4">মন্তব্য করতে লগইন করুন</p>
                <Button variant="outline">লগইন</Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related News */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">এই বিভাগের আরও খবর</h3>
              </div>
              <div className="space-y-4">
                {relatedArticles.length > 0 ? (
                  relatedArticles.map((news, index) => (
                    <Link 
                      key={index}
                      to={`/article/${news.id}`}
                      className="group flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {news.title}
                        </h4>
                        <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {news.readTime}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">এই বিভাগে আরও খবর নেই</p>
                )}
              </div>
            </div>

            {/* More From This Category */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4">সর্বশেষ খবর</h3>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Link 
                    key={index}
                    to={`/article/${(parseInt(id || '0') + index + 1) % 8 + 1}`}
                    className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                      সর্বশেষ খবর শিরোনাম #{index + 1} - গুরুত্বপূর্ণ সংবাদটি এখানে দেখুন
                    </h4>
                    <span className="text-xs text-gray-500 mt-1">১ ঘণ্টা আগে</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ad Placeholder */}
            <div className="bg-gray-100 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-500 mb-2">বিজ্ঞাপন</p>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-400 text-sm">৩০০ x ২৫০</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
