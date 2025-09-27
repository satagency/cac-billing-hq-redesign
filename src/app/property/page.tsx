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
                  Properties
                </p>
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] tracking-[0.16px] w-[326px]">
                      Manage property information and details
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
                New Property
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
          Filter Properties
        </p>
        <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[15px] text-nowrap whitespace-pre">
          <p className="relative shrink-0 text-black">
            18
          </p>
          <p className="relative shrink-0 text-[rgba(0,0,0,0.5)]">
            Properties Found
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Parcel Number
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="[white-space-collapse:collapse] basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] text-nowrap tracking-[0.2px]">
                    Filter by parcel
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Property Address
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by address...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Owner Name
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by owner...
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Property Type
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
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
              Zoning
            </p>
            <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0" data-name="Input Cell">
              <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Container Left">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text">
                  <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-[rgba(24,29,31,0.5)] tracking-[0.2px]">
                    Filter by zoning
                  </p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" />
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Property Input">
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
      </div>
    </div>
  );
};

export default function Property() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Mock property data with address tooltips
  const properties = [
    { id: '1', parcelNumber: 'P001', propertyAddress: '123 Main St...', propertyAddressFull: '123 Main St, Anytown, ST 12345', ownerName: 'John Smith', propertyType: 'Residential', taxValue: '$250,000', lastAssessment: '01/15/2024', status: 'Active' },
    { id: '2', parcelNumber: 'P002', propertyAddress: '456 Oak Ave...', propertyAddressFull: '456 Oak Ave, Anytown, ST 12345', ownerName: 'Jane Doe', propertyType: 'Commercial', taxValue: '$450,000', lastAssessment: '03/22/2024', status: 'Active' },
    { id: '3', parcelNumber: 'P003', propertyAddress: '789 Pine Rd...', propertyAddressFull: '789 Pine Rd, Anytown, ST 12345', ownerName: 'Bob Johnson', propertyType: 'Residential', taxValue: '$180,000', lastAssessment: '02/10/2024', status: 'Inactive' },
    { id: '4', parcelNumber: 'P004', propertyAddress: '321 Elm St...', propertyAddressFull: '321 Elm St, Anytown, ST 12345', ownerName: 'Alice Brown', propertyType: 'Residential', taxValue: '$320,000', lastAssessment: '05/18/2024', status: 'Active' },
    { id: '5', parcelNumber: 'P005', propertyAddress: '654 Maple Dr...', propertyAddressFull: '654 Maple Dr, Anytown, ST 12345', ownerName: 'Charlie Wilson', propertyType: 'Industrial', taxValue: '$750,000', lastAssessment: '08/30/2024', status: 'Active' },
    { id: '6', parcelNumber: 'P006', propertyAddress: '987 Cedar Ln...', propertyAddressFull: '987 Cedar Ln, Anytown, ST 12345', ownerName: 'Diana Davis', propertyType: 'Residential', taxValue: '$280,000', lastAssessment: '11/12/2024', status: 'Active' },
    { id: '7', parcelNumber: 'P007', propertyAddress: '1292 West Berry...', propertyAddressFull: '1292 West Berry Street, Scranton, PA 38299', ownerName: 'Amy Brown', propertyType: 'Residential', taxValue: '$195,000', lastAssessment: '07/05/2024', status: 'Active' },
    { id: '8', parcelNumber: 'P008', propertyAddress: '555 Birch Blvd...', propertyAddressFull: '555 Birch Blvd, Anytown, ST 12345', ownerName: 'Frank Miller', propertyType: 'Commercial', taxValue: '$520,000', lastAssessment: '04/14/2024', status: 'Inactive' },
    { id: '9', parcelNumber: 'P009', propertyAddress: '777 Spruce St...', propertyAddressFull: '777 Spruce St, Anytown, ST 12345', ownerName: 'Grace Taylor', propertyType: 'Residential', taxValue: '$310,000', lastAssessment: '09/28/2024', status: 'Active' },
    { id: '10', parcelNumber: 'P010', propertyAddress: '888 Willow Way...', propertyAddressFull: '888 Willow Way, Anytown, ST 12345', ownerName: 'Henry Anderson', propertyType: 'Residential', taxValue: '$275,000', lastAssessment: '12/03/2024', status: 'Active' },
  ];

  // Table columns configuration
  const columns = [
    { key: 'parcelNumber', label: 'Parcel Number', width: '128px', sortable: true },
    { key: 'propertyAddress', label: 'Property Address', width: '212px', sortable: true },
    { key: 'ownerName', label: 'Owner Name', width: '212px', sortable: true },
    { key: 'propertyType', label: 'Property Type', width: '212px', sortable: true },
    { key: 'taxValue', label: 'Tax Value', width: '212px', sortable: true },
    { key: 'lastAssessment', label: 'Last Assessment', width: '212px', sortable: true },
    { key: 'actions', label: 'Actions', width: '128px', sortable: false },
  ];

  // Calculate pagination
  const totalItems = properties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = properties.slice(startIndex, endIndex);

  const handleRowClick = (property: any) => {
    router.push(`/property/${property.id}`);
  };

  const handleViewClick = (property: any) => {
    router.push(`/property/${property.id}`);
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