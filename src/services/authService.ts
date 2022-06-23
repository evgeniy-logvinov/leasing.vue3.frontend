import axios from '~/http/axios'
import { AuthUserInfo, ResetPassword, SignInInfo, SignUpInfo } from '~/types'

class AuthService {
  async signIn(signInInfo: SignInInfo): Promise<AuthUserInfo> {
    const { data: userInfo }: { data: AuthUserInfo } = await axios.post(
      '/auth/signin',
      signInInfo
    )

    if (userInfo.accessToken) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.setUser(userInfo)
    }
    return Promise.resolve(userInfo)
  }

  async signUp(signUpInfo: SignUpInfo): Promise<void> {
    return await axios.post('/auth/signup', signUpInfo)
  }

  async resetPassword(resetPassword: ResetPassword): Promise<void> {
    return await axios.post('/auth/reset-password', resetPassword)
  }

  signOut(): void {
    this.removeUser()
  }

  setUser(user: AuthUserInfo): void {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user))
  }

  removeUser(): void {
    localStorage.removeItem('user')
    // TODO: send request to remove token
  }

  getUser(): AuthUserInfo | null {
    const user = localStorage.getItem('user')
    return user ? (JSON.parse(user) as AuthUserInfo) : null
  }
}

export const authService = new AuthService()
