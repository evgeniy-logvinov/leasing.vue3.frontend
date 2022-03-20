import {
  ILeasingCompanyEmployees,
  AnaliticsDepartment,
  SalesDepartment,
  LeasingCompanyEmployees,
} from '~/types'

export class LeasingCompanyEmployeesEntity implements ILeasingCompanyEmployees {
  constructor(
    private readonly _id: string,
    private readonly _analitics: AnaliticsDepartment,
    private readonly _sales: SalesDepartment
  ) {}

  public get id(): string {
    return this._id
  }

  public get analitics(): AnaliticsDepartment {
    return this._analitics
  }

  public get sales(): SalesDepartment {
    return this._sales
  }

  public static parse(proto: LeasingCompanyEmployees) {
    return new LeasingCompanyEmployeesEntity(
      proto.id,
      proto.analitics,
      proto.sales
    )
  }
}
