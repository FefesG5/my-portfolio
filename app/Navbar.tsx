"use client"

import { useState, useEffect, useRef } from "react"
import ThemeToggle from "./ThemeToggle"
import { useTranslations } from "next-intl"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const navRef = useRef<HTMLElement>(null)
  const t = useTranslations("nav")

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const linkClass = (section: string) =>
    section === activeSection
      ? "text-gray-900 dark:text-white font-medium transition-colors underline underline-offset-4 brutalist:text-black"
      : "text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors brutalist:text-black"

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full bg-white border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800 brutalist:bg-[#f5f0e8] brutalist:border-b-4 brutalist:border-black z-50"
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-bold text-gray-900 dark:text-white brutalist:text-black brutalist:font-black brutalist:tracking-tight w-24 inline-block">
            Gee Chai
          </span>
          <ThemeToggle />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#hero" className={linkClass("hero")}>
            {t("home")}
          </a>
          <a href="#about" className={linkClass("about")}>
            {t("about")}
          </a>
          <a href="#skills" className={linkClass("skills")}>
            {t("skills")}
          </a>
          <a href="#projects" className={linkClass("projects")}>
            {t("projects")}
          </a>
          <a href="#experience" className={linkClass("experience")}>
            {t("experience")}
          </a>
          <a href="#contact" className={linkClass("contact")}>
            {t("contact")}
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
        <div className="md:hidden flex flex-col px-6 pb-4 gap-6">
          <a
            href="#hero"
            className={linkClass("hero")}
            onClick={() => setIsOpen(false)}
          >
            {t("home")}
          </a>
          <a
            href="#about"
            className={linkClass("about")}
            onClick={() => setIsOpen(false)}
          >
            {t("about")}
          </a>
          <a
            href="#skills"
            className={linkClass("skills")}
            onClick={() => setIsOpen(false)}
          >
            {t("skills")}
          </a>
          <a
            href="#projects"
            className={linkClass("projects")}
            onClick={() => setIsOpen(false)}
          >
            {t("projects")}
          </a>
          <a
            href="#experience"
            className={linkClass("experience")}
            onClick={() => setIsOpen(false)}
          >
            {t("experience")}
          </a>
          <a
            href="#contact"
            className={linkClass("contact")}
            onClick={() => setIsOpen(false)}
          >
            {t("contact")}
          </a>
        </div>
      )}
    </nav>
  )
}
