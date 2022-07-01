import { i18n } from '~/i18n'
import { IUser, UserState } from '~/types'

export abstract class UserEntity implements IUser {
  private readonly _displayState: string

  constructor(
    private readonly _id: string,
    private readonly _userName: string,
    private readonly _inn: string,
    private readonly _email: string,
    private readonly _state: UserState,
    private _blocked: boolean,
    private _invited: boolean,
    private _description: string
  ) {
    this._displayState = this.getState(this._state)
  }

  public get id(): string {
    return this._id
  }

  public get userName(): string {
    return this._userName
  }

  public get inn(): string {
    return this._inn
  }

  public get email(): string {
    return this._email
  }

  public get state(): UserState {
    return this._state
  }

  public get description(): string {
    return this._description
  }

  public set description(val: string) {
    this._description = val
  }

  public get blocked(): boolean {
    return this._blocked
  }

  public set blocked(val: boolean) {
    this._blocked = val
  }

  public get invited(): boolean {
    return this._invited
  }

  public set invited(val: boolean) {
    this._invited = val
  }

  public get displayState(): string {
    return this._displayState
  }

  private getState(state: UserState) {
    if (state === 'REG') {
      return i18n.global.t('registred')
    } else if (state === 'UNREG') {
      return i18n.global.t('unregistred')
    }
    return ''
  }
}
