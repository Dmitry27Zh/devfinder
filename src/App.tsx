import { useState } from 'react'
import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { UserCard } from 'components/UserCard'
import { LocalUser, UnknownUser, User } from 'types'
import { BASE_URL } from 'const'
import { isUser } from 'utils/typeguards'
import { extractLocalUser } from 'utils/extract-local-user'

function App() {
  const [user, setUser] = useState<LocalUser | null>(null)
  const fetchUser = async (username: string) => {
    const url = `${BASE_URL}${username}`
    const response = await fetch(url)
    const user: User | UnknownUser = await response.json()

    if (isUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
