"use client"

import { useState, useEffect, useRef } from "react"

const phrases = [
  "Frontend Developer",
  "Next.js Developer",
  "Modern Web Developer",
]

export default function TypingAnimation() {
  const [displayText, setDisplayText] = useState("")
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)

  useEffect(() => {
    const tick = () => {
      const phrase = phrases[phraseIndex.current]

      if (!isDeleting.current) {
        charIndex.current += 1
        setDisplayText(phrase.slice(0, charIndex.current))

        if (charIndex.current === phrase.length) {
          isDeleting.current = true
          setTimeout(tick, 1500)
          return
        }
      } else {
        charIndex.current -= 1
        setDisplayText(phrase.slice(0, charIndex.current))

        if (charIndex.current === 0) {
          isDeleting.current = false
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length
        }
      }

      setTimeout(tick, isDeleting.current ? 50 : 100)
    }

    const timeout = setTimeout(tick, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
