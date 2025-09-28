'use client';

import React from 'react';

// Image assets from Figma
const imgScreenshot20250908At125402Pm1 = "http://localhost:3845/assets/5f62b773d93bab6964cbfc1a2dda85b238a0fd47.png";
const img = "http://localhost:3845/assets/387d3ecef9e2a0a3224594c8c30899edcfdadbe2.svg";

// Mock meter data - in a real app, this would come from an API
const mockMeter = {
  name: 'Water Meter #12345',
  meterNumber: 'WM-3029031',
  serialNumber: 'SN0903904-93',
  model: 'iTron Water125',
  type: 'Residential',
  status: 'Active',
  address: '12920 Third Street Scranton, PA 30390',
  installedDate: '3/15/2015',
  currentReading: 98000,
  meterType: 'Water',
  size: '1.5"',
  coordinates: { lat: 40.054300, lng: -75.062100 },
  consumption: {
    current: 1450.83,
    allTime: 79715.91,
    temperature: 30.2
  }
};

const mockMeterData = {
  currentReading: 15420,
  lastReading: 15280,
  usage: 140,
  nextReading: 15560,
  lastReadingDate: {
    date: '12/15/2024',
    amount: 140,
  },
  services: [
    { name: 'Water Usage', current: 140, pastDue: 0 },
    { name: 'Service Fee', current: 25.00, pastDue: 0 },
    { name: 'Maintenance', current: 15.00, pastDue: 0 },
  ],
};

interface MeterInfoAndUsageDataProps {
  meter: typeof mockMeter;
  meterData: typeof mockMeterData;
}

export default function MeterInfoAndUsageData({ meter, meterData }: MeterInfoAndUsageDataProps) {
  return (
    <div className="bg-[rgba(0,217,255,0.09)] relative w-full" data-node-id="106:23804">
      <div className="box-border content-stretch flex gap-[24px] items-start max-h-inherit pb-[24px] pt-[16px] px-[16px] relative size-full">
        {/* Left Section - Meter Details */}
        <div className="content-stretch flex flex-col gap-[16px] h-[154px] items-start relative shrink-0 w-[767px]" data-node-id="106:23805">
          {/* Meter Header */}
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[40px] items-start justify-center px-0 py-[10px] relative shrink-0 w-full" data-node-id="106:23806">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="106:23807">
              {/* Meter Icon */}
              <div className="bg-[#3a99ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="106:26142">
                <div className="relative shrink-0 size-[24px]" data-name="Drop" data-node-id="106:26143">
                  <div className="absolute inset-[3.13%_15.63%_9.38%_15.63%]" data-name="Vector" data-node-id="I106:26143;8899:1103">
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
              
              {/* Meter Number */}
              <p className="font-['JetBrains_Mono:Regular',_sans-serif] font-normal h-[24px] leading-[18px] relative shrink-0 text-[24px] text-black tracking-[0.16px] w-[153px]" data-node-id="106:23808">
                {meter.meterNumber}
              </p>
              
              {/* Serial Number */}
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26026">
                {meter.serialNumber}
              </p>
              
              {/* Model */}
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0380d9] text-[15px] text-nowrap tracking-[0.16px]" data-node-id="106:23809">
                <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">{meter.model}</p>
              </div>
              
              {/* Type Badge */}
              <div className="box-border content-stretch flex gap-[5px] h-[30px] items-center justify-center px-[10px] py-0 relative rounded-[100px] shrink-0" data-name="ButtonPill" data-node-id="106:23810">
                <div aria-hidden="true" className="absolute border border-[#dee0e1] border-solid inset-0 pointer-events-none rounded-[100px]" />
                <div className="content-stretch flex gap-[4px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Text" data-node-id="I106:23810;29:2281">
                  <p className="font-['SF_Pro_Text:Medium',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#636466] text-[13px] text-nowrap whitespace-pre" data-node-id="I106:23810;29:2282">
                    {meter.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Meter Location */}
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-node-id="106:25985">
            <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="106:25986">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:25987">
                Meter Location
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="106:25988">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[326px]" data-node-id="106:25989">
                  {meter.address}
                </p>
              </div>
            </div>
          </div>
          
          {/* Meter Input Fields */}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="106:25923">
            {/* Current Reading */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="106:25924">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="106:25925">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:25926">
                  Current Reading
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="106:26086">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="106:26087">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="106:26089">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="106:26090">
                        {meter.currentReading?.toLocaleString() || '0'} m<span className="text-[10.32px]">3</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Meter Type */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="106:25928">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="106:25929">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:25930">
                  Meter Type
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="106:25931">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I106:25931;64:28710">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="I106:25931;64:28712">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="I106:25931;64:28713">
                        {meter.meterType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Size */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="106:25945">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="106:25946">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:25947">
                  Size
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="106:25948">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I106:25948;64:28710">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="I106:25948;64:28712">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="I106:25948;64:28713">
                        {meter.size}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="106:25956">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="106:25957">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:25958">
                  Status
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="106:25959">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I106:25959;64:28710">
                    <div className="bg-[#a6e194] box-border content-stretch flex gap-[10px] h-[16px] items-center justify-center px-[10px] py-[13px] relative rounded-[2px] shrink-0" data-name="Icon-Left" data-node-id="I106:25959;64:28711">
                      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a5301] text-[15px] text-center text-nowrap" data-node-id="I106:25959;64:28711;3290:45465" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[22.4px] whitespace-pre">{meter.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Location Map and Consumption Data */}
        <div className="basis-0 box-border content-stretch flex gap-[19px] grow items-start min-h-px min-w-px px-0 py-[6px] relative shrink-0" data-node-id="106:26004">
          {/* Location Map */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="106:26003">
            <div className="bg-white h-[121px] relative shrink-0 w-[214px]" data-name="Location" data-node-id="106:25993">
              <div className="h-[121px] overflow-clip relative w-[214px]">
                <div className="absolute h-[528.28px] left-[-383.32px] top-[-224.11px] w-[1086.89px]" data-name="Screenshot 2025-09-08 at 12.54.02 PM 1" data-node-id="106:25994">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250908At125402Pm1} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
            </div>
            {/* Coordinates */}
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative rounded-[4px] shrink-0 w-[214px]" data-name="Coordinates" data-node-id="106:25996">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[105px]" data-name="Input Text" data-node-id="106:25998">
                <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d1f] text-[14px] text-nowrap tracking-[0.2px] whitespace-pre" data-node-id="106:25999">{`${meter.coordinates.lat}, `}</p>
              </div>
              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d1f] text-[14px] text-nowrap tracking-[0.2px] whitespace-pre" data-node-id="106:26001">
                {meter.coordinates.lng}
              </p>
            </div>
          </div>
          
          {/* Consumption Data */}
          <div className="box-border content-stretch flex gap-[12px] h-[143px] items-start pb-0 pt-[2px] px-[6px] relative shrink-0" data-name="Container" data-node-id="106:26005">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="106:26127">
              {/* Consumption */}
              <div className="box-border content-stretch flex gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26015">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="106:26016">
                  Consumption:
                </p>
                <p className="font-['JetBrains_Mono:Bold',_sans-serif] font-['JetBrains_Mono:Medium',_sans-serif] font-bold font-medium leading-[18px] relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="106:26017">
                  {meter.consumption.current} m<span className="text-[10.32px]">3</span>
                </p>
              </div>
              
              {/* All Time */}
              <div className="box-border content-stretch flex gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26123">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="106:26124">
                  All Time:
                </p>
                <p className="font-['JetBrains_Mono:Bold',_sans-serif] font-['JetBrains_Mono:Medium',_sans-serif] font-bold font-medium leading-[18px] relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="106:26125">
                  {meter.consumption.allTime} m<span className="text-[10.32px]">3</span>
                </p>
              </div>
              
              {/* Temperature */}
              <div className="box-border content-stretch flex gap-[8px] items-center leading-[18px] pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26128">
                <p className="font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="106:26129">
                  Temp:
                </p>
                <p className="font-['JetBrains_Mono:Medium',_sans-serif] font-medium relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="106:26130">
                  {meter.consumption.temperature} ºC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}