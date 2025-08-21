export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <p>© {new Date().getFullYear()} InE-Cell Clubs Portal</p>
        <p className="opacity-80">Made for campus community communication</p>
      </div>
    </footer>
  )
}
