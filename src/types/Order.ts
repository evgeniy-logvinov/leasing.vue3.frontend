import { OrderColor } from './OrderColor'
import { OrderState } from './OrderState'

export interface Order {
  id: string
  type: string
  state: OrderState
  date: string
  color: OrderColor
}
