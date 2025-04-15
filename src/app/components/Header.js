"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[80%] rounded-full backdrop-blur-lg bg-white shadow-lg px-4 py-5 transition-all">
        <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center pl-5">
  <Image
    src="/logo.jpg" // replace with your actual path in `public/`
    alt="Logo"
    width={40}
    height={40}
    className="object-contain h-10 w-auto"
    priority // optional: loads it earlier
  />
</div>


        {/* Center: Nav Links */}
          <nav className="hidden md:flex gap-6 text-black font-medium">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#services" className="hover:text-blue-600 transition">Team</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Trainings</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Services</a>
          </nav>

          {/* Right: Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Burger Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleSidebar}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleSidebar}
        />
      )}

      {/* Slide Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white/90 backdrop-blur-md shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-l-2xl`}
      >
        {/* Header with close icon */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <X size={26} className="text-gray-700" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#services" onClick={toggleSidebar}>Services</a>
          <a href="#portfolio" onClick={toggleSidebar}>Portfolio</a>
        </nav>

        {/* Contact Button */}
        <div className="absolute bottom-4 left-0 w-full px-4">
          <a
            href="#contact"
            className="block w-full bg-blue-600 text-white text-center py-2 rounded-full shadow hover:bg-blue-700 transition"
            onClick={toggleSidebar}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
