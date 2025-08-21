import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import { Link } from 'react-router-dom'
import clubs from '../data/clubs'

export default function Home() {
  const featured = clubs.slice(0, 6)
  return (
    <section className="py-10">
      {/* Hero */}
      <div className="text-center">
        <p className="text-brand-300 font-medium">One portal for every club</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <AnimatedText>Discover. Connect. Participate.</AnimatedText>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          A clutter-free hub for campus clubs, events, and announcements — no more lost messages in chat. Stay in the loop, explore your interests, and make the most of campus life.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/clubs" className="bg-white text-gray-900 px-5 py-3 rounded-md font-medium hover:bg-gray-200">Explore Clubs</Link>
          <a href="#features" className="border border-white/20 px-5 py-3 rounded-md font-medium text-white/90 hover:bg-white/10">How it helps</a>
        </div>
      </div>

      {/* Feature cards */}
      <div id="features" className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Announcements', desc: 'Each club has a clean, chronological feed for updates and opportunities.', href: '/announcements' },
          { title: 'Events', desc: 'Upcoming events are highlighted with dates, locations, and RSVP links.', href: '/events' },
          { title: 'Directory', desc: 'Search and filter clubs by category, tags, or interests.', href: '/clubs' },
        ].map((f, i) => (
          <motion.a
            key={f.title}
            href={f.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900/60 border border-white/10 rounded-xl p-6 block hover:border-brand-500/50"
          >
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{f.desc}</p>
            <span className="mt-4 inline-block text-brand-300 text-sm">Open →</span>
          </motion.a>
        ))}
      </div>

      {/* Stats strip */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[{k:'Clubs',v:clubs.length},{k:'Events/mo',v:'20+'},{k:'Members',v:'3,000+'},{k:'Announcements',v:'500+'}].map((s,i)=> (
          <motion.div key={s.k} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
            className="text-center bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">{s.v}</div>
            <div className="text-xs text-gray-400">{s.k}</div>
          </motion.div>
        ))}
      </div>

      {/* Featured clubs */}
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured clubs</h2>
          <Link to="/clubs" className="text-sm text-brand-300 underline">View all</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c,i)=> (
            <motion.a key={c.slug} href={`/clubs/${c.slug}`} whileHover={{y:-3}} className="bg-gray-900/60 border border-white/10 rounded-xl overflow-hidden block">
              {c.imageUrl && (
                <div className="h-36 w-full overflow-hidden bg-gray-800">
                  <img src={c.imageUrl} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
              )}
              <div className="p-4">
                <div className="text-white font-semibold">{c.name}</div>
                <div className="text-xs text-gray-400">{c.category}</div>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">{c.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-center">How it works</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-6">
          {[
            {t:'Browse',d:'Explore clubs by category and interests in a clean directory.'},
            {t:'Follow',d:'Open any club to see announcements, events, and links at a glance.'},
            {t:'Participate',d:'RSVP to events, reach out on socials, and join the community.'},
          ].map((x,i)=> (
            <motion.div key={x.t} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="bg-gray-900/60 border border-white/10 rounded-xl p-6">
              <div className="text-white font-semibold">{x.t}</div>
              <p className="text-sm text-gray-300 mt-2">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-center">What students say</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {[
            {q:'Finally a single place to see all club updates — no more digging through chats.',a:'2nd year, IT'},
            {q:'I found three new clubs I had no idea existed. Joining was super easy.',a:'1st year, Mech'},
          ].map((t,i)=> (
            <motion.blockquote key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-200">“{t.q}”</p>
              <footer className="mt-3 text-xs text-gray-400">— {t.a}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-center">FAQ</h2>
        <div className="mt-6 space-y-3">
          {[
            {q:'Do I need an account?',a:'Not to browse. Clubs may add external links for sign-ups or socials.'},
            {q:'How are announcements ordered?',a:'Newest items appear first within each club’s feed.'},
            {q:'Can I request a new club?',a:'Use the Submit Club button in the navbar to reach the team.'},
          ].map((f,i)=> (
            <details key={i} className="bg-gray-900/60 border border-white/10 rounded-lg p-4">
              <summary className="cursor-pointer text-white font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-r from-brand-700/40 to-brand-500/30 border border-brand-500/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold">Bring your club into the spotlight</h3>
        <p className="text-gray-200 mt-2">Share updates, host events, and grow your community through one unified portal.</p>
        <a href="#" className="inline-block mt-4 bg-white text-gray-900 px-5 py-3 rounded-md font-medium hover:bg-gray-200">Submit your club</a>
      </div>
    </section>
  )
}
