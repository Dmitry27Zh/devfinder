import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Search } from 'components/Search'
import { UserCard } from 'components/UserCard'
import { user } from 'components/mock'

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => null} />
      <UserCard {...user} />
    </Container>
  )
}

export default App
