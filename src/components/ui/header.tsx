'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  List, 
  Bell, 
  Question, 
  SignOut 
} from '@phosphor-icons/react';

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Customers', href: '/customers' },
    { name: 'Meters', href: '/meters' },
    { name: 'Property', href: '/property' },
    { name: 'Processes', href: '/processes' },
    { name: 'Reports', href: '/reports' },
    { name: 'Rules', href: '/rules' },
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col isolate items-start px-[8px] py-0 relative size-full" data-name="UI shell - Header" data-node-id="162:55563">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full z-[1]" data-name="Header" data-node-id="I162:55563;92356:33252">
        <div className="box-border content-stretch flex items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Menu wrapper" data-node-id="I162:55563;73179:1342">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full mr-[-8px] relative shrink-0 w-[8px]" data-name="Spacer" data-node-id="I162:55563;73179:1347" />
          </div>
          <div className="bg-[rgba(255,255,255,0)] box-border content-stretch cursor-pointer flex items-start mix-blend-multiply mr-[-8px] p-[14px] relative shrink-0" data-name="Menu trigger" data-node-id="I162:55563;11412:326566">
            <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply overflow-clip relative shrink-0 size-[20px]" data-name="Menu" data-node-id="I162:55563;11412:326566;11412:330296">
              <List size={20} className="text-[#161616]" />
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-[3px] h-full items-center pl-[8px] pr-[32px] py-[15px] relative shrink-0" data-name="Site name" data-node-id="I162:55563;11412:326567">
          <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="I162:55563;11412:326568">
            DBS
          </p>
          <p className="font-['IBM_Plex_Sans:SemiBold',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="I162:55563;11412:326569">
            [City_Name]
          </p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0" data-name="Navigation" data-node-id="I162:55563;73179:1350">
          <div className="relative self-stretch shrink-0 w-0" data-name="Spacer" data-node-id="I162:55563;73179:1352" />
          <div className="content-stretch flex items-start relative shrink-0" data-name="Nav items" data-node-id="I162:55563;11453:313295">
            <div className="h-[48px] relative shrink-0 w-[17px]" data-name="Divider" data-node-id="I162:55563;11412:326578" />
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative shrink-0" data-name="UI shell - Header menu item">
                    <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none ${
                      isActive 
                        ? 'border-[#0f62fe] border-[0px_0px_3px]' 
                        : 'border-[#c6c6c6] border-[0px_0px_1px]'
                    }`} />
                    <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[15px] relative shrink-0" data-name="Menu item">
                      <p className={`font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px] whitespace-pre ${
                        isActive ? 'text-[#161616]' : 'text-neutral-600'
                      }`}>
                        {item.name}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Spacer" data-node-id="I162:55563;73179:1422">
          <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Actions" data-node-id="I162:55563;11453:313294">
          <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex items-start justify-end mix-blend-multiply p-[14px] relative shrink-0" data-name="UI shell - Header actions" data-node-id="I162:55563;11412:326809">
            <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply overflow-clip relative shrink-0 size-[20px]" data-name="Notification--new" data-node-id="I162:55563;11412:326809;11412:329825">
              <Bell size={20} className="text-[#161616]" />
            </div>
          </div>
          <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Actions" data-node-id="I162:55563;11158:1593">
            <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex items-start justify-end mix-blend-multiply p-[14px] relative shrink-0" data-name="UI shell - Header actions" data-node-id="I162:55563;11158:1594">
              <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 size-[20px]" data-name="Lifebuoy" data-node-id="I162:55563;11158:1595">
                <Question size={20} className="text-[#161616]" />
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-start justify-end mix-blend-multiply p-[14px] relative shrink-0" data-name="UI shell - Header actions" data-node-id="I162:55563;11158:1597">
              <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 size-[20px]" data-name="SignOut" data-node-id="I162:55563;11158:1598">
                <SignOut size={20} className="text-[#161616]" />
              </div>
              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#020202] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="I162:55563;11158:1600">
                Log Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
