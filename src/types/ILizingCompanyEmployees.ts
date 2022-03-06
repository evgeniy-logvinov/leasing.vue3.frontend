import { AnaliticsDepartment } from './AnaliticsDepartment'
import { SalesDepartment } from './SalesDepartment'

export interface ILizingCompanyEmployees {
  id: string
  analitics: AnaliticsDepartment
  sales: SalesDepartment
}
