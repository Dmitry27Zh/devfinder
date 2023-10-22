import { ReactComponent as IconCompany } from 'assets/icon-company.svg'
import { ReactComponent as IconLocation } from 'assets/icon-location.svg'
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg'
import { ReactComponent as IconBlog } from 'assets/icon-website.svg'
import { LocalUser } from 'types'
import styles from './UserInfo.module.scss'
import { UserInfoItem, UserInfoItemProps } from 'components/UserInfoItem'

interface UserInfoProps extends Pick<LocalUser, 'blog' | 'company' | 'location' | 'twitterUsername'> {}

export const UserInfo = ({ blog, company, location, twitterUsername }: UserInfoProps) => {
  const items: UserInfoItemProps[] = [
    { icon: <IconLocation />, text: location },
    { icon: <IconBlog />, text: blog, isLink: true },
    { icon: <IconTwitter />, text: twitterUsername },
    { icon: <IconCompany />, text: company },
  ]

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <UserInfoItem key={`${item.text}-${index}}`} {...item} />
      ))}
    </div>
  )
}
