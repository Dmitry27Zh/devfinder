import _ from 'lodash'
import { User, LocalUser } from 'types'

export const extractLocalUser = (user: User): LocalUser => {
  return _.mapKeys(user, (_v, k) => _.camelCase(k)) as LocalUser
}
