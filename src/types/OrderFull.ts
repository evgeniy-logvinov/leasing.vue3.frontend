import { Order } from './Order'

export interface OrderFull extends Order {
  request: string
  decisions: Decision[]
}

interface Decision {
  companyName: string
  decision: DecisionType
  topFive: DecisionTopFive | null
  analitic: string
  time: string
  manager: DecisionManager | string
}

type DecisionType = 'APPROVED' | 'DISAPPROVED' | 'APPROVED_WITH_CONDITIONS'
type DecisionTopFive = 'YES' | 'UNKNOWN'
type DecisionManager = 'NO' | 'UNKNOWN'
