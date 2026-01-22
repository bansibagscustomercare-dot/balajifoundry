import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Package, Wrench, Factory, Layers, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Industries = () => {
  const industries = [
    {
      icon: Cog,
      title: 'General Engineering',
      description: 'Custom castings for diverse engineering applications across manufacturing sectors',
      applications: ['Machine components', 'Engineering parts', 'Custom assemblies', 'Industrial equipment']
    },
    {
      icon: Factory,
      title: 'OEM Manufacturing',
      description: 'Reliable casting supply for original equipment manufacturers requiring consistent quality',
      applications: ['Production components', 'Assembly parts', 'Precision castings', 'Volume supply']
    },
    {
      icon: Package,
      title: 'Component Manufacturing',
      description: 'Precision castings for component manufacturers serving various industrial segments',
      applications: ['Industrial components', 'Machine parts', 'System elements', 'Sub-assemblies']
    },
    {
      icon: Settings,
      title: 'Industrial Machinery',
      description: 'Durable castings for industrial machinery and heavy equipment applications',
      applications: ['Machinery frames', 'Housing components', 'Structural parts', 'Load-bearing elements']
    },
    {
      icon: Layers,
      title: 'Process Equipment',
      description: 'Specialized castings for process industry equipment and systems',
      applications: ['Equipment housings', 'Process components', 'System parts', 'Industrial fixtures']
    },
    {
      icon: Wrench,
      title: 'Custom Applications',
      description: 'Flexible manufacturing for unique casting requirements and specialized applications',
      applications: ['Custom designs', 'Special requirements', 'Prototype development', 'Unique specifications']
    }
  ];

  const capabilities = [
    {
      title: 'Adaptable Manufacturing',
      description: 'Flexible production capabilities to handle diverse casting requirements and specifications'
    },
    {
      title: 'Engineering Support',
      description: 'Technical expertise to assist with design optimization and manufacturing feasibility'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control protocols ensuring consistent dimensional accuracy'
    },
    {
      title: 'Machining Coordination',
      description: 'In-house or coordinated machining support for complete component manufacturing'
    },
    {
      title: 'Material Expertise',
      description: 'Knowledge of various casting materials and their applications across industries'
    },
    {
      title: 'Reliable Supply',
      description: 'Dependable production scheduling and logistics for pan-India delivery'
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting diverse manufacturing sectors across India with precision casting solutions 
            and reliable supply from our Ahmedabad facility
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Typical Applications:</p>
                      <ul className="space-y-1">
                        {industry.applications.map((app, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Engineering Focus */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                General Engineering Focus
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Balaji Foundry specializes in serving the general engineering sector, providing custom 
                casting solutions for a wide range of manufacturing applications. Our experience with 
                diverse engineering requirements enables us to adapt quickly to unique specifications.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Whether you're an OEM requiring consistent production volumes or a component manufacturer 
                needing specialized castings, we offer the flexibility and precision to meet your requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a CI casting manufacturer in Ahmedabad, we leverage our foundry expertise to deliver 
                reliable solutions for industrial machinery, process equipment, and custom applications 
                across manufacturing sectors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Manufacturing Capabilities</h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{capability.title}</h4>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Reach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pan-India Manufacturing Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our Ahmedabad facility, we serve manufacturers across India with reliable logistics, 
              consistent quality, and responsive service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Location</h3>
                <p className="text-gray-600">
                  Ahmedabad-based facility with excellent connectivity to serve manufacturers across India
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Logistics</h3>
                <p className="text-gray-600">
                  Established supply chain ensuring timely delivery to clients throughout India
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Support</h3>
                <p className="text-gray-600">
                  Adaptable manufacturing and responsive service for diverse regional requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discuss Your Casting Requirements
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact our sales team to explore how Balaji Foundry can support your 
            manufacturing needs with precision castings and reliable supply.
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

export default Industries;