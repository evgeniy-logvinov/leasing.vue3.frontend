import { TaxType } from './TaxType'

export interface EpBusinessEntity {
  checked: boolean
  osn: TaxType
  usn: TaxType
  envd: TaxType
  echn: TaxType
  psn: TaxType
  price: {
    from: number
    to: number
  }
  fullPrice: number
  hasNotConditions: boolean
  minAdvanceAmount: number
  maxPeriodFinancing: number
  forTaxi: boolean
}
