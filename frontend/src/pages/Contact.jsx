import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    requirementType: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Our sales team will contact you within 24 hours.",
      });
      setFormData({ name: '', company: '', city: '', requirementType: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['36, 37, 38 Milan Industrial Estate', 'Nagarvel Hanuman Road, Amraiwadi', 'Ahmedabad, Gujarat, India'],
      description: 'Visit our manufacturing facility'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(O) 22749351, 22744075', '(M) 8160489856, 9712982074'],
      description: 'Speak with our sales team'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['balajifoundry27@gmail.com', 'neelashishpatel26@gmail.com'],
      description: 'Send us your requirements'
    }
  ];

  const reasons = [
    'Discuss casting specifications and requirements',
    'Request technical information and capabilities',
    'Explore distributor partnership opportunities',
    'Obtain quotations for your projects',
    'Schedule facility visit or technical consultation',
    'Inquire about lead times and delivery schedules'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Our Sales Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your casting requirements? Our experienced sales team is here to
            assist with specifications, quotations, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us Your Inquiry</h2>
              <p className="text-lg text-gray-600 mb-8">We respond to all genuine manufacturing enquiries.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" name="company" type="text" required value={formData.company} onChange={handleChange} placeholder="Your company name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City / State *</Label>
                  <Input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} placeholder="Your city and state" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="requirementType">Requirement Type *</Label>
                  <select id="requirementType" name="requirementType" required value={formData.requirementType} onChange={handleChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Select requirement type</option>
                    <option value="OEM">OEM</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Job Work">Job Work</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Please describe your casting requirements, specifications, or inquiry..." rows={6} className="mt-1" />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">Reach out to discuss how Balaji Foundry can support your manufacturing needs.</p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-orange-500" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-900 font-medium">{detail}</p>
                            ))}
                            <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Why Contact Us */}
              <Card className="bg-gray-50 border-none mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Contact Us?</h3>
                  <ul className="space-y-2">
                    {reasons.map((reason, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700 text-sm">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918160489856?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20casting%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="w-full h-80">
          <iframe
            title="Balaji Foundry Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.446!2d72.6184!3d23.0009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b9beb0a3c5%3A0x1!2sMilan+Industrial+Estate%2C+Nagarvel+Hanuman+Road%2C+Amraiwadi%2C+Ahmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Distributor Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interested in Distribution Partnership?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Balaji Foundry welcomes inquiries from distributors interested in representing our
              precision casting products. Contact our sales team to explore partnership opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Quality Products</h3>
                  <p className="text-sm text-gray-600">High-precision castings with consistent quality and reliability</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Reliable Supply</h3>
                  <p className="text-sm text-gray-600">Dependable production and delivery for distributor inventory needs</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Technical Support</h3>
                  <p className="text-sm text-gray-600">Engineering expertise and assistance for customer requirements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Our sales team is ready to discuss your casting requirements and provide the information you need.
          </p>
          <p className="text-lg text-white font-medium">
            Submit the inquiry form above or contact us directly to begin the conversation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
