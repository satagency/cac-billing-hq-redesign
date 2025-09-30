'use client';

import GlobalFooter from '@/components/ui/GlobalFooter';
import Header from '@/components/ui/header';
import { 
  CurrencyDollar, 
  Wrench, 
  Drop, 
  Users, 
  Building, 
  ChartLine,
  Clock,
  CheckCircle,
  WarningCircle,
  TrendUp,
  TrendDown,
  ActivityIcon
} from '@phosphor-icons/react';

export default function Dashboard() {
  // Mock data for KPIs
  const revenueData = {
    currentMonth: 1247500,
    lastMonth: 1189200,
    ytd: 14850000,
    target: 15000000
  };

  const workOrderData = {
    total: 342,
    completed: 298,
    inProgress: 28,
    overdue: 16,
    avgCompletionTime: 3.2
  };

  const utilitiesData = {
    totalCustomers: 15420,
    activeConnections: 15280,
    consumption: 2845000, // gallons
    collectionRate: 96.8,
    outstandingBalance: 245000
  };

  const calculatePercentageChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-auto">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="pb-[50px] p-6 pt-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">City Manager Dashboard</h1>
          <p className="text-gray-600">Real-time overview of municipal operations and performance</p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Revenue KPI */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <CurrencyDollar size={24} className="text-gray-600" />
              </div>
              <div className="flex items-center text-sm">
                {revenueData.currentMonth > revenueData.lastMonth ? (
                  <TrendUp size={16} className="text-gray-500 mr-1" />
                ) : (
                  <TrendDown size={16} className="text-gray-500 mr-1" />
                )}
                <span className="text-gray-600">
                  {calculatePercentageChange(revenueData.currentMonth, revenueData.lastMonth)}%
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">
              {formatCurrency(revenueData.currentMonth)}
            </h3>
            <p className="text-sm text-gray-600 mb-2">Monthly Revenue</p>
            <div className="text-xs text-gray-500">
              YTD: {formatCurrency(revenueData.ytd)} / {formatCurrency(revenueData.target)}
            </div>
          </div>

          {/* Work Orders KPI */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Wrench size={24} className="text-gray-600" />
              </div>
              <div className="flex items-center text-sm">
                <Clock size={16} className="text-gray-400 mr-1" />
                <span className="text-gray-600">{workOrderData.avgCompletionTime} days avg</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">
              {workOrderData.total}
            </h3>
            <p className="text-sm text-gray-600 mb-2">Active Work Orders</p>
            <div className="flex items-center text-xs text-gray-500">
              <CheckCircle size={12} className="text-gray-500 mr-1" />
              <span className="mr-3">{workOrderData.completed} completed</span>
              <WarningCircle size={12} className="text-gray-500 mr-1" />
              <span>{workOrderData.overdue} overdue</span>
            </div>
          </div>

          {/* Utilities Billing KPI */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Drop size={24} className="text-gray-600" />
              </div>
              <div className="flex items-center text-sm">
                <ActivityIcon size={16} className="text-gray-500 mr-1" />
                <span className="text-gray-600">{utilitiesData.collectionRate}%</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">
              {formatNumber(utilitiesData.totalCustomers)}
            </h3>
            <p className="text-sm text-gray-600 mb-2">Utility Customers</p>
            <div className="text-xs text-gray-500">
              Outstanding: {formatCurrency(utilitiesData.outstandingBalance)}
            </div>
          </div>

          {/* Properties KPI */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Building size={24} className="text-gray-600" />
              </div>
              <div className="flex items-center text-sm">
                <Users size={16} className="text-gray-400 mr-1" />
                <span className="text-gray-600">Active</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">
              {formatNumber(utilitiesData.activeConnections)}
            </h3>
            <p className="text-sm text-gray-600 mb-2">Active Connections</p>
            <div className="text-xs text-gray-500">
              Consumption: {formatNumber(utilitiesData.consumption)} gal
            </div>
          </div>
        </div>

        {/* Charts and Detailed Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Revenue Trend</h3>
              <div className="flex items-center text-sm text-gray-600">
                <ChartLine size={16} className="mr-1" />
                Last 12 Months
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ChartLine size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Revenue chart visualization</p>
                <p className="text-sm text-gray-400">Integration with charting library</p>
              </div>
            </div>
          </div>

          {/* Work Orders Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-black">Work Orders Status</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Wrench size={16} className="mr-1" />
                Current Status
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <span className="text-sm font-medium text-black">{workOrderData.completed}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">In Progress</span>
                </div>
                <span className="text-sm font-medium text-black">{workOrderData.inProgress}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Overdue</span>
                </div>
                <span className="text-sm font-medium text-black">{workOrderData.overdue}</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Average Completion Time</span>
                <span className="font-medium text-black">{workOrderData.avgCompletionTime} days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-black mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Users size={20} className="text-gray-600 mr-3" />
                  <span className="text-sm font-medium">Add New Customer</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Wrench size={20} className="text-gray-600 mr-3" />
                  <span className="text-sm font-medium">Create Work Order</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <ChartLine size={20} className="text-gray-600 mr-3" />
                  <span className="text-sm font-medium">Generate Report</span>
                </div>
              </button>
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-black mb-4">System Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <WarningCircle size={16} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-black">16 Overdue Work Orders</p>
                  <p className="text-xs text-gray-600">Requires immediate attention</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <Clock size={16} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-black">Billing Cycle Ending</p>
                  <p className="text-xs text-gray-600">3 days until next cycle</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <ActivityIcon size={16} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-black">System Maintenance</p>
                  <p className="text-xs text-gray-600">Scheduled for Sunday 2 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-black mb-4">Performance Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Revenue Target</span>
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                    <div 
                      className="h-2 bg-gray-500 rounded-full" 
                      style={{ width: `${(revenueData.ytd / revenueData.target) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-black">
                    {((revenueData.ytd / revenueData.target) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Collection Rate</span>
                <span className="text-sm font-medium text-black">{utilitiesData.collectionRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Work Order Completion</span>
                <span className="text-sm font-medium text-black">
                  {((workOrderData.completed / workOrderData.total) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System Uptime</span>
                <span className="text-sm font-medium text-black">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[100]">
        <GlobalFooter />
      </div>
    </div>
  );
}