import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './sections/TopBar';
import Header from './sections/Header';
import BreakingNews from './sections/BreakingNews';
import HeroSection from './sections/HeroSection';
import LatestNews from './sections/LatestNews';
import CategorySection from './sections/CategorySection';
import VideoNews from './sections/VideoNews';
import Sidebar from './sections/Sidebar';
import Footer from './sections/Footer';
import ArticlePage from './pages/ArticlePage';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header scrolled={scrolled} />
      <BreakingNews />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <LatestNews />
            
            <CategorySection 
              title="রাজনীতি" 
              category="politics" 
              color="blue"
              featuredImage="/images/parliament.jpg"
              featuredTitle="জাতীয় সংসদের বাজেট অধিবেশন শুরু হচ্ছে আগামী সপ্তাহে"
              featuredExcerpt="আগামী সপ্তাহে শুরু হতে যাওয়া বাজেট অধিবেশনে বেশ কয়েকটি গুরুত্বপূর্ণ আইন পাস করা হবে বলে জানিয়েছেন সংসদ নেতা।"
            />
            
            <CategorySection 
              title="খেলা" 
              category="sports" 
              color="green"
              featuredImage="/images/sports-victory.jpg"
              featuredTitle="বাংলাদেশ ক্রিকেট দলের ঐতিহাসিক জয়"
              featuredExcerpt="ঘরের মাঠে বিশ্বচ্যাম্পিয়নদের হারিয়ে দিলো টাইগাররা। এই জয়ে আত্মবিশ্বাসে ভরপুর পুরো দল।"
            />
            
            <CategorySection 
              title="বিনোদন" 
              category="entertainment" 
              color="red"
              featuredImage="/images/cultural-festival.jpg"
              featuredTitle="ঢাকায় শুরু হলো আন্তর্জাতিক চলচ্চিত্র উৎসব"
              featuredExcerpt="পাঁচ দিনব্যাপী এই উৎসবে ৩০টিরও বেশি দেশের চলচ্চিত্র প্রদর্শিত হবে। উদ্বোধনী অনুষ্ঠানে উপস্থিত ছিলেন বিশিষ্টজনেরা।"
            />
            
            <VideoNews />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;
