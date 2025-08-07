import React from 'react';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import MobileNav from './MobileNav'
import { currentUser } from '@clerk/nextjs/server';
import { syncUser } from '@/actions/user.action';

async function Navbar() {
  const user = await currentUser();
  if(user) await syncUser();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="ml-4 text-2xl font-bold text-primary font-mono tracking-[0.15em] hover:opacity-90 transition-opacity duration-200"
            >
              Vibely
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavbar />

          {/* Mobile Navigation*/}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
