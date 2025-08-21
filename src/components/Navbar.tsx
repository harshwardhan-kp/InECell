import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="font-bold text-xl tracking-tight">
          <span className="text-brand-400">InE</span>
          <span className="text-white">Clubs</span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>Home</NavLink>
          <NavLink to="/announcements" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>Announcements</NavLink>
          <NavLink to="/events" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>Events</NavLink>
          <NavLink to="/clubs" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>Clubs</NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `text-sm hover:text-brand-300 ${isActive ? 'text-brand-300' : 'text-gray-300'}`}>Contact</NavLink>
          <motion.a
            href="/submit"
            className="text-sm bg-brand-600 hover:bg-brand-500 text-white px-3 py-1.5 rounded-md"
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -1 }}
          >
            Submit Club
          </motion.a>
        </nav>
      </div>
    </header>
  )
}
