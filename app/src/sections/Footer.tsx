import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin, Newspaper } from 'lucide-react';

const Footer = () => {
  const categories = [
    { label: 'সর্বশেষ', href: '#latest' },
    { label: 'বাংলাদেশ', href: '#bangladesh' },
    { label: 'রাজনীতি', href: '#politics' },
    { label: 'বিশ্ব', href: '#world' },
    { label: 'বাণিজ্য', href: '#business' },
    { label: 'খেলা', href: '#sports' },
    { label: 'বিনোদন', href: '#entertainment' },
    { label: 'জীবনযাপন', href: '#lifestyle' },
  ];

  const quickLinks = [
    { label: 'ই-পেপার', href: '#epaper' },
    { label: 'আর্কাইভ', href: '#archive' },
    { label: 'বিজ্ঞাপন', href: '#advertise' },
    { label: 'যোগাযোগ', href: '#contact' },
    { label: 'আমাদের সম্পর্কে', href: '#about' },
    { label: 'প্রাইভেসি পলিসি', href: '#privacy' },
    { label: 'টার্মস অফ ইউজ', href: '#terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">বাংলাদেশ নিউজ</h3>
                <p className="text-xs text-gray-300">Bangladesh News</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              বাংলাদেশ নিউজ দেশের সবচেয়ে জনপ্রিয় অনলাইন নিউজ পোর্টাল। সত্য ও নিরপেক্ষ সংবাদ পরিবেশন আমাদের অঙ্গীকার।
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-bold mb-4">ক্যাটেগরি</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a 
                    href={cat.href}
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  ১২৩ প্রেস ক্লাব রোড, ঢাকা-১০০০, বাংলাদেশ
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  +৮৮০ ১২৩৪-৫৬৭৮৯০
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  info@bangladeshnews.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © ২০২৬ বাংলাদেশ নিউজ. সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                প্রাইভেসি পলিসি
              </a>
              <a href="#terms" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                টার্মস অফ ইউজ
              </a>
              <a href="#cookies" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
                কুকিজ পলিসি
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
