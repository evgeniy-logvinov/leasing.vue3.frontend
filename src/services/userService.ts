import { LizingCompanyEntity, ClientEntity } from '~/entities'
import { Client, LizingCompany, User, LizingCompanyEmployees } from '~/types'

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
    state: 'UNREG',
    invited: true,
    blocked: true,
    description: 'Test description',
  },
  {
    id: '3',
    userName: 'Клиент 3',
    inn: 12345676,
    email: 'info3@example.ru',
    state: 'REG',
    invited: true,
    blocked: true,
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
    state: 'UNREG',
    invited: true,
    blocked: true,
    description: 'Test description',
  },
  {
    id: '3',
    userName: 'Компания 3',
    inn: 12345676,
    email: 'info3@example.ru',
    state: 'REG',
    invited: true,
    blocked: true,
  },
  {
    id: '4',
    userName: 'Компания 4',
    inn: 12345672,
    email: 'info3@example.ru',
    state: 'REG',
    invited: true,
    blocked: true,
    accreditation: true,
  },
]

const lizingCompanyEmployees: LizingCompanyEmployees = {
  id: '1',
  analitics: {
    headOfDepartment: 'Логвинов Е.К',
    employees: [
      {
        id: '1',
        firstName: 'Логвинов',
        lastName: 'Евгений',
        patronymic: 'Константинович',
      },
      {
        id: '2',
        firstName: 'Логвинов',
        lastName: 'Евгений',
        patronymic: 'Константинович',
      },
    ],
  },
  sales: {
    headOfDepartment: 'Логвинов Е.К',
    regions: [
      {
        id: '1',
        name: 'Екатеринбург',
        headOfDepartment: 'Логвинова О. В.',
        employees: [
          {
            id: '1',
            firstName: 'Логвинов',
            lastName: 'Евгений',
            patronymic: 'Константинович',
          },
          {
            id: '2',
            firstName: 'Логвинов',
            lastName: 'Евгений',
            patronymic: 'Константинович',
          },
        ],
      },
      {
        id: '2',
        name: 'Челябинск',
        headOfDepartment: 'Логвинова О. В.',
        employees: [
          {
            id: '1',
            firstName: 'Логвинов',
            lastName: 'Евгений',
            patronymic: 'Константинович',
          },
          {
            id: '2',
            firstName: 'Логвинов',
            lastName: 'Евгений',
            patronymic: 'Константинович',
          },
        ],
      },
    ],
  },
}

const newLizingCompany: LizingCompany = {
  id: `${lizingCompanies.length}`,
  userName: `Компания ${lizingCompanies.length}`,
  inn: lizingCompanies.length + 2345675,
  email: `info${lizingCompanies.length}@example.ru`,
  state: 'UNREG',
}

let parsedClients: ClientEntity[] = []
const refreshClients = () => {
  parsedClients = clients.map((client) => ClientEntity.parse(client))
}

let parsedLizingCompanies: LizingCompanyEntity[] = []
const refreshLizingCompanies = () => {
  parsedLizingCompanies = lizingCompanies.map((lk) =>
    LizingCompanyEntity.parse(lk)
  )
}

class UserService {
  async getClients(): Promise<ClientEntity[]> {
    console.log('getClients')
    refreshClients()
    return Promise.resolve(parsedClients)
  }

  async addClient(
    userName: string,
    inn: number,
    email: string
  ): Promise<string> {
    const newUser = ClientEntity.parse({
      ...newClient,
      userName,
      inn,
      email,
      id: '10',
    })
    console.log('addclient', newUser)
    clients.push(newUser)
    return Promise.resolve(newUser.id)
  }

  async updateClient(client: User): Promise<string> {
    console.log('update client', client)
    return Promise.resolve(client.id)
  }

  async inviteClient(id: string): Promise<string> {
    console.log('invite client', id)
    return Promise.resolve(id)
  }

  async deleteClient(id: string): Promise<string> {
    console.log('delete client', id)
    return Promise.resolve(id)
  }

  async getLizingCompanies(): Promise<LizingCompanyEntity[]> {
    console.log('getLizingCompanies')
    refreshLizingCompanies()
    return Promise.resolve(parsedLizingCompanies)
  }

  async addLizingCompany(
    userName: string,
    inn: number,
    email: string
  ): Promise<string> {
    const newUser = ClientEntity.parse({
      ...newLizingCompany,
      userName,
      inn,
      email,
      id: '10',
    })
    console.log('add lizing company', newUser)
    lizingCompanies.push(newUser)
    return Promise.resolve(newUser.id)
  }

  async updateLizingCompany(lizingCompany: LizingCompany): Promise<string> {
    console.log('update lizling company', lizingCompany)
    return Promise.resolve(lizingCompany.id)
  }

  async inviteLizingCompany(id: string): Promise<string> {
    console.log('invite lizing company', id)
    return Promise.resolve(id)
  }

  async deleteLizingCompany(id: string): Promise<string> {
    console.log('delete lizing company', id)
    return Promise.resolve(id)
  }

  async downloadAgreement(id: string): Promise<void> {
    console.log('download agreement', id)
    return Promise.resolve()
  }

  async getLizingCompanyEmployees(id: string): Promise<LizingCompanyEmployees> {
    console.log('getLizingCompanyEmployees', id)
    return Promise.resolve(lizingCompanyEmployees)
  }
}

export const userService = new UserService()
