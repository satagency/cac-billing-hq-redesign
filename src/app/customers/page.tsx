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
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Mock customer data - with customers having multiple service addresses
  const customers = [
    { 
      id: '1', 
      accountNumber: 'AC1007', 
      customerName: 'Amy Brown', 
      serviceAddress: '9808 Main Street...', 
      serviceAddressFull: '9808 Main Street, Scranton, PA 18503',
      mailingAddress: '9808 Main Street...', 
      mailingAddressFull: '9808 Main Street, Scranton, PA 18503',
      contact: '(123) 123-1234', 
      properties: '2 Properties, 3 Meters' 
    },
    { 
      id: '2', 
      accountNumber: 'AC1008', 
      customerName: 'John Smith', 
      serviceAddress: '123 Oak Avenue...', 
      serviceAddressFull: '123 Oak Avenue, Scranton, PA 18504\n456 Pine Street, Scranton, PA 18505',
      mailingAddress: '456 Pine Street...', 
      mailingAddressFull: '456 Pine Street, Scranton, PA 18505',
      contact: '(234) 567-8901', 
      properties: '2 Properties, 5 Meters' 
    },
    { 
      id: '3', 
      accountNumber: 'AC1009', 
      customerName: 'Sara Johnson', 
      serviceAddress: '456 Maple Lane...', 
      serviceAddressFull: '456 Maple Lane, Scranton, PA 18506\n789 Oak Street, Scranton, PA 18507',
      mailingAddress: '456 Maple Lane...', 
      mailingAddressFull: '456 Maple Lane, Scranton, PA 18506',
      contact: '(345) 678-9012', 
      properties: '2 Properties, 2 Meters' 
    },
    { 
      id: '4', 
      accountNumber: 'AC1010', 
      customerName: 'Michael Lee', 
      serviceAddress: '789 Pine Street...', 
      serviceAddressFull: '789 Pine Street, Scranton, PA 18507\n321 Elm Avenue, Scranton, PA 18508',
      mailingAddress: '321 Elm Avenue...', 
      mailingAddressFull: '321 Elm Avenue, Scranton, PA 18508',
      contact: '(456) 789-0123', 
      properties: '2 Properties, 3 Meters' 
    },
    { 
      id: '5', 
      accountNumber: 'AC1011', 
      customerName: 'Emily Davis', 
      serviceAddress: '321 Elm Avenue...', 
      serviceAddressFull: '321 Elm Avenue, Scranton, PA 18509',
      mailingAddress: '321 Elm Avenue...', 
      mailingAddressFull: '321 Elm Avenue, Scranton, PA 18509',
      contact: '(567) 890-1234', 
      properties: '2 Properties, 4 Meters' 
    },
    { 
      id: '6', 
      accountNumber: 'AC1012', 
      customerName: 'Chris Wilson', 
      serviceAddress: '654 Oak Drive...', 
      serviceAddressFull: '654 Oak Drive, Scranton, PA 18510\n987 Cedar Road, Scranton, PA 18511\n147 Birch Lane, Scranton, PA 18512',
      mailingAddress: '987 Cedar Road...', 
      mailingAddressFull: '987 Cedar Road, Scranton, PA 18511',
      contact: '(678) 901-2345', 
      properties: '3 Properties, 1 Meter' 
    },
    { 
      id: '7', 
      accountNumber: 'AC1013', 
      customerName: 'Laura Garcia', 
      serviceAddress: '987 Cedar Road...', 
      serviceAddressFull: '987 Cedar Road, Scranton, PA 18512',
      mailingAddress: '987 Cedar Road...', 
      mailingAddressFull: '987 Cedar Road, Scranton, PA 18512',
      contact: '(789) 012-3456', 
      properties: '1 Property, 2 Meters' 
    },
    { 
      id: '8', 
      accountNumber: 'AC1014', 
      customerName: 'David Martinez', 
      serviceAddress: '147 Birch Lane...', 
      serviceAddressFull: '147 Birch Lane, Scranton, PA 18513\n258 Willow Way, Scranton, PA 18514',
      mailingAddress: '258 Willow Way...', 
      mailingAddressFull: '258 Willow Way, Scranton, PA 18514',
      contact: '(890) 123-4567', 
      properties: '2 Properties, 3 Meters' 
    },
    { 
      id: '9', 
      accountNumber: 'AC1015', 
      customerName: 'Sophia Taylor', 
      serviceAddress: '258 Willow Way...', 
      serviceAddressFull: '258 Willow Way, Scranton, PA 18515',
      mailingAddress: '258 Willow Way...', 
      mailingAddressFull: '258 Willow Way, Scranton, PA 18515',
      contact: '(901) 234-5678', 
      properties: '1 Property, 1 Meter' 
    },
  ];

  // Table columns configuration - matching Figma design
  const columns = [
    { key: 'actions', label: 'Actions', width: '100px', sortable: false },
    { key: 'accountNumber', label: 'Account', width: '120px', sortable: true },
    { key: 'customerName', label: 'Customer', width: '150px', sortable: true },
    { key: 'serviceAddress', label: 'Service Address', width: '200px', sortable: true },
    { key: 'mailingAddress', label: 'Mailing Address', width: '200px', sortable: true },
    { key: 'contact', label: 'Contact', width: '120px', sortable: true },
    { key: 'properties', label: 'Properties', width: '150px', sortable: false },
  ];

  // Calculate pagination
  const totalItems = customers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = customers.slice(startIndex, endIndex);

  const handleRowClick = (row: Record<string, unknown>) => {
    router.push(`/customers/${row.id}`);
  };

  const handleViewClick = (row: Record<string, unknown>) => {
    router.push(`/customers/${row.id}`);
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