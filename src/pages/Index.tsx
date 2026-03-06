import { Shield, Users, Clock, Search, Target, ShieldCheck, TrendingUp, TrendingUpIcon, Heart as HeartIcon, Umbrella, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-blue-600 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <a href="/" onClick={closeMobileMenu}>
                <img
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/d848.png"
                  alt="Key Retirement Solutions"
                  className="h-16 w-auto"
                  crossOrigin="anonymous"
                />
              </a>
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
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </a>
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
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </a>
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
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </a>
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
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {item.name}
                      </a>
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
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'about' ? null : 'about')}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'about' && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu.about.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Medicare Mobile Dropdown */}
              <div className="border-b border-blue-500 pb-2">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'medicare' ? null : 'medicare')}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  Medicare
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'medicare' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'medicare' && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu.medicare.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Retirement Planning Mobile Dropdown */}
              <div className="border-b border-blue-500 pb-2">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'retirement' ? null : 'retirement')}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  Retirement Planning
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'retirement' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'retirement' && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu.retirement.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Mobile Dropdown */}
              <div className="border-b border-blue-500 pb-2">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'resources' ? null : 'resources')}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'resources' && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu.resources.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Mobile Dropdown */}
              <div className="border-b border-blue-500 pb-2">
                <button
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === 'contact' ? null : 'contact')}
                  className="flex items-center justify-between w-full text-left text-white hover:text-red-200 font-semibold py-2 transition"
                >
                  Contact
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'contact' ? 'rotate-180' : ''}`} />
                </button>
                {openMobileDropdown === 'contact' && (
                  <div className="pl-4 space-y-1 mt-2">
                    {navigationMenu.contact.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="block text-blue-100 hover:text-white py-1 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:816-752-4944"
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition mt-4"
                onClick={closeMobileMenu}
              >
                <Phone className="w-4 h-4" />
                816-752-4944
              </a>
            </div>
          )}
        </div>
      </nav>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <img
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/84a8.webp"
                alt="Michael Thomas"
                className="rounded-lg shadow-lg w-48 h-48 object-cover mx-auto border-4 border-blue-600"
                crossOrigin="anonymous"
              />
            </div>
            <h2 className="text-4xl font-bold text-blue-600 mb-3">Michael Thomas</h2>
            <p className="text-xl font-semibold text-red-500 italic mb-6">Your Future. My Mission.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-500 font-bold uppercase tracking-wider mb-3">THE MISSION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">FROM SERVICE TO SECURITY</h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-red-500">Your mission doesn't end with service.</span>{' '}
              <span className="text-blue-600">
                It transforms. The same discipline, strategy, and commitment that defined your military career now protect your financial future.
              </span>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Key Retirement Solutions, we understand the veteran mindset. We don't just sell insurance—we build{' '}
              <span className="font-bold text-blue-600">defense strategies</span> for your retirement, your family's security, and your legacy.
            </p>
            <div className="border-l-4 border-red-500 pl-6 py-2 bg-blue-50">
              <p className="text-xl font-bold text-blue-700">Your future is our mission. We stand guard over what you've earned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE Section */}
      <section id="who-we-serve" className="py-16 bg-red-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">WHO WE SERVE</h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-blue-600" />
          </div>
          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Mission-focused financial protection for those who served and their families
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">VETERANS</h3>
              <p className="text-blue-50">Honoring those who served with specialized retirement strategies</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">TURNING 65 SOON</h3>
              <p className="text-blue-50">Navigate Medicare decisions with confidence and clarity</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">RETIREES</h3>
              <p className="text-blue-50">Protect your retirement income and preserve your legacy</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40 hover:shadow-lg cursor-pointer">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-100 mb-3">FAMILIES PLANNING</h3>
              <p className="text-blue-50">Build a secure foundation for your family's financial future</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE RETIREMENT DEFENSE PLAN Section */}
      <section id="defense-plan" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-red-500 font-bold uppercase tracking-wider text-center mb-3">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-3">THE RETIREMENT DEFENSE PLAN</h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-red-500" />
          </div>
          <p className="text-center text-blue-600 text-lg mb-12 max-w-3xl mx-auto">
            A strategic, mission-focused approach to securing your financial future
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">ASSESS</h3>
              <p className="text-gray-700">Review your financial situation, retirement goals, and healthcare needs</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <Search className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">IDENTIFY GAPS</h3>
              <p className="text-gray-700">Pinpoint vulnerabilities in coverage and income streams</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <ShieldCheck className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">FORTIFY</h3>
              <p className="text-gray-700">Implement strategic solutions to protect your assets and income</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-lg cursor-pointer">
                  <TrendingUp className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-white">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">MAINTAIN &amp; ADJUST</h3>
              <p className="text-gray-700">Ongoing monitoring and strategy adjustments as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES Section */}
      <section id="services" className="py-16 bg-blue-500">
        <div className="container mx-auto px-4">
          <p className="text-white font-bold uppercase tracking-wider text-center mb-3">PROTECTION STRATEGIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">SERVICES</h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-red-500" />
          </div>
          <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
            Comprehensive defense for every aspect of your retirement
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">MEDICARE PLANNING</h3>
              <p className="text-red-50">
                Navigate Medicare enrollment with expert guidance. Choose the right coverage for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <HeartIcon className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">LIFE INSURANCE</h3>
              <p className="text-red-50">Protect your loved ones with comprehensive life insurance tailored to your family's needs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <Umbrella className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">LONG-TERM CARE</h3>
              <p className="text-red-50">Strategic planning to preserve your assets and dignity for potential long-term care needs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white border-4 border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:shadow-lg cursor-pointer">
                <TrendingUpIcon className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-100 mb-3">RETIREMENT INCOME</h3>
              <p className="text-red-50">Build reliable income streams to sustain your lifestyle throughout retirement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">TRUSTED. CERTIFIED. MISSION-DRIVEN.</h2>

            <div className="flex justify-center mb-8">
              <div className="h-1 w-24 bg-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-blue-100 mb-2">Michael Thomas</h3>
            <p className="text-xl text-blue-50 mb-4">RICP® | CLTC | MMC</p>

            <p className="text-blue-50 text-lg mb-6 max-w-3xl mx-auto">
              With specialized certifications in retirement income planning (RICP®), long-term care (CLTC), and Medicare (MMC),
              Michael Thomas brings military-grade precision to financial planning.
            </p>

            <p className="text-blue-50 text-lg italic mb-6">
              Serving veterans and families across Missouri with honor, integrity, and unwavering commitment.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-blue-50 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Licensed Professional</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Veteran-Focused</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-100" />
                </div>
                <span>Mission Driven</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-blue-600 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-lg transition transform hover:scale-105">
                  License Here
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white p-4 rounded-lg">
                <div className="flex justify-center">
                  <img
                    src="/Michael-L1.webp"
                    alt="Michael Thomas License"
                    className="max-h-[80vh] w-auto object-contain rounded-md"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">SECURE YOUR FUTURE TODAY</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't leave your retirement to chance. Take action now to protect what you've earned.
          </p>
          <button className="bg-red-500 hover:bg-blue-500 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105">
            SCHEDULE YOUR APPOINTMENT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Service to Security</h3>
              <p className="mb-2">Powered by Key Retirement Solutions</p>
              <p className="text-white font-semibold">#YourFuture MyMission!</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">PROTECTION STRATEGIES</h3>
              <ul className="space-y-2">
                <li>Medicare Planning</li>
                <li>Life Insurance</li>
                <li>Long-Term Care Planning</li>
                <li>Retirement Income Strategy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <p className="mb-2">Michael Thomas</p>
              <p className="mb-2">RICP® | CLTC | MMC</p>

              <p>
                <a href="tel:816-752-4944" className="mb-2 text-white">
                  816-752-4944
                </a>
              </p>

              <p>
                <a
                  href="mailto:mthomas@krs.insure"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:mthomas@krs.insure";
                  }}
                  className="mb-2 text-white"
                >
                  mthomas@krs.insure
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-sm">© 2026 Key Retirement Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;