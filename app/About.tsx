import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations("about")

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-800 brutalist:bg-[#f5f0e8]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-4 border-transparent pb-2 brutalist:font-black brutalist:uppercase brutalist:text-black brutalist:border-black">
          {t("heading")}
        </h2>
        <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed brutalist:text-black">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
        </div>
      </div>
    </section>
  )
}
