"use client"

import { useRouter, usePathname } from "@/i18n/navigation"
import { useLocale } from "next-intl"
import { useState, useRef, useEffect } from "react"

const languages = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
]

export default function LanguageDropdown() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const switchLanguage = (code: string) => {
    router.replace(pathname, { locale: code, scroll: false })
    setIsOpen(false)
  }

  const current = languages.find((l) => l.code === locale)

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors brutalist:text-black"
        aria-label="Select language"
      >
        <i className="ti ti-world" style={{ fontSize: "16px" }} />
        <span>{locale.toUpperCase()}</span>
        <span className="text-xs">▾</span>
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg shadow-md py-1 min-w-[120px] z-50 brutalist:bg-[#f5f0e8] brutalist:border-2 brutalist:border-black brutalist:rounded-none">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors brutalist:hover:bg-black brutalist:hover:text-white ${
                locale === lang.code
                  ? "text-gray-900 dark:text-white font-medium brutalist:text-black"
                  : "text-gray-500 dark:text-gray-400 brutalist:text-black"
              }`}
            >
              <span>{lang.label}</span>
              <span>{locale.toUpperCase()}</span>
              <span className="text-xs">▾</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
