import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Ear, 
  Stethoscope,
  Users,
  Activity,
  Zap,
  Microscope,
  Pill
} from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      icon: Stethoscope,
      name: 'General Medicine',
      description: 'Comprehensive primary healthcare and internal medicine services for all age groups.',
      services: ['General Consultation', 'Preventive Care', 'Chronic Disease Management', 'Health Screenings'],
      doctors: 25,
      timing: '8:00 AM - 8:00 PM',
      head: 'Dr. Rajesh Kumar Sharma, MD',
      color: 'blue'
    },
    {
      icon: Heart,
      name: 'Cardiology',
      description: 'Advanced heart care with state-of-the-art cardiac facilities and expert cardiologists.',
      services: ['ECG', 'Echo Cardiography', 'Cardiac Catheterization', 'Heart Surgery'],
      doctors: 12,
      timing: '24x7 Emergency',
      head: 'Dr. Priya Sinha, DM Cardiology',
      color: 'red'
    },
    {
      icon: Bone,
      name: 'Orthopaedics',
      description: 'Complete bone, joint, and muscle care with modern surgical facilities.',
      services: ['Joint Replacement', 'Fracture Treatment', 'Sports Medicine', 'Physiotherapy'],
      doctors: 18,
      timing: '8:00 AM - 6:00 PM',
      head: 'Dr. Amit Gupta, MS Ortho',
      color: 'green'
    },
    {
      icon: Baby,
      name: 'Paediatrics',
      description: 'Specialized healthcare for children from newborn to adolescence.',
      services: ['Newborn Care', 'Vaccination', 'Child Development', 'Pediatric Surgery'],
      doctors: 15,
      timing: '24x7 Available',
      head: 'Dr. Sunita Kumari, MD Pediatrics',
      color: 'pink'
    },
    {
      icon: Users,
      name: 'Gynaecology & Obstetrics',
      description: 'Comprehensive womens health care including maternity and gynecological services.',
      services: ['Maternity Care', 'Gynecological Surgery', 'Family Planning', 'Infertility Treatment'],
      doctors: 20,
      timing: '24x7 Maternity',
      head: 'Dr. Kavita Devi, MS Gynec',
      color: 'purple'
    },
    {
      icon: Brain,
      name: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
      services: ['Stroke Treatment', 'Epilepsy Care', 'Neurosurgery', 'Brain Imaging'],
      doctors: 8,
      timing: '24x7 Emergency',
      head: 'Dr. Vikash Kumar, DM Neurology',
      color: 'indigo'
    },
    {
      icon: Eye,
      name: 'Ophthalmology',
      description: 'Complete eye care services including surgery and vision correction.',
      services: ['Cataract Surgery', 'Retinal Treatment', 'LASIK', 'Glaucoma Care'],
      doctors: 10,
      timing: '9:00 AM - 6:00 PM',
      head: 'Dr. Anita Sharma, MS Ophthalmology',
      color: 'teal'
    },
    {
      icon: Ear,
      name: 'ENT',
      description: 'Ear, Nose, and Throat specialists providing comprehensive ENT care.',
      services: ['Hearing Tests', 'Sinus Treatment', 'Throat Surgery', 'Voice Therapy'],
      doctors: 6,
      timing: '9:00 AM - 7:00 PM',
      head: 'Dr. Ravi Kumar, MS ENT',
      color: 'orange'
    },
    {
      icon: Activity,
      name: 'Gastroenterology',
      description: 'Digestive system care including liver, stomach, and intestinal disorders.',
      services: ['Endoscopy', 'Liver Treatment', 'Gastric Surgery', 'Nutrition Counseling'],
      doctors: 8,
      timing: '8:00 AM - 6:00 PM',
      head: 'Dr. Manoj Singh, DM Gastro',
      color: 'yellow'
    },
    {
      icon: Zap,
      name: 'Urology',
      description: 'Specialized care for urinary system and male reproductive health.',
      services: ['Kidney Stone Treatment', 'Prostate Care', 'Urological Surgery', 'Dialysis'],
      doctors: 7,
      timing: '8:00 AM - 8:00 PM',
      head: 'Dr. Santosh Kumar, MCh Urology',
      color: 'cyan'
    },
    {
      icon: Microscope,
      name: 'Dermatology',
      description: 'Skin, hair, and nail care with cosmetic and medical treatments.',
      services: ['Skin Treatments', 'Hair Transplant', 'Cosmetic Procedures', 'Allergy Testing'],
      doctors: 5,
      timing: '10:00 AM - 6:00 PM',
      head: 'Dr. Deepika Raj, MD Dermatology',
      color: 'pink'
    },
    {
      icon: Pill,
      name: 'Psychiatry',
      description: 'Mental health care and counseling services for psychological well-being.',
      services: ['Counseling', 'Depression Treatment', 'Anxiety Management', 'Addiction Treatment'],
      doctors: 4,
      timing: '9:00 AM - 7:00 PM',
      head: 'Dr. Alok Kumar, MD Psychiatry',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-50' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-50' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-50' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-50' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-50' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-50' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', hover: 'hover:bg-yellow-50' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-50' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'hover:bg-emerald-50' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Medical <span className="text-blue-600">Departments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SwasthyaCare offers comprehensive medical services across 15+ specialties with 
            experienced doctors and modern facilities. Each department is equipped with 
            state-of-the-art technology and staffed by qualified specialists.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">500+</div>
            <div className="text-gray-600">Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">200</div>
            <div className="text-gray-600">Beds</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600">24x7</div>
            <div className="text-gray-600">Emergency Care</div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            const colorClasses = getColorClasses(dept.color);
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorClasses.hover}`}>
                <CardContent className="p-6">
                  <div className={`${colorClasses.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Department Head:</span>
                      <span className="font-medium text-gray-900">{dept.head}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Doctors:</span>
                      <span className="font-medium text-blue-600">{dept.doctors} Specialists</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Timing:</span>
                      <span className="font-medium text-green-600">{dept.timing}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Services:</h4>
                    <ul className="space-y-1">
                      {dept.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${colorClasses.bg} mr-2`}></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/appointments" className="flex-1">
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        Book Appointment
                      </Button>
                    </Link>
                    <Link to="/doctors">
                      <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                        View Doctors
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Services */}
        <section className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">24x7 Emergency Services</h2>
            <p className="text-xl mb-6 opacity-90">
              Our emergency department is equipped with modern facilities and staffed by 
              experienced emergency physicians round-the-clock.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold">⚡ Trauma Care</div>
                <p className="opacity-80">Advanced trauma and accident care</p>
              </div>
              <div>
                <div className="text-2xl font-bold">🚑 Ambulance</div>
                <p className="opacity-80">24x7 ambulance services</p>
              </div>
              <div>
                <div className="text-2xl font-bold">🏥 ICU/CCU</div>
                <p className="opacity-80">Critical care facilities</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100"
                      onClick={() => window.location.href = 'tel:108'}>
                Emergency: 108
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600"
                      onClick={() => window.location.href = 'tel:102'}>
                Ambulance: 102
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Departments;