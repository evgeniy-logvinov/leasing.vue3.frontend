import { OrderColor } from './OrderColor'
import { OrderState } from './OrderState'

export interface IOrder {
  id: string
  type: string
  state: OrderState
  date: string
  color: OrderColor
  displayState: string
}
