export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact</h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
        <form className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl p-8">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">Message</label>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="border border-gray-200 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}