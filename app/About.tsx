export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <p>
            Hi, I'm Gee Chai — a Frontend Developer based in Japan passionate
            about building clean, fast, and user-friendly web applications.
          </p>
          <p>
            I specialize in Next.js, TypeScript, and Tailwind CSS. I enjoy
            turning complex problems into simple, beautiful interfaces that
            people love to use.
          </p>
          <p>
            When I'm not coding, I'm learning something new — either Japanese
            and the lastest development in technology.
          </p>
        </div>
      </div>
    </section>
  )
}
