import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Calendar, MapPin, Languages, Award } from 'lucide-react';

const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'General Medicine', 'Cardiology', 'Orthopaedics', 'Gynaecology', 'Paediatrics', 'Neurology', 'ENT'];

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      qualification: 'MBBS, MD (Internal Medicine)',
      department: 'General Medicine',
      experience: '25 years',
      rating: 4.9,
      reviews: 245,
      languages: ['Hindi', 'English', 'Bhojpuri'],
      specializations: ['Diabetes Management', 'Hypertension', 'Preventive Care'],
      timing: 'Mon-Sat: 9:00 AM - 2:00 PM',
      image: '👨‍⚕️',
      fees: '₹500'
    },
    {
      name: 'Dr. Priya Sinha',
      qualification: 'MBBS, MD, DM (Cardiology)',
      department: 'Cardiology',
      experience: '18 years',
      rating: 4.8,
      reviews: 189,
      languages: ['Hindi', 'English'],
      specializations: ['Heart Surgery', 'Angioplasty', 'Cardiac Rehabilitation'],
      timing: 'Mon-Fri: 10:00 AM - 4:00 PM',
      image: '👩‍⚕️',
      fees: '₹800'
    },
    {
      name: 'Dr. Amit Gupta',
      qualification: 'MBBS, MS (Orthopaedics)',
      department: 'Orthopaedics',
      experience: '20 years',
      rating: 4.9,
      reviews: 312,
      languages: ['Hindi', 'English', 'Punjabi'],
      specializations: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine'],
      timing: 'Mon-Sat: 8:00 AM - 1:00 PM',
      image: '👨‍⚕️',
      fees: '₹700'
    },
    {
      name: 'Dr. Sunita Kumari',
      qualification: 'MBBS, MD (Paediatrics)',
      department: 'Paediatrics',
      experience: '15 years',
      rating: 4.9,
      reviews: 198,
      languages: ['Hindi', 'English', 'Maithili'],
      specializations: ['Newborn Care', 'Child Development', 'Vaccination'],
      timing: 'Mon-Sat: 9:00 AM - 3:00 PM',
      image: '👩‍⚕️',
      fees: '₹400'
    },
    {
      name: 'Dr. Kavita Devi',
      qualification: 'MBBS, MS (Gynaecology)',
      department: 'Gynaecology',
      experience: '22 years',
      rating: 4.8,
      reviews: 267,
      languages: ['Hindi', 'English'],
      specializations: ['High-Risk Pregnancy', 'Laparoscopic Surgery', 'Infertility'],
      timing: 'Mon-Sat: 10:00 AM - 3:00 PM',
      image: '👩‍⚕️',
      fees: '₹600'
    },
    {
      name: 'Dr. Vikash Kumar',
      qualification: 'MBBS, MD, DM (Neurology)',
      department: 'Neurology',
      experience: '16 years',
      rating: 4.7,
      reviews: 156,
      languages: ['Hindi', 'English'],
      specializations: ['Stroke Treatment', 'Epilepsy', 'Headache Disorders'],
      timing: 'Mon-Fri: 11:00 AM - 4:00 PM',
      image: '👨‍⚕️',
      fees: '₹900'
    },
    {
      name: 'Dr. Anita Sharma',
      qualification: 'MBBS, MS (Ophthalmology)',
      department: 'Ophthalmology',
      experience: '14 years',
      rating: 4.8,
      reviews: 134,
      languages: ['Hindi', 'English', 'Bengali'],
      specializations: ['Cataract Surgery', 'Retinal Diseases', 'LASIK'],
      timing: 'Mon-Sat: 9:00 AM - 2:00 PM',
      image: '👩‍⚕️',
      fees: '₹550'
    },
    {
      name: 'Dr. Ravi Kumar',
      qualification: 'MBBS, MS (ENT)',
      department: 'ENT',
      experience: '12 years',
      rating: 4.6,
      reviews: 89,
      languages: ['Hindi', 'English'],
      specializations: ['Sinus Surgery', 'Hearing Disorders', 'Voice Therapy'],
      timing: 'Mon-Sat: 10:00 AM - 3:00 PM',
      image: '👨‍⚕️',
      fees: '₹450'
    },
    {
      name: 'Dr. Manoj Singh',
      qualification: 'MBBS, MD, DM (Gastroenterology)',
      department: 'Gastroenterology',
      experience: '19 years',
      rating: 4.8,
      reviews: 176,
      languages: ['Hindi', 'English'],
      specializations: ['Liver Diseases', 'Endoscopy', 'IBD Treatment'],
      timing: 'Mon-Fri: 9:00 AM - 2:00 PM',
      image: '👨‍⚕️',
      fees: '₹750'
    }
  ];

  const filteredDoctors = selectedDepartment === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.department === selectedDepartment);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Expert Doctors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced doctors who are committed to 
            providing the best healthcare services. Each doctor brings years of experience 
            and expertise in their respective specializations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Expert Doctors</div>
          </div>
          <div className="text-center bg-green-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-600">25+</div>
            <div className="text-gray-600">Years Average Experience</div>
          </div>
          <div className="text-center bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">15+</div>
            <div className="text-gray-600">Specializations</div>
          </div>
          <div className="text-center bg-orange-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">4.8⭐</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Department Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Department:</h3>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? 'default' : 'outline'}
                onClick={() => setSelectedDepartment(dept)}
                className={selectedDepartment === dept 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{doctor.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.qualification}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-blue-800">{doctor.department}</div>
                    <div className="text-sm text-blue-600">{doctor.experience} experience</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{doctor.rating}</span>
                      <span className="text-sm text-gray-600">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{doctor.fees}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specializations.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Languages className="h-4 w-4" />
                    <span>{doctor.languages.join(', ')}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{doctor.timing}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link to="/appointments" className="flex-1">
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calendar className="mr-1 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Book Consultation with Our Experts</h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized medical care from experienced doctors who speak your language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Award className="mr-2 h-5 w-5" />
                View All Services
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Doctors;