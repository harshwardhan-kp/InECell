import { useState } from 'react'

export default function SubmitClub() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Submit your club</h1>
      <p className="text-gray-300 max-w-prose">
        Share basic details about your club. We’ll review and add it to the directory.
      </p>
      {submitted ? (
        <p className="text-green-300">Thanks! We received your submission.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="grid gap-3 max-w-xl">
          <input required placeholder="Club name" className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <input required placeholder="Category (e.g., Technology)" className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <textarea required placeholder="Short description" rows={4} className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <input placeholder="Website (optional)" className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <input placeholder="Tags (comma-separated)" className="bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-md text-sm">Submit</button>
        </form>
      )}
    </section>
  )
}
