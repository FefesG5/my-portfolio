import Navbar from "./Navbar"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16"
      >
        <div className="text-center px-6">
          <p className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Gee Chai
          </h1>
          <h2 className="text-2xl text-gray-400 dark:text-gray-500 mb-6">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
            I build modern responsive web applications with Next.js, TypeScript,
            and Tailwind.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
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
