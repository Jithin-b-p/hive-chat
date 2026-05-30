import { DesktopSidebar } from './desktop-sidebar';
import { MobileSidebar } from './mobile-sidebar';

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <MobileSidebar />
      <DesktopSidebar className={className} />
    </>
  );
}
