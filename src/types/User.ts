import { UserState } from './UserState'

export interface User {
  id: string
  userName: string
  inn: number
  email: string
  state: UserState
  blocked?: boolean
  description?: string
}
