"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/public/assets/logo.png";
import arrow_green from "@/public/assets/arrow_green.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "About Us", href: "#" },
    { label: "Why Us", href: "#" },
    { label: "At A Glance", href: "#" },
    { label: "Media", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Career", href: "#" },
  ];

  return (
    <header className="header_nav">
      <nav
        className={`navbar_main_div ${isHome ? "text-white" : "text-black"}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo} // replace with your logo
            alt="SEZL Logo"
            width={44}
            height={44}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* About Us */}
          <li className="flex items-center gap-1 hover:text-gray-500">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="flex items-center gap-1 text-sm cursor-pointer hover:text-gray-500"
              >
                About Us
                <ChevronDown size={14} />
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 w-36 rounded-box bg-white text-black shadow"
              >
                <li>
                  <a className="dropdown_options">Option 1</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 2</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 3</a>
                </li>
              </ul>
            </div>
          </li>

          {/* Why Us */}
          <li className="flex items-center gap-1 hover:text-gray-500">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="flex items-center gap-1 text-sm cursor-pointer hover:text-gray-500"
              >
                Why Us
                <ChevronDown size={14} />
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 w-36 rounded-box bg-white text-black shadow"
              >
                <li>
                  <a className="hover:bg-gray-100 transition">Option 1</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 2</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 3</a>
                </li>
              </ul>
            </div>
          </li>

          {/* At A Glance */}
          <li className="flex items-center gap-1 hover:text-gray-500">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="flex items-center gap-1 text-sm cursor-pointer hover:text-gray-500"
              >
                At A Glance
                <ChevronDown size={14} />
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu mt-2 w-36 rounded-box bg-white text-black shadow"
              >
                <li>
                  <a className="hover:bg-gray-100 transition">Option 1</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 2</a>
                </li>
                <li>
                  <a className="hover:bg-gray-100 transition">Option 3</a>
                </li>
              </ul>
            </div>
          </li>

          {/* Media */}
          <li className="hover:text-gray-500">
            <Link href="#">Media</Link>
          </li>

          {/* Pages */}
          <li className="hover:text-gray-500">
            <Link href="#">Pages</Link>
          </li>

          {/* Contact */}
          <li className="hover:text-gray-500">
            <Link href="#">Contact</Link>
          </li>

          {/* Career */}
          <li className="hover:text-gray-500">
            <Link href="#">Career</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex items-center gap-1 text-sm cursor-pointer hover:text-gray-500"
            >
              English
              <ChevronDown size={14} />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu mt-2 w-36 rounded-box bg-white text-black shadow"
            >
              <li>
                <a className="hover:bg-gray-100 transition">Bangla</a>
              </li>
              <li>
                <a className="hover:bg-gray-100 transition">Spanish</a>
              </li>
              <li>
                <a className="hover:bg-gray-100 transition">Chinese</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="#"
            className={`flex items-center gap-2 border border-white/30 px-2 py-1.5 rounded-full text-sm font-medium ${isHome ? "text-white bg-white/20" : "text-black bg-white"}`}
          >
            <div className="bg-white rounded-full p-2 border border-[#1E552A]">
              <Image src={arrow_green} alt="Arrow Right" />
            </div>
            <span className="">Explore Opportunities</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden focus:outline-none ${isHome ? "text-white" : "text-black"}`}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div 
        className="lg:hidden bg-black/80 backdrop-blur-md text-white px-6 py-6">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <hr className="border-white/20" />
            <button className="text-left">English</button>
            <Link
              href="#"
              className="inline-block bg-white text-black px-4 py-2 rounded-full text-center font-semibold"
            >
              Explore Opportunities →
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
