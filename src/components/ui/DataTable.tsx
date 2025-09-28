'use client';

import React from 'react';

// Image assets from Figma
const imgSort = "http://localhost:3845/assets/83c530a5d92a2be90173b85ac47e6bf095de6dd1.svg";
const imgEye = "http://localhost:3845/assets/65be7b2f44a43106dc9d7ed07aae827fdf30262a.svg";
const imgCaretRight = "http://localhost:3845/assets/4ce436f58914bf3d49a7f5672a36a2c23e4975c0.svg";
const imgAsc = "http://localhost:3845/assets/2b55bae72fdd62f6f10d549ad1b44f3d526b76ad.svg";
const imgMenu = "http://localhost:3845/assets/1f23cc8f7052b40861d99efe4dc50836dd8cab31.svg";

interface Column {
  key: string;
  label: string;
  width: string;
  sortable?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  onViewClick?: (row: Record<string, unknown>) => void;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

export default function DataTable({
  columns,
  data,
  onRowClick,
  onViewClick,
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 20,
  onPageChange
}: DataTableProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="relative w-full" data-name="Table" data-node-id="162:55624">
      {/* Column Headers - Exact Figma Design */}
      <div className="content-stretch flex items-start relative w-full h-[48px]" data-name="Column Header" data-node-id="162:55625">
        {columns.map((column, index) => (
          <div
            key={column.key}
            className={`bg-[#fafafb] content-stretch flex h-[48px] items-center relative ${
              index === 0 ? 'shrink-0 w-[128px]' : 'flex-1 min-w-0'
            }`}
            data-name="Column Header"
            data-node-id={`162:5562${6 + index}`}
          >
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none" />
            
            {/* Resize Handle */}
            <div className="content-stretch flex flex-col h-[14px] items-start shrink-0 w-[16px]" data-name="Resize Handle">
              {index > 0 && (
                <div className="basis-0 bg-[rgba(24,29,31,0.15)] content-stretch flex gap-[10px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Pipe">
                  <div className="bg-[rgba(24,29,31,0.15)] h-full shrink-0 w-[2px]" data-name="shape" />
                </div>
              )}
            </div>
            
            {/* Left-Bias Content */}
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left-Bias">
              {/* Eye icon for Actions column */}
              {column.key === 'actions' && (
                <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Regular">
                  <div className="absolute inset-[21.88%_3.13%]" data-name="Vector">
                    <img alt="" className="block max-w-none size-full" src={imgSort} />
                  </div>
                </div>
              )}
              
              {/* Column Label */}
              <div className="flex flex-col font-['IBM_Plex_Sans:Bold',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#181d1f] text-[14px] text-nowrap" data-name="Label">
                <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">{column.label}</p>
              </div>
              
              {/* Sorting Control for Customer column */}
              {column.key === 'customerName' && column.sortable && (
                <div className="relative shrink-0 size-[16px]" data-name="Grid-Parts/.Sorting Control">
                  <div className="absolute content-stretch flex flex-col items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16px]" data-name="asc">
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="asc-theme-quartz">
                      <div className="absolute inset-[17.19%_18.63%_17.19%_15.74%]" data-name="Vector">
                        <img alt="" className="block max-w-none size-full" src={imgAsc} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Resize Handle */}
            <div className="content-stretch flex h-[14.09px] items-center justify-end relative shrink-0 w-[135.375px]" data-name="Resize Handle">
              <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0" data-name="Grid-Parts/.shim">
                <div className="absolute inset-0" />
              </div>
              
              {/* Menu Control for most columns except Properties */}
              {column.key !== 'properties' && (
                <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Menu Control">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="menu-alt">
                    <div className="absolute inset-[6.25%_40.62%]" data-name="Vector">
                      <img alt="" className="block max-w-none size-full" src={imgMenu} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Table Rows */}
      <div className="w-full" data-name="Row Container" data-node-id="162:55633">
        <div className="w-full" data-name="Row Container" data-node-id="162:55634">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full h-[42px] cursor-pointer group"
              data-name="Row"
              data-node-id={`162:5563${5 + rowIndex}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column, colIndex) => (
                <div
                  key={column.key}
                  className={`bg-white group-hover:bg-blue-100 box-border content-stretch flex gap-[12px] items-center px-[16px] py-[4px] relative transition-colors duration-150 ${
                    colIndex === 0 ? 'shrink-0 w-[128px]' : 'flex-1 min-w-0'
                  }`}
                  data-name="Grid Cell"
                  data-node-id={`162:5563${6 + rowIndex * 7 + colIndex}`}
                >
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(24,29,31,0.15)] border-solid inset-0 pointer-events-none" />
                  
                  {column.key === 'actions' ? (
                    <div className="flex items-center gap-2">
                      <div className="bg-white h-[0.001px] shrink-0 w-[16px]" data-name="Tier-3-indent" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewClick?.(row);
                        }}
                        className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity"
                        data-name="Format=Outline, Weight=Regular"
                      >
                        <div className="absolute inset-[18.75%_3.13%]" data-name="Vector">
                          <img alt="" className="block max-w-none size-full" src={imgEye} />
                        </div>
                      </button>
                    </div>
                  ) : column.key === 'properties' ? (
                    <div className="flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d1f] text-[14px]">
                      <div className="flex gap-[12px] items-center">
                        {/* Properties Pill */}
                        <div className="bg-[#d0e2ff] content-stretch flex items-start relative rounded-[9px] shrink-0" data-name="Slot">
                          <div aria-hidden="true" className="absolute border border-[#78a9ff] border-solid inset-0 pointer-events-none rounded-[9px]" />
                          <div className="box-border content-stretch flex items-center pl-0 pr-[4px] py-0 relative rounded-[24px] shrink-0" data-name="Tag content">
                            <div className="box-border content-stretch flex flex-col items-center mr-[-4px] pb-[2px] pt-0 px-[8px] relative shrink-0" data-name="Label">
                              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] text-nowrap tracking-[0.32px] whitespace-pre">
                                {String(row[column.key]).split(',')[0].trim()}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Meters Pill */}
                        <div className="bg-[#a7f0ba] content-stretch flex items-start relative rounded-[9px] shrink-0" data-name="Slot">
                          <div aria-hidden="true" className="absolute border border-[#42be65] border-solid inset-0 pointer-events-none rounded-[9px]" />
                          <div className="box-border content-stretch flex items-center pl-0 pr-[4px] py-0 relative rounded-[24px] shrink-0" data-name="Tag content">
                            <div className="box-border content-stretch flex flex-col items-center mr-[-4px] pb-[2px] pt-0 px-[8px] relative shrink-0" data-name="Label">
                              <p className="font-['IBM_Plex_Sans:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] text-nowrap tracking-[0.32px] whitespace-pre">
                                {String(row[column.key]).split(',')[1].trim()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col font-['IBM_Plex_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d1f] text-[14px]">
                      {(column.key.includes('Address') || column.key.includes('address')) && row[`${column.key}Full`] ? (
                        <div className="relative tooltip-group">
                          <p className="leading-[18px] whitespace-pre overflow-ellipsis overflow-hidden cursor-help">
                            {String(row[column.key])}
                          </p>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 tooltip-group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-pre-line w-full min-w-max">
                            <div className="space-y-2">
                              {String(row[`${column.key}Full`]).split('\n').map((address, index) => (
                                <div key={index} className="block">
                                  {address}
                                </div>
                              ))}
                            </div>
                            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      ) : (
                        <p className="leading-[18px] whitespace-pre overflow-ellipsis overflow-hidden">
                          {String(row[column.key])}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination Container */}
        <div className="box-border content-stretch flex items-center justify-between px-[40px] py-[15px] relative w-full h-[69px]" data-name="Pagination Container" data-node-id="162:55731">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
          
          {/* Pagination Info */}
          <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] tracking-[0.16px]" data-name="Pagination Info" data-node-id="162:55732">
            <p className="relative shrink-0 text-nowrap whitespace-pre" data-node-id="162:55733">
              {startItem}-{endItem}
            </p>
            <p className="relative shrink-0 text-nowrap whitespace-pre" data-node-id="162:55734">of</p>
            <p className="relative shrink-0 text-nowrap whitespace-pre" data-node-id="162:55735">
              {totalItems.toLocaleString()}
            </p>
            <p className="relative shrink-0 w-[202px]" data-node-id="162:55736">
              customers
            </p>
          </div>

          {/* Pagination Controls */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Pagination Controls" data-node-id="162:55737">
            {/* Current page */}
            <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[4px] relative rounded-[900px] shrink-0 size-[24px]" data-name="Page Number Container" data-node-id="162:55738">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="162:55739">
                {currentPage}
              </p>
            </div>

            {/* Page numbers */}
            {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
              const pageNum = currentPage + i + 1;
              if (pageNum > totalPages) return null;
              
              return (
                <div key={pageNum} className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="Page Number Container">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal h-[18px] leading-[18px] not-italic relative shrink-0 text-[#828282] text-[14px] tracking-[0.16px] w-[9px]">
                    {pageNum}
                  </p>
                </div>
              );
            })}

            {/* Ellipsis if needed */}
            {totalPages > currentPage + 4 && (
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="Page Number Container" data-node-id="162:55746">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#828282] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="162:55747">
                  ...
                </p>
              </div>
            )}

            {/* Last page */}
            {totalPages > currentPage + 4 && (
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#828282] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="162:55748">
                {totalPages}
              </p>
            )}

            {/* Next button */}
            {currentPage < totalPages && (
              <button
                onClick={() => onPageChange?.(currentPage + 1)}
                className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity"
                data-name="CaretRight"
                data-node-id="162:55749"
              >
                <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Vector">
                  <img alt="" className="block max-w-none size-full" src={imgCaretRight} />
                </div>
              </button>
            )}
          </div>

          {/* Next Page Button */}
          <div className="bg-white h-[39px] shrink-0 w-[100px]" data-name="Next Page Button" data-node-id="162:55750" />
        </div>
      </div>
    </div>
  );
}
