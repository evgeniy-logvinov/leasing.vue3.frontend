import { LizingCompany, UserState } from '~/types'
import { UserEntity } from '~/entities'

export class LizingCompanyEntity extends UserEntity {
  private readonly _displayAccreditation: boolean

  constructor(
    _id: string,
    _userName: string,
    _inn: number,
    _email: string,
    _state: UserState,
    private readonly _accreditation?: boolean,
    _blocked = false,
    _invited = false,
    _description?: string
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
    this._displayAccreditation = !!this._accreditation
  }

  public get displayAccreditation(): boolean {
    return this._displayAccreditation
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
