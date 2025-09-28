'use client';

import React from 'react';
import Header from '@/components/ui/header';
import GlobalFooter from '@/components/ui/GlobalFooter';
import SearchBar from '@/components/ui/SearchBar';
import PropertyInfoAndPaymentData from '@/components/property/PropertyInfoAndPaymentData';
import PropertyDataContainer from '@/components/property/PropertyDataContainer';
import PropertyFirstColumn from '@/components/property/PropertyFirstColumn';

// Transaction interface

// Mock property data - in a real app, this would come from an API
const mockProperty = {
  name: 'Property #789012',
  propertyNumber: 'PR-3029031',
  serialNumber: 'SN0903904-93',
  model: 'Residential Property',
  type: 'Residential',
  status: 'Active',
  address: '12920 Third Street Scranton, PA 30390',
  createdDate: '1/15/2010',
  installedDate: '1/15/2010',
  currentReading: 250000,
  previousReading: 248000,
  propertyType: 'House',
  size: '2,500 sq ft',
  coordinates: { lat: 40.054300, lng: -75.062100 },
  consumption: {
    current: 1450.83,
    allTime: 79715.91,
    temperature: 1995
  },
  customer: {
    name: 'John Smith',
    accountNumber: 'CUST001',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567'
  }
};

const mockPropertyData = {
  currentReading: 250000,
  lastReading: 248000,
  usage: 2000,
  nextReading: 252000,
  lastReadingDate: {
    date: '11/15',
    amount: 425.50,
  },
  services: [
    { name: 'Property Tax', current: 350.00, pastDue: 0 },
    { name: 'Utilities', current: 75.50, pastDue: 0 },
    { name: 'Maintenance', current: 0, pastDue: 0 },
  ],
};


export default function PropertyProfilePage() {
  const handleTransactionClick = (transaction: { id: string; date: string; reference: string; description: string; type: string; amount: number; balance: number; }) => {
    console.log('Transaction clicked:', transaction);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Header */}
      <Header />
      
      {/* Search Bar */}
      <SearchBar 
        showBackButton={true}
        backUrl="/property"
        searchPlaceholder="Search properties by parcel number, address, owner name..."
        editButtonText="Edit"
        newButtonText="New Property"
      />
      
      {/* Main Content */}
      <div className="pb-[50px]" data-name="Dashboard Reset - Properties" data-node-id="13:559">
        <div className="box-border content-stretch flex flex-col items-start p-[10px] relative">
          {/* Property Info and Payment Data */}
          <PropertyInfoAndPaymentData property={mockProperty} propertyData={mockPropertyData} />

          {/* Details and Tabbed Content */}
          <div className="flex gap-4 w-full h-[600px] overflow-hidden" data-name="Details and Tabbed Content" data-node-id="13:601">
            {/* First Column - Property Details */}
            <PropertyFirstColumn />
            
            {/* Property Data Container */}
            <div className="flex-1 min-w-0 h-full overflow-hidden" data-name="Property Data Container" data-node-id="13:605">
              <PropertyDataContainer onTransactionClick={handleTransactionClick} />
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
