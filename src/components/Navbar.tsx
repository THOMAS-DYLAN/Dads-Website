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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setOpenMobileDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/d848.png"
                alt="Key Retirement Solutions"
                className="h-16 w-auto"
                crossOrigin="anonymous"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-red-200 hover:bg-white/10 transition"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 ml-auto whitespace-nowrap">
            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                About
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationMenu.about.map((item) => (
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

            {/* Medicare Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                Medicare
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationMenu.medicare.map((item) => (
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

            {/* Retirement Planning Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                Retirement Planning
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationMenu.retirement.map((item) => (
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

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationMenu.resources.map((item) => (
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

            {/* Contact Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-red-200 font-semibold transition flex items-center gap-1 py-2">
                Contact
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navigationMenu.contact.map((item) => (
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

            {/* Phone Button */}
            <a
              href="tel:816-752-4944"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              816-752-4944
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 space-y-2 max-h-96 overflow-y-auto">
            {/* About Mobile Dropdown */}
            <div className="border-b border-blue-500 pb-2">
              <button
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'about' && (
                <div className="pl-4 space-y-1 mt-2">
                  {navigationMenu.about.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-blue-100 hover:text-white py-1 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Medicare Mobile Dropdown */}
            <div className="border-b border-blue-500 pb-2">
              <button
                onClick={() => toggleDropdown('medicare')}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
              >
                Medicare
                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'medicare' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'medicare' && (
                <div className="pl-4 space-y-1 mt-2">
                  {navigationMenu.medicare.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-blue-100 hover:text-white py-1 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Retirement Planning Mobile Dropdown */}
            <div className="border-b border-blue-500 pb-2">
              <button
                onClick={() => toggleDropdown('retirement')}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
              >
                Retirement Planning
                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'retirement' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'retirement' && (
                <div className="pl-4 space-y-1 mt-2">
                  {navigationMenu.retirement.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-blue-100 hover:text-white py-1 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Mobile Dropdown */}
            <div className="border-b border-blue-500 pb-2">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'resources' && (
                <div className="pl-4 space-y-1 mt-2">
                  {navigationMenu.resources.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-blue-100 hover:text-white py-1 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Mobile Dropdown */}
            <div className="border-b border-blue-500 pb-2">
              <button
                onClick={() => toggleDropdown('contact')}
                className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
              >
                Contact
                <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'contact' && (
                <div className="pl-4 space-y-1 mt-2">
                  {navigationMenu.contact.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-blue-100 hover:text-white py-1 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:816-752-4944"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition mt-4"
            >
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