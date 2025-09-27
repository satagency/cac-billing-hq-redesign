'use client';

import React from 'react';
import Header from '@/components/ui/header';
import GlobalFooter from '@/components/ui/GlobalFooter';
import SearchBar from '@/components/ui/SearchBar';

// Page Header Component from Figma
const PageHeader = () => {
  return (
    <div className="relative size-full">
      <div className="box-border content-stretch flex items-start justify-between max-h-inherit px-[16px] py-[32px] relative size-full">
        <div className="content-stretch flex flex-col gap-[8px] h-[41px] items-start relative shrink-0 w-[767px]">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[40px] items-start justify-center px-0 py-[10px] relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[24px] leading-[18px] not-italic relative shrink-0 text-[24px] text-black w-[153px]">
                  Customers
                </p>
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] tracking-[0.16px] w-[326px]">
                      Manage customer accounts and information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <div className="bg-[#43a047] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-nowrap text-white tracking-[0.46px] whitespace-pre">
                New Customer
              </p>
              <div className="h-[18px] relative shrink-0 w-[16px]">
                <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black text-sm font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
};

// Filter Section Component from Figma
const FilterSection = () => {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[16px] px-[16px] relative size-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]">
          Filter Customers
        </p>
        <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[15px] text-nowrap whitespace-pre">
          <p className="relative shrink-0 text-black">
            24
          </p>
          <p className="relative shrink-0 text-[rgba(0,0,0,0.5)]">
            Customers Found
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Account Number
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="[white-space-collapse:collapse] basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] text-nowrap tracking-[0.2px]">
                    Filter by account
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Customer Name
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by name...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Mailing Address
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by mailing...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Service Address
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="[white-space-collapse:collapse] basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] text-nowrap tracking-[0.2px]">
                    Filter by Service Address
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Meter Number
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter Meter Number
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Parcel Number
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter Parcel Number
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Customers() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <PageHeader />
      <FilterSection />
      <SearchBar 
        showBackButton={false}
        searchPlaceholder="Search customers by number, name, service address, mailing address..."
        editButtonText="Edit"
        newButtonText="New Customer"
      />
          <div className="pb-[50px] px-[16px]">
            <div className="w-full">
              {/* Table Headers */}
              <div className="flex bg-gray-50 border-b border-gray-200 px-4 py-3">
                <div className="w-32 font-semibold text-sm text-gray-700">Account Number</div>
                <div className="flex-1 font-semibold text-sm text-gray-700">Customer Name</div>
                <div className="flex-1 font-semibold text-sm text-gray-700">Mailing Address</div>
                <div className="flex-1 font-semibold text-sm text-gray-700">Service Address</div>
                <div className="w-24 font-semibold text-sm text-gray-700">Meter Number</div>
                <div className="w-24 font-semibold text-sm text-gray-700">Parcel Number</div>
                <div className="w-20 font-semibold text-sm text-gray-700">Status</div>
              </div>

              {/* Table Rows */}
              <div className="max-h-[400px] overflow-y-auto">
                {[
                  { id: '1', accountNumber: 'AC1001', customerName: 'John Smith', mailingAddress: '123 Main St, Anytown, ST 12345', serviceAddress: '123 Main St, Anytown, ST 12345', meterNumber: 'M001', parcelNumber: 'P001', status: 'Active' },
                  { id: '2', accountNumber: 'AC1002', customerName: 'Jane Doe', mailingAddress: '456 Oak Ave, Anytown, ST 12345', serviceAddress: '456 Oak Ave, Anytown, ST 12345', meterNumber: 'M002', parcelNumber: 'P002', status: 'Active' },
                  { id: '3', accountNumber: 'AC1003', customerName: 'Bob Johnson', mailingAddress: '789 Pine Rd, Anytown, ST 12345', serviceAddress: '789 Pine Rd, Anytown, ST 12345', meterNumber: 'M003', parcelNumber: 'P003', status: 'Inactive' },
                  { id: '4', accountNumber: 'AC1004', customerName: 'Alice Brown', mailingAddress: '321 Elm St, Anytown, ST 12345', serviceAddress: '321 Elm St, Anytown, ST 12345', meterNumber: 'M004', parcelNumber: 'P004', status: 'Active' },
                  { id: '5', accountNumber: 'AC1005', customerName: 'Charlie Wilson', mailingAddress: '654 Maple Dr, Anytown, ST 12345', serviceAddress: '654 Maple Dr, Anytown, ST 12345', meterNumber: 'M005', parcelNumber: 'P005', status: 'Active' },
                  { id: '6', accountNumber: 'AC1006', customerName: 'Diana Davis', mailingAddress: '987 Cedar Ln, Anytown, ST 12345', serviceAddress: '987 Cedar Ln, Anytown, ST 12345', meterNumber: 'M006', parcelNumber: 'P006', status: 'Active' },
                  { id: '7', accountNumber: 'AC1007', customerName: 'Amy Brown', mailingAddress: '1292 West Berry Street, Scranton, PA 38299', serviceAddress: '1292 West Berry Street, Scranton, PA 38299', meterNumber: 'M007', parcelNumber: 'P007', status: 'Active' },
                  { id: '8', accountNumber: 'AC1008', customerName: 'Frank Miller', mailingAddress: '555 Birch Blvd, Anytown, ST 12345', serviceAddress: '555 Birch Blvd, Anytown, ST 12345', meterNumber: 'M008', parcelNumber: 'P008', status: 'Inactive' },
                  { id: '9', accountNumber: 'AC1009', customerName: 'Grace Taylor', mailingAddress: '777 Spruce St, Anytown, ST 12345', serviceAddress: '777 Spruce St, Anytown, ST 12345', meterNumber: 'M009', parcelNumber: 'P009', status: 'Active' },
                  { id: '10', accountNumber: 'AC1010', customerName: 'Henry Anderson', mailingAddress: '888 Willow Way, Anytown, ST 12345', serviceAddress: '888 Willow Way, Anytown, ST 12345', meterNumber: 'M010', parcelNumber: 'P010', status: 'Active' },
                ].map((customer) => (
                  <div
                    key={customer.id}
                    onClick={() => window.location.href = `/customers/${customer.id}`}
                    className="flex border-b border-gray-100 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="w-32 text-sm text-gray-900">{customer.accountNumber}</div>
                    <div className="flex-1 text-sm text-gray-900">{customer.customerName}</div>
                    <div className="flex-1 text-sm text-gray-600">{customer.mailingAddress}</div>
                    <div className="flex-1 text-sm text-gray-600">{customer.serviceAddress}</div>
                    <div className="w-24 text-sm text-gray-900">{customer.meterNumber}</div>
                    <div className="w-24 text-sm text-gray-900">{customer.parcelNumber}</div>
                    <div className="w-20">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        customer.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {customer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <GlobalFooter />
      </div>
    </div>
  );
}