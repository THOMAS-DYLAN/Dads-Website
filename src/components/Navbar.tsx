import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    <nav className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-800/50 hover:text-red-200">
                About
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "about" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationMenu.about.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2.5 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-800/50 hover:text-red-200">
                Medicare
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "medicare" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "medicare" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationMenu.medicare.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2.5 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-800/50 hover:text-red-200">
                Retirement Planning
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "retirement" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "retirement" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationMenu.retirement.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2.5 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-800/50 hover:text-red-200">
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationMenu.resources.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2.5 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-blue-800/50 hover:text-red-200">
                Contact
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "contact" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "contact" && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  {navigationMenu.contact.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2.5 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
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
            className="hidden lg:flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-600"
          >
            <Phone className="h-4 w-4" />
            816-752-4944
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-blue-800/50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="pb-4 lg:hidden">
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

export default Index;