import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Gauge, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const strengths = [
    {
      icon: Gauge,
      title: 'High Precision',
      description: 'Advanced manufacturing processes ensuring dimensional accuracy and consistent quality in every casting'
    },
    {
      icon: Shield,
      title: 'Reliable Supply',
      description: 'Dependable production schedules and timely delivery to support your manufacturing requirements'
    },
    {
      icon: Factory,
      title: 'Custom Casting',
      description: 'Flexible manufacturing capabilities for custom and general engineering casting requirements'
    },
    {
      icon: TrendingUp,
      title: 'Pan-India Reach',
      description: 'Serving manufacturers across India with proven logistics and supply chain management'
    }
  ];

  const capabilities = [
    'All types of castings',
    'Custom engineering solutions',
    'Machining support coordination',
    'Quality assurance protocols',
    'Dimensional accuracy verification',
    'Material testing & certification'
  ];

  const industries = [
    'General Engineering',
    'OEM Manufacturing',
    'Component Manufacturing',
    'Industrial Machinery',
    'Process Equipment',
    'Custom Applications'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Precision Casting Manufacturer in Ahmedabad
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Serving Pan-India General Engineering Manufacturers Since 2005
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 transition-all">
                    Contact Our Sales Team
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Foundry casting manufacturing process at Balaji Foundry"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">20+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">100%</div>
                    <div className="text-xs text-gray-600">Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">2005</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">High-Precision</div>
              <div className="text-sm text-gray-600">Manufacturing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">Pan-India</div>
              <div className="text-sm text-gray-600">Supply</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">General Engineering</div>
              <div className="text-sm text-gray-600">Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Balaji Foundry
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Balaji Foundry is a precision casting manufacturer based in Ahmedabad, Gujarat, serving general engineering and industrial manufacturers across India. Established in 2005, the company operates with a strong focus on dimensional accuracy, process reliability, and consistent quality. With hands-on management and controlled manufacturing practices, Balaji Foundry supports OEMs and industrial clients with dependable casting solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services / Capabilities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Casting Capabilities
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-lg">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-gray-700">CI Casting</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-gray-700">SG (Ductile Iron) Casting</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-gray-700">MS Casting</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-gray-700">Graded Casting</span>
              </li>
              <li className="flex items-start space-x-3 text-lg">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-gray-700">All Types of Industrial & Custom Castings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for a Reliable Casting Partner?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Connect with our sales team to discuss your casting requirements and long-term supply needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 transition-all">
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