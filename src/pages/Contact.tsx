export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-gray-300 max-w-prose">
        Have a question or feedback? Reach out and we’ll get back to you.
      </p>
      <div className="bg-gray-900/60 border border-white/10 rounded-xl p-6">
        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }} className="space-y-3">
          <input required placeholder="Your name" className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <input required type="email" placeholder="Email" className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <textarea required placeholder="Message" rows={4} className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm" />
          <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-md text-sm">Send</button>
        </form>
      </div>
    </section>
  )
}
