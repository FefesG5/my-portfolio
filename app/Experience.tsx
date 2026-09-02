const experience = [
  {
    title: "Code Chrysalis: Coding Bootcamp in Tokyo",
    company: "Code Chrysalis",
    date: "2024 — 3 months",
    bullets: [
      "Completed an intensive full-time web development bootcamp",
      "Built projects using HTML, CSS, JavaScript and React",
      "Learned modern development workflows and best practices",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-gray-900 brutalist:bg-[#f5f0e8]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 brutalist:font-black brutalist:uppercase brutalist:text-black brutalist:border-b-4 brutalist:border-black brutalist:pb-2">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.title}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white brutalist:font-black brutalist:text-black brutalist:uppercase">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 brutalist:text-black">
                    {job.company}
                  </p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500 brutalist:text-black brutalist:font-bold">
                  {job.date}
                </span>
              </div>
              <ul className="list-disc list-inside flex flex-col gap-1">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-gray-600 dark:text-gray-300 brutalist:text-black"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
