'use client';

import { useState } from 'react';
import { Calendar } from '@phosphor-icons/react';

interface Transaction {
  id: string;
  date: string;
  reference: string;
  description: string;
  type: string;
  amount: number;
  runningBalance: number;
}

// Mock transaction data based on the Figma design
const mockTransactions: Transaction[] = [
  { id: '1', date: '08/19/2025', reference: '35287', description: 'Payment', type: 'Visa', amount: 450.00, runningBalance: 400.00 },
  { id: '2', date: '08/20/2025', reference: '35288', description: 'Refund', type: 'Discover', amount: 200.00, runningBalance: 600.00 },
  { id: '3', date: '08/21/2025', reference: '35289', description: 'Income', type: 'Transfer', amount: 125.75, runningBalance: 725.75 },
  { id: '4', date: '08/22/2025', reference: '35290', description: 'Payment', type: 'AMEX', amount: 300.00, runningBalance: 425.75 },
  { id: '5', date: '08/23/2025', reference: '35291', description: 'Credit', type: 'Credit', amount: 150.00, runningBalance: 575.75 },
  { id: '6', date: '08/24/2025', reference: '35292', description: 'Payment', type: 'Mastercard', amount: 225.00, runningBalance: 350.75 },
  { id: '7', date: '08/25/2025', reference: '35293', description: 'Refund', type: 'Visa', amount: 100.00, runningBalance: 450.75 },
  { id: '8', date: '08/26/2025', reference: '35294', description: 'Income', type: 'Transfer', amount: 75.50, runningBalance: 526.25 },
  { id: '9', date: '08/27/2025', reference: '35295', description: 'Payment', type: 'Discover', amount: 180.00, runningBalance: 346.25 },
  { id: '10', date: '08/28/2025', reference: '35296', description: 'Credit', type: 'Credit', amount: 90.00, runningBalance: 436.25 },
  { id: '11', date: '08/29/2025', reference: '35297', description: 'Payment', type: 'AMEX', amount: 275.00, runningBalance: 161.25 },
  { id: '12', date: '08/30/2025', reference: '35298', description: 'Income', type: 'Transfer', amount: 200.00, runningBalance: 361.25 },
  { id: '13', date: '09/01/2025', reference: '35299', description: 'Payment', type: 'Visa', amount: 320.00, runningBalance: 681.25 },
  { id: '14', date: '09/02/2025', reference: '35300', description: 'Refund', type: 'Mastercard', amount: 85.50, runningBalance: 766.75 },
  { id: '15', date: '09/03/2025', reference: '35301', description: 'Income', type: 'Transfer', amount: 150.25, runningBalance: 917.00 },
  { id: '16', date: '09/04/2025', reference: '35302', description: 'Payment', type: 'Discover', amount: 195.00, runningBalance: 722.00 },
  { id: '17', date: '09/05/2025', reference: '35303', description: 'Credit', type: 'Credit', amount: 75.75, runningBalance: 797.75 },
  { id: '18', date: '09/06/2025', reference: '35304', description: 'Payment', type: 'AMEX', amount: 280.00, runningBalance: 517.75 },
  { id: '19', date: '09/07/2025', reference: '35305', description: 'Refund', type: 'Visa', amount: 120.00, runningBalance: 637.75 },
  { id: '20', date: '09/08/2025', reference: '35306', description: 'Income', type: 'Transfer', amount: 95.50, runningBalance: 733.25 },
  { id: '21', date: '09/09/2025', reference: '35307', description: 'Payment', type: 'Mastercard', amount: 210.00, runningBalance: 523.25 },
  { id: '22', date: '09/10/2025', reference: '35308', description: 'Credit', type: 'Credit', amount: 65.25, runningBalance: 588.50 },
  { id: '23', date: '09/11/2025', reference: '35309', description: 'Payment', type: 'Discover', amount: 175.00, runningBalance: 413.50 },
  { id: '24', date: '09/12/2025', reference: '35310', description: 'Refund', type: 'AMEX', amount: 110.75, runningBalance: 524.25 },
  { id: '25', date: '09/13/2025', reference: '35311', description: 'Income', type: 'Transfer', amount: 200.00, runningBalance: 724.25 },
  { id: '26', date: '09/14/2025', reference: '35312', description: 'Payment', type: 'Visa', amount: 350.00, runningBalance: 374.25 },
  { id: '27', date: '09/15/2025', reference: '35313', description: 'Credit', type: 'Credit', amount: 45.50, runningBalance: 419.75 },
  { id: '28', date: '09/16/2025', reference: '35314', description: 'Payment', type: 'Mastercard', amount: 185.00, runningBalance: 234.75 },
  { id: '29', date: '09/17/2025', reference: '35315', description: 'Refund', type: 'Discover', amount: 95.25, runningBalance: 330.00 },
  { id: '30', date: '09/18/2025', reference: '35316', description: 'Income', type: 'Transfer', amount: 125.00, runningBalance: 455.00 },
  { id: '31', date: '09/19/2025', reference: '35317', description: 'Payment', type: 'AMEX', amount: 265.00, runningBalance: 190.00 },
  { id: '32', date: '09/20/2025', reference: '35318', description: 'Credit', type: 'Credit', amount: 80.75, runningBalance: 270.75 },
  { id: '33', date: '09/21/2025', reference: '35319', description: 'Payment', type: 'Visa', amount: 195.00, runningBalance: 75.75 },
  { id: '34', date: '09/22/2025', reference: '35320', description: 'Refund', type: 'Mastercard', amount: 105.50, runningBalance: 181.25 },
  { id: '35', date: '09/23/2025', reference: '35321', description: 'Income', type: 'Transfer', amount: 150.00, runningBalance: 331.25 },
  { id: '36', date: '09/24/2025', reference: '35322', description: 'Payment', type: 'Discover', amount: 220.00, runningBalance: 111.25 },
  { id: '37', date: '09/25/2025', reference: '35323', description: 'Credit', type: 'Credit', amount: 70.25, runningBalance: 181.50 },
  { id: '38', date: '09/26/2025', reference: '35324', description: 'Payment', type: 'AMEX', amount: 175.00, runningBalance: 6.50 },
  { id: '39', date: '09/27/2025', reference: '35325', description: 'Refund', type: 'Visa', amount: 90.75, runningBalance: 97.25 },
  { id: '40', date: '09/28/2025', reference: '35326', description: 'Income', type: 'Transfer', amount: 180.00, runningBalance: 277.25 },
];

interface TransactionsContainerProps {
  onTransactionClick?: (transaction: Transaction) => void;
}

type TabType = 'transactions' | 'budget-plan' | 'payment-plan' | 'deposits' | 'services-meters' | 'reports';

export default function TransactionsContainer({ onTransactionClick }: TransactionsContainerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('transactions');

  const handleTransactionClick = (transaction: Transaction) => {
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
          <div className="flex flex-col flex-1 p-5" data-name="Transactions List Container" data-node-id="13:622">
            {/* Transactions List Header Container */}
            <div className="box-border content-stretch flex items-center justify-between pl-[16px] pr-[4px] pt-[12px] pb-[24px] relative" data-name="Transactions List Header Container" data-node-id="57:39684">
              <div className="content-stretch flex flex-col gap-[4px] items-start leading-[18px] not-italic relative shrink-0 tracking-[0.16px] w-[531px]" data-name="Transactions List Header" data-node-id="57:40510">
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[22px] text-black w-[202px]" data-node-id="57:1042">
                  Transactions
                </p>
                <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#313131] text-[12px] text-nowrap whitespace-pre" data-node-id="57:40508">
                  Click any transaction row to view details and edit
                </p>
              </div>
              <div className="content-stretch flex gap-[4px] items-end not-italic relative shrink-0" data-name="Balance Container" data-node-id="57:40514">
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#1d2329] text-[16px] w-[121px]" data-node-id="57:40512">
                  <p className="leading-[23px]">Current balance</p>
                </div>
                <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] relative shrink-0 text-[#43a047] text-[20px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="57:40506">
                  $739.42
                </p>
              </div>
            </div>

            {/* Transactions List Container */}
            <div className="flex flex-col flex-1 overflow-hidden" data-name="Transactions List Container" data-node-id="64:40811">
              {/* Column Headers */}
              <div className="flex w-full h-[48px] flex-shrink-0" data-name="Column Header" data-node-id="57:38566">
                {/* Date Column */}
                <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38567">
                  <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex-shrink-0" data-name="calendar">
                      <Calendar size={16} className="text-gray-500" />
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

                {/* Running Balance Column */}
                <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38571">
                  <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                  <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                    Running Balance
                  </p>
                </div>
              </div>

              {/* Transaction Rows */}
              <div className="flex-1 overflow-y-auto min-h-0 max-h-[400px]" data-name="Transaction Row Container" data-node-id="57:39685">
                {mockTransactions.map((transaction, i) => (
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

                    {/* Running Balance */}
                    <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38400 + i}`}>
                      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                        {transaction.runningBalance >= 0 ? '+' : ''}${transaction.runningBalance.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'budget-plan':
        return <PlaceholderContent title="Budget Plan" description="Manage customer budget plans and payment schedules. This section will contain budget plan details, payment history, and plan modifications." />;
      case 'payment-plan':
        return <PlaceholderContent title="Payment Plan" description="View and manage customer payment plans. Track payment schedules, amounts, and plan status." />;
      case 'deposits':
        return <PlaceholderContent title="Deposits" description="Manage customer deposits and refunds. View deposit history, pending refunds, and deposit applications." />;
      case 'services-meters':
        return <PlaceholderContent title="Services & Meters" description="View customer services and meter information. Manage service connections, meter readings, and service history." />;
      case 'reports':
        return <PlaceholderContent title="Reports" description="Generate and view customer reports. Access billing reports, usage reports, and customer activity summaries." />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative h-full overflow-hidden" data-name="Transactions Container" data-node-id="13:605">
      <div className="flex flex-col h-full min-h-0">
          {/* Tab Container */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full border-b border-[#C1C1C1] mt-5 sticky top-0 bg-white z-10" data-name="Tab Container" data-node-id="13:610">
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

            {/* Budget Plan Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'budget-plan' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42092"
              onClick={() => handleTabClick('budget-plan')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'budget-plan' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Budget Plan
                </p>
              </div>
              {activeTab === 'budget-plan' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Payment Plan Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'payment-plan' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42089"
              onClick={() => handleTabClick('payment-plan')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'payment-plan' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Payment Plan
                </p>
              </div>
              {activeTab === 'payment-plan' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Deposits Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'deposits' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42095"
              onClick={() => handleTabClick('deposits')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'deposits' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Deposits
                </p>
              </div>
              {activeTab === 'deposits' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Services & Meters Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'services-meters' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42098"
              onClick={() => handleTabClick('services-meters')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'services-meters' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Services & Meters
                </p>
              </div>
              {activeTab === 'services-meters' && (
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








