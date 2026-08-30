"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark", "brutalist"]}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
