import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Heart, Shield, Users } from 'lucide-react';

const OurStory = () => (
  <PageLayout>
    <HeroSection
      title="OUR STORY"
      subtitle="From military service to financial security -- how Service to Security was built on a foundation of duty and trust."
    />

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">A Mission Born From Service</h2>
            <p className="text-gray-700 mb-4">
             Service to Security was built with one mission in mind: to bring the same discipline, integrity, and commitment that defined my military service into the way I help people plan for their future.  Over the years, I’ve seen countless retirees — and many fellow Veterans — struggle to make sense of Medicare, retirement income strategies, and long‑term care planning. The system is complicated, the stakes are high, and too many people are left to figure it out alone.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Michael Thomas, witnessed firsthand how many veterans and retirees struggled to navigate the complex landscape of Medicare, retirement income, and long-term care planning. He knew there had to be a better way -- one built on trust, education, and personalized guidance.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Building a Legacy of Trust</h2>
            <p className="text-gray-700 mb-4">
             I knew there had to be a better way. A way built on trust, education, and truly personalized guidance.
            </p>
            <p className="text-gray-700">
              A way that puts people first — their goals, their families, and their peace of mind. That’s why Service to Security exists: to protect what you’ve worked a lifetime to build and to guide you with the same commitment I lived by in uniform.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-blue-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10">WHY IT MATTERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: 'Trust', desc: 'Every recommendation is made with your best interest at heart -- not a sales quota.' },
            { icon: Heart, title: 'Service', desc: 'We bring the same dedication to your finances that defined our service to our country.' },
            { icon: Users, title: 'Community', desc: 'We serve veterans, families, and retirees as neighbors -- not just clients.' },
          ].map((item) => (
            <div key={item.title} className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white/50 bg-white/10 flex items-center justify-center">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">OUR APPROACH</h2>
        <div className="space-y-4">
          {[
            'Personalized strategies tailored to your unique financial situation and retirement goals',
            'Education-first guidance so you always understand your options before making decisions',
            'No-pressure consultations -- we believe in earning your trust, not pushing a sale',
            'Ongoing client support that doesn\'t end after the first meeting',
            'Long-term relationships built on integrity and measurable results',
          ].map((text) => (
            <div key={text} className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-blue-700 font-semibold italic text-lg">
            "Service to Security. Your Future. My Mission."
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default OurStory;
