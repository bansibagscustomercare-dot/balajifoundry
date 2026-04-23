import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import useSEO from '../hooks/useSEO';

const Products = () => {
  useSEO({
    title: 'Casting Products | CI, SG, MS & Custom Castings - Balaji Foundry Ahmedabad',
    description: 'Explore Balaji Foundry\'s precision casting products including CI castings, SG ductile iron castings, MS castings, graded castings and custom industrial castings. Pan-India supply.',
    keywords: 'CI casting manufacturer, SG casting Ahmedabad, ductile iron casting Gujarat, MS casting India, custom industrial casting, OEM casting supplier'
  });
  const products = [
    {
      id: 1,
      title: 'CI Castings',
      image: 'https://images.unsplash.com/photo-1682587835746-a25ea1dc1068?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNhc3Rpbmd8ZW58MHx8fHwxNzcxMDYyNDc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      title: 'SG (Ductile Iron) Castings',
      image: 'https://images.unsplash.com/photo-1571590946238-a0ba990d12a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMGNhc3Rpbmd8ZW58MHx8fHwxNzcxMDYyNDc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      title: 'MS Castings',
      image: 'https://images.unsplash.com/photo-1547555706-54bcf05bbad1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtZXRhbCUyMGNhc3Rpbmd8ZW58MHx8fHwxNzcxMDYyNDc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 4,
      title: 'Graded Castings',
      image: 'https://images.unsplash.com/photo-1572019637935-a6bc9723b3b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxtZXRhbCUyMGNhc3Rpbmd8ZW58MHx8fHwxNzcxMDYyNDc3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 5,
      title: 'Industrial Custom Castings',
      image: 'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwY29tcG9uZW50c3xlbnwwfHx8fDE3NzEwNjI0ODd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 6,
      title: 'Machinery Components',
      image: 'https://images.unsplash.com/photo-1767739791246-9f832345f8f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtYWNoaW5lcnklMjBwYXJ0c3xlbnwwfHx8fDE3NzEwNjI0OTd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 7,
      title: 'Pump & Valve Components',
      image: 'https://images.unsplash.com/photo-1769971361854-9e0927a2d8dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxtYWNoaW5lcnklMjBwYXJ0c3xlbnwwfHx8fDE3NzEwNjI0OTd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 8,
      title: 'OEM Casting Solutions',
      image: 'https://images.unsplash.com/photo-1758873263528-6dbd0422cf84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxpbmR1c3RyaWFsJTIwY29tcG9uZW50c3xlbnwwfHx8fDE3NzEwNjI0ODd8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Foundry casting manufacturing at Balaji Foundry"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            OUR PRODUCTS
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            Precision CI, SG, MS, and custom castings for industrial applications.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 relative inline-block">
                    {product.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for Reliable Casting Solutions?
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-6">
            Contact our team for technical discussions and quotations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-6 transition-all w-full sm:w-auto">
              CONTACT SALES TEAM
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
