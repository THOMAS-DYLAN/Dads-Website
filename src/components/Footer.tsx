import { Link } from 'react-router-dom';

const Footer = () => (
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
            <li><Link to="/medicare/basics" className="hover:text-red-200 transition">Medicare Planning</Link></li>
            <li><Link to="/retirement/long-term-care" className="hover:text-red-200 transition">Long-Term Care Planning</Link></li>
            <li><Link to="/retirement/income" className="hover:text-red-200 transition">Retirement Income Strategy</Link></li>
            <li><Link to="/retirement/asset-protection" className="hover:text-red-200 transition">Asset Protection</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">CONTACT</h3>
          <p className="mb-2">Michael Thomas</p>
          <p className="mb-2">RICP® | CLTC | MMC</p>
          <p><a href="tel:816-752-4944" className="text-2xl font-bold text-white hover:text-red-500 transition">816-752-4944</a></p>
          <p><a href="mailto:mthomas@krs.insure" className="text-2xl font-bold text-white hover:text-red-500 transition">mthomas@krs.insure</a></p>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-white/20">
        <p className="text-sm">&copy; 2026 Key Retirement Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
