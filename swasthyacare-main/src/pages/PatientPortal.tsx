import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Calendar, 
  FileText, 
  Download, 
  Upload, 
  CreditCard, 
  MessageSquare, 
  Phone,
  Clock,
  MapPin,
  Star,
  Eye
} from 'lucide-react';

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ phone: '', otp: '' });
  const [showOTP, setShowOTP] = useState(false);

  // Mock patient data
  const patientData = {
    name: 'Priya Sharma',
    age: 32,
    gender: 'Female',
    phone: '+91-9876543210',
    email: 'priya.sharma@gmail.com',
    address: 'Rajiv Gandhi Road, Patna, Bihar 800001',
    bloodGroup: 'O+',
    emergencyContact: '+91-9876543211'
  };

  const appointments = [
    {
      id: 1,
      date: '2024-01-25',
      time: '10:00 AM',
      doctor: 'Dr. Rajesh Kumar Sharma',
      department: 'General Medicine',
      status: 'Confirmed',
      type: 'Follow-up'
    },
    {
      id: 2,
      date: '2024-01-20',
      time: '2:30 PM',
      doctor: 'Dr. Priya Sinha',
      department: 'Cardiology',
      status: 'Completed',
      type: 'Consultation'
    },
    {
      id: 3,
      date: '2024-01-18',
      time: '11:00 AM',
      doctor: 'Dr. Amit Gupta',
      department: 'Orthopaedics',
      status: 'Completed',
      type: 'Check-up'
    }
  ];

  const reports = [
    { id: 1, name: 'Blood Test Report', date: '2024-01-20', doctor: 'Dr. Rajesh Sharma', type: 'Lab Report' },
    { id: 2, name: 'ECG Report', date: '2024-01-20', doctor: 'Dr. Priya Sinha', type: 'Diagnostic' },
    { id: 3, name: 'X-Ray Chest', date: '2024-01-15', doctor: 'Dr. Amit Gupta', type: 'Imaging' }
  ];

  const prescriptions = [
    { id: 1, doctor: 'Dr. Rajesh Sharma', date: '2024-01-20', medicines: ['Paracetamol 500mg', 'Vitamin D3'] },
    { id: 2, doctor: 'Dr. Priya Sinha', date: '2024-01-20', medicines: ['Aspirin 75mg', 'Atorvastatin 20mg'] }
  ];

  const bills = [
    { id: 1, date: '2024-01-20', amount: '₹2,450', status: 'Paid', description: 'Cardiology Consultation + ECG' },
    { id: 2, date: '2024-01-18', amount: '₹1,800', status: 'Paid', description: 'Orthopaedic Consultation + X-Ray' },
    { id: 3, date: '2024-01-15', amount: '₹850', status: 'Pending', description: 'Blood Test Package' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOTP) {
      setShowOTP(true);
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleEmergency = () => {
    window.location.href = 'tel:108';
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Patient Login</h2>
              <p className="text-gray-600 mt-2">Access your medical records and appointments</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Mobile Number</Label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={loginData.phone}
                    onChange={(e) => setLoginData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                {showOTP && (
                  <div>
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={loginData.otp}
                      onChange={(e) => setLoginData(prev => ({ ...prev, otp: e.target.value }))}
                      required
                    />
                    <p className="text-sm text-green-600 mt-1">OTP sent to {loginData.phone}</p>
                  </div>
                )}

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {showOTP ? 'Verify OTP' : 'Send OTP'}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                New patient? 
                <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0 ml-1">
                  Register here
                </Button>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button 
                variant="outline" 
                className="w-full border-red-600 text-red-600 hover:bg-red-50"
                onClick={handleEmergency}
              >
                <Phone className="mr-2 h-4 w-4" />
                Emergency: 108
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {patientData.name}</h1>
                <p className="text-gray-600">{patientData.age} years • {patientData.bloodGroup} • {patientData.phone}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-50"
                onClick={handleEmergency}
              >
                <Phone className="mr-2 h-4 w-4" />
                Emergency
              </Button>
              <Button 
                variant="outline"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1</div>
              <div className="text-gray-600">Upcoming</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-gray-600">Reports</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">₹850</div>
              <div className="text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-gray-600">Rating Given</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="bills">Bills</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">My Appointments</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book New Appointment
                  </Button>
                </div>

                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                              appointment.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {appointment.status}
                            </span>
                            <span className="text-sm text-gray-500">{appointment.type}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600">{appointment.department}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {appointment.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 md:mt-0">
                          {appointment.status === 'Confirmed' && (
                            <Button variant="outline" size="sm">Reschedule</Button>
                          )}
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Medical Reports</h2>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Report
                  </Button>
                </div>

                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{report.name}</h3>
                          <p className="text-sm text-gray-600">by {report.doctor}</p>
                          <p className="text-sm text-gray-500">{report.date} • {report.type}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Prescriptions</h2>
                
                <div className="space-y-4">
                  {prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{prescription.doctor}</h3>
                          <p className="text-sm text-gray-500">{prescription.date}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Medicines:</h4>
                        {prescription.medicines.map((medicine, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{medicine}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bills">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Bills & Payments</h2>
                
                <div className="space-y-4">
                  {bills.map((bill) => (
                    <div key={bill.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <CreditCard className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{bill.description}</h3>
                          <p className="text-sm text-gray-500">{bill.date}</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {bill.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{bill.amount}</div>
                        {bill.status === 'Pending' && (
                          <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">My Profile</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input value={patientData.name} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input value={patientData.age} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input value={patientData.gender} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="blood-group">Blood Group</Label>
                    <Input value={patientData.bloodGroup} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input value={patientData.phone} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input value={patientData.email} readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input value={patientData.address} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="emergency-contact">Emergency Contact</Label>
                    <Input value={patientData.emergencyContact} readOnly />
                  </div>
                </div>

                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Feedback & Support</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Rate Your Recent Experience</h3>
                    <p className="text-blue-800 text-sm mb-4">Dr. Priya Sinha • Cardiology • 20 Jan 2024</p>
                    <div className="flex space-x-2 mb-4">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400 cursor-pointer" />
                      ))}
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Submit Rating
                    </Button>
                  </div>

                  <div>
                    <Label htmlFor="feedback">General Feedback</Label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg mt-1" 
                      rows={4}
                      placeholder="Share your experience with SwasthyaCare Hospital..."
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Submit Feedback
                    </Button>
                    <Button variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientPortal;