import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import styles from './Search.module.scss'
import { FormEvent, useRef } from 'react'
import { Button } from 'components/Button'

interface SearchProps {
  hasError: boolean
  onSubmit: (text: string) => void
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const inputElement = searchRef.current

    if (inputElement) {
      onSubmit(inputElement.value)
      inputElement.value = ''
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
          ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  )
}
