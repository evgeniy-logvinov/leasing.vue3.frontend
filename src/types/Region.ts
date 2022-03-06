import { Department } from './Department'
import { Employee } from './Employee'

export interface Region extends Department {
  id: string
  name: string
  employees: Employee[]
}
