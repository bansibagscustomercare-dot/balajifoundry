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
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Established 2005 | Ahmedabad, Gujarat
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Precision Casting Manufacturer in Ahmedabad
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Balaji Foundry is a trusted foundry in Ahmedabad specializing in high-precision CI castings 
                and custom manufacturing solutions for pan-India industrial clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 transition-all">
                    Contact Our Sales Team
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 text-lg px-8 py-6 transition-all">
                    Learn More About Us
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

      {/* Company Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nearly Two Decades of Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2005, Balaji Foundry has been a reliable casting manufacturer in Ahmedabad, 
                delivering high-precision castings to manufacturers across India. As a proprietorship-run 
                foundry, we combine experience-driven expertise with modern manufacturing processes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to quality, dimensional accuracy, and process-driven manufacturing makes 
                us a preferred partner for OEMs and component manufacturers seeking consistent, 
                reliable casting solutions.
              </p>
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-orange-500">20+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Quality Focus</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">Pan-India</div>
                  <div className="text-sm text-gray-600 mt-1">Supply Network</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Capabilities</h3>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Manufacturers Choose Balaji Foundry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Process-driven manufacturing and quality-focused operations that support your production requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{strength.title}</h3>
                    <p className="text-gray-600">{strength.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting diverse manufacturing sectors across India with precision casting solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all"
              >
                <p className="font-medium text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all">
                Learn More About Industries
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with a Reliable Foundry?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact our sales team to discuss your casting requirements and explore how 
            we can support your manufacturing needs.
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