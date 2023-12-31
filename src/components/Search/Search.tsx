import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import styles from './Search.module.scss'
import { FormEvent } from 'react'
import { Button } from 'components/Button'

interface SearchProps {
  hasError: boolean
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()
    const text = event.currentTarget.username.value.trim()

    if (text) {
      onSubmit(text)
      event.currentTarget.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search">
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          type="text"
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
