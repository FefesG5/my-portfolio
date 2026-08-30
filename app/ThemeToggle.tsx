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

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("brutalist")
    else setTheme("light")
  }

  return (
    <button
      onClick={cycleTheme}
      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
      aria-label="Toggle theme"
    >
      {theme === "light" && (
        <i className="ti ti-sun" style={{ fontSize: "18px" }} />
      )}
      {theme === "dark" && (
        <i className="ti ti-moon" style={{ fontSize: "18px" }} />
      )}
      {theme === "brutalist" && (
        <i className="ti ti-circle-square" style={{ fontSize: "18px" }} />
      )}
    </button>
  )
}
