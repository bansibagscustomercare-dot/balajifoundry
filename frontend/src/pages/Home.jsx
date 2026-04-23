import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import useSEO from '../hooks/useSEO';
import useSEO from '../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Balaji Foundry | Precision Casting Manufacturer in Ahmedabad',
    description: 'Balaji Foundry is a precision casting manufacturer in Ahmedabad, Gujarat. Supplying CI, SG (ductile iron), MS and custom industrial castings pan-India since 2005.',
    keywords: 'casting manufacturer Ahmedabad, CI casting, SG casting, ductile iron casting, MS casting, precision casting Gujarat, industrial casting India, Balaji Foundry, foundry Ahmedabad',
    canonical: 'https://balajifoundry.netlify.app/'
  });
  useSEO({
    title: 'Balaji Foundry | Precision Casting Manufacturer in Ahmedabad',
    description: 'Balaji Foundry is a precision casting manufacturer in Ahmedabad, Gujarat. Supplying CI, SG ductile iron, MS and custom industrial castings pan-India since 2005.',
    keywords: 'casting manufacturer Ahmedabad, CI casting, SG casting, ductile iron casting, MS casting, precision casting Gujarat, industrial casting India, Balaji Foundry'
  });

  return (
    <div className="min-h-screen">
      {/* Full-Page Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Foundry casting manufacturing process at Balaji Foundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-900/65 to-gray-900/75"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Precision Casting Manufacturer — Since 2005
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision Casting Manufacturer in Ahmedabad
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium">
            Serving Pan-India General Engineering Manufacturers Since 2005
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 min-h-[56px] rounded-xl transition-all w-full sm:w-auto shadow-lg shadow-orange-500/30">
              Contact Our Sales Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: 'Est. 2005', label: 'Nearly Two Decades' },
              { value: 'High-Precision', label: 'Manufacturing' },
              { value: 'Pan-India', label: 'Supply Network' },
              { value: 'General Engineering', label: 'Industry Focus' },
            ].map((item, i) => (
              <div key={i} className="py-4 px-2">
                <div className="text-2xl font-bold text-orange-500 mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Balaji Foundry
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Balaji Foundry is a precision casting manufacturer based in Ahmedabad, Gujarat, serving general engineering and industrial manufacturers across India. Established in 2005, we focus on dimensional accuracy, consistent quality, and reliable supply for long-term industrial requirements.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 transition-all">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1691315040131-8785183c20e8?auto=format&fit=crop&w=800&q=80"
                alt="Precision casting manufacturing at Balaji Foundry"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casting Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Casting Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'CI Casting', desc: 'Grey cast iron castings with controlled composition and dimensional accuracy.' },
              { title: 'SG (Ductile Iron) Casting', desc: 'High-strength ductile iron castings for demanding industrial applications.' },
              { title: 'MS Casting', desc: 'Mild steel castings with reliable mechanical properties for engineering use.' },
              { title: 'Graded Casting', desc: 'Material-graded castings meeting specific client and application standards.' },
              { title: 'Custom Industrial Castings', desc: 'Bespoke casting solutions designed to client specifications and drawings.' },
              { title: 'OEM Supply', desc: 'Consistent, high-volume supply partnerships for OEM manufacturers across India.' },
            ].map((item, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-6 transition-all duration-300">
                <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center mb-4 transition-all">
                  <Wrench className="text-orange-500" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Why Balaji Foundry</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built on Reliability & Precision
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Quality Focused', desc: 'Strict dimensional checks and process controls on every casting.' },
              { icon: Clock, title: 'Reliable Supply', desc: 'Consistent delivery schedules built for long-term partnerships.' },
              { icon: MapPin, title: 'Pan-India Reach', desc: 'Supplying industrial manufacturers across India from Ahmedabad.' },
              { icon: Wrench, title: 'Engineering Expertise', desc: 'Nearly two decades of foundry experience across industries.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange-400" size={28} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a Reliable Casting Partner?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Connect with our sales team to discuss your casting requirements and long-term supply needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 min-h-[56px] rounded-xl transition-all w-full sm:w-auto shadow-lg">
              Contact Our Sales Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
