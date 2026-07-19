const skillGroups = [
  {
    category: "Frameworks",
    skills: ["Next.js", "React"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Tools",
    skills: ["Tailwind CSS", "Git"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skills
        </h2>
        <p className="text-gray-400 dark:text-gray-500 mb-8">
          Technologies I work with
        </p>
        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
