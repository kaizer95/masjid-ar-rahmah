'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="glass-dark sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-copper/20 border border-copper/40 flex items-center justify-center group-hover:bg-copper/30 transition-all duration-300">
                <span className="font-arabic text-copper text-2xl font-bold">م</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold text-white tracking-wide">Masjid Ar Rahmah</h1>
              <p className="text-[10px] text-copper/70 font-arabic tracking-wider">مسجد الرحمة</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              ['Laman Utama', '/'],
              ['Tentang Kami', '/about'],
              ['Pengumuman', '/announcements'],
              ['Acara', '/events'],
              ['Hubungi Kami', '/contact'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/80 hover:text-copper tracking-wider uppercase font-sans font-medium transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-copper transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-copper/20">
            <div className="flex flex-col space-y-4">
              {[
                ['Laman Utama', '/'],
                ['Tentang Kami', '/about'],
                ['Pengumuman', '/announcements'],
                ['Acara', '/events'],
                ['Hubungi Kami', '/contact'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-copper uppercase tracking-wider text-sm font-sans font-medium py-2 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
