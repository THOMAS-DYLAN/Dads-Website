import { Shield, Users, Clock, Search, Target, ShieldCheck, TrendingUp, TrendingUpIcon, Heart as HeartIcon, Umbrella, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

 const navigationMenu = {
  about: [
    { name: "Our Story", path: "/about/our-story" },
    { name: "Our Team", path: "/about/our-team" },
    { name: "Why Choose Us", path: "/about/why-choose-us" },
  ],
  medicare: [
    { name: "Medicare Advantage", path: "/medicare/advantage" },
    { name: "Medicare Supplement", path: "/medicare/supplement" },
    { name: "Part D Prescription", path: "/medicare/part-d" },
    { name: "Medicare Basics", path: "/medicare/basics" },
  ],
  retirement: [
    { name: "Retirement Income", path: "/retirement/income" },
    { name: "Annuities", path: "/retirement/annuities" },
    { name: "Life Insurance", path: "/retirement/life-insurance" },
    { name: "Long-Term Care", path: "/retirement/long-term-care" },
  ],
  resources: [
    { name: "Blog", path: "/resources/blog" },
    { name: "FAQ", path: "/resources/faq" },
    { name: "Medicare Guide", path: "/resources/medicare-guide" },
    { name: "Calculators", path: "/resources/calculators" },
  ],
  contact: [
    { name: "Contact Us", path: "/contact/us" },
    { name: "Request Consultation", path: "/contact/consultation" },
    { name: "Locations", path: "/contact/locations" },
  ],
};



  return (
    <div className="w-full h-full bg-gradient-to-b from-[#4E54C8] to-[#A8C0FF] flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white">
                Your Company
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition hover:text-red-200 rounded-lg hover:bg-blue-800/50">
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.about.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Medicare */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("medicare")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition hover:text-red-200 rounded-lg hover:bg-blue-800/50">
                  Medicare
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "medicare" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "medicare" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.medicare.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Retirement Planning */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("retirement")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition hover:text-red-200 rounded-lg hover:bg-blue-800/50">
                  Retirement Planning
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "retirement" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "retirement" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.retirement.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition hover:text-red-200 rounded-lg hover:bg-blue-800/50">
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "resources" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.resources.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition hover:text-red-200 rounded-lg hover:bg-blue-800/50">
                  Contact
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === "contact" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "contact" && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
                    {navigationMenu.contact.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Phone Button */}
            <a
              href="tel:816-752-4944"
              className="hidden lg:flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              816-752-4944
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-blue-800/50 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="mt-2 rounded-xl bg-blue-700/60 p-3 shadow-inner">
                {/* About */}
                <div className="border-b border-blue-400/50 pb-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "about" ? null : "about")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    About
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "about" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.about.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Medicare */}
                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "medicare" ? null : "medicare")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Medicare
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "medicare" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "medicare" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.medicare.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Retirement Planning */}
                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "retirement" ? null : "retirement")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Retirement Planning
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "retirement" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "retirement" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.retirement.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Resources */}
                <div className="border-b border-blue-400/50 pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "resources" ? null : "resources")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Resources
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "resources" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "resources" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.resources.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact */}
                <div className="pb-2 pt-2">
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === "contact" ? null : "contact")
                    }
                    className="flex w-full items-center justify-between py-2 text-left font-semibold text-white transition hover:text-red-200"
                  >
                    Contact
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMobileDropdown === "contact" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === "contact" && (
                    <div className="mt-2 space-y-1 pl-4">
                      {navigationMenu.contact.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="block py-1 text-sm text-blue-100 transition hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Phone Button */}
                <a
                  href="tel:816-752-4944"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
                  onClick={closeMobileMenu}
                >
                  <Phone className="h-4 w-4" />
                  816-752-4944
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
