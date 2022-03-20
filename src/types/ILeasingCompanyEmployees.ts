import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

export interface ILeasingCompanyEmployees {
  id: string
  analitics: AnaliticsDepartment
  sales: SalesDepartment
}
