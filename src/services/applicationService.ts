import { OrderEntity } from '~/entities'
import { Order } from '~/types'

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
}

export const orderService = new OrderService()
