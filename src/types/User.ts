import { UserState } from './UserState'

export interface User {
  id: string
  userName: string
  inn: number
  email: string
  state: UserState
  accreditation?: boolean
  blocked?: boolean
  description?: string
}
