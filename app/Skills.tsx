import { useTranslations } from "next-intl"

const skillGroups = [
  {
    category: "frameworks",
    skills: ["Next.js", "React"],
  },
  {
    category: "languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "tools",
    skills: ["Tailwind CSS", "Git"],
  },
]

export default function Skills() {
  const t = useTranslations("skills")

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-900 brutalist:bg-[#f5f0e8]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 border-b-4 border-transparent pb-2 brutalist:font-black brutalist:uppercase brutalist:text-black brutalist:border-black">
          {t("heading")}
        </h2>
        <p className="text-gray-400 dark:text-gray-500 mb-8 brutalist:text-black">
          {t("subtitle")}
        </p>
        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 brutalist:text-black brutalist:font-black">
                {t(group.category)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-default border-2 border-transparent brutalist:bg-black brutalist:rounded-none brutalist:border-black"
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
