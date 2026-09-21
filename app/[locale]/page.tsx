import Navbar from "../Navbar"
import About from "../About"
import Skills from "../Skills"
import Projects from "../Projects"
import Experience from "../Experience"
import Contact from "../Contact"
import Footer from "../Footer"
import TypingAnimation from "../TypingAnimation"
import { getTranslations } from "next-intl/server"

export default async function Home() {
  const t = await getTranslations()

  return (
    <main>
      <Navbar />
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 brutalist:bg-[#f5f0e8] pt-16"
      >
        <div className="text-center px-6">
          <p className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest mb-4">
            {t("hero.welcome")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white brutalist:font-black brutalist:text-black brutalist:uppercase brutalist:tracking-tighter mb-4">
            {t("hero.name")}
          </h1>
          <h2 className="text-2xl text-gray-400 dark:text-gray-500 mb-6">
            <TypingAnimation />
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
            {t("hero.description")}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors border-2 border-transparent dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 brutalist:bg-black brutalist:rounded-none brutalist:border-black brutalist:font-bold"
            >
              {t("hero.viewProjects")}
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors brutalist:border-black brutalist:rounded-none brutalist:text-black brutalist:font-bold"
            >
              {t("hero.contactMe")}
            </a>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
