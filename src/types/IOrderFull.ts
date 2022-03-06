import { Decision } from './Decision'
import { IDecision } from './IDecision'
import { IOrder } from './IOrder'

export interface IOrderFull extends IOrder {
  request: string
  decisions: Decision[]
  displayDecisions: IDecision[]
}
