import { ScrollArea } from '@/components/ui/scroll-area';
import { Hexagon, LogOut } from 'lucide-react';
import { footerNavItems, mainNavItems } from './nav-config';
import { Button } from '@/components/ui/button';
import { NavItem } from './nav-item';

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-14 items-center gap-3 border-b px-4 lg:px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-white shadow-sm">
          <Hexagon className="h-5 w-5 fill-current" />
        </div>

        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight">HiveChat</span>
          <span className="text-xs text-muted-foreground">Team messaging</span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-8 px-3 py-4">
          <section>
            <nav aria-label="Main navigation" className="flex flex-col gap-1.5">
              {mainNavItems.map((item) => (
                <NavItem key={item.href} item={item} onClick={onNavigate} />
              ))}
            </nav>
          </section>
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <nav
          aria-label="Sidebar footer navigation"
          className="flex flex-col gap-1.5"
        >
          {footerNavItems.map((item) => (
            <NavItem key={item.href} item={item} onClick={onNavigate} />
          ))}

          <Button
            variant="ghost"
            className="justify-start gap-3 text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </nav>
      </div>
    </div>
  );
}
