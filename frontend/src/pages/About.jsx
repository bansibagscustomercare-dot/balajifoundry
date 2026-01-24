import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Balaji Foundry
          </h1>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Balaji Foundry is a proprietorship-led casting manufacturing unit based in Ahmedabad, Gujarat. Established in 2005, the company supports general engineering and industrial manufacturers across India with precision-focused casting solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our operations emphasize dimensional accuracy, quality control, and dependable supply for OEM and industrial clients.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80" 
                alt="Balaji Foundry manufacturing facility"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Note */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" 
                alt="Founder of Balaji Foundry"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              A Note from the Founder
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since founding Balaji Foundry in 2005, our focus has remained on precision, consistency, and dependable manufacturing. We believe long-term partnerships are built on honest commitments, controlled processes, and meeting specifications without compromise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every casting that leaves our facility represents our commitment to quality and our understanding that your production depends on our reliability. This responsibility drives our approach to manufacturing and client relationships.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-semibold text-gray-900">Ashish Patel</p>
              <p className="text-gray-600">Founder & Proprietor</p>
              <p className="text-gray-600">Balaji Foundry</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner with an Experienced Foundry
          </h2>
          <p className="text-lg text-orange-100 mb-6">
            Contact our sales team to learn how our experience, precision, and reliability 
            can support your manufacturing requirements.
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

export default About;
