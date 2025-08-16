import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Phone, Mail, Upload, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    symptoms: '',
    previousVisit: false
  });

  const departments = [
    'General Medicine',
    'Cardiology',
    'Orthopaedics',
    'Gynaecology',
    'Paediatrics',
    'Neurology',
    'ENT',
    'Ophthalmology',
    'Dermatology',
    'Gastroenterology',
    'Urology',
    'Psychiatry'
  ];

  const doctorsData: { [key: string]: string[] } = {
    'General Medicine': ['Dr. Rajesh Kumar Sharma', 'Dr. Meera Singh', 'Dr. Anil Kumar'],
    'Cardiology': ['Dr. Priya Sinha', 'Dr. Suresh Gupta', 'Dr. Kavita Sharma'],
    'Orthopaedics': ['Dr. Amit Gupta', 'Dr. Ravi Kumar', 'Dr. Sanjeev Singh'],
    'Gynaecology': ['Dr. Kavita Devi', 'Dr. Sunita Kumari', 'Dr. Anita Sharma'],
    'Paediatrics': ['Dr. Sunita Kumari', 'Dr. Rakesh Singh', 'Dr. Pooja Devi'],
    'Neurology': ['Dr. Vikash Kumar', 'Dr. Manoj Singh', 'Dr. Deepak Kumar'],
    'ENT': ['Dr. Ravi Kumar', 'Dr. Alok Singh', 'Dr. Priyanka Sharma'],
    'Ophthalmology': ['Dr. Anita Sharma', 'Dr. Vijay Kumar', 'Dr. Sita Devi'],
    'Dermatology': ['Dr. Deepika Raj', 'Dr. Mohan Singh', 'Dr. Rani Kumari'],
    'Gastroenterology': ['Dr. Manoj Singh', 'Dr. Santosh Kumar', 'Dr. Geeta Devi'],
    'Urology': ['Dr. Santosh Kumar', 'Dr. Ramesh Singh', 'Dr. Vinod Kumar'],
    'Psychiatry': ['Dr. Alok Kumar', 'Dr. Seema Sharma', 'Dr. Rajiv Singh']
  };

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit appointment
      setStep(4); // Show success message
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (step === 4) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your appointment has been successfully booked. We'll send you a confirmation 
              message shortly with all the details.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="text-sm text-gray-600">Appointment Details:</div>
              <div className="font-semibold text-gray-900">{formData.department}</div>
              <div className="text-gray-700">{formData.doctor}</div>
              <div className="text-blue-600">{formData.date} at {formData.time}</div>
            </div>
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setStep(1)}>
                Book Another Appointment
              </Button>
              <Button variant="outline" className="w-full border-gray-300 text-gray-600">
                Go to Patient Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book <span className="text-blue-600">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your consultation with our expert doctors in just a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Select Department & Doctor</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="department">Department *</Label>
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

                    {formData.department && (
                      <div>
                        <Label htmlFor="doctor">Doctor *</Label>
                        <Select value={formData.doctor} onValueChange={(value) => handleInputChange('doctor', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            {doctorsData[formData.department]?.map((doctor) => (
                              <SelectItem key={doctor} value={doctor}>{doctor}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          type="date"
                          value={formData.date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 2: Patient Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          type="number"
                          placeholder="Enter age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Additional Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="symptoms">Symptoms / Reason for Visit</Label>
                      <Textarea
                        placeholder="Please describe your symptoms or reason for consultation"
                        value={formData.symptoms}
                        onChange={(e) => handleInputChange('symptoms', e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">Upload Previous Reports (Optional)</p>
                      <p className="text-sm text-gray-500">PDF, JPG, PNG up to 10MB</p>
                      <Button variant="outline" className="mt-2">
                        Choose Files
                      </Button>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Appointment Summary</h4>
                      <div className="space-y-1 text-sm text-blue-800">
                        <p><strong>Department:</strong> {formData.department}</p>
                        <p><strong>Doctor:</strong> {formData.doctor}</p>
                        <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                        <p><strong>Patient:</strong> {formData.name} ({formData.age} years, {formData.gender})</p>
                        <p><strong>Contact:</strong> {formData.phone}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 ml-auto"
                  disabled={step === 1 && (!formData.department || !formData.doctor || !formData.date || !formData.time)}
                >
                  {step === 3 ? 'Confirm Appointment' : 'Next Step'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need help booking your appointment? Contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Phone className="mr-2 h-4 w-4" />
              Call: +91-612-2345678
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Mail className="mr-2 h-4 w-4" />
              Email: appointments@swasthyacare.in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;