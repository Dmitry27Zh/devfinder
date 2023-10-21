export type LocalUser = {
  login: string
  id: number
  avatar: string
  name: string
  company: string
  blog: string
  location: string
  bio: string
  twitter: string
  public: number
  followers: number
  created: string
}

export type User = {
  login: string
  id: number
  avatar_url: string
  name: string
  company: string
  blog: string
  location: string
  bio: string
  twitter_username: string
  public_repos: number
  followers: number
  created_at: string
}

export type UnknownUser = {
  message: string
  documentation_url: string
}
