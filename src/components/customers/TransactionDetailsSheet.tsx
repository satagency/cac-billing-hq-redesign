'use client';

import { useState } from 'react';
import { X, PencilSimple, Trash, Calendar, CreditCard, FileText } from '@phosphor-icons/react';

interface Transaction {
  id: string;
  date: string;
  reference: string;
  description: string;
  type: string;
  amount: number;
  runningBalance: number;
}

interface TransactionDetailsSheetProps {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
}

export default function TransactionDetailsSheet({ 
  transaction, 
  isOpen, 
  onClose, 
  onEdit 
}: TransactionDetailsSheetProps) {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Transaction Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Transaction Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                <p className="text-sm text-gray-500">Reference: {transaction.reference}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Date</label>
                <p className="text-sm text-gray-900">{transaction.date}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Type</label>
                <p className="text-sm text-gray-900">{transaction.type}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Amount</label>
                <p className="text-sm text-gray-900">${transaction.amount.toFixed(2)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Running Balance</label>
                <p className="text-sm text-gray-900">${transaction.runningBalance.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Additional Information</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Transaction ID</label>
                <p className="text-sm text-gray-900">{transaction.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Status</label>
                <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex space-x-3">
            <button
              onClick={onEdit}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PencilSimple size={16} className="mr-2" />
              Edit Transaction
            </button>
            <button
              onClick={() => console.log('Delete transaction:', transaction.id)}
              className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Trash size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}