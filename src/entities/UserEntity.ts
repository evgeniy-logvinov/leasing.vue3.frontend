import { i18n } from '~/i18n'
import { UserState } from '~/types'
export abstract class UserEntity {
  private readonly _displayState: string
  private readonly _displayDescription: string

  constructor(
    private readonly _id: string,
    private readonly _userName: string,
    private readonly _inn: number,
    private readonly _email: string,
    private readonly _state: UserState,
    private readonly _blocked: boolean,
    private readonly _invited: boolean,
    private readonly _description?: string
  ) {
    this._displayState = this.getState(this._state)
    this._displayDescription = this._description || ''
  }

  public get id(): string {
    return this._id
  }

  public get userName(): string {
    return this._userName
  }

  public get inn(): number {
    return this._inn
  }

  public get email(): string {
    return this._email
  }

  public get state(): UserState {
    return this._state
  }

  public get displayDescription(): string {
    return this._displayDescription
  }

  public get blocked(): boolean {
    return this._blocked
  }

  public get invited(): boolean {
    return this._invited
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
