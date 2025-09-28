'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/ui/header';
import GlobalFooter from '@/components/ui/GlobalFooter';
import DataTable from '@/components/ui/DataTable';


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
                  Meters
                </p>
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] tracking-[0.16px] w-[326px]">
                      Manage meter readings and information
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
                New Meter
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
          Filter Meters
        </p>
        <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[15px] text-nowrap whitespace-pre">
          <p className="relative shrink-0 text-black">
            15
          </p>
          <p className="relative shrink-0 text-[rgba(0,0,0,0.5)]">
            Meters Found
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Meter Number
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="[white-space-collapse:collapse] basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] text-nowrap tracking-[0.2px]">
                    Filter by meter number
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Customer Name
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by customer...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Property Address
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by property...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Meter Type
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by type
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Status
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by status
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Meter Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Last Reading
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by reading
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Meters() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Mock meter data with address tooltips
  const meters = [
    { id: '1', meterNumber: 'M001', customerName: 'John Smith', serviceAddress: '123 Main St...', serviceAddressFull: '123 Main St, Anytown, ST 12345', meterType: 'Water', lastReading: '1,250', installationDate: '01/15/2020', status: 'Active' },
    { id: '2', meterNumber: 'M002', customerName: 'Jane Doe', serviceAddress: '456 Oak Ave...', serviceAddressFull: '456 Oak Ave, Anytown, ST 12345', meterType: 'Water', lastReading: '2,180', installationDate: '03/22/2020', status: 'Active' },
    { id: '3', meterNumber: 'M003', customerName: 'Bob Johnson', serviceAddress: '789 Pine Rd...', serviceAddressFull: '789 Pine Rd, Anytown, ST 12345', meterType: 'Electric', lastReading: '5,420', installationDate: '02/10/2019', status: 'Inactive' },
    { id: '4', meterNumber: 'M004', customerName: 'Alice Brown', serviceAddress: '321 Elm St...', serviceAddressFull: '321 Elm St, Anytown, ST 12345', meterType: 'Water', lastReading: '3,750', installationDate: '05/18/2021', status: 'Active' },
    { id: '5', meterNumber: 'M005', customerName: 'Charlie Wilson', serviceAddress: '654 Maple Dr...', serviceAddressFull: '654 Maple Dr, Anytown, ST 12345', meterType: 'Gas', lastReading: '890', installationDate: '08/30/2020', status: 'Active' },
    { id: '6', meterNumber: 'M006', customerName: 'Diana Davis', serviceAddress: '987 Cedar Ln...', serviceAddressFull: '987 Cedar Ln, Anytown, ST 12345', meterType: 'Water', lastReading: '1,980', installationDate: '11/12/2021', status: 'Active' },
    { id: '7', meterNumber: 'M007', customerName: 'Amy Brown', serviceAddress: '1292 West Berry...', serviceAddressFull: '1292 West Berry Street, Scranton, PA 38299', meterType: 'Electric', lastReading: '4,320', installationDate: '07/05/2020', status: 'Active' },
    { id: '8', meterNumber: 'M008', customerName: 'Frank Miller', serviceAddress: '555 Birch Blvd...', serviceAddressFull: '555 Birch Blvd, Anytown, ST 12345', meterType: 'Water', lastReading: '2,650', installationDate: '04/14/2019', status: 'Inactive' },
    { id: '9', meterNumber: 'M009', customerName: 'Grace Taylor', serviceAddress: '777 Spruce St...', serviceAddressFull: '777 Spruce St, Anytown, ST 12345', meterType: 'Gas', lastReading: '1,120', installationDate: '09/28/2021', status: 'Active' },
    { id: '10', meterNumber: 'M010', customerName: 'Henry Anderson', serviceAddress: '888 Willow Way...', serviceAddressFull: '888 Willow Way, Anytown, ST 12345', meterType: 'Water', lastReading: '3,420', installationDate: '12/03/2020', status: 'Active' },
  ];

  // Table columns configuration
  const columns = [
    { key: 'meterNumber', label: 'Meter Number', width: '128px', sortable: true },
    { key: 'customerName', label: 'Customer Name', width: '212px', sortable: true },
    { key: 'serviceAddress', label: 'Service Address', width: '212px', sortable: true },
    { key: 'meterType', label: 'Meter Type', width: '212px', sortable: true },
    { key: 'lastReading', label: 'Last Reading', width: '212px', sortable: true },
    { key: 'installationDate', label: 'Installation Date', width: '212px', sortable: true },
    { key: 'actions', label: 'Actions', width: '128px', sortable: false },
  ];

  // Calculate pagination
  const totalItems = meters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = meters.slice(startIndex, endIndex);

  const handleRowClick = (row: Record<string, unknown>) => {
    router.push(`/meters/${row.id}`);
  };

  const handleViewClick = (row: Record<string, unknown>) => {
    router.push(`/meters/${row.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <PageHeader />
      <FilterSection />
      <div className="pb-[50px] px-[16px]">
        <DataTable
          columns={columns}
          data={currentData}
          onRowClick={handleRowClick}
          onViewClick={handleViewClick}
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[100]">
        <GlobalFooter />
      </div>
    </div>
  );
}