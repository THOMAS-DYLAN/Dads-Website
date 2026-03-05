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
   <div></div>
  );
};

export default Navbar;