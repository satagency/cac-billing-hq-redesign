import GlobalFooter from '@/components/ui/GlobalFooter';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules | CAC Billing HQ",
  description: "Municipality billing rules and regulations",
};

export default function Rules() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="pb-[50px] p-8">
        <h1>Rules</h1>
        <p>Waiting for Figma designs...</p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[100]">
        <GlobalFooter />
      </div>
    </div>
  );
}
