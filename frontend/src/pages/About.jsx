import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Every casting meets strict dimensional accuracy standards through process-driven manufacturing'
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Consistent quality assurance protocols ensure reliable, defect-free castings'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Long-term relationships built on reliability, responsiveness, and delivery performance'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Ongoing process optimization and capability enhancement to serve you better'
    }
  ];

  const timeline = [
    {
      year: '2005',
      title: 'Foundation',
      description: 'Balaji Foundry established in Ahmedabad as a proprietorship-run casting manufacturer'
    },
    {
      year: '2010',
      title: 'Capability Expansion',
      description: 'Enhanced production capacity and introduced advanced quality control systems'
    },
    {
      year: '2015',
      title: 'Pan-India Network',
      description: 'Established reliable supply network serving manufacturers across India'
    },
    {
      year: '2020',
      title: 'Process Modernization',
      description: 'Implemented modern manufacturing processes for improved precision and efficiency'
    },
    {
      year: '2025',
      title: 'Continued Excellence',
      description: 'Twenty years of reliable service to Indian manufacturers with focus on quality and precision'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Balaji Foundry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted casting manufacturer in Ahmedabad with nearly two decades of 
            experience delivering precision castings to manufacturers across India
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experience-Driven Foundry Since 2005
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Balaji Foundry was established in 2005 in Ahmedabad, Gujarat, as a proprietorship-run 
                casting manufacturer with a clear mission: deliver high-precision castings with consistent 
                quality and reliable service.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Over nearly two decades, we have built our reputation on engineering accuracy, 
                process-driven manufacturing, and dependable supply. Our Ahmedabad-based facility serves 
                as a strategic manufacturing hub, enabling us to efficiently serve pan-India clients.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a proprietorship, we maintain close oversight of every aspect of our operations, 
                ensuring that each casting meets our exacting standards for precision, quality, and reliability.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Company Profile</h3>
              <dl className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <dt className="text-gray-400 text-sm mb-1">Company Name</dt>
                  <dd className="text-lg font-semibold">Balaji Foundry</dd>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <dt className="text-gray-400 text-sm mb-1">Established</dt>
                  <dd className="text-lg font-semibold">2005</dd>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <dt className="text-gray-400 text-sm mb-1">Business Type</dt>
                  <dd className="text-lg font-semibold">Proprietorship</dd>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <dt className="text-gray-400 text-sm mb-1">Industry</dt>
                  <dd className="text-lg font-semibold">Foundry & Casting Manufacturing</dd>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <dt className="text-gray-400 text-sm mb-1">Location</dt>
                  <dd className="text-lg font-semibold">Ahmedabad, Gujarat, India</dd>
                </div>
                <div>
                  <dt className="text-gray-400 text-sm mb-1">Market Reach</dt>
                  <dd className="text-lg font-semibold">Pan-India Manufacturers</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and define our relationships with manufacturing partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Decades of Growth
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our journey as a trusted foundry in Ahmedabad
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Strategic Ahmedabad Location
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our Ahmedabad facility serves as an ideal manufacturing hub for serving pan-India clients. 
                Gujarat's industrial infrastructure, connectivity, and manufacturing ecosystem provide 
                significant advantages for reliable production and timely delivery.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a casting manufacturer in Ahmedabad, we leverage the region's established foundry 
                industry presence, skilled workforce, and robust logistics network to ensure consistent 
                quality and dependable supply to manufacturers across India.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Industrial Infrastructure</div>
                    <div className="text-gray-600 text-sm">Established manufacturing ecosystem and support services</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Connectivity</div>
                    <div className="text-gray-600 text-sm">Excellent road, rail, and port access for reliable logistics</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Skilled Workforce</div>
                    <div className="text-gray-600 text-sm">Access to experienced foundry and manufacturing talent</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Supply Chain</div>
                    <div className="text-gray-600 text-sm">Proximity to raw material suppliers and service providers</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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