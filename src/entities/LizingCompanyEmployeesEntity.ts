import {
  ILizingCompanyEmployees,
  AnaliticsDepartment,
  SalesDepartment,
  LizingCompanyEmployees,
} from '~/types'

export class LizingCompanyEmployeesEntity implements ILizingCompanyEmployees {
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

  public static parse(proto: LizingCompanyEmployees) {
    return new LizingCompanyEmployeesEntity(
      proto.id,
      proto.analitics,
      proto.sales
    )
  }
}
