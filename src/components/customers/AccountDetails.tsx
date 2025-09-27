'use client';

export default function AccountDetails() {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg overflow-hidden" data-name="Account Details" data-node-id="13:602">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-700">Account Details</h3>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Account Information */}
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Account Type</span>
            <span className="text-sm font-medium text-gray-900">Residential</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Service Start</span>
            <span className="text-sm font-medium text-gray-900">02/02/2008</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Last Payment</span>
            <span className="text-sm font-medium text-gray-900">12/15/2023</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Payment Method</span>
            <span className="text-sm font-medium text-gray-900">Auto Pay</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Billing Cycle</span>
            <span className="text-sm font-medium text-gray-900">Monthly</span>
          </div>
        </div>

        {/* Service Information */}
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Services</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">Water</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">Sewer</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">Electric</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Contact</h4>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Phone:</span> (555) 123-4567
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> john.smith@email.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}