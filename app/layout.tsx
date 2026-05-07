import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WorkTax Tracker',
  description: 'Personal tracker for work days, Congestion Charge and tunnel charges',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
