import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Users, 
  Award, 
  Phone, 
  Ambulance, 
  Heart,
  Shield,
  Stethoscope,
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const Home = () => {
  const highlights = [
    { icon: Clock, title: '24x7 Emergency Care', description: 'Round-the-clock medical care' },
    { icon: Users, title: '500+ Expert Doctors', description: 'Experienced Indian medical professionals' },
    { icon: Shield, title: 'NABH Certified', description: 'Quality healthcare standards' },
    { icon: Stethoscope, title: '15+ Specialties', description: 'Comprehensive medical services' },
    { icon: Heart, title: 'Advanced Technology', description: 'Modern medical equipment' },
    { icon: Award, title: 'ISO 9001:2015', description: 'International quality certification' }
  ];

  const services = [
    { title: 'OPD Services', description: 'Outpatient consultations with specialists', image: '🏥' },
    { title: 'IPD Management', description: 'Comprehensive inpatient care', image: '🛏️' },
    { title: 'Emergency Care', description: '24x7 emergency medical services', image: '🚨' },
    { title: 'Laboratory', description: 'Advanced diagnostic services', image: '🔬' },
    { title: 'Pharmacy', description: 'In-house pharmacy services', image: '💊' },
    { title: 'Teleconsultation', description: 'Online doctor consultations', image: '💻' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Patna, Bihar',
      rating: 5,
      comment: 'Excellent care during my surgery. The doctors and staff were very caring and professional.'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Muzaffarpur, Bihar',
      rating: 5,
      comment: 'Best hospital in Bihar. Quick appointment booking and quality treatment at affordable prices.'
    },
    {
      name: 'Anita Devi',
      location: 'Gaya, Bihar',
      rating: 5,
      comment: 'The teleconsultation service is excellent. I could consult with specialists from home.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">SwasthyaCare</span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-700">Multispeciality Hospital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your Health, Our Mission. Serving India with quality, affordable healthcare for over 25 years.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/appointments">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-6"
                  onClick={() => window.location.href = 'tel:108'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 108
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Ambulance className="h-5 w-5 text-red-500" />
                  <span>Ambulance: 102</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Noida, UP</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quick Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">25+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">500+</div>
                    <div className="text-gray-600">Expert Doctors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">50K+</div>
                    <div className="text-gray-600">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">15+</div>
                    <div className="text-gray-600">Specialties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SwasthyaCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing world-class healthcare services with Indian values and affordability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs under one roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued patients across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare with a personal touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;