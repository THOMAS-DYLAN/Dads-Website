import { Shield, Users, Clock, Search, Target, ShieldCheck, TrendingUp, TrendingUpIcon, Heart as HeartIcon, Umbrella, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleMouseEnter = async (menu: string) => {
    await delay(175);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = async () => {
    await delay(160);
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

 const navigationMenu = {
  about: [
    { name: "Our Story", path: "/about/our-story" },
    { name: "Our Team", path: "/about/team" },
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
  <div>
    <nav className="w-full bg-red-500 shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white">
                <img alt="Key Retirement Solutions" class="h-12 w-auto" crossorigin="anonymous" data-source-location="src/pages/Index.tsx:58:17" data-source-stack="{&quot;fileName&quot;:&quot;src/pages/Index.tsx&quot;,&quot;lineNumber&quot;:58,&quot;columnNumber&quot;:17,&quot;endLine&quot;:63,&quot;endColumn&quot;:19,&quot;elementType&quot;:&quot;img&quot;,&quot;tagName&quot;:&quot;img&quot;,&quot;attributes&quot;:[{&quot;name&quot;:&quot;src&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:59,&quot;column&quot;:18},{&quot;name&quot;:&quot;alt&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:60,&quot;column&quot;:18},{&quot;name&quot;:&quot;className&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:61,&quot;column&quot;:18},{&quot;name&quot;:&quot;crossOrigin&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:62,&quot;column&quot;:18}],&quot;hasChildren&quot;:false,&quot;parentElement&quot;:&quot;a&quot;}" data-element-type="img" data-line-number="58" data-real-file="src/pages/Index.tsx" data-real-line="58" data-real-column="17" data-injected-source="babel" src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/806a.png"/>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold">
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
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold">
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
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold">
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
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold transition">
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
                <button className="flex items-center gap-1 px-4 py-2 text-white font-semibold">
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
              {/* Desktop Phone Button */}
              <a href="tel:816-752-4944" 
                className="lg:flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold transition-all hover:bg-red-400" 
                data-source-location="src/pages/Index.tsx:218:13" data-source-stack="{&quot;fileName&quot;:&quot;src/pages/Index.tsx&quot;,&quot;lineNumber&quot;:218,&quot;columnNumber&quot;:13,&quot;endLine&quot;:224,&quot;endColumn&quot;:17,&quot;elementType&quot;:&quot;a&quot;,&quot;tagName&quot;:&quot;a&quot;,&quot;attributes&quot;:[{&quot;name&quot;:&quot;href&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:219,&quot;column&quot;:14},{&quot;name&quot;:&quot;className&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:220,&quot;column&quot;:14}],&quot;hasChildren&quot;:true,&quot;parentElement&quot;:&quot;div&quot;}" data-element-type="a" data-line-number="218" data-real-file="src/pages/Index.tsx" data-real-line="218" data-real-column="13" data-injected-source="babel"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4" aria-hidden="true" data-source-location="src/pages/Index.tsx:222:15" data-source-stack="{&quot;fileName&quot;:&quot;src/pages/Index.tsx&quot;,&quot;lineNumber&quot;:222,&quot;columnNumber&quot;:15,&quot;endLine&quot;:222,&quot;endColumn&quot;:44,&quot;elementType&quot;:&quot;Phone&quot;,&quot;tagName&quot;:&quot;phone&quot;,&quot;attributes&quot;:[{&quot;name&quot;:&quot;className&quot;,&quot;hasValue&quot;:true,&quot;line&quot;:222,&quot;column&quot;:21}],&quot;hasChildren&quot;:false,&quot;parentElement&quot;:&quot;a&quot;}" data-element-type="Phone" data-line-number="222" data-real-file="src/pages/Index.tsx" data-real-line="222" data-real-column="15" data-injected-source="babel"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>816-752-4944</a>
            </div>
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
            <div className="lg:hidden pb-4">
              <div className="mt-2 rounded-xl bg-red-500/60 p-3 shadow-inner">
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
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400"
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
    </div>  
  );
};

export default Navbar;