import { cn } from '@/lib/utils';
import { Topbar } from './topbar';
import { Sidebar } from './sidebar/sidebar';

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
export function AppShell({ children, className, title }: AppShellProps) {
  return (
    <div
      className={cn(
        ['flex h-screen overflow-hidden', 'bg-background text-foreground'].join(
          ' ',
        ),
        className,
      )}
    >
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} unreadCount={3} />

        <main
          id="main-content"
          className="flex-1 overflow-y-auto bg-muted/20"
          role="main"
        >
          <div className="mx-auto w-full max-w-screen-2xl p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
