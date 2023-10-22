import { LocalUser } from 'types'
import styles from './UserStat.module.scss'

interface UserStatProps extends Pick<LocalUser, 'publicRepos' | 'followers' | 'following'> {}

export const UserStat = ({ publicRepos, followers, following }: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Public Repos</div>
        <div className={styles.infoNumber}>{publicRepos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  )
}
