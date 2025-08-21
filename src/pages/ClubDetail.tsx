import { useParams, Link } from 'react-router-dom'
import clubs from '../data/clubs'

interface Resource {
  title: string;
  url: string;
}

interface Contact {
  role: string;
  name: string;
  dept?: string;
}

interface Club {
  slug: string;
  imageUrl?: string;
  name: string;
  category: string;
  description: string;
  socials?: { [key: string]: string };
  website?: string;
  resources?: Resource[];
  contacts?: Contact[];
  announcements?: string[];
  events?: { title: string; date: string; location: string }[];
}

export default function ClubDetail() {
  const { slug } = useParams()
  const club = clubs.find((c: Club) => c.slug === slug) as Club | undefined

  if (!club) {
    return (
      <div>
        <p className="text-gray-300">Club not found.</p>
        <Link to="/clubs" className="text-brand-300 underline">Back to clubs</Link>
      </div>
    )
  }

  return (
    <article className="space-y-6">
      <header className="flex items-start gap-4">
        {club.imageUrl ? (
          <img src={club.imageUrl} alt={club.name} className="h-14 w-14 rounded-full object-cover bg-gray-800" />
        ) : (
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
            {club.name.substring(0,2).toUpperCase()}
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold">{club.name}</h1>
          <p className="text-gray-400">{club.category}</p>
        </div>
      </header>

      <p className="text-gray-200 max-w-prose">{club.description}</p>

      {club.socials && (
        <div className="flex flex-wrap gap-3">
          {Object.entries(club.socials).map(([k,v]) => (
            <a key={k} href={v} target="_blank" className="text-sm bg-white/5 border border-white/10 px-3 py-1.5 rounded hover:bg-white/10" rel="noreferrer">
              {k}
            </a>
          ))}
        </div>
      )}

      {club.website && (
        <p className="text-sm">
          Official page: <a href={club.website} target="_blank" rel="noreferrer" className="text-brand-300 underline">{club.website}</a>
        </p>
      )}

      {club.resources && club.resources.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Resources</h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {club.resources.map((r: Resource, i: number) => (
              <li key={i}><a className="text-brand-300 underline" href={r.url} target="_blank" rel="noreferrer">{r.title}</a></li>
            ))}
          </ul>
        </section>
      )}

      {club.contacts && club.contacts.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Contacts</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            {club.contacts.map((c: Contact, i: number) => (
              <li key={i}>
                <span className="text-gray-400">{c.role}:</span> {c.name}{c.dept ? `, ${c.dept}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold mb-3">Announcements</h2>
        <div className="space-y-3">
          {(club.announcements || []).map((a, i) => (
            <div key={i} className="bg-gray-900/60 border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-300">{a}</p>
            </div>
          ))}
          {!club.announcements?.length && <p className="text-sm text-gray-400">No announcements yet.</p>}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <div className="space-y-3">
          {(club.events || []).map((e, i) => (
            <div key={i} className="bg-gray-900/60 border border-white/10 rounded-lg p-4">
              <p className="text-sm text-gray-200 font-medium">{e.title}</p>
              <p className="text-xs text-gray-400">{e.date} • {e.location}</p>
            </div>
          ))}
          {!club.events?.length && <p className="text-sm text-gray-400">No events scheduled.</p>}
        </div>
      </section>
    </article>
  )
}
