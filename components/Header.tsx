"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/#collection", label: "Collections" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white/95 backdrop-blur border-b border-gray-200 sticky top-0 z-50 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.5rem] md:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center shrink-0"
        >
          <Image
            src="https://res.cloudinary.com/demfgmwjk/image/upload/v1776537039/Alu_Empire_Logo-removebg-preview_nrlo91_fslx1w.png"
            alt="Alu Empire logo"
            width={180}
            height={56}
            priority
            className="h-9 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#FF6A13] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:border-[#FF6A13] hover:text-[#FF6A13]"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close mobile navigation"
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden fixed inset-0 top-[4.5rem] bg-black/35"
          />
          <div
            id="mobile-nav"
            className="md:hidden absolute inset-x-0 top-full border-b border-gray-200 bg-white shadow-2xl"
          >
            <nav className="px-4 pb-5 pt-3">
              <div className="rounded-3xl border border-gray-100 bg-[#F9F7F4] p-3 shadow-sm">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-white hover:text-[#FF6A13]"
                  >
                    {item.label}
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Open
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
