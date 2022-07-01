import { UserState } from './UserState'

export interface User {
  id: string
  userName: string
  inn: string
  email: string
  state: UserState
  blocked?: boolean
  invited?: boolean
  description?: string
}
