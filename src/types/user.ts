export type LocalUser = {
  login: string
  id: number
  avatarUrl: string
  name: string
  publicRepos: number
  company: string | null
  blog: string
  location: string | null
  bio: string | null
  twitterUsername: string | null
  followers: number
  following: number
  createdAt: string
}

export type User = {
  login: string
  id: number
  avatar_url: string
  name: string
  company: string | null
  blog: string
  location: string | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export type UnknownUser = {
  message: string
  documentation_url: string
}
