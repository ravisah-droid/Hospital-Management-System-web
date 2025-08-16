import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Target, Eye, Calendar } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1999', event: 'SwasthyaCare Hospital established in Patna, Bihar' },
    { year: '2005', event: 'NABH accreditation received' },
    { year: '2010', event: 'Expanded to 200 beds with ICU facilities' },
    { year: '2015', event: 'Introduced teleconsultation services' },
    { year: '2020', event: 'COVID-19 dedicated facility launched' },
    { year: '2024', event: 'Celebrating 25 years of healthcare excellence' }
  ];

  const values = [
    { icon: Heart, title: 'Compassionate Care', description: 'We treat every patient with empathy and respect' },
    { icon: Award, title: 'Excellence', description: 'Committed to the highest standards of medical care' },
    { icon: Users, title: 'Patient-Centric', description: 'Your health and comfort are our top priorities' },
    { icon: Target, title: 'Integrity', description: 'Honest, transparent, and ethical healthcare practices' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">SwasthyaCare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving the people of India with quality, affordable healthcare for over 25 years. 
            Your health is our mission, your trust is our strength.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality and compassionate healthcare accessible to every Indian citizen, 
                regardless of their economic background. We strive to combine advanced medical 
                technology with traditional Indian values of care and respect.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Healthy India with accessible, affordable, and advanced healthcare. 
                We envision becoming the most trusted healthcare provider in Eastern India, 
                known for our patient-first approach and clinical excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1999 by Dr. Rajesh Kumar Sharma, SwasthyaCare began as a small clinic 
                  in the heart of Patna with a simple mission: to provide quality healthcare to 
                  the people of Bihar at affordable prices.
                </p>
                <p>
                  Over the past 25 years, we have grown from a 10-bed facility to a 200-bed 
                  multispeciality hospital, serving over 50,000 patients annually. Our journey 
                  has been marked by continuous innovation, expansion of services, and an 
                  unwavering commitment to patient care.
                </p>
                <p>
                  Today, SwasthyaCare stands as a beacon of hope for countless families across 
                  Bihar and neighboring states, offering world-class medical facilities with 
                  the warmth of Indian hospitality.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-50 to-white p-8">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-4xl font-bold text-blue-600">25+</div>
                      <div className="text-gray-600">Years of Service</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600">50K+</div>
                      <div className="text-gray-600">Patients Treated</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-purple-600">500+</div>
                      <div className="text-gray-600">Medical Staff</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-orange-600">200</div>
                      <div className="text-gray-600">Beds Available</div>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-green-800 font-semibold">NABH Accredited</div>
                    <div className="text-green-600 text-sm">Quality Healthcare Standards</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our 25-year healthcare journey
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Accreditations & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-green-800">NABH Accredited</div>
                  <div className="text-green-600 text-sm">Healthcare Quality Standards</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-blue-800">ISO 9001:2015</div>
                  <div className="text-blue-600 text-sm">Quality Management System</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-purple-800">NABL Certified</div>
                  <div className="text-purple-600 text-sm">Laboratory Accreditation</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;