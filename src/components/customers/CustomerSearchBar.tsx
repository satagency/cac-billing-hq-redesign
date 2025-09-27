'use client';

import { MagnifyingGlass, PencilSimple, Plus, ArrowLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

interface CustomerSearchBarProps {
  showBackButton?: boolean;
}

export default function CustomerSearchBar({ showBackButton = false }: CustomerSearchBarProps) {
  const router = useRouter();

  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative size-full" data-name="Search" data-node-id="78:23956">
      {showBackButton && (
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="157:29672">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-[10px] hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={16} className="text-[#0380d9]" />
            <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#0380d9] text-[15px] underline">
              Back
            </span>
          </button>
        </div>
      )}
      <button className="box-border content-stretch cursor-pointer flex h-[48px] items-center overflow-visible p-0 relative rounded-[14px] shrink-0 w-[789px]" data-name="Search - Default" data-node-id="78:23944">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center p-[16px] relative shrink-0" data-name="Search icon" data-node-id="I78:23944;11988:340981">
          <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply overflow-clip relative shrink-0 size-[16px]" data-name="Search" data-node-id="I78:23944;11988:340982">
            <MagnifyingGlass className="size-[16px] text-[#a8a8a8]" />
          </div>
        </div>
        <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Hide text overflow" data-node-id="I78:23944;11988:340983">
          <p className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-[18px] leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#a8a8a8] text-[14px] tracking-[0.16px]" data-node-id="I78:23944;11988:340984">
            Search customers by number, name, service address, mailing address...
          </p>
        </div>
      </button>
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Edit and New Customer" data-node-id="78:27200">
        <div className="bg-[#e0e0e0] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>" data-node-id="78:26548">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I78:26548;9974:112989">
            <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.24px] whitespace-pre" data-node-id="I78:26548;9974:112993">
              Edit
            </p>
            <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Masked Icon" data-node-id="I78:26548;9974:112994">
              <PencilSimple className="size-[18px] text-[rgba(0,0,0,0.87)]" />
            </div>
          </div>
        </div>
        <div className="bg-[#e0e0e0] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] shrink-0" data-name="<Button>" data-node-id="78:27149">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I78:27149;9974:112989">
            <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.24px] whitespace-pre" data-node-id="I78:27149;9974:112993">
              New Customer
            </p>
            <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Masked Icon" data-node-id="I78:27149;9974:112994">
              <Plus className="size-[18px] text-[rgba(0,0,0,0.87)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
