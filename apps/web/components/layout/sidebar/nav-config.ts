import { Hash, Hexagon, MessageSquare, Settings, Users } from 'lucide-react';
import { NavItemConfig } from './types';

export const mainNavItems: NavItemConfig[] = [
  {
    href: '/chats',
    label: 'All Chats',
    icon: MessageSquare,
  },
  {
    href: '/mentions',
    label: 'Mentions',
    icon: Hash,
  },
  {
    href: '/contacts',
    label: 'Contacts',
    icon: Users,
  },
];

export const workspaceNavItems: NavItemConfig[] = [
  {
    href: '/w/engineering',
    label: 'Engineering',
    icon: Hexagon,
  },
  {
    href: '/w/design',
    label: 'Design Team',
    icon: Hexagon,
  },
];

export const footerNavItems: NavItemConfig[] = [
  {
    href: '/settings',
    label: 'Settings',
    icon: Settings,
  },
];
