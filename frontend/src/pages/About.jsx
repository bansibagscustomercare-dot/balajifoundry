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

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Balaji Foundry is a proprietorship-led casting manufacturing unit based in Ahmedabad, Gujarat. Established in 2005, the company has built a reputation for precision manufacturing, process consistency, and reliable supply to general engineering and industrial manufacturers across India.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The focus remains on dimensional accuracy, quality control, and long-term manufacturing partnerships.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with an Experienced Foundry
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact our sales team to learn how our experience, precision, and reliability 
            can support your manufacturing requirements.
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

export default About;
