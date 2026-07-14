export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
  ]

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skills
        </h2>
        <p className="text-gray-400 dark:text-gray-500 mb-8">
          Technologies I work with
        </p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
