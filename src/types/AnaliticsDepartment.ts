import { Department } from './Department'
import { Employee } from './Employee'

export interface AnaliticsDepartment extends Department {
  employees: Employee[]
}
