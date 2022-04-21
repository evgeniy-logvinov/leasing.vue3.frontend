import { LeasingCompanyEntity, ClientEntity } from '~/entities'
import axios from '~/http/axios'
import { LeasingCompanyEmployees } from '~/types'

// const clients: Client[] = [
//   {
//     id: '1',
//     userName: 'Клиент 1',
//     inn: 12345678,
//     email: 'info1@example.ru',
//     state: 'UNREG',
//   },
//   {
//     id: '2',
//     userName: 'Клиент 2',
//     inn: 12345677,
//     email: 'info2@example.ru',
//     state: 'UNREG',
//     invited: true,
//     blocked: true,
//     description: 'Test description',
//   },
//   {
//     id: '3',
//     userName: 'Клиент 3',
//     inn: 12345676,
//     email: 'info3@example.ru',
//     state: 'REG',
//     invited: true,
//     blocked: true,
//   },
// ]

// const newClient: Client = {
//   id: `${clients.length}`,
//   userName: `Клиент ${clients.length}`,
//   inn: clients.length + 2345675,
//   email: `info${clients.length}@example.ru`,
//   state: 'UNREG',
// }

// const leasingCompanies: LeasingCompany[] = [
//   {
//     id: '1',
//     userName: 'Компания 1',
//     inn: 12345678,
//     email: 'info1@example.ru',
//     state: 'UNREG',
//   },
//   {
//     id: '2',
//     userName: 'Компания 2',
//     inn: 12345677,
//     email: 'info2@example.ru',
//     state: 'UNREG',
//     invited: true,
//     blocked: true,
//     description: 'Test description',
//   },
//   {
//     id: '3',
//     userName: 'Компания 3',
//     inn: 12345676,
//     email: 'info3@example.ru',
//     state: 'REG',
//     invited: true,
//     blocked: true,
//   },
//   {
//     id: '4',
//     userName: 'Компания 4',
//     inn: 12345672,
//     email: 'info3@example.ru',
//     state: 'REG',
//     invited: true,
//     blocked: true,
//     accreditation: true,
//   },
// ]

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

// const newLeasingCompany: LeasingCompany = {
//   id: `${leasingCompanies.length}`,
//   userName: `Компания ${leasingCompanies.length}`,
//   inn: leasingCompanies.length + 2345675,
//   email: `info${leasingCompanies.length}@example.ru`,
//   state: 'UNREG',
// }

// let parsedLeasingCompanies: LeasingCompanyEntity[] = []
// const refreshLeasingCompanies = () => {
//   parsedLeasingCompanies = leasingCompanies.map((lk) =>
//     LeasingCompanyEntity.parse(lk)
//   )
// }

class UserService {
  async getClients(): Promise<ClientEntity[]> {
    const { data: clients }: { data: ClientEntity[] } = await axios.get(
      '/client'
    )
    return Promise.resolve(clients.map((el) => ClientEntity.parse(el)))
  }

  async addClient(
    userName: string,
    inn: number,
    email: string
  ): Promise<ClientEntity> {
    const { data: client }: { data: ClientEntity } = await axios.post(
      '/client',
      {
        userName,
        inn: Number(inn),
        email,
      }
    )
    return Promise.resolve(ClientEntity.parse(client))
  }

  async updateClient(client: ClientEntity): Promise<ClientEntity> {
    const { data: res }: { data: ClientEntity } = await axios.patch(
      '/client',
      client.unparse()
    )

    return Promise.resolve(ClientEntity.parse(res))
  }

  async deleteClient(id: string): Promise<string> {
    console.log('delete client', id)
    return Promise.resolve(id)
  }

  async getLeasingCompanies(): Promise<LeasingCompanyEntity[]> {
    const { data: leasingCompanies }: { data: ClientEntity[] } =
      await axios.get('/leasing-company')
    return Promise.resolve(
      leasingCompanies.map((el) => LeasingCompanyEntity.parse(el))
    )
  }

  async addLeasingCompany(
    userName: string,
    inn: number,
    email: string
  ): Promise<LeasingCompanyEntity> {
    const { data: leasingCompany }: { data: ClientEntity } = await axios.post(
      '/leasing-company',
      {
        userName,
        inn: Number(inn),
        email,
      }
    )
    return Promise.resolve(LeasingCompanyEntity.parse(leasingCompany))
  }

  async updateLeasingCompany(
    leasingCompany: LeasingCompanyEntity
  ): Promise<LeasingCompanyEntity> {
    const { data: res }: { data: LeasingCompanyEntity } = await axios.patch(
      '/leasing-company',
      leasingCompany.unparse()
    )

    return Promise.resolve(LeasingCompanyEntity.parse(res))
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
