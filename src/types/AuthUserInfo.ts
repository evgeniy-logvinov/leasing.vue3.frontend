import { Permissions } from './Permissions'

export interface AuthUserInfo {
  accessToken: string
  user: string
  role: string
  permissions: Permissions[]
}
