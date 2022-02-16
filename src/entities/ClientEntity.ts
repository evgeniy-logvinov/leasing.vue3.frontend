import { Client, UserState } from '~/types'
import { UserEntity } from '~/entities'

export class ClientEntity extends UserEntity {
  constructor(
    _id: string,
    _userName: string,
    _inn: number,
    _email: string,
    _state: UserState,
    _blocked?: boolean,
    _description?: string
  ) {
    super(_id, _userName, _inn, _email, _state, _blocked, _description)
  }

  public static parse(proto: Client) {
    return new ClientEntity(
      proto.id,
      proto.userName,
      proto.inn,
      proto.email,
      proto.state,
      proto.blocked,
      proto.description
    )
  }
}
