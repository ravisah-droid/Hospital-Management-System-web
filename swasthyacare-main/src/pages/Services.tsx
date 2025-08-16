import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, TestTube, Ambulance, Pill as Pills, Monitor, Clock, Phone, Shield, Users, Activity, HeartHandshake } from 'lucide-react';

const Services = () => {
  const primaryServices = [
    {
      icon: Stethoscope,
      title: 'OPD Services',
      description: 'Comprehensive outpatient consultations with specialists across 15+ departments.',
      features: ['General Medicine', 'Specialist Consultations', 'Follow-up Care', 'Health Screenings'],
      timing: '8:00 AM - 8:00 PM',
      color: 'blue'
    },
    {
      icon: Monitor,
      title: 'IPD Management',
      description: 'Complete inpatient care with modern facilities and 24x7 nursing care.',
      features: ['Private & Semi-private Rooms', 'ICU/CCU Care', 'Post-operative Care', 'Patient Monitoring'],
      timing: '24x7 Available',
      color: 'green'
    },
    {
      icon: Ambulance,
      title: 'Emergency Services',
      description: '24x7 emergency care with fully equipped ambulances and trauma center.',
      features: ['Trauma Care', 'Emergency Surgery', 'Ambulance Service', 'Critical Care'],
      timing: '24x7 Emergency',
      color: 'red'
    },
    {
      icon: TestTube,
      title: 'Laboratory Services',
      description: 'NABL accredited lab with advanced diagnostic equipment and quick reports.',
      features: ['Blood Tests', 'Radiology', 'Pathology', 'Digital Reports'],
      timing: '6:00 AM - 10:00 PM',
      color: 'purple'
    },
    {
      icon: Pills,
      title: 'In-House Pharmacy',
      description: 'Fully stocked pharmacy with all essential medicines and medical supplies.',
      features: ['Prescription Medicines', 'OTC Drugs', 'Medical Supplies', 'Home Delivery'],
      timing: '8:00 AM - 10:00 PM',
      color: 'orange'
    },
    {
      icon: Phone,
      title: 'Teleconsultation',
      description: 'Online consultations with specialists from the comfort of your home.',
      features: ['Video Consultations', 'Digital Prescriptions', 'Follow-up Care', 'Health Monitoring'],
      timing: '9:00 AM - 9:00 PM',
      color: 'indigo'
    }
  ];

  const specializedServices = [
    {
      title: 'Health Packages',
      description: 'Comprehensive health checkup packages for all age groups',
      packages: [
        { name: 'Basic Health Checkup', price: '₹1,999', tests: '25 Tests' },
        { name: 'Diabetes Package', price: '₹2,499', tests: '15 Tests' },
        { name: 'Heart Health Package', price: '₹3,999', tests: '20 Tests' },
        { name: 'Full Body Checkup', price: '₹4,999', tests: '50+ Tests' }
      ]
    },
    {
      title: 'COVID-19 Services',
      description: 'Comprehensive COVID-19 testing, treatment, and vaccination services',
      packages: [
        { name: 'RT-PCR Test', price: '₹500', tests: 'Same Day Result' },
        { name: 'Rapid Antigen', price: '₹300', tests: '30 Min Result' },
        { name: 'COVID Vaccination', price: 'Free', tests: 'All Age Groups' },
        { name: 'COVID Treatment', price: 'As per package', tests: 'Dedicated Ward' }
      ]
    }
  ];

  const additionalServices = [
    { icon: HeartHandshake, title: 'Patient Care Services', description: 'Dedicated patient care coordinators' },
    { icon: Shield, title: 'Insurance Support', description: 'Cashless treatment for all major insurances' },
    { icon: Activity, title: 'Health Camps', description: 'Free health camps in rural areas' },
    { icon: Users, title: 'Second Opinion', description: 'Expert second opinions for complex cases' }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Medical Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs under one roof. 
            Quality care with Indian values and modern technology.
          </p>
        </div>

        {/* Primary Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Medical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = getColorClasses(service.color);
              return (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorClasses.border}`}>
                  <CardContent className="p-6">
                    <div className={`${colorClasses.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${colorClasses.bg} mr-2`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{service.timing}</span>
                      </div>
                      <Link to="/appointments">
                        <Button size="sm" className={`${service.color === 'red' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Health Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Health Packages & Special Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <div>
                          <div className="font-semibold text-gray-900">{pkg.name}</div>
                          <div className="text-sm text-gray-600">{pkg.tests}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{pkg.price}</div>
                          <Link to="/appointments">
                            <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 mt-2">
                              Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our medical experts are available 24x7 to help you with any health concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Appointment
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600"
                    onClick={() => window.location.href = 'tel:+919504077534'}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91-9504077534
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;