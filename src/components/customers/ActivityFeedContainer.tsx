'use client';

import { Clock, CreditCard, User, Phone, WarningCircle } from '@phosphor-icons/react';

export default function ActivityFeedContainer() {
  const activities = [
    {
      id: 1,
      type: 'payment',
      title: 'Payment Received',
      description: '$450.00 via Visa ending in 1234',
      time: '2 hours ago',
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      type: 'account',
      title: 'Account Updated',
      description: 'Service address changed',
      time: '1 day ago',
      icon: User,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'service',
      title: 'Service Call Scheduled',
      description: 'Meter reading appointment',
      time: '2 days ago',
      icon: Phone,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'alert',
      title: 'Payment Reminder',
      description: 'Payment due in 3 days',
      time: '3 days ago',
      icon: WarningCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'payment',
      title: 'Payment Received',
      description: '$400.00 via Auto Pay',
      time: '1 week ago',
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg overflow-hidden" data-name="Activity Feed Container" data-node-id="13:623">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-700">Recent Activity</h3>
      </div>

      {/* Activity List */}
      <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              {/* Icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                <IconComponent size={16} className={activity.color} />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock size={12} className="mr-1" />
                    {activity.time}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All Activity
        </button>
      </div>
    </div>
  );
}
