export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 dark:bg-gray-950 brutalist:bg-black">
      <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
        <span className="text-gray-400 dark:text-gray-500 text-sm brutalist:text-white brutalist:font-bold">
          © 2026 Gee Chai
        </span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="https://github.com"
            className="hover:text-white transition-colors brutalist:text-white brutalist:font-bold brutalist:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
