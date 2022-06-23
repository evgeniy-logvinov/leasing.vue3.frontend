import {
  ILeasingCompanyEmployees,
  AnaliticsDepartment,
  SalesDepartment,
  LeasingCompanyEmployees,
} from '~/types'

export class LeasingCompanyEmployeesEntity implements ILeasingCompanyEmployees {
  constructor(
    private readonly _id: string,
    private readonly _analiticsDepartment: AnaliticsDepartment,
    private readonly _salesDepartment: SalesDepartment
  ) {}

  public get id(): string {
    return this._id
  }

  public get analiticsDepartment(): AnaliticsDepartment {
    return this._analiticsDepartment
  }

  public get salesDepartment(): SalesDepartment {
    return this._salesDepartment
  }

  public static parse(proto: LeasingCompanyEmployees) {
    return new LeasingCompanyEmployeesEntity(
      proto.id,
      proto.analiticsDepartment,
      proto.salesDepartment
    )
  }
}
