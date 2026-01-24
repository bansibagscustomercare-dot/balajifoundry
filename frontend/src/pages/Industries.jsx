import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, Factory, Cog, Car, Droplet } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Industries = () => {
  const industries = [
    {
      icon: Boxes,
      title: 'General Engineering',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Factory,
      title: 'OEM Manufacturers',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Cog,
      title: 'Industrial Machinery',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Car,
      title: 'Automotive Components',
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Droplet,
      title: 'Pumps & Valves',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className="text-white" size={40} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {industry.title}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Serving industrial manufacturers across India where precision and consistency are critical.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discuss Your Casting Requirements
          </h2>
          <p className="text-lg text-orange-100 mb-6">
            Contact our sales team to explore how Balaji Foundry can support your 
            manufacturing needs with precision castings and reliable supply.
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

export default Industries;
