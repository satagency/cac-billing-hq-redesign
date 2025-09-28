'use client';

import React from 'react';

// Image assets from Figma
const img14 = "http://localhost:3845/assets/011649031a18d2a3ee7e5909ac13aa314c7c609e.svg";
const img15 = "http://localhost:3845/assets/a7dd4f75cdff2a9b60686a2c11b0d8decb95ad1d.svg";
const img18 = "http://localhost:3845/assets/75be68bd43d429d048466fb3d5995000d762ae15.svg";
const img19 = "http://localhost:3845/assets/2c6aeb377cc9a00157ec5f3ae90acb01e827e428.svg";
const img20 = "http://localhost:3845/assets/7ac41452486d3268326c3f9a49f5fa30c4776b90.svg";

interface ToggleProps {
  size?: "Default" | "Small";
  state?: "Enabled" | "Focus" | "Disabled" | "Skeleton" | "Read-only";
  toggleOnly?: "False" | "True";
  toggled?: "False" | "True";
}

function Toggle({ size = "Default", state = "Enabled", toggleOnly = "False", toggled = "True" }: ToggleProps) {
  if (size === "Default" && state === "Enabled" && toggleOnly === "True" && toggled === "True") {
    return (
      <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply p-0 relative size-full">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <div className="bg-[#24a148] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
            <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
          </div>
        </div>
      </button>
    );
  }
  if (size === "Small" && state === "Disabled" && toggleOnly === "True" && toggled === "False") {
    return (
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative size-full">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="bg-[#c6c6c6] box-border content-stretch flex gap-[10px] items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]">
              <div className="bg-[rgba(22,22,22,0.25)] rounded-[20px] shrink-0 size-[10px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[16px] items-start mix-blend-multiply p-0 relative size-full">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <div className="bg-[#24a148] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
          <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
        </div>
      </div>
    </button>
  );
}

interface MeterInputProps {
  label?: string;
  data?: string;
}

function MeterInput({ label = "Current Reading", data = "98,000 m3" }: MeterInputProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
          {label}
        </p>
        <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
          <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
            <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
              <p className="basis-0 font-['IBM_Plex_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]">
                {data}
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
        </div>
      </div>
    </div>
  );
}

interface OptionToggleProps {
  text?: string;
  toggled?: boolean;
}

function OptionToggle({ text = "Requires Key", toggled = false }: OptionToggleProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre">
          ACH{" "}
        </p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
            {text}
          </p>
          <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
              <div className={`box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px] ${toggled ? 'bg-[#0f62fe]' : 'bg-[#c6c6c6]'}`}>
                <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OverviewTabContent() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      
      {/* Options Section */}
      <div className="bg-[rgba(219,219,219,0)] h-full relative shrink-0 w-[300px]">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start overflow-x-clip overflow-y-auto pl-[12px] pr-[16px] py-[12px] relative w-[300px]">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]">
            Options
          </p>
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre">
                  ACH{" "}
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
                    Auto Remove
                  </p>
                  <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      <div className="bg-[#0f62fe] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
                        <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <OptionToggle text="Is Deduct" toggled={false} />
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre">
                  ACH{" "}
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
                    Is Master
                  </p>
                  <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      <div className="bg-[#0f62fe] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
                        <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre">
                  ACH{" "}
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
                    Remote Readable
                  </p>
                  <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      <div className="bg-[#0f62fe] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
                        <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <OptionToggle text="Seasonal" toggled={false} />
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre">
                  ACH{" "}
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
                    Backflow Prevention
                  </p>
                  <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      <div className="bg-[#0f62fe] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]">
                        <div className="bg-white rounded-[100px] shrink-0 size-[18px]" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <OptionToggle text="Requires Key" toggled={false} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      
      {/* Technicals Section */}
      <div className="basis-0 bg-[rgba(219,219,219,0)] grow h-full min-h-px min-w-px relative shrink-0">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto px-[24px] py-[12px] relative size-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]">
            Technicals
          </p>
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[530px] items-start px-0 py-[12px] relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                    Serial Number
                  </p>
                  <div className="bg-[rgba(24,29,31,0.15)] box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                      <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="basis-0 font-['JetBrains_Mono:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px opacity-[0.62] relative shrink-0 text-[#181d1f] text-[16px] tracking-[1px]">
                          SN0038490394
                        </p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
                  </div>
                </div>
              </div>
              <MeterInput label="Unit of Measurement " data="GALLONS" />
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <MeterInput label="Multiplier" data="1.0000" />
              <MeterInput label="Install Date" data="Jan 20, 2023" />
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                    Previous Reading
                  </p>
                  <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0">
                      <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="basis-0 font-['IBM_Plex_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]">
                          12,239 m3
                        </p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" />
                  </div>
                </div>
              </div>
              <MeterInput label="MXU Type" data="N/A" />
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <MeterInput label="MXU Firmware" data="7.4.2" />
              <MeterInput label="Installation Type" data="Curb Stop" />
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <MeterInput label="Environment" data="Pit" />
              <MeterInput label="Rate Class" data="Industrial" />
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <MeterInput label="Elevation" data="191.00 ft" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                  Make Changes
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#be613e] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre">
                    Disabled
                  </p>
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0">
                    <Toggle size="Small" state="Disabled" toggleOnly="True" toggled="False" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      </div>
      
      {/* Readings Section */}
      <div className="bg-[rgba(219,219,219,0)] box-border content-stretch flex flex-col gap-[16px] h-full items-start overflow-x-clip overflow-y-auto p-[12px] relative shrink-0 w-[300px]">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]">
          Readings
        </p>
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[224px] items-start pb-0 pt-[12px] px-0 relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[24px]">
                <div className="absolute inset-[18.75%_3.13%]">
                  <img alt="" className="block max-w-none size-full" src={img14} />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                Current Reading
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                  98,980.70 m<span className="text-[9.03px]">3</span>
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[24px]">
                <div className="absolute inset-[12.5%_12.52%_12.5%_9.38%]">
                  <img alt="" className="block max-w-none size-full" src={img15} />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                Previous Reading
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                  12,286.13 m<span className="text-[9.03px]">3</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[16px]">
                <div className="absolute inset-[18.748%]">
                  <img alt="" className="block max-w-none size-full" src={img18} />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                Multiplier
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                  1.0000
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]">
              <div className="relative shrink-0 size-[24px]">
                <div className="absolute inset-[9.38%_9.38%_18.75%_9.38%]">
                  <img alt="" className="block max-w-none size-full" src={img19} />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre">
                Consumption
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#3a99ff] text-[16px] text-nowrap tracking-[0.16px] whitespace-pre">
                  85,844.70 m<span className="text-[10.32px]">3</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[4px] shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[6px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              <div className="h-[20px] relative shrink-0 w-[16px]">
                <div className="absolute left-[-4px] size-[20px] top-0">
                  <div className="absolute bottom-1/4 left-[6.25%] right-[6.25%] top-[15.63%]">
                    <img alt="" className="block max-w-none size-full" src={img20} />
                  </div>
                </div>
              </div>
              <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.4px] whitespace-pre">
                View Readings
              </p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.87)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}
