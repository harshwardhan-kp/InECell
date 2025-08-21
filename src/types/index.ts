export type Club = {
  slug: string
  name: string
  category: string
  description: string
  imageUrl?: string
  website?: string
  tags?: string[]
  socials?: Record<string, string>
  announcements?: string[]
  events?: { title: string; date: string; location: string }[]
}
