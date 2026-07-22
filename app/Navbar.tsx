"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const linkClass = (section: string) =>
    section === activeSection
      ? "text-gray-900 dark:text-white font-medium transition-colors"
      : "text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-bold text-gray-900 dark:text-white">
            Gee Chai
          </span>
          <ThemeToggle />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#hero" className={linkClass("hero")}>
            Home
          </a>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-gray-500 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 text-sm">
          <a
            href="#hero"
            className={linkClass("hero")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={linkClass("about")}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className={linkClass("skills")}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={linkClass("projects")}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={linkClass("experience")}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={linkClass("contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
