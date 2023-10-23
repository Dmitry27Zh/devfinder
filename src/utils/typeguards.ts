import { User } from 'types'

export const isUser = (user: any): user is User => 'id' in user
