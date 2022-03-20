import { TaxationSystem } from './TaxationSystem'

export interface IGC {
  id: string
  name: string
  inn: number
  accreditation: boolean
  taxationSystem: TaxationSystem
  displayTaxationSystem: string
}
