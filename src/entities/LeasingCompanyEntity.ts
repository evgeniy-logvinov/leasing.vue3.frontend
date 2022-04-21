import { LeasingCompany, UserState, ILeasingCompany } from '~/types'
import { UserEntity } from '~/entities'

export class LeasingCompanyEntity
  extends UserEntity
  implements ILeasingCompany
{
  constructor(
    _id: string,
    _userName: string,
    _inn: number,
    _email: string,
    _state: UserState,
    private _accreditation = false,
    _blocked = false,
    _invited = false,
    _description = ''
  ) {
    super(
      _id,
      _userName,
      _inn,
      _email,
      _state,
      _blocked,
      _invited,
      _description
    )
  }

  public get accreditation(): boolean {
    return this._accreditation
  }

  public set accreditation(val: boolean) {
    this._accreditation = val
  }

  public static parse(proto: LeasingCompany) {
    return new LeasingCompanyEntity(
      proto.id,
      proto.userName,
      proto.inn,
      proto.email,
      proto.state,
      proto.accreditation,
      proto.blocked,
      proto.invited,
      proto.description
    )
  }

  public unparse(): LeasingCompany {
    return {
      id: this.id,
      userName: this.userName,
      inn: this.inn,
      email: this.email,
      state: this.state,
      blocked: this.blocked,
      invited: this.invited,
      description: this.description,
      accreditation: this.accreditation,
    }
  }
}
