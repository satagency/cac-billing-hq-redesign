'use client';

import { useState } from 'react';

const img = "http://localhost:3845/assets/4dc56d693a0956668a100403eda2344bf6a1429f.svg";
const img1 = "http://localhost:3845/assets/48b583bb96398134891f4917e20796b6bbb64f49.svg";

interface PropertyTransaction {
  id: string;
  date: string;
  reference: string;
  description: string;
  type: string;
  amount: number;
  balance: number;
}

// Mock property transaction data
const mockPropertyTransactions: PropertyTransaction[] = [
  { id: '1', date: '12/15/2024', reference: 'TAX-001', description: 'Property Tax Payment', type: 'Payment', amount: 350.00, balance: 0 },
  { id: '2', date: '11/15/2024', reference: 'UTIL-002', description: 'Utility Payment', type: 'Payment', amount: 75.50, balance: 0 },
  { id: '3', date: '10/15/2024', reference: 'TAX-003', description: 'Property Tax Payment', type: 'Payment', amount: 350.00, balance: 0 },
  { id: '4', date: '09/15/2024', reference: 'UTIL-004', description: 'Utility Payment', type: 'Payment', amount: 75.50, balance: 0 },
  { id: '5', date: '08/15/2024', reference: 'TAX-005', description: 'Property Tax Payment', type: 'Payment', amount: 350.00, balance: 0 },
  { id: '6', date: '07/15/2024', reference: 'UTIL-006', description: 'Utility Payment', type: 'Payment', amount: 75.50, balance: 0 },
  { id: '7', date: '06/15/2024', reference: 'TAX-007', description: 'Property Tax Payment', type: 'Payment', amount: 350.00, balance: 0 },
  { id: '8', date: '05/15/2024', reference: 'UTIL-008', description: 'Utility Payment', type: 'Payment', amount: 75.50, balance: 0 },
  { id: '9', date: '04/15/2024', reference: 'TAX-009', description: 'Property Tax Payment', type: 'Payment', amount: 350.00, balance: 0 },
  { id: '10', date: '03/15/2024', reference: 'UTIL-010', description: 'Utility Payment', type: 'Payment', amount: 75.50, balance: 0 },
];

interface PropertyDataContainerProps {
  onTransactionClick?: (transaction: PropertyTransaction) => void;
}

type TabType = 'transactions' | 'taxes' | 'utilities' | 'assessments' | 'permits' | 'reports';

export default function PropertyDataContainer({ onTransactionClick }: PropertyDataContainerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('transactions');

  const handleTransactionClick = (transaction: PropertyTransaction) => {
    if (onTransactionClick) {
      onTransactionClick(transaction);
    }
  };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  // Placeholder content components
  const PlaceholderContent = ({ title, description }: { title: string; description: string }) => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-400 rounded"></div>
      </div>
      <h3 className="text-lg font-semibold text-gray-600 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 max-w-md">{description}</p>
      <div className="mt-6 w-full max-w-sm">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'transactions':
        return (
          <div className="flex flex-col flex-1 overflow-hidden" data-name="Property Transactions List Container" data-node-id="64:40811">
            {/* Column Headers */}
            <div className="flex w-full h-[48px] flex-shrink-0" data-name="Column Header" data-node-id="57:38566">
              {/* Date Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38567">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 flex-shrink-0" data-name="calendar">
                    <div className="w-4 h-4 relative">
                      <img alt="" className="w-full h-full" src={img} />
                      <img alt="" className="absolute inset-[4.17%_8.33%] w-full h-full" src={img1} />
                    </div>
                  </div>
                  <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                    Date
                  </p>
                </div>
              </div>

              {/* Reference Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38568">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Reference
                </p>
              </div>

              {/* Description Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38569">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Description
                </p>
              </div>

              {/* Type Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38570">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Type
                </p>
              </div>

              {/* Amount Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38572">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Amount
                </p>
              </div>

              {/* Balance Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38571">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Balance
                </p>
              </div>
            </div>

            {/* Property Transaction Rows */}
            <div className="flex-1 overflow-y-auto min-h-0 max-h-[400px]" data-name="Property Transaction Row Container" data-node-id="57:39685">
              {mockPropertyTransactions.map((transaction, i) => (
                <div 
                  key={transaction.id} 
                  className="flex w-full hover:bg-gray-50 cursor-pointer border-b border-gray-100 h-[42px]" 
                  data-name="Row" 
                  data-node-id={`57:${38394 + i}`}
                  onClick={() => handleTransactionClick(transaction)}
                >
                  {/* Date */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38395 + i}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 flex-shrink-0 opacity-0" data-name="calendar-spacer">
                        {/* Invisible spacer to align with header icon */}
                      </div>
                      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                        {transaction.date}
                      </p>
                    </div>
                  </div>

                  {/* Reference */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38396 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {transaction.reference}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38397 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {transaction.description}
                    </p>
                  </div>

                  {/* Type */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38398 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {transaction.type}
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38399 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      ${transaction.amount.toFixed(2)}
                    </p>
                  </div>

                  {/* Balance */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38400 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      ${transaction.balance.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'taxes':
        return <PlaceholderContent title="Taxes" description="View and manage property tax information. Track tax assessments, payments, and exemptions." />;
      case 'utilities':
        return <PlaceholderContent title="Utilities" description="Manage utility services and payments. View utility accounts, usage, and billing information." />;
      case 'assessments':
        return <PlaceholderContent title="Assessments" description="View property assessments and valuation history. Track assessment changes and appeals." />;
      case 'permits':
        return <PlaceholderContent title="Permits" description="Manage building permits and inspections. Track permit applications and approval status." />;
      case 'reports':
        return <PlaceholderContent title="Reports" description="Generate property reports including tax reports, utility reports, and assessment summaries." />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative h-full overflow-hidden" data-name="Property Data Container" data-node-id="13:605">
      <div className="flex flex-col h-full min-h-0">
          {/* Tab Container */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full border-b border-[#C1C1C1] mt-5" data-name="Tab Container" data-node-id="13:610">
          <div className="basis-0 content-stretch flex gap-[6px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Tab Container" data-node-id="13:611">
            {/* Transactions Tab */}
            <div 
              className={`h-full relative shrink-0 w-[139.17px] cursor-pointer transition-colors duration-200 ${activeTab === 'transactions' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tab" 
              data-node-id="13:612"
              onClick={() => handleTabClick('transactions')}
            >
              <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip p-[10px] relative w-[139.17px]">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'transactions' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:613">
                  Transactions
                </p>
              </div>
              {activeTab === 'transactions' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Taxes Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'taxes' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42092"
              onClick={() => handleTabClick('taxes')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'taxes' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Taxes
                </p>
              </div>
              {activeTab === 'taxes' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Utilities Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'utilities' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42089"
              onClick={() => handleTabClick('utilities')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'utilities' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Utilities
                </p>
              </div>
              {activeTab === 'utilities' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Assessments Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'assessments' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42095"
              onClick={() => handleTabClick('assessments')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'assessments' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Assessments
                </p>
              </div>
              {activeTab === 'assessments' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Permits Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'permits' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42098"
              onClick={() => handleTabClick('permits')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'permits' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Permits
                </p>
              </div>
              {activeTab === 'permits' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Reports Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'reports' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42101"
              onClick={() => handleTabClick('reports')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'reports' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Reports
                </p>
              </div>
              {activeTab === 'reports' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>
          </div>
        </div>

            {/* Dynamic Tab Content */}
            {renderTabContent()}
      </div>
      </div>

    </>
  );
}
