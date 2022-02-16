import { ClientEntity } from '~/entities/ClientEntity'
import { LizingCompanyEntity } from '~/entities/LizingCompanyEntity'
import { Client, LizingCompany } from '~/types'

const clients: Client[] = [
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

const newClient: Client = {
  id: `${clients.length}`,
  userName: `Клиент ${clients.length}`,
  inn: clients.length + 2345675,
  email: `info${clients.length}@example.ru`,
  state: 'UNREG',
}

const lizingCompanies: LizingCompany[] = [
  {
    id: '1',
    userName: 'Компания 1',
    inn: 12345678,
    email: 'info1@example.ru',
    state: 'UNREG',
  },
  {
    id: '2',
    userName: 'Компания 2',
    inn: 12345677,
    email: 'info2@example.ru',
    state: 'REG',
  },
  {
    id: '3',
    userName: 'Компания 3',
    inn: 12345676,
    email: 'info3@example.ru',
    state: 'UNREG',
  },
]

const newLizingCompany: LizingCompany = {
  id: `${lizingCompanies.length}`,
  userName: `Компания ${lizingCompanies.length}`,
  inn: lizingCompanies.length + 2345675,
  email: `info${lizingCompanies.length}@example.ru`,
  state: 'UNREG',
}

class UserService {
  async getClients(): Promise<ClientEntity[]> {
    return Promise.resolve(clients.map((client) => ClientEntity.parse(client)))
  }

  async addClient(): Promise<string> {
    clients.push(newClient)
    return Promise.resolve(newClient.id)
  }

  async getLizingCompanies(): Promise<LizingCompanyEntity[]> {
    return Promise.resolve(
      lizingCompanies.map((lizingCompany) =>
        LizingCompanyEntity.parse(lizingCompany)
      )
    )
  }

  async addLizingCompany(): Promise<string> {
    lizingCompanies.push(newLizingCompany)
    return Promise.resolve(newLizingCompany.id)
  }
}

export const userService = new UserService()
