import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import useSEO from '../hooks/useSEO';

const Products = () => {
  useSEO({
    title: 'Casting Products | CI, SG, MS & Custom Castings - Balaji Foundry',
    description: 'Explore Balaji Foundry\'s range of precision castings - CI casting, SG ductile iron casting, MS casting, graded castings and custom industrial castings from Ahmedabad.',
    keywords: 'CI casting products, SG casting, ductile iron casting, MS casting, graded casting, custom industrial casting, OEM casting Ahmedabad, pump valve casting',
    canonical: 'https://balajifoundry.in/products'
  });

  const products = [
    {
      id: 1,
      title: 'V-Belt Pulleys',
      subtitle: 'CI & SG Casting',
      image: '/product-pulley.png',
    },
    {
      id: 2,
      title: 'Shaft Couplings',
      subtitle: 'Precision Casting',
      image: '/product-couplings.png',
    },
    {
      id: 3,
      title: 'Motor Housings',
      subtitle: 'MS & CI Casting',
      image: '/product-motor.png',
    },
    {
      id: 4,
      title: 'Pump & Valve Bodies',
      subtitle: 'SG & CI Casting',
      image: '/product-valves.png',
    },
    {
      id: 5,
      title: 'Precision Components',
      subtitle: 'Graded Casting',
      image: '/product-parts.png',
    },
    {
      id: 6,
      title: 'Castor Wheel Hubs',
      subtitle: 'CI Casting',
      image: '/product-castors.png',
    },
    {
      id: 7,
      title: 'Machinery Parts',
      subtitle: 'Custom Industrial Casting',
      image: '/product-machinery.png',
    },
    {
      id: 8,
      title: 'Gearbox Housings',
      subtitle: 'MS & SG Casting',
      image: '/product-gearbox.png',
    },
    {
      id: 9,
      title: 'Mixer Drum Components',
      subtitle: 'Custom Casting',
      image: '/product-mixer.png',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Foundry casting manufacturing at Balaji Foundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/65"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Precision CI, SG, MS and custom castings for industrial applications
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Make</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casting Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From standard industrial components to custom OEM castings — manufactured with precision and delivered pan-India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl"
              >
                <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title + ' - Balaji Foundry'}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-sm text-orange-500 font-medium">{product.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note below grid */}
          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 text-lg mb-4">
              Don't see what you need? We manufacture <strong>custom castings</strong> to your specifications and drawings.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 transition-all">
                Enquire About Custom Casting
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for Reliable Casting Solutions?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Contact our team for specifications, quotations and technical discussions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 min-h-[56px] rounded-xl transition-all w-full sm:w-auto">
              Contact Sales Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
