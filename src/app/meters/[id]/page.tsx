'use client';

import React from 'react';
import Header from '@/components/ui/header';
import GlobalFooter from '@/components/ui/GlobalFooter';
import SearchBar from '@/components/ui/SearchBar';
import MeterInfoAndUsageData from '@/components/meters/MeterInfoAndUsageData';
import MeterDataContainer from '@/components/meters/MeterDataContainer';

// Transaction interface

// Mock meter data - in a real app, this would come from an API
const mockMeter = {
  name: 'Water Meter #12345',
  meterNumber: 'WM-12345',
  status: 'Active',
  address: '12920 Third Street Scranton, PA 30390',
  installedDate: '3/15/2015',
};

const mockMeterData = {
  currentReading: 15420,
  lastReading: 15280,
  usage: 140,
  nextReading: 15560,
  lastReadingDate: {
    date: '12/15/2024',
    amount: 140,
  },
  services: [
    { name: 'Water Usage', current: 140, pastDue: 0 },
    { name: 'Service Fee', current: 25.00, pastDue: 0 },
    { name: 'Maintenance', current: 15.00, pastDue: 0 },
  ],
};


export default function MeterProfilePage() {
  const handleReadingClick = (reading: { id: string; date: string; reading: number; usage: number; type: string; technician: string; notes: string; }) => {
    console.log('Reading clicked:', reading);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Header */}
      <Header />
      
      {/* Search Bar */}
      <SearchBar 
        showBackButton={true}
        backUrl="/meters"
        searchPlaceholder="Search meters by serial number, name, service address, mailing address..."
        editButtonText="Edit"
        newButtonText="New Meter"
      />
      
      {/* Main Content */}
      <div className="pb-[50px]" data-name="Dashboard Reset - Meters" data-node-id="13:559">
        <div className="box-border content-stretch flex flex-col items-start p-[10px] relative">
          {/* Meter Info and Usage Data */}
          <MeterInfoAndUsageData meter={mockMeter} meterData={mockMeterData} />

          {/* Details and Tabbed Content */}
          <div className="flex gap-4 w-full h-[600px] overflow-hidden" data-name="Details and Tabbed Content" data-node-id="13:601">
            {/* Meter Data Container */}
            <div className="flex-1 min-w-0 h-full overflow-hidden" data-name="Meter Data Container" data-node-id="13:605">
              <MeterDataContainer onReadingClick={handleReadingClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-[100]">
        <GlobalFooter />
      </div>
    </div>
  );
}
