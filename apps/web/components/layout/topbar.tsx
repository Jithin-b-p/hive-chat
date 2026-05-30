import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Bell, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TopbarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  unreadCount?: number;
}
export function Topbar({
  className,
  title = 'Workspace',
  unreadCount = 0,
  ...props
}: TopbarProps) {
  return (
    <header
      className={cn(
        [
          'sticky top-0 z-30',
          'flex h-14 items-center justify-between',
          'border-b bg-background/95 lg:px-6',
        ].join(' '),
        className,
      )}
      {...props}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold tracking-tight">
            {title}
          </h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Team communication workspace
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative hidden md:block">
          <label htmlFor="global-search" className="sr-only">
            Search messages
          </label>
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="global-search"
            type="search"
            placeholder="Search messages..."
            className="w-64 rounded-full bg-muted/50 pl-9 transition-colors focus-visible:bg-background lg:w-80"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-background" />

              <span className="sr-only">{unreadCount}unread notifications</span>
            </>
          )}
        </Button>

        <button
          type="button"
          className="rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="open user menu"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Uset avatar"
            />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
}
