'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            {scrolled ?
              <img src="/assets/images/logo-black.png" alt="logo" className='w-40 h-10' /> :
              <img src="/assets/images/logo-white.png" alt="logo" className='w-40 h-10' />
            }
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <Link href="/" className='hover:text-yellow-600'>Home</Link>
            <Link href="/about" className='hover:text-yellow-600'>About</Link>
            <Link href="/services" className='hover:text-yellow-600'>Services</Link>
            <Link href="/contact" className='hover:text-yellow-600'>Contact</Link>
          </div>
          {/* Join Button */}
          <Link
            href="/book-demo"
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${scrolled
              ? 'bg-black text-white hover:bg-yellow-600 hover:text-black'
              : 'bg-white text-black hover:bg-yellow-600 hover:text-black'
              }`}
          >
            Book Demo
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 md:hidden">
          <div className="w-[75%] bg-white h-full p-6">
            <button onClick={() => setMenuOpen(false)} className="mb-6 font-bold text-xl">
              ✕ Close
            </button>
            <div className="flex flex-col gap-6 text-black font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
