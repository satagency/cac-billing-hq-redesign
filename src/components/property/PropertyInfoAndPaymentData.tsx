'use client';


interface PropertyInfoAndPaymentDataProps {
  property: {
    name: string;
    accountNumber: string;
    status: string;
    address: string;
    createdDate: string;
  };
  propertyData: {
    nextPaymentDue: number;
    pastDue: number;
    lastPayment: {
      amount: number;
      date: string;
    };
    services: Array<{
      name: string;
      current: number;
      pastDue: number;
    }>;
  };
}

export default function PropertyInfoAndPaymentData({ property, propertyData }: PropertyInfoAndPaymentDataProps) {
  return (
    <div className="relative w-full" data-name="Property Info and Payment Data" data-node-id="13:600">
      <div className="box-border content-stretch flex gap-[24px] items-start max-h-inherit pb-[24px] pt-[16px] px-[16px] relative size-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[154px] items-start min-h-px min-w-px relative shrink-0" data-name="Property Info" data-node-id="13:7477">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[40px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="Property Name and ID" data-node-id="13:674">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Property Name Container" data-node-id="13:7748">
              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[18px] not-italic relative shrink-0 text-[24px] text-black tracking-[0.16px] w-[188px]" data-node-id="13:653">
                {property.name}
              </p>
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0380d9] text-[15px] text-nowrap tracking-[0.16px]" data-node-id="28:2987">
                <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">({property.accountNumber})</p>
              </div>
              <div className="box-border content-stretch flex gap-[5px] h-[30px] items-center justify-center px-[10px] py-0 relative rounded-[100px] shrink-0 w-[100px]" data-name="Status Badge" data-node-id="13:7750">
                <div className="bg-[#e8f5e8] relative rounded-[100px] shrink-0 w-[100px]" data-name="Status Background" data-node-id="13:7751">
                  <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0" data-name="Status Content" data-node-id="13:7752">
                      <div className="h-[8px] relative shrink-0 w-[8px]" data-name="Status Indicator" data-node-id="13:7753">
                        <div className="bg-[#43a047] relative rounded-[100px] size-full" />
                      </div>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-[#43a047] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="13:7754">
                        {property.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[12px] h-[30px] items-start relative shrink-0 w-full" data-name="Action Buttons" data-node-id="13:11079">
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:10362">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:10362;9974:114865">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:10362;9974:114869">
                    Pay Taxes
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11080">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11080;9974:114865">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11080;9974:114869">
                    Assessment
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11086">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11086;9974:114865">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11086;9974:114869">
                    Utilities
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
          </div>

          {/* Created Date Container */}
          <div className="content-stretch flex flex-col gap-[20px] h-[18px] items-start justify-center relative shrink-0 w-full" data-name="Created Date Container" data-node-id="57:1044">
            <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-[282px]" data-name="Created Date Info" data-node-id="57:1045">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic opacity-60 relative shrink-0 text-[10px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="57:1046">
                Created
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Created Date Details" data-node-id="57:1047">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[10px] text-[rgba(0,0,0,0.5)] tracking-[0.16px] w-[57px]" data-node-id="57:1048">
                  {property.createdDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info Section */}
        <div className="box-border content-stretch flex gap-[24px] h-[154px] items-start px-[8px] py-0 relative shrink-0 w-[646px]" data-name="Payment Info" data-node-id="13:7490">
          {/* Payment Summary */}
          <div className="box-border content-stretch flex flex-col h-[140px] items-start max-w-[300px] pl-0 pr-[6px] py-0 relative shrink-0 w-[300px]" data-name="Container" data-node-id="23:2771">
            <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-[300px]" data-name="Payment Due Container" data-node-id="32:3385">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region - next payment due" data-node-id="23:2772">
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[13.711px] w-full" data-node-id="23:2773">
                  <p className="leading-[21px]">Next Payment Due</p>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start pb-0 pt-[5.878px] px-0 relative shrink-0 w-[216px]" data-name="Region - payment due amount" data-node-id="23:2774">
                <div className="box-border content-stretch flex items-start pl-0 pr-[0.661px] py-0 relative shrink-0" data-name="Container" data-node-id="23:2775">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1d2329] text-[20px] tracking-[0.16px] w-[216px]" data-node-id="23:2776">
                    ${propertyData.nextPaymentDue.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[62px] items-start relative shrink-0 w-[300px]" data-name="Payment Summary" data-node-id="23:2777">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Payment Details" data-node-id="23:2778">
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Past Due Row" data-node-id="23:2779">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[60px]" data-node-id="23:2780">
                    Past Due:
                  </p>
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[40px]" data-node-id="23:2781">
                    ${propertyData.pastDue.toFixed(2)}
                  </p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Last Payment Row" data-node-id="23:2782">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[80px]" data-node-id="23:2783">
                    Last Payment:
                  </p>
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[60px]" data-node-id="23:2784">
                    ${propertyData.lastPayment.amount.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="box-border content-stretch flex flex-col h-[140px] items-start max-w-[300px] pl-[8px] pr-0 py-0 relative shrink-0 w-[300px]" data-name="Services Container" data-node-id="23:2785">
            <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-[300px]" data-name="Services Header" data-node-id="23:2786">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region - services" data-node-id="23:2787">
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[13.711px] w-full" data-node-id="23:2788">
                  <p className="leading-[21px]">Services</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[62px] items-start relative shrink-0 w-[300px]" data-name="Services List" data-node-id="23:2789">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Services Details" data-node-id="23:2790">
                {propertyData.services.map((service, index) => (
                  <div key={index} className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Service Row" data-node-id={`23:${2791 + index}`}>
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[120px]" data-node-id={`23:${2792 + index}`}>
                      {service.name}:
                    </p>
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#1d2329] text-[12px] tracking-[0.16px] w-[40px]" data-node-id={`23:${2793 + index}`}>
                      ${service.current.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
