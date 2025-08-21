import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ClubCard from '../components/ClubCard'
import clubsData from '../data/clubs'

import { useSearchParams } from 'react-router-dom'

export default function Clubs() {
  const [q, setQ] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState<string>(searchParams.get('category') || 'all')
  const [tag, setTag] = useState<string>(searchParams.get('tag') || 'all')
  const [sortBy, setSortBy] = useState<'name'|'category'>((searchParams.get('sort') as any) || 'name')

  const categories = useMemo(() => ['all', ...Array.from(new Set(clubsData.map(c => c.category)))], [])
  const tags = useMemo(() => ['all', ...Array.from(new Set(clubsData.flatMap(c => c.tags || [])))], [])

  useEffect(() => {
    const next = new URLSearchParams()
    if (q) next.set('q', q)
    if (category !== 'all') next.set('category', category)
    if (tag !== 'all') next.set('tag', tag)
    if (sortBy !== 'name') next.set('sort', sortBy)
    setSearchParams(next)
  }, [q, category, tag, sortBy])

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    let list = clubsData
    if (category !== 'all') list = list.filter(c => c.category === category)
    if (tag !== 'all') list = list.filter(c => (c.tags||[]).includes(tag))
    if (query) {
      list = list.filter(c => [c.name, c.category, ...(c.tags||[])].some(s => s.toLowerCase().includes(query)))
    }
    list = list.slice().sort((a,b) => (a[sortBy] as string).localeCompare(b[sortBy] as string))
    return list
  }, [q, category, tag, sortBy])

  return (
    <section>
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl font-bold">Clubs Directory</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="sm:w-80"><SearchBar onChange={setQ} /></div>
          <div className="flex gap-3 items-center">
            <select value={category} onChange={e => setCategory(e.target.value)} className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={tag} onChange={e => setTag(e.target.value)} className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm">
              {tags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option value="name">Sort: Name</option>
              <option value="category">Sort: Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((club) => (
          <ClubCard key={club.slug} club={club} />
        ))}
      </div>
    </section>
  )
}
