import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  const navigationMenu = {
    about: [
      { name: "Our Story", path: "/about/our-story" },
      { name: "Our Mission", path: "/about/our-mission" },
      { name: "Meet the Team", path: "/about/team" },
      { name: "Why Choose Us", path: "/about/why-choose-us" },
    ],
    medicare: [
      { name: "Medicare Basics", path: "/medicare/basics" },
      { name: "Medicare Advantage", path: "/medicare/advantage" },
      { name: "Medicare Supplement (Medigap)", path: "/medicare/supplement" },
      { name: "Part D Prescription Plans", path: "/medicare/part-d" },
      { name: "Enrollment Periods", path: "/medicare/enrollment" },
      { name: "Medicare FAQs", path: "/medicare/faqs" },
    ],
    retirement: [
      { name: "Income Planning", path: "/retirement/income" },
      { name: "Social Security Optimization", path: "/retirement/social-security" },
      { name: "Long-Term Care Planning", path: "/retirement/long-term-care" },
      { name: "Annuities", path: "/retirement/annuities" },
      { name: "Asset Protection", path: "/retirement/asset-protection" },
    ],
    resources: [
      { name: "Blog", path: "/resources/blog" },
      { name: "Medicare Checklist", path: "/resources/checklist" },
      { name: "Downloadable Guides", path: "/resources/guides" },
      { name: "Video Library", path: "/resources/videos" },
    ],
    contact: [
      { name: "Schedule Appointment", path: "/contact/schedule" },
      { name: "Contact Form", path: "/contact" },
      { name: "Office Locations", path: "/contact/locations" },
    ],
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const handleMouseEnter = (menu: string) => {
    setOpenDesktopDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDesktopDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              <img
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/d848.png"
                alt="Key Retirement Solutions"
                className="h-12 w-auto"
                crossOrigin="anonymous"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
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
                    openDesktopDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "about" && (
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
                    openDesktopDropdown === "medicare" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "medicare" && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
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
                    openDesktopDropdown === "retirement" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "retirement" && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-200 py-2 z-50">
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
                    openDesktopDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "resources" && (
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
                    openDesktopDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDesktopDropdown === "contact" && (
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

            {/* Desktop Phone Button */}
            <a
              href="tel:816-752-4944"
              className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600 ml-4"
            >
              <Phone className="h-4 w-4" />
              816-752-4944
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-red-200 hover:bg-white/10 transition"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 space-y-2 max-h-96 overflow-y-auto">
            {/* About Dropdown */}
            <div>
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === "about" ? null : "about")}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-blue-700 rounded-lg transition"
              >
                About
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileDropdown === "about" && (
                <div className="bg-blue-700 rounded-lg mt-1 px-4 py-2 space-y-1">
                  {navigationMenu.about.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-blue-100 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Medicare Dropdown */}
            <div>
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === "medicare" ? null : "medicare")}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-blue-700 rounded-lg transition"
              >
                Medicare
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileDropdown === "medicare" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileDropdown === "medicare" && (
                <div className="bg-blue-700 rounded-lg mt-1 px-4 py-2 space-y-1">
                  {navigationMenu.medicare.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-blue-100 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Retirement Dropdown */}
            <div>
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === "retirement" ? null : "retirement")}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-blue-700 rounded-lg transition"
              >
                Retirement Planning
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileDropdown === "retirement" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileDropdown === "retirement" && (
                <div className="bg-blue-700 rounded-lg mt-1 px-4 py-2 space-y-1">
                  {navigationMenu.retirement.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-blue-100 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div>
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === "resources" ? null : "resources")}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-blue-700 rounded-lg transition"
              >
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileDropdown === "resources" && (
                <div className="bg-blue-700 rounded-lg mt-1 px-4 py-2 space-y-1">
                  {navigationMenu.resources.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-blue-100 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div>
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === "contact" ? null : "contact")}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold hover:bg-blue-700 rounded-lg transition"
              >
                Contact
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openMobileDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMobileDropdown === "contact" && (
                <div className="bg-blue-700 rounded-lg mt-1 px-4 py-2 space-y-1">
                  {navigationMenu.contact.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-blue-100 hover:text-white transition"
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
