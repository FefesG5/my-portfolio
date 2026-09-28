"use client"

import { useRouter, usePathname } from "@/i18n/navigation"
import { useLocale } from "next-intl"
import { useEffect, useRef } from "react"

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const scrollRef = useRef(0)

  useEffect(() => {
    if (scrollRef.current > 0) {
      window.scrollTo(0, scrollRef.current)
      scrollRef.current = 0
    }
  })

  const toggleLanguage = () => {
    scrollRef.current = window.scrollY
    const nextLocale = locale === "en" ? "ja" : "en"
    router.replace(pathname, { locale: nextLocale, scroll: false })
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium brutalist:text-black"
      aria-label="Toggle language"
    >
      {locale === "en" ? "JP" : "EN"}
    </button>
  )
}
