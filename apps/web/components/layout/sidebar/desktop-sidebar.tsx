'use client';
import { cn } from '@/lib/utils';
import { SidebarContent } from './sidebar-content';

export function DesktopSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn('hidden h-screen w-64 border-r lg:flex', className)}>
      <SidebarContent />
    </aside>
  );
}
