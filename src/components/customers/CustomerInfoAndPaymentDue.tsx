'use client';

import { CreditCard, Sliders, FileText, ChatCircle, LinkSimple } from '@phosphor-icons/react';

const img = "http://localhost:3845/assets/7e12644f5d4bc45f7e30c1124fcbf91ab4c8349f.svg";
const img1 = "http://localhost:3845/assets/a0f467b4b321e37e21f8a9e6824e16a9e98c4c8a.svg";

interface CustomerInfoAndPaymentDueProps {
  customer: {
    name: string;
    accountNumber: string;
    status: string;
    address: string;
    createdDate: string;
  };
  billingData: {
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

export default function CustomerInfoAndPaymentDue({ customer, billingData }: CustomerInfoAndPaymentDueProps) {
  return (
    <div className="relative w-full" data-name="Customer Info and Payment Due" data-node-id="13:600">
      <div className="box-border content-stretch flex gap-[24px] items-start max-h-inherit pb-[24px] pt-[16px] px-[16px] relative w-full">
        {/* Personal Info Section */}
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[154px] items-start min-h-px min-w-px relative shrink-0 flex-1" data-name="Personal Info" data-node-id="13:7477">
          {/* Customer Name and ID */}
          <div className="box-border content-stretch flex flex-col gap-[16px] h-[40px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="Customer Name and ID" data-node-id="13:674">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Customer Name Container" data-node-id="13:7748">
              <p className="font-['Inter:Regular',_sans-serif] font-normal h-[24px] leading-[18px] not-italic relative shrink-0 text-[24px] text-black tracking-[0.16px] w-[188px]" data-node-id="13:653">
                {customer.name}
              </p>
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0380d9] text-[15px] text-nowrap tracking-[0.16px]" data-node-id="28:2987">
                <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">({customer.accountNumber})</p>
              </div>
              <div className="box-border content-stretch flex gap-[5px] h-[30px] items-center justify-center px-[10px] py-0 relative rounded-[100px] shrink-0" data-name="ButtonPill" data-node-id="13:7736">
                <div aria-hidden="true" className="absolute border border-[#dee0e1] border-solid inset-0 pointer-events-none rounded-[100px]" />
                <div className="content-stretch flex gap-[4px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Text" data-node-id="I13:7736;29:2281">
                  <p className="font-['SF_Pro_Text:Medium',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#636466] text-[13px] text-nowrap whitespace-pre" data-node-id="I13:7736;29:2282">
                    {customer.status}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Container */}
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Address Container" data-node-id="57:1036">
            <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-name="Address Info" data-node-id="57:1037">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="57:1038">
                Primary Address
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Address Details" data-node-id="57:1039">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[326px]" data-node-id="57:1040">
                  {customer.address}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-[12px] h-[30px] items-start relative shrink-0 w-full" data-name="Action Buttons" data-node-id="13:11079">
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:10362">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:10362;9974:114865">
                  <CreditCard size={16} className="text-[rgba(0,0,0,0.87)]" />
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:10362;9974:114869">
                    Make a Payment
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11080">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11080;9974:114865">
                  <Sliders size={16} className="text-[rgba(0,0,0,0.87)]" />
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11080;9974:114869">
                    Adjustment
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11086">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11086;9974:114865">
                  <FileText size={16} className="text-[rgba(0,0,0,0.87)]" />
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11086;9974:114869">
                    Final/Direct Bill
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11092">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11092;9974:114865">
                  <ChatCircle size={16} className="text-[rgba(0,0,0,0.87)]" />
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11092;9974:114869">
                    Add Comment
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.33)] hover:border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] transition-all duration-200" />
            </div>
            <div className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" data-name="<Button>" data-node-id="13:11098">
              <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[10px] py-[4px] relative">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I13:11098;9974:114865">
                  <LinkSimple size={16} className="text-[rgba(0,0,0,0.87)]" />
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[0.46px] whitespace-pre" data-node-id="I13:11098;9974:114869">
                    Link to Parcel
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
                  {customer.createdDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Info Section */}
        <div className="box-border content-stretch flex gap-[24px] h-[154px] items-start px-[8px] py-0 relative shrink-0 flex-1 min-w-0" data-name="Billing Info" data-node-id="13:7490">
          {/* Payment Summary */}
          <div className="box-border content-stretch flex flex-col h-[140px] items-start flex-1 min-w-0 pl-0 pr-[6px] py-0 relative shrink-0" data-name="Container" data-node-id="23:2771">
            <div aria-hidden="true" className="absolute border-[#cfcfcf] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-full" data-name="Payment Due Container" data-node-id="32:3385">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region - pass due pay immediately" data-node-id="23:2772">
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[13.711px] w-full" data-node-id="23:2773">
                  <p className="leading-[21px]">Next Payment Due</p>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start pb-0 pt-[5.878px] px-0 relative shrink-0 w-[216px]" data-name="Region - pass due amount" data-node-id="23:2774">
                <div className="box-border content-stretch flex items-start pl-0 pr-[0.661px] py-0 relative shrink-0" data-name="Container" data-node-id="23:2775">
                  <div className="box-border content-stretch flex flex-col items-start mr-[-0.661px] relative shrink-0" data-name="Container" data-node-id="23:2776">
                    <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[19.102px] text-nowrap" data-node-id="23:2777">
                      <p className="leading-[19.102px] whitespace-pre">$</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start mr-[-0.661px] relative shrink-0" data-name="Container" data-node-id="23:2778">
                    <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[39.088px] text-nowrap" data-node-id="23:2779">
                      <p className="leading-[35.265px] whitespace-pre">{billingData.nextPaymentDue.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-[8px] items-center leading-[18px] not-italic pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-name="Past Due Container" data-node-id="32:3381">
              <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#313131] text-[14px]" data-node-id="32:3382">
                Past Due
              </p>
              <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[#c93500] text-[16px]" data-node-id="32:3383">
                ${billingData.pastDue.toFixed(2)}
              </p>
            </div>
            <div className="box-border content-stretch flex gap-[8px] items-center leading-[18px] not-italic pb-[8px] pt-0 px-0 relative shrink-0 text-nowrap tracking-[0.16px] whitespace-pre" data-name="Last Payment Container" data-node-id="57:1054">
              <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#313131] text-[14px]" data-node-id="57:1055">{`Last payment of `}</p>
              <p className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] text-black" data-node-id="57:1056">
                ${billingData.lastPayment.amount.toFixed(2)}
              </p>
              <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#313131] text-[14px]" data-node-id="57:1058">
                made on {billingData.lastPayment.date}
              </p>
            </div>
          </div>

          {/* Service Breakdown */}
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Service Info Container" data-node-id="29:3039">
            {billingData.services.map((service, index) => (
              <div key={index} className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name={`${service.name.replace(/\s/g, '')} Container`} data-node-id={`service-${index}`}>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name={`${service.name.replace(/\s/g, '')} Info`} data-node-id={`service-info-${index}`}>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name={`${service.name.replace(/\s/g, '')} Details`} data-node-id={`service-details-${index}`}>
                    <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#0355d9] text-[14px] text-nowrap whitespace-pre" data-node-id={`service-label-${index}`}>
                      {service.name}
                    </p>
                    <div className="content-stretch flex gap-[8px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-name={`${service.name.replace(/\s/g, '')} Amount Container`} data-node-id={`service-amount-${index}`}>
                      <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#7b7b7b]" data-node-id={`service-current-label-${index}`}>
                        Current
                      </p>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-black" data-node-id={`service-current-amount-${index}`}>
                        ${service.current.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {service.pastDue > 0 && (
                    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name={`${service.name.replace(/\s/g, '')} Past Due Container`} data-node-id={`service-past-due-${index}`}>
                      <div className="content-stretch flex gap-[8px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-name={`${service.name.replace(/\s/g, '')} Past Due Info`} data-node-id={`service-past-due-info-${index}`}>
                        <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#7b7b7b]" data-node-id={`service-past-due-label-${index}`}>
                          Past Due
                        </p>
                        <p className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#c93500]" data-node-id={`service-past-due-amount-${index}`}>
                          ${service.pastDue.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
