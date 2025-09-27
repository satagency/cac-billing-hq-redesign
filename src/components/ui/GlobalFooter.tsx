'use client';

import { Gear, Envelope, Globe } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export default function GlobalFooter() {
  const [currentTime, setCurrentTime] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
      
      // Get timezone abbreviation
      const timezoneString = now.toLocaleTimeString('en-US', { 
        timeZoneName: 'short' 
      });
      const timezoneAbbr = timezoneString.split(' ').pop();
      setTimezone(timezoneAbbr || '');
    };

    // Update time immediately
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#181d1f] relative h-[50px]" data-name="Global Footer" data-node-id="175:33022">
      <div className="box-border content-stretch flex items-start justify-between pb-[10px] pl-[4px] pr-[8px] pt-[6px] relative size-full">
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[691px]" data-node-id="175:33023">
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center p-[10px] relative shrink-0 w-[40px]" data-node-id="175:33024">
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            <Gear size={24} className="text-white" />
          </div>
          <div className="box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center p-[10px] relative shrink-0" data-node-id="175:33026">
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
            <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[18px] opacity-60 relative shrink-0 text-[#efefef] text-[12px] text-nowrap whitespace-pre" data-node-id="175:33028" style={{ fontVariationSettings: "'wdth' 100" }}>
              ©Diversified Billing
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="175:33029">
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center p-[10px] relative shrink-0 w-[40px]" data-node-id="175:33030">
            <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            <Envelope size={24} className="text-white" />
          </div>
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center p-[10px] relative shrink-0 w-[40px]" data-node-id="175:33032">
            <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            <Globe size={24} className="text-green-500" />
          </div>
          <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center p-[10px] relative shrink-0" data-node-id="175:33034">
            <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-node-id="175:33036" style={{ fontVariationSettings: "'wdth' 100" }}>
              {currentTime}
            </p>
            <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[18px] opacity-60 relative shrink-0 text-[#f7f7f7] text-[12px] text-nowrap whitespace-pre" data-node-id="175:33037" style={{ fontVariationSettings: "'wdth' 100" }}>
              {timezone}
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
