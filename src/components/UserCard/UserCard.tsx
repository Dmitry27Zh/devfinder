import { LocalUser } from 'types'
import styles from './UserCard.module.scss'
import { UserStat } from 'components/UserStat'

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat publicRepos={props.publicRepos} followers={props.followers} following={props.following} />
    </div>
  )
}
