import { Decision } from './Decision'
import { IOrder } from './IOrder'

export interface IOrderFull extends IOrder {
  request: string
  decisions: Decision[]
}
