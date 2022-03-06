import { DecisionManager } from './DecisionManager'
import { DecisionTopFive } from './DecisionTopFive'
import { DecisionType } from './DecisionType'

export interface IDecision {
  companyName: string
  decision: DecisionType
  topFive: DecisionTopFive | null
  analitic: string
  time: string
  manager: DecisionManager | string
}
