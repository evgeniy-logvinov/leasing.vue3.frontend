import { TaxationSystem } from './TaxationSystem'

export interface GC {
  id: string
  name: string
  inn: number
  accreditation: boolean
  taxationSystem: TaxationSystem
}
