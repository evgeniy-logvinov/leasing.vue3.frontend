import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

// @deprecate
export interface ILeasingCompanyEmployees {
  id: string
  analiticsDepartment: AnaliticsDepartment
  salesDepartment: SalesDepartment
}
