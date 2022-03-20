import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

export interface LeasingCompanyEmployees {
  id: string
  analitics: AnaliticsDepartment
  sales: SalesDepartment
}
