import { EpBusinessEntity } from './EpBusinessEntity'
import { LegalBusinessEntity } from './LegalBusinessEntity'

export interface FinancedSubType {
  checked: boolean
  noMoreMonth: number
  legalEntity: LegalBusinessEntity
  ep: EpBusinessEntity
}
