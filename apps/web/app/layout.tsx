import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'HiveChat',
  description: 'Realtime chat application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col"> {children}</body>
    </html>
  );
}
