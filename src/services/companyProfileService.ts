import { CompanyProfile } from '~/types'

class CompanyProfileService {
  async getCompanyProfile(): Promise<CompanyProfile> {
    console.log('getCompanyProfile')
    return Promise.resolve(companyProfile)
  }
}

export const companyProfileService = new CompanyProfileService()

const companyProfile: CompanyProfile = {
  bik: 0,
  correspondentAccountBank: 0,
  email: '',
  fullBankName: '',
  fullName: '',
  generalAccountant: {
    firstName: '',
    id: '',
    lastName: '',
    patronymic: '',
  },
  generalManager: {
    firstName: '',
    id: '',
    lastName: '',
    patronymic: '',
  },
  inn: 0,
  kpp: 0,
  legalAddress: {
    building: '',
    city: '',
    corpus: '',
    district: '',
    index: 0,
    officeNumber: 0,
    region: '',
    street: '',
  },
  mobilePhone: '',
  ogrn: 0,
  okpo: 0,
  paymentAccount: 0,
  postAddress: {
    building: '',
    city: '',
    corpus: '',
    district: '',
    index: 0,
    officeNumber: 0,
    region: '',
    street: '',
  },
  shortName: '',
  taxationSystem: 'USN',
}
