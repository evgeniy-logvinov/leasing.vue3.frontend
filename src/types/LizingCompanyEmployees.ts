import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

export interface LizingCompanyEmployees {
  id: string
  analitics: AnaliticsDepartment
  sales: SalesDepartment
}
