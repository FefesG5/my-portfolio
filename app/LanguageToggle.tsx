"use client"

import { useRouter, usePathname } from "@/i18n/navigation"
import { useLocale } from "next-intl"

export default function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ja" : "en"
    router.push(pathname, { locale: nextLocale })
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
