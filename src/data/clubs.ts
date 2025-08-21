import type { Club } from '../types'

const clubs: Club[] = [
  {
    slug: 'innovation-cell',
    name: 'Innovation & Entrepreneurship Cell',
    category: 'Entrepreneurship',
    description: 'Drives innovation across campus through talks, hackathons, and mentorship for student founders.',
    imageUrl: 'https://images.unsplash.com/photo-1529336953121-b0cdb88f7a9a?q=80&w=1200&auto=format&fit=crop',
    tags: ['startup', 'innovation', 'workshops'],
    socials: {
      Website: '#',
      Instagram: '#',
      LinkedIn: '#',
    },
    announcements: [
      'Startup Bootcamp registrations open till Sep 10',
      'Seeking mentors for Founder Office Hours',
    ],
    events: [
      { title: 'Idea Pitch Night', date: 'Sep 20, 6 PM', location: 'Auditorium A' },
    ],
  },
  {
    slug: 'coding-club',
    name: 'Coding Club',
    category: 'Technology',
    description: 'Peer learning for competitive programming, open-source, and developer tooling.',
    imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    tags: ['cp', 'open-source', 'dev'],
    socials: { GitHub: '#', Discord: '#'},
    announcements: ['Weekly CP meetup every Friday 7 PM'],
    events: [
      { title: 'Open Source Sprint', date: 'Oct 1, 10 AM', location: 'Lab 2' },
    ],
  },
  {
    slug: 'cultural-committee',
    name: 'Cultural Committee',
    category: 'Arts & Culture',
    description: 'Celebrating art, music, dance, and cultural diversity through events and fests.',
    imageUrl: 'https://images.unsplash.com/photo-1515165562835-c3b8c2e0ea4a?q=80&w=1200&auto=format&fit=crop',
    tags: ['music', 'dance', 'fest'],
    socials: { Instagram: '#'},
  },
  { slug: 'technical-board', name: 'Technical Board', category: 'Technology', description: 'Umbrella for technical clubs and initiatives.', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', tags: ['tech', 'workshops'] },
  { slug: 'cultural-music-club', name: 'Cultural & Music Club', category: 'Arts & Culture', description: 'Performing arts, music and cultural activities.', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop', tags: ['music','dance'] },
  { slug: 'debate-quiz-dramatics', name: 'Debate, Quiz & Dramatics', category: 'Arts & Culture', description: 'Public speaking, quizzing, theatre.', imageUrl: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop', tags: ['debate','quiz','drama'] },
  { slug: 'fine-arts', name: 'Fine Arts Club', category: 'Arts & Culture', description: 'Sketching, painting, crafts and exhibitions.', imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', tags: ['art','sketch'] },
  { slug: 'coe-ai-robotics', name: 'COE for AI & Robotics', category: 'Technology', description: 'Center of Excellence for AI and Robotics.', imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', tags: ['ai','robotics'] },
  { slug: 'magazine-board', name: 'Magazine Board', category: 'Media', description: 'College magazine and editorial board.', imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop', tags: ['editorial','writing'] },
  { slug: 'nss', name: 'NSS', category: 'Service', description: 'National Service Scheme—community service initiatives.', imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop', tags: ['service','social'] },
  { slug: 'maths-club', name: 'Maths Club', category: 'Academics', description: 'Mathematics problem solving and research circles.', imageUrl: 'https://images.unsplash.com/photo-1520975922284-9d51199637ae?q=80&w=1200&auto=format&fit=crop', tags: ['math'] },
  { slug: 'sports-club', name: 'Sports Club', category: 'Sports', description: 'Sports teams and fitness events.', imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop', tags: ['sports'] },
  { slug: 'spiritual-club', name: 'Spiritual Club', category: 'Wellness', description: 'Wellbeing, meditation and spiritual talks.', imageUrl: 'https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?q=80&w=1200&auto=format&fit=crop', tags: ['wellness'] },
  { slug: 'open-source', name: 'Open Source Software Club', category: 'Technology', description: 'OSS contributions and meetups.', imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', tags: ['open-source'] },
  { slug: 'sae-club', name: 'SAE AIT Collegiate Club', category: 'Automotive', description: 'Automotive engineering and SAE competitions.', imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1200&auto=format&fit=crop', tags: ['automotive'] },
  { slug: 'nature-club', name: 'Nature Club', category: 'Environment', description: 'Environment awareness, treks and clean-ups.', imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop', tags: ['environment'] },
  { slug: 'radio-club', name: 'Radio Club', category: 'Media', description: 'Campus radio and audio productions.', imageUrl: 'https://images.unsplash.com/photo-1463183547458-6a2c760d0919?q=80&w=1200&auto=format&fit=crop', tags: ['audio','media'] },
  { slug: 'competitive-coding', name: 'Competitive Coding Club', category: 'Technology', description: 'CP, DSA and contests.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', tags: ['cp','dsa'] },
  { slug: 'infosec-digiforensics', name: 'InfoSec & Digital Forensics', category: 'Technology', description: 'Security research and forensics.', imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', tags: ['security'] },
  { slug: 'ev-cell', name: 'Electric Vehicle Cell', category: 'Automotive', description: 'EV projects, research and events.', imageUrl: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop', tags: ['ev'] },
  { slug: 'cycling-club', name: 'Cycling Club', category: 'Sports', description: 'Group rides, endurance events and awareness.', imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1200&auto=format&fit=crop', tags: ['cycling'] },
  { slug: 'ar-vr-club', name: 'AR/VR Club', category: 'Technology', description: 'Augmented and Virtual Reality projects and demos.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', tags: ['ar','vr'] },
  { slug: 'gdsc', name: 'Google Developer Student Clubs', category: 'Technology', description: 'Developer community by Google.', imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop', tags: ['gdsc','community'] },
  { slug: 'ncc', name: 'NCC', category: 'Service', description: 'National Cadet Corps activities and training.', imageUrl: 'https://images.unsplash.com/photo-1473881823110-d94cac66318a?q=80&w=1200&auto=format&fit=crop', tags: ['ncc'] },
]

export default clubs
