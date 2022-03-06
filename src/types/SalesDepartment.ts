import { Department } from './Department'
import { Region } from './Region'

export interface SalesDepartment extends Department {
  regions: Region[]
}
