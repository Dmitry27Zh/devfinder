import { ReactNode } from 'react'
import styles from './UserInfoItem.module.scss'

interface UserInfoItemProps {
  icon: ReactNode
  text?: string | null
  isLink?: boolean
}

export const UserInfoItem = ({ icon, text, isLink }: UserInfoItemProps) => {
  const currentText = text ?? 'Not available'
  let currentHref: string = ''

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`
  }
  return (
    <div className={`${styles.userInfoItem} ${text ? '' : styles.empty}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a className={styles.link} href={currentHref} target="_blank" rel="noreferrer">
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  )
}
