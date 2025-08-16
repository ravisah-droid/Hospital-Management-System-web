import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Bus, 
  Train,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Hospital Address',
      details: [
        'SwasthyaCare Multispeciality Hospital',
        'A-27, Near Sector 16 Metro Station,',
        'DND Flyway Road, Sector 15A,',
        'Noida, Uttar Pradesh – 201301, India'
      ],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Reception: +91-9504077534',
        'Emergency: 108',
        'Ambulance: 102',
        'Appointment: +91-9504077534'
      ],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@swasthyacare.in',
        'Appointments: appointments@swasthyacare.in',
        'Emergency: emergency@swasthyacare.in',
        'Feedback: feedback@swasthyacare.in'
      ],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Hospital Timings',
      details: [
        'OPD: 8:00 AM - 8:00 PM',
        'Emergency: 24x7',
        'Pharmacy: 8:00 AM - 10:00 PM',
        'Lab: 6:00 AM - 10:00 PM'
      ],
      color: 'orange'
    }
  ];

  const departments = [
    'General Medicine', 'Cardiology', 'Orthopaedics', 'Gynaecology', 
    'Paediatrics', 'Neurology', 'ENT', 'Ophthalmology', 'Dermatology', 
    'Gastroenterology', 'Urology', 'Psychiatry', 'Emergency', 'Other'
  ];

  const transportOptions = [
    {
      icon: Car,
      method: 'By Car/Taxi',
      description: 'Located on DND Flyway Road, easily accessible from Delhi and Noida',
      time: '10-20 mins from Noida City Center'
    },
    {
      icon: Bus,
      method: 'By Bus',
      description: 'Multiple bus routes available. Get down at Sector 16 bus stop',
      time: '2 mins walk from bus stop'
    },
    {
      icon: Train,
      method: 'By Train',
      description: 'Nearest Metro: Sector 16 Metro Station (Blue Line)',
      time: '2 mins walk from metro station'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting SwasthyaCare. We'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">SwasthyaCare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or emergency care. 
            We're here to help you 24x7 with all your healthcare needs.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 mb-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">🚨 Medical Emergency?</h2>
          <p className="text-lg mb-4">Don't wait - get immediate help</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() => window.location.href = 'tel:108'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency: 108
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => window.location.href = 'tel:102'}
            >
              <Car className="mr-2 h-5 w-5" />
              Call Ambulance: 102
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        type="text"
                        placeholder="Brief subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      placeholder="Please describe your query, symptoms, or feedback in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const colorClasses = getColorClasses(info.color);
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${colorClasses.bg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`h-6 w-6 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Actions */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-blue-300 text-blue-700 hover:bg-blue-100">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Reception: +91-9504077534
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-300 text-blue-700 hover:bg-blue-100">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp: +91-9504077534
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-300 text-blue-700 hover:bg-blue-100">
                    <Mail className="mr-2 h-4 w-4" />
                    Email: info@swasthyacare.in
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How to Reach */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Reach SwasthyaCare</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {transportOptions.map((transport, index) => {
              const IconComponent = transport.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{transport.method}</h3>
                    <p className="text-gray-600 mb-3">{transport.description}</p>
                    <div className="text-sm font-medium text-blue-600">{transport.time}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital Location</h3>
              <div className="rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8974445676847!2d77.31234731508236!3d28.58496998244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456a4e5e07%3A0x6c3c2c0b5c5c5c5c!2sSector%2016%20Metro%20Station%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SwasthyaCare Hospital Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  SwasthyaCare Multispeciality Hospital<br />
                  A-27, Near Sector 16 Metro Station, DND Flyway Road<br />
                  Sector 15A, Noida, Uttar Pradesh – 201301
                </p>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://maps.google.com/?q=A-27,+Near+Sector+16+Metro+Station,+DND+Flyway+Road,+Sector+15A,+Noida,+Uttar+Pradesh+201301', '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">What are your visiting hours?</h4>
                  <p className="text-gray-600">OPD timing: 8:00 AM - 8:00 PM. Emergency services are available 24x7.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you accept insurance?</h4>
                  <p className="text-gray-600">Yes, we accept cashless treatment for all major health insurance providers.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">How can I book an appointment?</h4>
                  <p className="text-gray-600">You can book online through our website, call us, or visit the hospital reception.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you provide ambulance services?</h4>
                  <p className="text-gray-600">Yes, we have 24x7 ambulance services. Call 102 for immediate ambulance assistance.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Is parking available?</h4>
                  <p className="text-gray-600">Yes, we have ample parking space for cars and two-wheelers free of charge.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you provide teleconsultation?</h4>
                  <p className="text-gray-600">Yes, we offer online consultations with our specialists. Book through our patient portal.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;