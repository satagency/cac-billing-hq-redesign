'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlass, PencilSimple, Plus, ArrowLeft } from '@phosphor-icons/react';

interface SearchBarProps {
  showBackButton?: boolean;
  backUrl?: string;
  searchPlaceholder?: string;
  editButtonText?: string;
  newButtonText?: string;
  onEdit?: () => void;
  onNew?: () => void;
}

export default function SearchBar({ 
  showBackButton = false, 
  backUrl = '/',
  searchPlaceholder = "Search customers by number, name, service address, mailing address...",
  editButtonText = "Edit",
  newButtonText = "New Customer",
  onEdit,
  onNew
}: SearchBarProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const handleBackClick = () => {
    router.push(backUrl);
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit();
    } else {
      console.log('Edit clicked');
    }
  };

  const handleNewClick = () => {
    if (onNew) {
      onNew();
    } else {
      console.log('New clicked');
    }
  };

  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative size-full" data-name="Search" data-node-id="106:23799">
      {showBackButton && (
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200" data-node-id="157:29672" onClick={handleBackClick}>
          <ArrowLeft size={16} className="text-[#0380d9]" />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0380d9] text-[15px] text-nowrap tracking-[0.16px]" data-node-id="157:29628">
            <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">Back</p>
          </div>
        </div>
      )}
      
      <button className="bg-white box-border content-stretch cursor-pointer flex h-[48px] items-center overflow-visible p-0 relative rounded-[14px] shrink-0 w-[789px] hover:shadow-md transition-shadow duration-200" data-name="Search - Default" data-node-id="106:23800">
        <div aria-hidden="true" className="absolute border border-[#c6c6c6] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center p-[16px] relative shrink-0" data-name="Search icon" data-node-id="I106:23800;11988:340981">
          <MagnifyingGlass size={16} className="text-[#a8a8a8]" />
        </div>
        <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Hide text overflow" data-node-id="I106:23800;11988:340983">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchPlaceholder}
            className="basis-0 font-['IBM_Plex_Sans:Regular',_sans-serif] grow h-[18px] leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#a8a8a8] text-[14px] tracking-[0.16px] bg-transparent border-none outline-none w-full"
          />
        </div>
      </button>
      
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-node-id="106:23801">
        <div 
          className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" 
          data-name="<Button>" 
          data-node-id="106:23802"
          onClick={handleEditClick}
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I106:23802;9974:112989">
            <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.24px] whitespace-pre" data-node-id="I106:23802;9974:112993">
              {editButtonText}
            </p>
            <PencilSimple size={18} className="text-[rgba(0,0,0,0.87)]" />
          </div>
        </div>
        
        <div 
          className="bg-[#e0e0e0] hover:bg-[#d4d4d4] focus:bg-[#d4d4d4] active:bg-[#c8c8c8] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[22px] py-[8px] relative rounded-[4px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.12),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_3px_1px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_3px_3px_0px_rgba(0,0,0,0.17),0px_4px_2px_-2px_rgba(0,0,0,0.25)] shrink-0 cursor-pointer transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0f62fe] focus:ring-offset-2" 
          data-name="<Button>" 
          data-node-id="106:23803"
          onClick={handleNewClick}
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base" data-node-id="I106:23803;9974:112989">
            <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.87)] text-nowrap tracking-[-0.24px] whitespace-pre" data-node-id="I106:23803;9974:112993">
              {newButtonText}
            </p>
            <Plus size={18} className="text-[rgba(0,0,0,0.87)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
