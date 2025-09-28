'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/ui/header';
import GlobalFooter from '@/components/ui/GlobalFooter';
import CustomerSearchBar from '@/components/customers/CustomerSearchBar';
import CustomerInfoAndPaymentDue from '@/components/customers/CustomerInfoAndPaymentDue';
import AccountDetails from '@/components/customers/AccountDetails';
import TransactionsContainer from '@/components/customers/TransactionsContainer';
import ActivityFeedContainer from '@/components/customers/ActivityFeedContainer';
import TransactionDetailsSheet from '@/components/customers/TransactionDetailsSheet';

// Transaction interface
interface Transaction {
  id: string;
  date: string;
  reference: string;
  description: string;
  type: string;
  amount: number;
  runningBalance: number;
}

// Mock data - in a real app, this would come from an API
const mockCustomer = {
  name: 'Last Name, First',
  accountNumber: '795798',
  status: 'Residential',
  address: '12920 Third Street Scranton, PA 30390',
  createdDate: '2/02/2008',
  lastPaymentDate: '12/15/2023',
  lastPaymentAmount: 150.00,
  currentBalance: 234.21,
  pastDueAmount: 34.21,
  services: [
    { name: 'County Water Service', current: 80.93, pastDue: 34.21 },
    { name: 'Sewer Service', current: 120.00, pastDue: 0 },
    { name: 'Electric Service', current: 150.00, pastDue: 0 },
  ],
};

const mockBillingData = {
  currentBalance: 234.21,
  pastDueAmount: 34.21,
  nextPaymentDue: 200.00,
  pastDue: 34.21,
  lastPayment: {
    amount: 150.00,
    date: '12/15/2023'
  },
  services: [
    { name: 'County Water Service', current: 80.93, pastDue: 34.21 },
    { name: 'Sewer Service', current: 120.00, pastDue: 0 },
    { name: 'Electric Service', current: 150.00, pastDue: 0 },
  ],
};


export default function CustomerProfilePage() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    document.title = 'Customer Profile | CAC Billing HQ';
  }, []);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setSelectedTransaction(null);
  };

  const handleEditTransaction = () => {
    console.log('Edit transaction:', selectedTransaction);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Header */}
      <Header />
      
      {/* Search Bar */}
      <CustomerSearchBar showBackButton={true} />
      
      {/* Main Content */}
      <div className="pb-[50px]" data-name="Dashboard Reset - Customers" data-node-id="13:559">
        <div className="box-border content-stretch flex flex-col items-start p-[10px] relative">
          {/* Customer Info and Payment Due */}
          <CustomerInfoAndPaymentDue customer={mockCustomer} billingData={mockBillingData} />

          {/* Details and Tabbed Content + Activity Feed */}
          <div className="relative flex gap-4 w-full h-[600px] overflow-hidden" data-name="Details and Tabbed Conent + Activity Feed" data-node-id="13:601">
            {/* Account Details */}
            <div className="flex-shrink-0 w-60" data-name="Account Details" data-node-id="13:602">
              <AccountDetails />
            </div>

            {/* Transactions Container */}
            <div className="flex-1 min-w-0 h-full overflow-hidden" data-name="Transactions Container" data-node-id="13:605">
              <TransactionsContainer onTransactionClick={handleTransactionClick} />
            </div>

            {/* Activity Feed Container */}
            <div className="flex-shrink-0 w-72" data-name="Activity Feed Container" data-node-id="13:623">
              <ActivityFeedContainer />
            </div>

            {/* Transaction Details Sheet - positioned within this container */}
            <TransactionDetailsSheet
              transaction={selectedTransaction}
              isOpen={isSheetOpen}
              onClose={handleCloseSheet}
              onEdit={handleEditTransaction}
            />
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