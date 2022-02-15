import { UserEntity } from '~/entities'
import { User } from '~/types'

const users: User[] = [
  {
    id: '1',
    userName: 'Клиент 1',
    inn: 12345678,
    email: 'info1@example.ru',
    state: 'UNREG',
  },
  {
    id: '2',
    userName: 'Клиент 2',
    inn: 12345677,
    email: 'info2@example.ru',
    state: 'REG',
  },
  {
    id: '3',
    userName: 'Клиент 3',
    inn: 12345676,
    email: 'info3@example.ru',
    state: 'UNREG',
  },
]

const newUser: User = {
  id: `${users.length}`,
  userName: `Клиент ${users.length}`,
  inn: users.length + 2345675,
  email: `info${users.length}@example.ru`,
  state: 'UNREG',
}

class UserService {
  async getUsers(): Promise<UserEntity[]> {
    return Promise.resolve(users.map((user) => UserEntity.parse(user)))
  }

  async addUser(): Promise<string> {
    users.push(newUser)
    return Promise.resolve(newUser.id)
  }
}

export const userService = new UserService()
