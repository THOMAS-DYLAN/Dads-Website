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
 ff
  );
};

export default Navbar;