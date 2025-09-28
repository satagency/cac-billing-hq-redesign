'use client';

import React from 'react';

// Image assets from Figma
const imgScreenshot20250908At125402Pm1 = "http://localhost:3845/assets/5f62b773d93bab6964cbfc1a2dda85b238a0fd47.png";
const imgImage4 = "http://localhost:3845/assets/9be7a7b35def8c7d7330ad238d3de91d23602ead.png";
const img = "http://localhost:3845/assets/ffc546900905ab99f01844c2d124fe51cd74f745.svg";
const img1 = "http://localhost:3845/assets/18daaa1fcfa0100e37edacbd9fce5117a2970d05.svg";
const img2 = "http://localhost:3845/assets/fcd3269feffd3809718948a812ca0896272b317c.svg";
const img3 = "http://localhost:3845/assets/1e62253c086251799a2bc7b2cbba3abdde1ff1b7.svg";
const img4 = "http://localhost:3845/assets/42e6d5fc0c1ca0ffe4e185120ccd7eaf345fd011.svg";
const img5 = "http://localhost:3845/assets/ba65635b929dd572b7a0e19eb7bc336de442716f.svg";
const img6 = "http://localhost:3845/assets/e290ddd12deabf364d8139e39068d8fa8d8a53de.svg";
const img7 = "http://localhost:3845/assets/f8cd3fcdaa42d3391c4a7aac42edb701cab0926d.svg";
const img8 = "http://localhost:3845/assets/0a20c2476f33582c49af146a2561e72d46a8d540.svg";
const img9 = "http://localhost:3845/assets/130c749b626328a8a99b5497c06ef77866269a38.svg";
const img10 = "http://localhost:3845/assets/ce421a03aaef25f7a239cf329913fedb29f811ee.svg";
const img11 = "http://localhost:3845/assets/387d3ecef9e2a0a3224594c8c30899edcfdadbe2.svg";
const img12 = "http://localhost:3845/assets/0bf3480f1fc6d1edf799ecd55190551534246ad9.svg";
const img13 = "http://localhost:3845/assets/fcc8401cd5a575efc10866e6c696d9f554097bf3.svg";
const img14 = "http://localhost:3845/assets/011649031a18d2a3ee7e5909ac13aa314c7c609e.svg";
const img15 = "http://localhost:3845/assets/a7dd4f75cdff2a9b60686a2c11b0d8decb95ad1d.svg";
const img16 = "http://localhost:3845/assets/fcaa21a145a602d8b43c1d850d609a00def9e5d5.svg";
const img17 = "http://localhost:3845/assets/9c1ae82124753366f8ed58b4692638e76fea3d77.svg";
const img18 = "http://localhost:3845/assets/75be68bd43d429d048466fb3d5995000d762ae15.svg";
const img19 = "http://localhost:3845/assets/2c6aeb377cc9a00157ec5f3ae90acb01e827e428.svg";
const img20 = "http://localhost:3845/assets/7ac41452486d3268326c3f9a49f5fa30c4776b90.svg";

interface ToggleProps {
  labelText?: string;
  stateText?: string;
  showLabel?: boolean;
  showValue?: boolean;
  size?: "Default" | "Small";
  state?: "Enabled" | "Focus" | "Disabled" | "Skeleton" | "Read-only";
  toggleOnly?: "False" | "True";
  toggled?: "False" | "True";
}

function Toggle({ labelText = "Label", stateText = "Current state", showLabel = true, showValue = true, size = "Default", state = "Enabled", toggleOnly = "False", toggled = "True" }: ToggleProps) {
  if (size === "Default" && state === "Enabled" && toggleOnly === "True" && toggled === "True") {
    return (
      <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply p-0 relative size-full" data-name="Size=Default, State=Enabled, Toggle only=True, Toggled=True" data-node-id="54:807">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value" data-node-id="54:808">
          <div className="bg-[#24a148] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]" data-name="_Toggle item" data-node-id="54:809">
            <div className="bg-white rounded-[100px] shrink-0 size-[18px]" data-name="Switch" data-node-id="I54:809;2868:22572" />
          </div>
        </div>
      </button>
    );
  }
  if (size === "Small" && state === "Disabled" && toggleOnly === "True" && toggled === "False") {
    return (
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative size-full" data-name="Size=Small, State=Disabled, Toggle only=True, Toggled=False" data-node-id="54:870">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value" data-node-id="54:871">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Toggle margin" data-node-id="54:872">
            <div className="bg-[#c6c6c6] box-border content-stretch flex gap-[10px] items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item" data-node-id="54:873">
              <div className="bg-[rgba(22,22,22,0.25)] rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" data-node-id="I54:873;3463:33432" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[16px] items-start mix-blend-multiply p-0 relative size-full" data-name="Size=Default, State=Enabled, Toggle only=False, Toggled=True" data-node-id="54:789">
      {showLabel && (
        <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-600 text-nowrap tracking-[0.32px] whitespace-pre" data-node-id="54:790">
          {labelText}
        </p>
      )}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value" data-node-id="54:791">
        <div className="bg-[#24a148] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[48px]" data-name="_Toggle item" data-node-id="54:792">
          <div className="bg-white rounded-[100px] shrink-0 size-[18px]" data-name="Switch" data-node-id="I54:792;2868:22572" />
        </div>
        {showValue && (
          <div className="box-border content-stretch flex items-start px-0 py-[3px] relative shrink-0" data-name="Margin" data-node-id="54:793">
            {showValue && (
              <div className="flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]" data-node-id="54:794">
                <p className="leading-[18px] whitespace-pre">{stateText}</p>
              </div>
            )}
          </div>
        )}
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
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full" data-name="Meter Input" data-node-id="111:30258">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="111:29862">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="111:29863">
          {label}
        </p>
        <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="111:29864">
          <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="111:29865">
            <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="111:29867">
              <p className="basis-0 font-['IBM_Plex_Sans:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="111:29868">
                {data}
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" data-node-id="111:29869" />
        </div>
      </div>
    </div>
  );
}

interface OptionToggleProps {
  text?: string;
}

function OptionToggle({ text = "Requires Key" }: OptionToggleProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full" data-name="Option Toggle" data-node-id="111:30187">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="111:30141">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="111:30142">
          ACH{" "}
        </p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="111:30143">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#181d1f] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="111:30144">
            {text}
          </p>
          <button className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex flex-col gap-[8px] items-start mix-blend-multiply overflow-visible p-0 relative shrink-0" data-name="Toggle" data-node-id="111:30145">
            <Toggle toggleOnly="True" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MeterFirstColumn() {
  return (
    <div className="h-full relative shrink-0 w-[242px]" data-name="Sidebar" data-node-id="106:23893">
      <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip px-0 py-[8px] relative w-[242px]">
        {/* Account Info Section */}
        <div className="bg-white relative shrink-0 w-full" data-name="Account Info" data-node-id="106:23894">
          <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] pl-[16px] pr-[12px] pt-[12px] relative w-full">
            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]" data-node-id="106:23895">
              Meter
            </p>
            
            {/* Unit of Measurement */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Contact Info" data-node-id="106:23896">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="106:26149">
                <div className="relative shrink-0 size-[24px]" data-name="Ruler" data-node-id="106:26150">
                  <div className="absolute inset-[6.25%]" data-name="Vector" data-node-id="I106:26150;8899:32615">
                    <img alt="" className="block max-w-none size-full" src={img12} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Contact Info Container" data-node-id="106:23897">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:23898">
                  Unit of Measurement
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Cell Phone Number Container" data-node-id="106:23899">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:23900">
                    Gallons
                  </p>
                </div>
              </div>
            </div>
            
            {/* Meter Size */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="106:26205">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="106:26206">
                <div className="relative shrink-0 size-[24px]" data-name="ArrowsOut" data-node-id="106:26207">
                  <div className="absolute inset-[15.625%]" data-name="Vector" data-node-id="I106:26207;8899:78405">
                    <img alt="" className="block max-w-none size-full" src={img13} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-node-id="106:26208">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26209">
                  Meter Size
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="106:26210">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26211">
                    1.5"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Current Reading */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="106:26214">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="106:26215">
                <div className="relative shrink-0 size-[24px]" data-name="Eye" data-node-id="106:26216">
                  <div className="absolute inset-[18.75%_3.13%]" data-name="Vector" data-node-id="I106:26216;8899:29294">
                    <img alt="" className="block max-w-none size-full" src={img14} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-node-id="106:26217">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26218">
                  Current Reading
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="106:26219">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26220">
                    98,980.70 m<span className="text-[9.03px]">3</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Previous Reading */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="106:26680">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="106:26681">
                <div className="relative shrink-0 size-[24px]" data-name="ClockCounterClockwise" data-node-id="106:26682">
                  <div className="absolute inset-[12.5%_12.52%_12.5%_9.38%]" data-name="Vector" data-node-id="I106:26682;8899:21740">
                    <img alt="" className="block max-w-none size-full" src={img15} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-node-id="106:26683">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26684">
                  Previous Reading
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="106:26685">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26686">
                    12,286.13 m<span className="text-[9.03px]">3</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Property Address */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[202px]" data-name="Service Address Container" data-node-id="106:23917">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[202px]" data-name="Service Address Container Inner" data-node-id="106:23918">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:23919">
                  Property Address
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Service Address Line 1 Container" data-node-id="106:23920">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="106:23921">
                    1292 West Berry Street
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Service Address Line 2 Container" data-node-id="106:23922">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="106:23923">
                    Scranton, PA 38299
                  </p>
                </div>
              </div>
            </div>
            
            {/* Customer */}
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[202px]" data-node-id="106:26512">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[202px]" data-node-id="106:26513">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:26514">
                  Customer
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="106:26515">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="106:26516">
                    Bill McNeal
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="106:26517">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="106:26518">
                    Scranton, PA 38299
                  </p>
                </div>
              </div>
            </div>
            
            {/* Edit Meter Button */}
            <div className="relative rounded-[4px] shrink-0 w-full" data-name="<Button>" data-node-id="106:26520">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I106:26520;9980:114064">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I106:26520;9980:114065">
                    Edit Meter
                  </p>
                  <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon" data-node-id="I106:26520;9988:113471">
                    <div className="absolute left-0 size-[18px] top-0" data-name="Format=Outline, Weight=Regular" data-node-id="I106:26520;9988:113472">
                      <div className="absolute inset-[9.37%_9.37%_12.5%_12.5%]" data-name="Vector" data-node-id="I106:26520;9988:113472;8899:59881">
                        <img alt="" className="block max-w-none size-full" src={img16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.87)] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        </div>
        
        {/* Meter Image */}
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[11px] relative shrink-0 w-full" data-node-id="111:29080">
          <div className="bg-[rgba(255,255,255,0.59)] box-border content-stretch flex flex-col gap-[4.424px] items-center justify-center pb-[19px] pt-[12px] px-[4.424px] relative rounded-[4.958px] shrink-0 size-[214px]" data-node-id="111:29074">
            <div aria-hidden="true" className="absolute border-[1.653px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4.958px]" />
            <div className="h-[187px] relative shrink-0 w-[186px]" data-name="image 4" data-node-id="111:29077">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
            </div>
            <div className="absolute content-stretch flex gap-[10px] h-[14px] items-center justify-end left-[9px] top-[12px] w-[196px]" data-node-id="111:29075">
              <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 size-[20px]" data-name="NotePencil" data-node-id="111:29076">
                <div className="absolute inset-[9.37%_9.37%_12.5%_12.5%]" data-name="Vector" data-node-id="I111:29076;8899:59881">
                  <img alt="" className="block max-w-none size-full" src={img17} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
