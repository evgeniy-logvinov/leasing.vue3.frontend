import { LeasingCompanyEntity, ClientEntity } from '~/entities'
import instance from '~/http/axios'
import { Client, LeasingCompany, User, LeasingCompanyEmployees } from '~/types'

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

const leasingCompanies: LeasingCompany[] = [
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

const leasingCompanyEmployees: LeasingCompanyEmployees = {
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

const newLeasingCompany: LeasingCompany = {
  id: `${leasingCompanies.length}`,
  userName: `Компания ${leasingCompanies.length}`,
  inn: leasingCompanies.length + 2345675,
  email: `info${leasingCompanies.length}@example.ru`,
  state: 'UNREG',
}

let parsedClients: ClientEntity[] = []
const refreshClients = () => {
  parsedClients = clients.map((client) => ClientEntity.parse(client))
}

let parsedLeasingCompanies: LeasingCompanyEntity[] = []
const refreshLeasingCompanies = () => {
  parsedLeasingCompanies = leasingCompanies.map((lk) =>
    LeasingCompanyEntity.parse(lk)
  )
}

class UserService {
  async getClients(): Promise<ClientEntity[]> {
    instance.get('/getAllTodo')
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

  async getLeasingCompanies(): Promise<LeasingCompanyEntity[]> {
    console.log('getLeasingCompanies')
    refreshLeasingCompanies()
    return Promise.resolve(parsedLeasingCompanies)
  }

  async addLeasingCompany(
    userName: string,
    inn: number,
    email: string
  ): Promise<string> {
    const newUser = ClientEntity.parse({
      ...newLeasingCompany,
      userName,
      inn,
      email,
      id: '10',
    })
    console.log('add leasing company', newUser)
    leasingCompanies.push(newUser)
    return Promise.resolve(newUser.id)
  }

  async updateLeasingCompany(leasingCompany: LeasingCompany): Promise<string> {
    console.log('update lizling company', leasingCompany)
    return Promise.resolve(leasingCompany.id)
  }

  async inviteLeasingCompany(id: string): Promise<string> {
    console.log('invite leasing company', id)
    return Promise.resolve(id)
  }

  async deleteLeasingCompany(id: string): Promise<string> {
    console.log('delete leasing company', id)
    return Promise.resolve(id)
  }

  async downloadAgreement(id: string): Promise<void> {
    console.log('download agreement', id)
    return Promise.resolve()
  }

  async getLeasingCompanyEmployees(
    id: string
  ): Promise<LeasingCompanyEmployees> {
    console.log('getLeasingCompanyEmployees', id)
    return Promise.resolve(leasingCompanyEmployees)
  }
}

export const userService = new UserService()
