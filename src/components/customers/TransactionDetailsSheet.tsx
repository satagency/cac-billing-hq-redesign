'use client';

import { useState, useEffect } from 'react';

interface Transaction {
  id: string;
  date: string;
  reference: string;
  description: string;
  type: string;
  amount: number;
  runningBalance: number;
}

interface TransactionDetailsSheetProps {
  transaction: Transaction | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
}

export default function TransactionDetailsSheet({ transaction, isOpen, onClose, onEdit }: TransactionDetailsSheetProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen || !transaction) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50 overflow-hidden">
      {/* Overlay with white background at 80% transparency */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-300 ${
          isVisible ? 'opacity-80' : 'opacity-0'
        }`} 
        onClick={onClose}
      ></div>

      {/* Slide-out sheet with animation */}
      <div 
        className={`absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-name="Sheet" 
        data-node-id="129:28301"
      >
        <div className="flex flex-col h-full">
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="content-stretch flex flex-col gap-[16px] items-start">
              {/* Water Payment Header */}
              <div className="bg-[#eeeeee] box-border content-stretch flex h-[68px] items-center justify-between pl-[16px] pr-[4px] py-0 relative shrink-0 w-full" data-name="Water Payment Header" data-node-id="129:28302">
                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[18px] min-h-px min-w-px not-italic relative shrink-0 tracking-[0.16px]" data-name="Water Payment Header Inner" data-node-id="129:28303">
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[22px] text-black w-[202px]" data-node-id="129:28304">
                    Water Payment
                  </p>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#313131] text-[13px] text-nowrap whitespace-pre" data-node-id="129:28305">
                    {transaction.reference}
                  </p>
                </div>
              </div>

              {/* Water Payment Details */}
              <div className="bg-white relative shrink-0 w-full" data-name="Water Payment Details" data-node-id="129:28306">
                <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] pl-[16px] pr-[12px] pt-[12px] relative w-full">
                  <div className="box-border content-stretch flex flex-col h-[126px] items-start max-w-[300px] pl-0 pr-[6px] py-0 relative shrink-0 w-[300px]" data-name="Container" data-node-id="129:28307">
                    <div className="content-stretch flex flex-col h-[78px] items-start relative shrink-0 w-[300px]" data-name="Amount Container" data-node-id="129:28308">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Region - pass due pay immediately" data-node-id="129:28309">
                        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[13.711px] w-full" data-node-id="129:28310">
                          <p className="leading-[21px]">Amount</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex items-start pb-0 pt-[5.878px] px-0 relative shrink-0 w-[216px]" data-name="Region - pass due amount" data-node-id="129:28311">
                        <div className="box-border content-stretch flex items-start pl-0 pr-[0.661px] py-0 relative shrink-0" data-name="Container" data-node-id="129:28312">
                          <div className="box-border content-stretch flex flex-col items-start mr-[-0.661px] relative shrink-0" data-name="Container" data-node-id="129:28313">
                            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[19.102px] text-nowrap" data-node-id="129:28314">
                              <p className="leading-[19.102px] whitespace-pre">$</p>
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col items-start mr-[-0.661px] relative shrink-0" data-name="Container" data-node-id="129:28315">
                            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d2329] text-[30px] text-nowrap" data-node-id="129:28316">
                              <p className="leading-[35.265px] whitespace-pre">{transaction.amount.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[300px]" data-name="Transaction Dates Container" data-node-id="129:28317">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Transaction Date Container" data-node-id="129:28318">
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28319">
                          Transaction Date
                        </p>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Transaction Date Value Container" data-node-id="129:28320">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28321">
                            {transaction.date}
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Due Date Container" data-node-id="129:28322">
                        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28323">
                          Due Date
                        </p>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Due Date Value Container" data-node-id="129:28324">
                          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28325">
                            08/24/2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]" data-node-id="129:28326">
                    Transaction Information
                  </p>
                  <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[300px]" data-name="Transaction Information Container" data-node-id="129:28327">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Reference Number Container" data-node-id="129:28328">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28329">
                        Reference Number
                      </p>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Reference Number Value Container" data-node-id="129:28330">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28331">
                          {transaction.reference}
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Transaction Number Container" data-node-id="129:28332">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28333">
                        Transaction Number
                      </p>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Transaction Number Value Container" data-node-id="129:28334">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28335">
                          157
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Customer Info Container" data-node-id="129:28336">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]" data-name="Customer Info Container Inner" data-node-id="129:28337">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28338">
                        Customer
                      </p>
                      <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-name="Customer Name Container" data-node-id="129:28339">
                        <p className="relative shrink-0" data-node-id="129:28340">
                          Amy Brown
                        </p>
                        <p className="relative shrink-0" data-node-id="129:28341">
                          (AC1007)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[202px]" data-name="Service Address Container" data-node-id="129:28347">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[202px]" data-name="Service Address Container Inner" data-node-id="129:28348">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28349">
                        Service Address
                      </p>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Service Address Line 1 Container" data-node-id="129:28350">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="129:28351">
                          1292 West Berry Street
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Service Address Line 2 Container" data-node-id="129:28352">
                        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="129:28353">
                          Scranton, PA 38299
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
              </div>

              {/* Additional Information Container - Now Scrollable */}
              <div className="bg-[rgba(219,219,219,0)] box-border content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto p-[12px] relative shrink-0 w-full" data-name="Additional Information Container" data-node-id="129:28354">
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]" data-node-id="129:28355">
                  Additional Information
                </p>
                <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-[300px]" data-name="Additional Information Content" data-node-id="129:28356">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Transaction Group Container" data-node-id="129:28357">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28358">
                      Transaction Group
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Transaction Group Value Container" data-node-id="129:28359">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28360">
                        8
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Created Container" data-node-id="129:28361">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28362">
                      Created
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Created Value Container" data-node-id="129:28363">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28364">
                        08/24/2024 5:06 AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Group Description Container" data-node-id="129:28365">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]" data-name="Group Description Container Inner" data-node-id="129:28366">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="129:28367">
                      Group Description
                    </p>
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Group Description Value" data-node-id="129:28368">
                      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[282px]" data-node-id="129:28369">
                        This transaction for bill pay was posted from session CYCLE-2809830482783
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Action Buttons Container at Bottom - Account for footer */}
          <div className="bg-neutral-100 box-border content-stretch flex flex-col gap-[10px] h-[66px] items-end px-0 py-[4px] relative shrink-0 w-full mb-[30px]" data-name="Action Buttons Container" data-node-id="129:28370">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-end p-[8px] relative shrink-0 w-full" data-name="Action Buttons Inner" data-node-id="129:28371">
              <button 
                onClick={onClose}
                className="bg-[#e0e0e0] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 hover:bg-[#d0d0d0] transition-colors" 
                data-name="<Button>" 
                data-node-id="129:28372"
              >
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I129:28372;9974:112989">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.24px] whitespace-pre" data-node-id="I129:28372;9974:112993">
                    Close
                  </p>
                </div>
              </button>
              <button 
                onClick={onEdit}
                className="bg-black box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0 hover:bg-gray-800 transition-colors" 
                data-name="<Button>" 
                data-node-id="129:28373"
              >
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I129:28373;9974:113659">
                  <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.24px] whitespace-pre" data-node-id="I129:28373;9974:113663">
                    Edit Transaction
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}