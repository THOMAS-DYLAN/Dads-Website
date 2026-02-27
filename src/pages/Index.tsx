import { Shield, Users, Heart, Building2, Search, CheckCircle, ShieldCheck, RefreshCw, FileText, TrendingUp, Umbrella, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#1a2332] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Key Retirement Solutions</div>
            <a href="tel:816-248-1100" className="text-xl font-semibold hover:text-[#d4af37] transition">
              816-248-1100
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative">
        <img 
          src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/c07a.png" 
          alt="Service to Security Banner" 
          className="w-full h-auto"
          crossOrigin="anonymous"
        />
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/84a8.webp" 
                  alt="Michael Thomas" 
                  className="rounded-lg shadow-lg w-full"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#1a2332] mb-4">About Michael Thomas</h2>
                <p className="text-lg text-gray-700 mb-4">
                  RICP® | CLTC | MMC
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in retirement planning and financial security, Michael Thomas is dedicated to helping individuals and families achieve their retirement goals. Licensed and certified in Medicare, Life Insurance, LTC Planning, and Retirement strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1a2332] mb-12">WHO WE SERVE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <Users className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Pre-Retirees</h3>
              <p className="text-gray-600">Planning for your future with strategic retirement solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <Heart className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Retirees</h3>
              <p className="text-gray-600">Protecting and maximizing your retirement income.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <Shield className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Veterans</h3>
              <p className="text-gray-600">Specialized services for those who served our country.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <Building2 className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Business Owners</h3>
              <p className="text-gray-600">Retirement planning strategies for entrepreneurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE RETIREMENT DEFENSE PLAN Section */}
      <section className="py-16 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">THE RETIREMENT DEFENSE PLAN</h2>
          <p className="text-center text-xl mb-12 text-gray-300">A Four-Step Strategy for Financial Security</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-[#d4af37] hover:bg-white/20 transition text-center">
              <Search className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">ASSESS</h3>
              <p className="text-gray-200">Evaluate your current financial situation and retirement goals.</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-[#d4af37] hover:bg-white/20 transition text-center">
              <CheckCircle className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">IDENTIFY</h3>
              <p className="text-gray-200">Identify gaps, risks, and opportunities in your retirement plan.</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-[#d4af37] hover:bg-white/20 transition text-center">
              <ShieldCheck className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">FORTIFY</h3>
              <p className="text-gray-200">Strengthen your financial position with strategic solutions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-[#d4af37] hover:bg-white/20 transition text-center">
              <RefreshCw className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">MAINTAIN</h3>
              <p className="text-gray-200">Ongoing monitoring and adjustments to keep you on track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1a2332] mb-12">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition text-center border-t-4 border-[#d4af37]">
              <FileText className="w-12 h-12 text-[#1a2332] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Medicare Planning</h3>
              <p className="text-gray-600">Navigate Medicare options with expert guidance and support.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition text-center border-t-4 border-[#d4af37]">
              <Heart className="w-12 h-12 text-[#1a2332] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Life Insurance</h3>
              <p className="text-gray-600">Protect your loved ones with comprehensive life insurance solutions.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition text-center border-t-4 border-[#d4af37]">
              <Umbrella className="w-12 h-12 text-[#1a2332] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">LTC Planning</h3>
              <p className="text-gray-600">Long-term care strategies to protect your assets and dignity.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition text-center border-t-4 border-[#d4af37]">
              <TrendingUp className="w-12 h-12 text-[#1a2332] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">Retirement Planning</h3>
              <p className="text-gray-600">Build a secure retirement with personalized financial strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-6">Licensed & Certified</h3>
            <img 
              src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100009141/aa41.webp" 
              alt="Arizona Insurance License" 
              className="mx-auto shadow-lg rounded-lg max-w-full h-auto"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold mb-2">Key Retirement Solutions</p>
          <p className="text-lg mb-4">Service to Security - Powered by Key Retirement Solutions</p>
          <p className="text-xl font-bold mb-2">
            <a href="tel:816-248-1100" className="hover:text-[#d4af37] transition">816-248-1100</a>
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Medicare • Life Insurance • LTC Planning • Retirement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
