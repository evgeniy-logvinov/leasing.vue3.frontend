import { FinancedSubType } from './FinancedSubType'

export interface FinancedType {
  checked: boolean
  id: string
  new: FinancedSubType
  used: FinancedSubType
  returnable: FinancedSubType
}
