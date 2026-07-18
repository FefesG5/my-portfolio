const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TypeScript and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/FefesG5/my-portfolio",
  },
  {
    title: "Project Two",
    description: "Coming soon — something cool is in the works.",
    tech: ["Next", "TypeScript", "Tailwind"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
