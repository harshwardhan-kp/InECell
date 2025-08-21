import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Club } from '../types'

export default function ClubCard({ club }: { club: Club }) {
  const initials = club.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase()
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gray-900/60 border border-white/10 rounded-xl overflow-hidden"
    >
      <Link to={`/clubs/${club.slug}`} className="block p-5">
        <div className="flex items-center gap-4">
          {club.imageUrl ? (
            <img
              src={club.imageUrl}
              alt={club.name}
              className="h-14 w-14 rounded-full object-cover bg-gray-800"
              loading="lazy"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
              {initials}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-white">{club.name}</h3>
            <p className="text-xs text-gray-400">{club.category}</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-3 line-clamp-2">{club.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {club.tags?.slice(0,3).map(t => (
            <span key={t} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
