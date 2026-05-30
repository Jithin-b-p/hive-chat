import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItemConfig } from './types';

const navItemVariants = cva(
  [
    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium',
    'transition-colors duration-200',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
  ].join(' '),

  {
    variants: {
      variant: {
        active:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        default: 'text-muted-foreground hover:bg-muted hover:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface NavItemProps extends VariantProps<typeof navItemVariants> {
  item: NavItemConfig;
  onClick?: () => void;
}

export function NavItem({ item, onClick }: NavItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        navItemVariants({ variant: isActive ? 'active' : 'default' }),
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="truncate">{item.label}</span>
    </Link>
  );
}
