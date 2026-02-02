import React from 'react';
import { motion } from 'framer-motion';
export function Navigation() {
  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-gray-900 hover:opacity-70 transition-opacity">

            Vlad Baragan
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#works">Works</NavLink>
        </nav>

        {/* Mobile Menu Icon Placeholder - kept simple for this demo */}
        <button className="md:hidden text-gray-900">
          <span className="sr-only">Menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2">

            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </motion.header>);

}
function NavLink({
  href,
  children



}: {href: string;children: React.ReactNode;}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">

      {children}
    </a>);

}