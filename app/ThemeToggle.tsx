"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <i className="ti ti-sun" style={{ fontSize: "18px" }} />
      ) : (
        <i className="ti ti-moon" style={{ fontSize: "18px" }} />
      )}
    </button>
  )
}
