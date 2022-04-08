import axiosInstance from 'axios'
import { authService } from '~/services'
import { AuthUserInfo } from '~/types'

// Set config defaults when creating the instance
const axios = axiosInstance.create({
  baseURL: 'http://localhost:3000/api/v1',
})

axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers = authHeader()
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// axios.interceptors.response.use(
//   (config) => {
//     if (config.headers) {
//       config.headers = authHeader()
//     }
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

const authHeader = (): { Authorization: string } => {
  const user: AuthUserInfo | null = authService.getUser()
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }
    // For node js express
    // return { 'x-access-token': user.accessToken };
  } else {
    return { Authorization: '' }
  }
}

export default axios
