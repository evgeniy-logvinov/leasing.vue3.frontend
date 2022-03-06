import { LizingCompany, UserState, ILizingCompany } from '~/types'
import { UserEntity } from '~/entities'

export class LizingCompanyEntity extends UserEntity implements ILizingCompany {
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

  public static parse(proto: LizingCompany) {
    return new LizingCompanyEntity(
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
}
