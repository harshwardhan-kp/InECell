import { Link } from 'react-router-dom'
import clubs from '../data/clubs'

export default function Announcements() {
  const items = clubs.flatMap(club => (club.announcements || []).map((text, idx) => ({
    clubSlug: club.slug,
    clubName: club.name,
    text,
    // Since we don't have timestamps, keep stable order by club then index
    sortKey: `${club.slug}-${String(idx).padStart(3,'0')}`,
  })))
  // Reverse to show later items first within each club grouping
  const sorted = items.sort((a, b) => a.sortKey.localeCompare(b.sortKey)).reverse()

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Announcements</h1>
        <Link className="text-sm text-brand-300 underline" to="/clubs">Browse clubs</Link>
      </header>

      <div className="space-y-4">
        {sorted.map((a, i) => (
          <div key={i} className="bg-gray-900/60 border border-white/10 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">
              from <Link to={`/clubs/${a.clubSlug}`} className="text-brand-300 underline">{a.clubName}</Link>
            </div>
            <p className="text-sm text-gray-200">{a.text}</p>
          </div>
        ))}
        {!sorted.length && (
          <p className="text-sm text-gray-400">No announcements yet.</p>
        )}
      </div>
    </section>
  )
}
