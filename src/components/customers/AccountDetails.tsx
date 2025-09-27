'use client';

const imgMap = "http://localhost:3845/assets/f44654b60dc9dccfa9b3e528fbcfcd269feadc37.png";
const img = "http://localhost:3845/assets/f00973188be300094edc1f680e08a33239d7c42c.svg";
const img1 = "http://localhost:3845/assets/5c2009f1d1c71bd6605763d02f7ded16adaa8ce4.svg";
const img2 = "http://localhost:3845/assets/37c20e6ed8b16d578a60fcc216c6e72e0761f53f.svg";
const img3 = "http://localhost:3845/assets/41e3730a4661dfbe3087bd56d763201b2450dac6.svg";
const img4 = "http://localhost:3845/assets/5d46f315a5dd727138db0aab204dc6d0c7ae9eab.svg";

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
  if (size === "Small" && state === "Enabled" && toggleOnly === "True" && toggled === "True") {
    return (
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative size-full" data-name="Size=Small, State=Enabled, Toggle only=True, Toggled=True" data-node-id="54:816">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value" data-node-id="54:817">
          <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Toggle margin" data-node-id="54:818">
            <div className="bg-[#24a148] box-border content-stretch flex gap-[10px] items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item" data-node-id="54:819">
              <div className="bg-white overflow-clip relative rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" data-node-id="I54:819;3463:33432">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[20%] mix-blend-multiply overflow-clip" data-name="Checkmark" data-node-id="I54:819;3463:33432;5166:234623">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[23.71%]" data-name="Vector" data-node-id="I54:819;3463:33432;5166:234623;1598:148">
                    <div className="absolute inset-[-22.98%_-15.71%]" style={{ "--fill-0": "rgba(22, 22, 22, 1)", "--stroke-0": "rgba(36, 161, 72, 1)" } as React.CSSProperties}>
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default function AccountDetails() {
  return (
    <div className="relative size-full" data-name="Account Details" data-node-id="13:602">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[8px] relative size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Account Details Container" data-node-id="13:603">
          <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[16px] pl-[16px] pr-[12px] pt-[12px] relative w-full">
            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[202px]" data-node-id="69:41647">
              Account Details
            </p>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Phone Container" data-node-id="13:7798">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]" data-name="Phone Container" data-node-id="13:7799">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="13:7800">
                  Cell Phone
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Phone Number Container" data-node-id="13:7801">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[202px]" data-node-id="13:7803">
                    (408) 289-3382
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Phone Container" data-node-id="28:2943">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]" data-name="Phone Container" data-node-id="28:2944">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="28:2945">
                  Home Phone
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Phone Number Container" data-node-id="28:2946">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[202px]" data-node-id="28:2947">
                    (408) 289-3382
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Email Container" data-node-id="28:2949">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]" data-name="Email Container" data-node-id="28:2950">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="28:2951">
                  Secondary Email
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Email Address Container" data-node-id="28:2952">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[202px]" data-node-id="28:2953">
                    customer@email.com
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[162px] relative shrink-0 w-full" data-name="Map" data-node-id="49:4888">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMap} />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[202px]" data-name="Address Container" data-node-id="28:2968">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[202px]" data-name="Address Container" data-node-id="28:2969">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="28:2970">
                  Service Address
                </p>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Address Line Container" data-node-id="28:2971">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="28:2972">
                    1292 West Berry Street
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Address Line Container" data-node-id="28:2974">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[13px] text-black tracking-[0.16px] w-[202px]" data-node-id="28:2975">
                    Scranton, PA 38299
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="basis-0 bg-[rgba(219,219,219,0)] box-border content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto p-[12px] relative shrink-0 w-full" data-name="Payment Container" data-node-id="13:604">
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Payment Container" data-node-id="54:698">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Payment Container" data-node-id="54:699">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="54:700">{`ACH `}</p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container" data-node-id="54:701">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#43a047] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="54:702">
                  Enrolled
                </p>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0" data-name="Toggle" data-node-id="54:893">
                  <Toggle size="Small" toggleOnly="True" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Payment Container" data-node-id="106:23771">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Payment Container" data-node-id="106:23772">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:23773">
                Online Payments
              </p>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container" data-node-id="106:23774">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#be613e] text-[15px] text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="106:23775">
                  Disabled
                </p>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0" data-name="Toggle" data-node-id="106:23776">
                  <Toggle size="Small" state="Disabled" toggleOnly="True" toggled="False" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Receipt Container" data-node-id="29:3157">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[202px]" data-name="Receipt Container" data-node-id="29:3158">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="29:3159">
                Billing Receipt
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Radio 3up" data-node-id="29:3327">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="29:3328">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I29:3328;587:16951">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I29:3328;587:16959">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I29:3328;587:16954">
                      Print
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="29:3329">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I29:3329;9762:1414">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I29:3329;565:14976">
                      <img alt="" className="block max-w-none size-full" src={img2} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I29:3329;280:13742">
                      Email
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="32:3346">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I32:3346;587:16969">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I32:3346;587:16977">
                      <img alt="" className="block max-w-none size-full" src={img3} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I32:3346;587:16972">
                      Both
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Notices Container" data-node-id="49:4866">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[202px]" data-name="Notices Container" data-node-id="49:4867">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="49:4868">{`Notices `}</p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Radio 3up" data-node-id="49:4869">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="49:4870">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I49:4870;9762:1414">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I49:4870;565:14976">
                      <img alt="" className="block max-w-none size-full" src={img2} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I49:4870;280:13742">
                      Print
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="49:4871">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I49:4871;587:16951">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I49:4871;587:16959">
                      <img alt="" className="block max-w-none size-full" src={img1} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I49:4871;587:16954">
                      Email
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Radio Field" data-node-id="49:4872">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checkbox and Label" data-node-id="I49:4872;587:16969">
                    <div className="relative shrink-0 size-[16px]" data-name="Radio" data-node-id="I49:4872;587:16977">
                      <img alt="" className="block max-w-none size-full" src={img3} />
                    </div>
                    <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[13px]" data-node-id="I49:4872;587:16972">
                      Both
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Pin Container" data-node-id="29:3108">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Pin Container" data-node-id="29:3109">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] min-w-[80px] not-italic opacity-60 relative shrink-0 text-[13px] text-black text-nowrap tracking-[0.16px] whitespace-pre" data-node-id="29:3110">
                Phone PIN
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Pin Value Container" data-node-id="29:3111">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[20px] text-black tracking-[0.16px] w-[75px]" data-node-id="29:3112">
                  ***35
                </p>
                <div className="relative shrink-0 size-[20px]" data-name="Eye" data-node-id="29:3152">
                  <div className="absolute inset-[18.75%_3.13%]" data-name="Vector" data-node-id="I29:3152;8899:29294">
                    <img alt="" className="block max-w-none size-full" src={img4} />
                  </div>
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