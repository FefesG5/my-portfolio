import { useTranslations } from "next-intl"

export default function Experience() {
  const t = useTranslations("experience")

  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-gray-900 brutalist:bg-[#f5f0e8]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-4 border-transparent pb-2 brutalist:font-black brutalist:uppercase brutalist:text-black brutalist:border-black">
          {t("heading")}
        </h2>
        <div className="flex flex-col gap-10">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white brutalist:font-black brutalist:text-black brutalist:uppercase">
                  {t("bootcampTitle")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 brutalist:text-black">
                  {t("bootcampCompany")}
                </p>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-500 brutalist:text-black brutalist:font-bold">
                {t("bootcampDate")}
              </span>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-gray-600 dark:text-gray-300 brutalist:text-black">
                {t("bootcampBullet1")}
              </li>
              <li className="text-gray-600 dark:text-gray-300 brutalist:text-black">
                {t("bootcampBullet2")}
              </li>
              <li className="text-gray-600 dark:text-gray-300 brutalist:text-black">
                {t("bootcampBullet3")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
