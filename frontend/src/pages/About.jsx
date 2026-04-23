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

      {/* Leadership Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leadership
          </h2>

          {/* Ashish Patel — Founder */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="flex flex-col items-center justify-center p-8 bg-orange-50">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-orange-500 mb-4">
                  <img
                    src="/ashish-patel.jpg"
                    alt="Ashish Patel - Founder of Balaji Foundry"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-bold text-gray-900 text-lg text-center">Ashish Patel</p>
                <p className="text-orange-600 font-medium text-center">Founder & Proprietor</p>
                <p className="text-gray-500 text-sm text-center">Balaji Foundry</p>
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A Note from the Founder</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Since founding Balaji Foundry in 2005, our focus has remained on precision, consistency, and dependable manufacturing. We believe long-term partnerships are built on honest commitments, controlled processes, and meeting specifications without compromise.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every casting that leaves our facility represents our commitment to quality and our understanding that your production depends on our reliability. This responsibility drives our approach to manufacturing and client relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Neel Patel — Operations Head */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="flex flex-col items-center justify-center p-8 bg-navy-50 bg-blue-50 md:order-last">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-800 mb-4">
                  <img
                    src="/neel-patel.jpg"
                    alt="Neel Patel - Operations Head at Balaji Foundry"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-bold text-gray-900 text-lg text-center">Neel Patel</p>
                <p className="text-blue-800 font-medium text-center">Operations Head</p>
                <p className="text-gray-500 text-sm text-center">Balaji Foundry</p>
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">From the Operations Head</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Growing up around the foundry gave me an understanding of this craft that goes beyond technical knowledge. As an engineer, I bring structured thinking to our processes — but it's the shop floor experience that shapes how I approach every production challenge.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  My focus is on ensuring that every casting meets the dimensional and quality standards our clients depend on. From process planning to final inspection, I stay involved at every stage because consistency is not accidental — it is the result of attention, discipline, and accountability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Balaji Foundry is not just a business I work in — it is a legacy I am committed to building forward.
                </p>
              </div>
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
