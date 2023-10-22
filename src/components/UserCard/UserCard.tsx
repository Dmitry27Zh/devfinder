import { LocalUser } from 'types'
import styles from './UserCard.module.scss'
import { UserStat } from 'components/UserStat'
import { UserTitle } from 'components/UserTitle'

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={props.avatarUrl} alt={props.login} />
      <UserTitle name={props.name} login={props.login} createdAt={props.createdAt} />
      <p className={`${styles.bio} ${props.bio ? '' : styles.empty}`}>{props.bio ?? 'This profile has no bio'}</p>
      <UserStat publicRepos={props.publicRepos} followers={props.followers} following={props.following} />
    </div>
  )
}
