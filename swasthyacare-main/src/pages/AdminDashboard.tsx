import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  UserPlus, 
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Phone,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // Mock data
  const stats = {
    totalPatients: 2847,
    todayAppointments: 34,
    totalDoctors: 125,
    revenue: 485200
  };

  const recentAppointments = [
    {
      id: 1,
      patient: 'Priya Sharma',
      doctor: 'Dr. Rajesh Kumar',
      department: 'General Medicine',
      time: '10:00 AM',
      status: 'Confirmed',
      phone: '+91-9876543210'
    },
    {
      id: 2,
      patient: 'Raj Kumar Singh',
      doctor: 'Dr. Priya Sinha',
      department: 'Cardiology',
      time: '11:30 AM',
      status: 'In Progress',
      phone: '+91-9876543211'
    },
    {
      id: 3,
      patient: 'Sunita Devi',
      doctor: 'Dr. Amit Gupta',
      department: 'Orthopaedics',
      time: '2:00 PM',
      status: 'Waiting',
      phone: '+91-9876543212'
    }
  ];

  const patients = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 32,
      phone: '+91-9876543210',
      email: 'priya@email.com',
      lastVisit: '2024-01-20',
      condition: 'Diabetes',
      doctor: 'Dr. Rajesh Kumar'
    },
    {
      id: 2,
      name: 'Raj Kumar Singh',
      age: 45,
      phone: '+91-9876543211',
      email: 'raj@email.com',
      lastVisit: '2024-01-22',
      condition: 'Hypertension',
      doctor: 'Dr. Priya Sinha'
    },
    {
      id: 3,
      name: 'Sunita Devi',
      age: 38,
      phone: '+91-9876543212',
      email: 'sunita@email.com',
      lastVisit: '2024-01-25',
      condition: 'Joint Pain',
      doctor: 'Dr. Amit Gupta'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar Sharma',
      department: 'General Medicine',
      phone: '+91-9876543220',
      email: 'rajesh@swasthyacare.in',
      experience: '25 years',
      patients: 45,
      status: 'Available'
    },
    {
      id: 2,
      name: 'Dr. Priya Sinha',
      department: 'Cardiology',
      phone: '+91-9876543221',
      email: 'priya@swasthyacare.in',
      experience: '18 years',
      patients: 32,
      status: 'Busy'
    },
    {
      id: 3,
      name: 'Dr. Amit Gupta',
      department: 'Orthopaedics',
      phone: '+91-9876543222',
      email: 'amit@swasthyacare.in',
      experience: '20 years',
      patients: 28,
      status: 'Available'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login validation
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use: admin / admin123');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
              <p className="text-gray-600 mt-2">Access hospital management dashboard</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    placeholder="Enter username"
                    value={loginData.username}
                    onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Login to Dashboard
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Demo credentials: admin / admin123
              </p>
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">SwasthyaCare Hospital Management System</p>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button variant="outline">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Patient
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalPatients.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mt-2 text-sm text-green-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Appointments</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.todayAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <div className="mt-2 text-sm text-blue-600">
                15 completed, 19 pending
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Doctors</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalDoctors}</p>
                </div>
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mt-2 text-sm text-green-600">
                89 available, 36 busy
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">₹{(stats.revenue / 1000).toFixed(0)}K</p>
                </div>
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <div className="mt-2 text-sm text-green-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +8% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Today's Appointments</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input className="pl-10" placeholder="Search appointments..." />
                    </div>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Doctor</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Department</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentAppointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{appointment.patient}</div>
                              <div className="text-sm text-gray-500">{appointment.phone}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-700">{appointment.doctor}</td>
                          <td className="py-3 px-4 text-gray-700">{appointment.department}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center text-gray-700">
                              <Clock className="h-4 w-4 mr-1" />
                              {appointment.time}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                              appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Patient Management</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input className="pl-10" placeholder="Search patients..." />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Patient
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient Info</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Contact</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Visit</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Condition</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Assigned Doctor</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{patient.name}</div>
                              <div className="text-sm text-gray-500">{patient.age} years</div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="h-3 w-3 mr-1" />
                                {patient.phone}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Mail className="h-3 w-3 mr-1" />
                                {patient.email}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-700">{patient.lastVisit}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                              {patient.condition}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-700">{patient.doctor}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctors">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Doctor Management</h2>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="general">General Medicine</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Doctor
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">👨‍⚕️</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            doctor.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {doctor.status}
                          </span>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                        <p className="text-blue-600 text-sm mb-3">{doctor.department}</p>
                        
                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {doctor.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {doctor.email}
                          </div>
                          <div className="flex items-center">
                            <Activity className="h-4 w-4 mr-2" />
                            {doctor.experience} • {doctor.patients} patients
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Flow Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Morning (8AM - 12PM)</span>
                      <span className="font-semibold">18 patients</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Afternoon (12PM - 6PM)</span>
                      <span className="font-semibold">25 patients</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Evening (6PM - 10PM)</span>
                      <span className="font-semibold">12 patients</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'General Medicine', patients: 156, color: 'bg-blue-600' },
                      { name: 'Cardiology', patients: 89, color: 'bg-red-600' },
                      { name: 'Orthopaedics', patients: 72, color: 'bg-green-600' },
                      { name: 'Paediatrics', patients: 64, color: 'bg-purple-600' }
                    ].map((dept) => (
                      <div key={dept.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700">{dept.name}</span>
                          <span className="font-semibold">{dept.patients}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${dept.color} h-2 rounded-full`} 
                            style={{ width: `${(dept.patients / 156) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;