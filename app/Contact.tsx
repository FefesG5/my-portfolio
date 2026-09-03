"use client"

import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.")
      setStatus("error")
      return
    }

    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-800 brutalist:bg-[#f5f0e8]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 brutalist:font-black brutalist:uppercase brutalist:text-black brutalist:border-b-4 brutalist:border-black brutalist:pb-2">
          Contact
        </h2>
        <p className="text-gray-400 dark:text-gray-500 mb-8 brutalist:text-black">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl p-8 brutalist:bg-[#f5f0e8] brutalist:border-2 brutalist:border-black brutalist:rounded-none"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400 brutalist:text-black brutalist:font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors brutalist:bg-[#f5f0e8] brutalist:border-2 brutalist:border-black brutalist:rounded-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400 brutalist:text-black brutalist:font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors brutalist:bg-[#f5f0e8] brutalist:border-2 brutalist:border-black brutalist:rounded-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 dark:text-gray-400 brutalist:text-black brutalist:font-bold">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors brutalist:bg-[#f5f0e8] brutalist:border-2 brutalist:border-black brutalist:rounded-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors mt-2 disabled:opacity-50 brutalist:bg-black brutalist:rounded-none brutalist:border-2 brutalist:border-black brutalist:font-bold"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  )
}
