import { FinancedSubType } from './FinancedSubType'

export interface FinancedType {
  new: FinancedSubType
  used: FinancedSubType
  returnable: FinancedSubType
}
