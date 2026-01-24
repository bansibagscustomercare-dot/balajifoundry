import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Full-Page Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Foundry casting manufacturing process at Balaji Foundry"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision Casting Manufacturer in Ahmedabad
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            Serving Pan-India General Engineering Manufacturers Since 2005
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6 transition-all w-full sm:w-auto">
              Contact Our Sales Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="py-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">Established 2005</div>
              <div className="text-sm text-gray-600">Nearly Two Decades</div>
            </div>
            <div className="py-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">High-Precision</div>
              <div className="text-sm text-gray-600">Manufacturing</div>
            </div>
            <div className="py-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">Pan-India</div>
              <div className="text-sm text-gray-600">Supply Network</div>
            </div>
            <div className="py-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">General Engineering</div>
              <div className="text-sm text-gray-600">Industry Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Balaji Foundry */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Balaji Foundry
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Balaji Foundry is a precision casting manufacturer based in Ahmedabad, Gujarat, serving general engineering and industrial manufacturers across India. Established in 2005, we focus on dimensional accuracy, consistent quality, and reliable supply for long-term industrial requirements.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1691315040131-8785183c20e8?auto=format&fit=crop&w=800&q=80" 
                alt="Precision casting manufacturing at Balaji Foundry"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casting Capabilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Casting Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-l-4 border-orange-500 pl-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900">CI Casting</h3>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900">SG (Ductile Iron) Casting</h3>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900">MS Casting</h3>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900">Graded Casting</h3>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-3 sm:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900">All Types of Industrial & Custom Castings</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a Reliable Casting Partner?
          </h2>
          <p className="text-lg text-orange-100 mb-6">
            Connect with our sales team to discuss your casting requirements and long-term supply needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-6 transition-all w-full sm:w-auto">
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
