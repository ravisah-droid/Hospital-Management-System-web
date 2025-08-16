import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, X, Ambulance, Shield } from 'lucide-react';

const EmergencyButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const emergencyNumbers = [
    { 
      number: '108', 
      label: 'Emergency', 
      icon: Shield, 
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Medical Emergency'
    },
    { 
      number: '102', 
      label: 'Ambulance', 
      icon: Ambulance, 
      color: 'bg-orange-600 hover:bg-orange-700',
      description: 'Ambulance Service'
    },
    { 
      number: '+91-9504077534', 
      label: 'Hospital', 
      icon: Phone, 
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'SwasthyaCare Direct'
    }
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
    setShowOptions(false);
  };

  return (
    <>
      {/* Emergency Options Overlay */}
      {showOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOptions(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                {emergencyNumbers.map((emergency, index) => {
                  const IconComponent = emergency.icon;
                  return (
                    <Button
                      key={index}
                      onClick={() => handleCall(emergency.number)}
                      className={`w-full justify-start ${emergency.color} text-white`}
                      size="lg"
                    >
                      <IconComponent className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-semibold">{emergency.label}: {emergency.number}</div>
                        <div className="text-sm opacity-90">{emergency.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Emergency Button */}
      <Button
        onClick={() => setShowOptions(true)}
        className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="lg"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </>
  );
};

export default EmergencyButton;