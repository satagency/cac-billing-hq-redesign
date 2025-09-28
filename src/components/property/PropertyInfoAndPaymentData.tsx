'use client';

import React from 'react';

// Image assets from Figma
const imgScreenshot20250908At125402Pm1 = "http://localhost:3845/assets/5f62b773d93bab6964cbfc1a2dda85b238a0fd47.png";
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
const img11 = "http://localhost:3845/assets/39300efea9cc6a1ce10012597dc14ac3601a7132.svg";
const img12 = "http://localhost:3845/assets/a7836491a7ae9f3525b4896174dfb6b5b68be346.svg";
const img13 = "http://localhost:3845/assets/0a2832836ee5656a341727f6c061fd36957e60b3.svg";
const img14 = "http://localhost:3845/assets/c32f18361ef7bf79db1504d119cd7837089ea7ae.svg";
const img15 = "http://localhost:3845/assets/7e12644f5d4bc45f7e30c1124fcbf91ab4c8349f.svg";
const img16 = "http://localhost:3845/assets/b86f39d89a284b045b4766b1d1892ea7b64094a8.svg";
const img17 = "http://localhost:3845/assets/fcc8401cd5a575efc10866e6c696d9f554097bf3.svg";
const img18 = "http://localhost:3845/assets/31d2be01328e1c9f54fea1294ea0ff06711185de.svg";
const img19 = "http://localhost:3845/assets/0e06e7f9749c3880c741db8243f4705e691b001f.svg";
const img20 = "http://localhost:3845/assets/e14eee63d462bdc81813dd5afb3f14d0c176e90b.svg";
const img21 = "http://localhost:3845/assets/fcaa21a145a602d8b43c1d850d609a00def9e5d5.svg";
const img22 = "http://localhost:3845/assets/011649031a18d2a3ee7e5909ac13aa314c7c609e.svg";

// Mock property data - in a real app, this would come from an API
const mockProperty = {
  name: 'Property #12345',
  propertyNumber: 'par000001',
  serialNumber: 'SN0903904-93',
  model: 'Residential Property',
  type: 'Residential',
  status: 'Active',
  address: '12920 Third Street Scranton, PA 30390',
  installedDate: '3/15/2015',
  currentReading: 250000,
  previousReading: 248000,
  propertyType: 'House',
  size: '2,500 sq ft',
  coordinates: { lat: 40.054300, lng: -75.062100 },
  consumption: {
    current: 1450.83,
    allTime: 79715.91,
    temperature: 30.2
  },
  customer: {
    name: 'John Smith',
    accountNumber: 'ACC-123456',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567'
  }
};

const mockPropertyData = {
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

interface PropertyInfoAndPaymentDataProps {
  property: typeof mockProperty;
  propertyData: typeof mockPropertyData;
}

export default function PropertyInfoAndPaymentData({ property, propertyData }: PropertyInfoAndPaymentDataProps) {
  return (
    <div className="bg-[rgba(14,205,0,0.15)] max-h-[190px] relative shrink-0 w-full" data-node-id="119:27852">
      <div className="box-border content-stretch flex gap-[24px] items-start max-h-inherit overflow-clip pb-[24px] pt-[16px] px-[16px] relative w-full">
        <div className="content-stretch flex flex-col gap-[8px] h-[154px] items-start relative shrink-0 w-[767px]" data-node-id="119:27853">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[40px] items-start justify-center px-0 py-[10px] relative shrink-0 w-full" data-node-id="119:27854">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="119:27855">
              <div className="bg-[#43a047] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[36px]" data-node-id="119:27856">
                <div className="relative shrink-0 size-[24px]" data-name="MapPinArea" data-node-id="119:27857">
                  <div className="absolute inset-[7.03%_6.25%_9.38%_6.25%]" data-name="Vector" data-node-id="I119:27857;8899:11258">
                    <img alt="" className="block max-w-none size-full" src={img11} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="141:29772">
                <p className="font-['JetBrains_Mono:Regular',_sans-serif] font-normal h-[24px] leading-[18px] relative shrink-0 text-[24px] text-black tracking-[0.16px] uppercase w-[153px]" data-node-id="119:27858">
                  {property.propertyNumber}
                </p>
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-node-id="141:29767">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-node-id="141:29769">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[326px]" data-node-id="141:29770">
                      {property.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[5px] h-[30px] items-center justify-center px-[10px] py-0 relative rounded-[100px] shrink-0" data-name="ButtonPill" data-node-id="119:27861">
                <div aria-hidden="true" className="absolute border border-[#1f1c18] border-solid inset-0 pointer-events-none rounded-[100px]" />
                <div className="content-stretch flex gap-[4px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Text" data-node-id="I119:27861;29:2281">
                  <p className="font-['SF_Pro_Text:Medium',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1f1c18] text-[13px] text-nowrap whitespace-pre" data-node-id="I119:27861;29:2282">
                    {property.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] h-[66px] items-start relative shrink-0" data-node-id="141:29593">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="141:29594">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="141:29595">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="141:29596">
                  Services
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="141:29597">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="141:29598">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="141:29600">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="141:29601">
                        5
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" data-node-id="141:29602" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="141:29604">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="141:29605">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="141:29606">
                  Customers
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="141:29607">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I141:29607;64:28710">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="I141:29607;64:28712">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="I141:29607;64:28713">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" data-node-id="I141:29607;421:51831" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="141:29608">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="141:29609">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="141:29610">
                  Meters
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="141:29611">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I141:29611;64:28710">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="I141:29611;64:28712">
                      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="I141:29611;64:28713">
                        4
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" data-node-id="I141:29611;421:51831" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[184px]" data-name="Meter Input" data-node-id="141:29612">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="141:29613">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="141:29614">
                  TaxMap ID
                </p>
                <div className="bg-white box-border content-stretch flex h-[32px] items-center min-w-[120px] pl-[8px] pr-0 py-0 relative rounded-[4px] shrink-0 w-[184px]" data-name="Input Cell" data-node-id="141:29615">
                  <div aria-hidden="true" className="absolute border border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="basis-0 content-stretch flex gap-[6px] grow h-[24px] items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container Left" data-node-id="I141:29615;64:28710">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input Text" data-node-id="I141:29615;64:28712">
                      <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#181d1f] text-[16px] tracking-[0.2px]" data-node-id="I141:29615;64:28713">
                        TM0909309
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[10px] items-start pl-0 pr-[6px] py-0 shrink-0" data-name="Container Right" data-node-id="I141:29615;421:51831" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] h-[30px] items-start relative shrink-0 w-full" data-node-id="141:29560">
            <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0" data-name="<Button>" data-node-id="141:29561">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I141:29561;9974:114865">
                  <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon" data-node-id="I141:29561;9974:114867">
                    <div className="absolute bg-[rgba(255,255,255,0)] mix-blend-multiply overflow-clip size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left" data-node-id="I141:29561;9974:114868" style={{ left: "calc(50% - 1px)" }}>
                      <div className="absolute bottom-1/4 left-[6.25%] right-[6.25%] top-[18.75%]" data-name="Vector" data-node-id="I141:29561;9974:114868;19750:664">
                        <img alt="" className="block max-w-none size-full" src={img12} />
                      </div>
                    </div>
                  </div>
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I141:29561;9974:114869">
                    Add Service
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]" />
            </div>
            <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0" data-name="<Button>" data-node-id="141:29562">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I141:29562;9974:114865">
                  <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon" data-node-id="I141:29562;9974:114867">
                    <div className="absolute bg-[rgba(255,255,255,0)] mix-blend-multiply overflow-clip size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left" data-node-id="I141:29562;9974:114868" style={{ left: "calc(50% - 1px)" }}>
                      <div className="absolute inset-[6.25%]" data-name="Vector" data-node-id="I141:29562;9974:114868;1579:182">
                        <img alt="" className="block max-w-none size-full" src={img13} />
                      </div>
                    </div>
                  </div>
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I141:29562;9974:114869">
                    Add Meter
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]" />
            </div>
            <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0" data-name="<Button>" data-node-id="141:29563">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I141:29563;9974:114865">
                  <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon" data-node-id="I141:29563;9974:114867">
                    <div className="absolute size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left" data-node-id="I141:29563;9974:114868" style={{ left: "calc(50% - 1px)" }}>
                      <div className="absolute bottom-[9.37%] left-0 right-0 top-[9.35%]" data-name="Vector" data-node-id="I141:29563;9974:114868;8899:84020">
                        <img alt="" className="block max-w-none size-full" src={img14} />
                      </div>
                    </div>
                  </div>
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I141:29563;9974:114869">
                    Add Customer
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]" />
            </div>
            <div className="bg-[#e0e0e0] relative rounded-[4px] shrink-0" data-name="<Button>" data-node-id="141:29564">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I141:29564;9974:114865">
                  <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Masked Icon" data-node-id="I141:29564;9974:114867">
                    <div className="absolute size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Left" data-node-id="I141:29564;9974:114868" style={{ left: "calc(50% - 1px)" }}>
                      <div className="absolute inset-[9.39%_9.38%_9.37%_9.38%]" data-name="Vector" data-node-id="I141:29564;9974:114868;8899:4546">
                        <img alt="" className="block max-w-none size-full" src={img15} />
                      </div>
                    </div>
                  </div>
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I141:29564;9974:114869">
                    Add Comment
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)]" />
            </div>
          </div>
        </div>
        <div className="basis-0 box-border content-stretch flex gap-[19px] grow items-start min-h-px min-w-px px-0 py-[6px] relative shrink-0" data-node-id="119:27903">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="119:27904">
            <div className="bg-white h-[121px] relative shrink-0 w-[214px]" data-name="Location" data-node-id="119:27905">
              <div className="h-[121px] overflow-clip relative w-[214px]">
                <div className="absolute h-[528.28px] left-[-383.32px] top-[-224.11px] w-[1086.89px]" data-name="Screenshot 2025-09-08 at 12.54.02 PM 1" data-node-id="119:27906">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250908At125402Pm1} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex gap-[6px] h-[24px] items-center relative rounded-[4px] shrink-0 w-[214px]" data-name="Coordinates" data-node-id="119:27907">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[105px]" data-name="Input Text" data-node-id="119:27909">
                <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d1f] text-[14px] text-nowrap tracking-[0.2px] whitespace-pre" data-node-id="119:27910">{`${property.coordinates.lat}, `}</p>
              </div>
              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d1f] text-[14px] text-nowrap tracking-[0.2px] whitespace-pre" data-node-id="119:27911">
                {property.coordinates.lng}
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[12px] h-[143px] items-start pb-0 pt-[2px] px-[6px] relative shrink-0" data-name="Container" data-node-id="119:27912">
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="119:27913">
              <div className="box-border content-stretch flex gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="119:27914">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="119:27915">
                  Consumption:
                </p>
                <p className="font-['JetBrains_Mono:Bold',_sans-serif] font-['JetBrains_Mono:Medium',_sans-serif] font-bold font-medium leading-[18px] relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="119:27916">
                  {property.consumption.current} m<span className="css-qoer80 text-[10.32px]">3</span>
                </p>
              </div>
              <div className="box-border content-stretch flex gap-[8px] items-center pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="119:27917">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="119:27918">
                  All Time:
                </p>
                <p className="font-['JetBrains_Mono:Bold',_sans-serif] font-['JetBrains_Mono:Medium',_sans-serif] font-bold font-medium leading-[18px] relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="119:27919">
                  {property.consumption.allTime} m<span className="css-qoer80 text-[10.32px]">3</span>
                </p>
              </div>
              <div className="box-border content-stretch flex gap-[8px] items-center leading-[18px] pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="119:27920">
                <p className="font-['Inter:Regular',_sans-serif] font-normal not-italic relative shrink-0 text-[#313131] text-[14px]" data-node-id="119:27921">
                  Temp:
                </p>
                <p className="font-['JetBrains_Mono:Medium',_sans-serif] font-medium relative shrink-0 text-[#181d1f] text-[16px]" data-node-id="119:27922">
                  {property.consumption.temperature} ºC
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