import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navigationMenu = {
  about: [
    { name: 'Our Story', path: '/about/our-story' },
    { name: 'Our Mission', path: '/about/our-mission' },
    { name: 'Meet the Team', path: '/about/team' },
    { name: 'Why Choose Us', path: '/about/why-choose-us' },
  ],
  medicare: [
    { name: 'Medicare Basics', path: '/medicare/basics' },
    { name: 'Medicare Advantage', path: '/medicare/advantage' },
    { name: 'Medicare Supplement (Medigap)', path: '/medicare/supplement' },
    { name: 'Part D Prescription Plans', path: '/medicare/part-d' },
    { name: 'Enrollment Periods', path: '/medicare/enrollment' },
    { name: 'Medicare FAQs', path: '/medicare/faqs' },
  ],
  retirement: [
    { name: 'Income Planning', path: '/retirement/income' },
    { name: 'Social Security Optimization', path: '/retirement/social-security' },
    { name: 'Long-Term Care Planning', path: '/retirement/long-term-care' },
    { name: 'Annuities', path: '/retirement/annuities' },
    { name: 'Asset Protection', path: '/retirement/asset-protection' },
  ],
  resources: [
    { name: 'Blog', path: '/resources/blog' },
    { name: 'Medicare Checklist', path: '/resources/checklist' },
    { name: 'Downloadable Guides', path: '/resources/guides' },
    { name: 'Video Library', path: '/resources/videos' },
  ],
  contact: [
    { name: 'Schedule Appointment', path: '/contact/schedule' },
    { name: 'Contact Form', path: '/contact' },
    { name: 'Office Locations', path: '/contact/locations' },
  ],
};

const menuCategories = [
  { key: 'about', label: 'About', width: 'w-56' },
  { key: 'medicare', label: 'Medicare', width: 'w-64' },
  { key: 'retirement', label: 'Retirement Planning', width: 'w-64' },
  { key: 'resources', label: 'Resources', width: 'w-56' },
  { key: 'contact', label: 'Contact', width: 'w-56' },
] as const;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/d848.png"
                alt="Key Retirement Solutions"
                className="h-16 w-auto"
                crossOrigin="anonymous"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {menuCategories.map((cat) => (
              <div key={cat.key} className="relative group">
                <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                  {cat.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute left-0 mt-2 ${cat.width} bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                  <div className="py-2">
                    {navigationMenu[cat.key].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a href="tel:816-752-4944" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition transform hover:scale-105">
              <Phone className="w-4 h-4" />
              816-752-4944
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 max-h-96 overflow-y-auto">
            {menuCategories.map((cat) => (
              <div key={cat.key} className="border-b border-blue-500 pb-2">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === cat.key ? null : cat.key)}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  {cat.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === cat.key ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === cat.key && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu[cat.key].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:816-752-4944" className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition mt-4">
              <Phone className="w-4 h-4" />
              816-752-4944
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
