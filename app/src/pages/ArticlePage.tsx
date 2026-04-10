import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Facebook, 
  Twitter, 
  Link as LinkIcon,
  Printer,
  ChevronRight,
  Newspaper,
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
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('লিংক কপি হয়েছে!');
        break;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <TopBar />
        <Header scrolled={scrolled} />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">খবরটি পাওয়া যায়নি</h1>
          <p className="text-gray-700 mb-6">আপনি যে খবরটি খুঁজছেন তা পাওয়া যায়নি।</p>
          <Button onClick={() => navigate('/')} className="bg-green-600 hover:bg-green-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            হোমপেজে ফিরে যান
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header scrolled={scrolled} />

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-700">
            <Link to="/" className="hover:text-green-600 transition-colors">হোম</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-600 font-medium">{article.category}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block px-4 py-1.5 text-sm font-semibold rounded ${article.categoryClass}`}>
            {article.category}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author & Date Info */}
        <div className="flex items-center gap-4 pb-6 border-b mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Newspaper className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">নিজস্ব প্রতিবেদন</p>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                প্রকাশ: {article.publishedAt}
              </span>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button 
            onClick={() => handleShare('facebook')}
            className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('whatsapp')}
            className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
          <button 
            onClick={handlePrint}
            className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <Printer className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('copy')}
            className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors bg-green-700 text-white hover:bg-green-800"
          >
            <LinkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-10">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed mb-5 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg hover:bg-green-100 hover:text-green-700 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related News */}
        {relatedArticles.length > 0 && (
          <div className="border-t pt-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">এই বিভাগের আরও খবর</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((news, index) => (
                <Link 
                  key={index}
                  to={`/article/${news.id}`}
                  className="group flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {news.title}
                    </h4>
                    <span className="text-xs text-gray-700 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
