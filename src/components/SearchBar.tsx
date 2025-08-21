import { useState } from 'react'

export default function SearchBar({ onChange }: { onChange: (q: string) => void }) {
  const [q, setQ] = useState('')
  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange(e.target.value) }}
        placeholder="Search clubs, categories, tags..."
        className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-2.5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <span className="absolute right-3 top-2.5 text-xs text-gray-400">⌘K</span>
    </div>
  )
}
