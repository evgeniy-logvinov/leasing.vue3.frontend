import { Decision } from './Decision'
import { Order } from './Order'

export interface OrderFull extends Order {
  request: string
  decisions: Decision[]
}
