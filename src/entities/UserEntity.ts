import { UserState } from '~/types'

export abstract class UserEntity {
  private readonly _displayState: string
  private readonly _displayDescription: string
  private readonly _displayBlocked: boolean

  constructor(
    private readonly _id: string,
    private readonly _userName: string,
    private readonly _inn: number,
    private readonly _email: string,
    private readonly _state: UserState,
    private readonly _blocked?: boolean,
    private readonly _description?: string
  ) {
    this._displayState = this._state
    this._displayDescription = this._description || ''
    this._displayBlocked = !!this._blocked
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

  public get displayBlocked(): boolean {
    return this._displayBlocked
  }

  public get displayState(): string {
    return this._displayState
  }
}
