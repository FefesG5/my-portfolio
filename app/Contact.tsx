"use client"

import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl p-8"
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Message</label>
            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-2 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
