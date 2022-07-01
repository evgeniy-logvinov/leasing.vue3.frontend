import { TaxationSystem } from './TaxationSystem'

export interface GC {
  id: string
  name: string
  inn: string
  accreditation: boolean
  taxationSystem: TaxationSystem
}
