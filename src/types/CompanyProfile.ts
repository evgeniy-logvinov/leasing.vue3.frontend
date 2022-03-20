import { Address } from './Address'
import { CompanyTaxationSystem } from './CompanyTaxationSystem'
import { Employee } from './Employee'

export interface CompanyProfile {
  fullName: string
  shortName: string
  generalManager: Employee
  generalAccountant: Employee
  legalAddress: Address
  postAddress: Address
  inn: number
  ogrn: number
  okpo: number
  kpp: number
  paymentAccount: number
  fullBankName: string
  correspondentAccountBank: number
  bik: number
  email: string
  mobilePhone: string
  taxationSystem: CompanyTaxationSystem
}
