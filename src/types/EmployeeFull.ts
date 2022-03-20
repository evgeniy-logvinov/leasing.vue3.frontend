import { Employee } from './Employee'

export interface EmployeeFull extends Employee {
  email: string
  phone: string
  mobilePhone: string
}
