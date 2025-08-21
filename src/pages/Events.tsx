import { Link } from 'react-router-dom'
import clubs from '../data/clubs'

function rsvpHref(club: string, title: string) {
  const subject = encodeURIComponent(`[RSVP] ${club} – ${title}`)
  const body = encodeURIComponent(`Hi ${club} team,%0D%0A%0D%0AI'd like to RSVP for "${title}".%0D%0A%0D%0AThanks!`)
  return `mailto:?subject=${subject}&body=${body}`
}

export default function Events() {
  const events = clubs.flatMap(club => (club.events || []).map(e => ({
    ...e,
    clubSlug: club.slug,
    clubName: club.name,
  })))

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Events</h1>
        <Link className="text-sm text-brand-300 underline" to="/clubs">Browse clubs</Link>
      </header>

      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="bg-gray-900/60 border border-white/10 rounded-lg p-4 flex items-start justify-between gap-4">
            <div>
              <Link to={`/clubs/${e.clubSlug}`} className="text-brand-300 text-sm underline">{e.clubName}</Link>
              <p className="text-gray-200 font-medium">{e.title}</p>
              <p className="text-xs text-gray-400">{e.date} • {e.location}</p>
            </div>
            <div className="shrink-0">
              <a href={rsvpHref(e.clubName, e.title)} className="text-sm bg-brand-600 hover:bg-brand-500 text-white px-3 py-1.5 rounded-md">RSVP</a>
            </div>
          </div>
        ))}
        {!events.length && (
          <p className="text-sm text-gray-400">No upcoming events.</p>
        )}
      </div>
    </section>
  )
}
