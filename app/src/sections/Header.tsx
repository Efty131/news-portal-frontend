import { useState } from 'react';
import { Search, Menu, X, Newspaper, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: 'সর্বশেষ', href: '#latest' },
    { label: 'বাংলাদেশ', href: '#bangladesh' },
    { label: 'রাজনীতি', href: '#politics' },
    { label: 'বিশ্ব', href: '#world' },
    { label: 'বাণিজ্য', href: '#business' },
    { label: 'খেলা', href: '#sports' },
    { label: 'বিনোদন', href: '#entertainment' },
    { label: 'জীবনযাপন', href: '#lifestyle' },
    { label: 'ভিডিও', href: '#video' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                বাংলাদেশ নিউজ
              </h1>
              <p className="text-xs text-gray-500">Bangladesh News</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-lg font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search */}
            <div className={`flex items-center transition-all duration-300 ${
              searchOpen ? 'w-48 lg:w-64' : 'w-auto'
            }`}>
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-full">
                  <input
                    type="text"
                    placeholder="খুঁজুন..."
                    className="bg-transparent outline-none text-sm w-full"
                    autoFocus
                  />
                  <button 
                    onClick={() => setSearchOpen(false)}
                    className="text-green-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>

            {/* E-Paper */}
            <a 
              href="#epaper" 
              className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              <span>ই-পেপার</span>
            </a>

            {/* English Toggle */}
            <button className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>

            {/* Login */}
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex items-center gap-1"
            >
              <User className="w-4 h-4" />
              <span>লগইন</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Newspaper className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">বাংলাদেশ নিউজ</h2>
                      <p className="text-xs text-gray-500">Bangladesh News</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center gap-4 px-4">
                      <a href="#epaper" className="flex items-center gap-2 text-sm text-gray-600">
                        <Newspaper className="w-4 h-4" />
                        ই-পেপার
                      </a>
                      <button className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="w-4 h-4" />
                        English
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
