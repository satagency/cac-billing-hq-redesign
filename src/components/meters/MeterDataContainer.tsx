'use client';

import { useState } from 'react';
import OverviewTabContent from './OverviewTabContent';

const img = "http://localhost:3845/assets/4dc56d693a0956668a100403eda2344bf6a1429f.svg";
const img1 = "http://localhost:3845/assets/48b583bb96398134891f4917e20796b6bbb64f49.svg";

interface MeterReading {
  id: string;
  date: string;
  reading: number;
  usage: number;
  type: string;
  technician: string;
  notes: string;
}

// Mock meter reading data
const mockMeterReadings: MeterReading[] = [
  { id: '1', date: '12/15/2024', reading: 15420, usage: 140, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
  { id: '2', date: '11/15/2024', reading: 15280, usage: 135, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
  { id: '3', date: '10/15/2024', reading: 15145, usage: 142, type: 'Regular', technician: 'Jane Doe', notes: 'Normal reading' },
  { id: '4', date: '09/15/2024', reading: 15003, usage: 138, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
  { id: '5', date: '08/15/2024', reading: 14865, usage: 145, type: 'Regular', technician: 'Jane Doe', notes: 'Normal reading' },
  { id: '6', date: '07/15/2024', reading: 14720, usage: 140, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
  { id: '7', date: '06/15/2024', reading: 14580, usage: 135, type: 'Regular', technician: 'Jane Doe', notes: 'Normal reading' },
  { id: '8', date: '05/15/2024', reading: 14445, usage: 142, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
  { id: '9', date: '04/15/2024', reading: 14303, usage: 138, type: 'Regular', technician: 'Jane Doe', notes: 'Normal reading' },
  { id: '10', date: '03/15/2024', reading: 14165, usage: 145, type: 'Regular', technician: 'John Smith', notes: 'Normal reading' },
];

interface MeterDataContainerProps {
  onReadingClick?: (reading: MeterReading) => void;
}

type TabType = 'overview' | 'readings' | 'services' | 'consumption' | 'workOrders' | 'alerts';

export default function MeterDataContainer({ onReadingClick }: MeterDataContainerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const handleReadingClick = (reading: MeterReading) => {
    if (onReadingClick) {
      onReadingClick(reading);
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
      case 'overview':
        return <OverviewTabContent />;
      case 'readings':
        return (
          <div className="flex flex-col flex-1 overflow-hidden" data-name="Meter Readings List Container" data-node-id="64:40811">
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

              {/* Reading Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38568">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Reading
                </p>
              </div>

              {/* Usage Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38569">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Usage
                </p>
              </div>

              {/* Type Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38570">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Type
                </p>
              </div>

              {/* Technician Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38572">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Technician
                </p>
              </div>

              {/* Notes Column */}
              <div className="bg-[#fafafb] flex items-center px-4 flex-1" data-name="Column Header" data-node-id="57:38571">
                <div className="absolute inset-0 border-b border-[rgba(24,29,31,0.15)] pointer-events-none" />
                <p className="font-['IBM_Plex_Sans:Bold',_sans-serif] font-bold text-sm text-[#181d1f]">
                  Notes
                </p>
              </div>
            </div>

            {/* Meter Reading Rows */}
            <div className="flex-1 overflow-y-auto min-h-0 max-h-[400px]" data-name="Meter Reading Row Container" data-node-id="57:39685">
              {mockMeterReadings.map((reading, i) => (
                <div 
                  key={reading.id} 
                  className="flex w-full hover:bg-gray-50 cursor-pointer border-b border-gray-100 h-[42px]" 
                  data-name="Row" 
                  data-node-id={`57:${38394 + i}`}
                  onClick={() => handleReadingClick(reading)}
                >
                  {/* Date */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38395 + i}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 flex-shrink-0 opacity-0" data-name="calendar-spacer">
                        {/* Invisible spacer to align with header icon */}
                      </div>
                      <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                        {reading.date}
                      </p>
                    </div>
                  </div>

                  {/* Reading */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38396 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {reading.reading.toLocaleString()}
                    </p>
                  </div>

                  {/* Usage */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38397 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {reading.usage}
                    </p>
                  </div>

                  {/* Type */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38398 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {reading.type}
                    </p>
                  </div>

                  {/* Technician */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38399 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {reading.technician}
                    </p>
                  </div>

                  {/* Notes */}
                  <div className="flex items-center px-4 flex-1" data-name="Grid Cell" data-node-id={`57:${38400 + i}`}>
                    <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] font-normal text-sm text-[#181d1f]">
                      {reading.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return <PlaceholderContent title="Services" description="View and manage meter services including water delivery, maintenance services, and service history." />;
      case 'consumption':
        return <PlaceholderContent title="Consumption" description="Analyze water consumption patterns, trends, and usage analytics for this meter." />;
      case 'workOrders':
        return <PlaceholderContent title="Work Orders" description="View and manage work orders related to this meter including repairs, installations, and maintenance tasks." />;
      case 'alerts':
        return <PlaceholderContent title="Alerts" description="Manage meter alerts and notifications. View active alerts and configure alert settings." />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative h-full overflow-hidden" data-name="Meter Data Container" data-node-id="13:605">
      <div className="flex flex-col h-full min-h-0">
          {/* Tab Container */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full border-b border-[#C1C1C1] mt-5" data-name="Tab Container" data-node-id="13:610">
          <div className="basis-0 content-stretch flex gap-[6px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Tab Container" data-node-id="13:611">
            {/* Overview Tab */}
            <div 
              className={`h-full relative shrink-0 w-[139.17px] cursor-pointer transition-colors duration-200 ${activeTab === 'overview' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tab" 
              data-node-id="13:612"
              onClick={() => handleTabClick('overview')}
            >
              <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip p-[10px] relative w-[139.17px]">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'overview' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:613">
                  Overview
                </p>
              </div>
              {activeTab === 'overview' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Readings Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'readings' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42092"
              onClick={() => handleTabClick('readings')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'readings' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Readings
                </p>
              </div>
              {activeTab === 'readings' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Services Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'services' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42089"
              onClick={() => handleTabClick('services')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'services' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Services
                </p>
              </div>
              {activeTab === 'services' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Consumption Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'consumption' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42095"
              onClick={() => handleTabClick('consumption')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'consumption' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Consumption
                </p>
              </div>
              {activeTab === 'consumption' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Work Orders Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'workOrders' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42098"
              onClick={() => handleTabClick('workOrders')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'workOrders' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Work Orders
                </p>
              </div>
              {activeTab === 'workOrders' && (
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
              )}
            </div>

            {/* Alerts Tab */}
            <div 
              className={`box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[139.167px] cursor-pointer transition-colors duration-200 ${activeTab === 'alerts' ? 'bg-[#f1f1f1]' : 'bg-transparent'}`}
              data-name="Tabs" 
              data-node-id="73:42101"
              onClick={() => handleTabClick('alerts')}
            >
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative size-full" data-name="Property 1=Default" data-node-id="73:42078">
                <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre transition-colors duration-200 ${activeTab === 'alerts' ? 'text-black' : 'text-[rgba(0,0,0,0.35)] hover:text-[#121212]'}`} data-node-id="13:7832">
                  Alerts
                </p>
              </div>
              {activeTab === 'alerts' && (
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
