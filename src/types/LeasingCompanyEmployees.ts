import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

export interface LeasingCompanyEmployees {
  id: string
  analiticsDepartment: AnaliticsDepartment
  salesDepartment: SalesDepartment
}
