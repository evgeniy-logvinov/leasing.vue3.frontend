import { OrderEntity } from '~/entities'
import { OrderFullEntity } from '~/entities/OrderFullEntity'
import { Order, OrderFull } from '~/types'

const orders: Order[] = [
  {
    id: '1',
    state: 'CREATED',
    color: 'red',
    date: '18.02.2002',
    type: 'CAR',
  },
  {
    id: '2',
    state: 'CHECKING',
    color: 'green',
    date: '18.02.2004',
    type: 'Airplain',
  },
  {
    id: '3',
    state: 'CHECKED',
    color: 'yellow',
    date: '18.02.2006',
    type: 'Ship',
  },
]

const ordersFullInfo: OrderFull[] = [
  {
    id: '1',
    state: 'CREATED',
    color: 'red',
    date: '18.02.2002',
    type: 'CAR',
    decisions: [
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 1',
        type: 'APPROVED',
        manager: 'NO',
        time: '28.12.17',
        topFive: 'YES',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: 'UNKNOWN',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: null,
      },
    ],
    request: 'Нужна заявка',
  },
  {
    id: '2',
    state: 'CHECKING',
    color: 'green',
    date: '18.02.2004',
    type: 'Airplain',
    decisions: [
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 1',
        type: 'APPROVED',
        manager: 'NO',
        time: '28.12.17',
        topFive: 'YES',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: 'UNKNOWN',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: null,
      },
    ],
    request: 'Нужна заявка2',
  },
  {
    id: '3',
    state: 'CHECKED',
    color: 'yellow',
    date: '18.02.2006',
    type: 'Ship',
    decisions: [
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 1',
        type: 'APPROVED',
        manager: 'NO',
        time: '28.12.17',
        topFive: 'YES',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: 'UNKNOWN',
      },
      {
        analitic: 'Иванов И. И.',
        companyName: 'ЛК 2',
        type: 'APPROVED',
        manager: 'UNKNOWN',
        time: '28.12.17',
        topFive: null,
      },
    ],
    request: 'Нужна заявка3',
  },
]

let parsedOrders: OrderEntity[] = []
const refreshOrders = () => {
  parsedOrders = orders.map((app) => OrderEntity.parse(app))
}

class OrderService {
  async getOrders(): Promise<OrderEntity[]> {
    console.log('getOrders')
    refreshOrders()
    return Promise.resolve(parsedOrders)
  }

  async getFullInfo(id: string): Promise<OrderFullEntity> {
    const order = ordersFullInfo.find((order) => order.id === id)

    if (!order) {
      throw Error('order.not.exists')
    }

    return OrderFullEntity.parse(order)
  }
}

export const orderService = new OrderService()
