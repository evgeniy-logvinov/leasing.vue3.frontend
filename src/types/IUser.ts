import { UserState } from './UserState'

export interface IUser {
  id: string
  userName: string
  inn: number
  email: string
  state: UserState
  blocked: boolean
  invited: boolean
  description: string
  displayState: string
}
