import GlobalFooter from '@/components/ui/GlobalFooter';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="pb-[50px] p-8">
        <h1>Dashboard</h1>
        <p>Waiting for Figma designs...</p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <GlobalFooter />
      </div>
    </div>
  );
}
