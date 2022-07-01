import { TaxationSystem } from './TaxationSystem'

export interface IGC {
  id: string
  name: string
  inn: string
  accreditation: boolean
  taxationSystem: TaxationSystem
  displayTaxationSystem: string
}
