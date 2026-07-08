"use client"

import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-gray-900">Gee Chai</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-500">
          <a href="#hero" className="hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 text-sm text-gray-500">
          <a
            href="#hero"
            className="hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
