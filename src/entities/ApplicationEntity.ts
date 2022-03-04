import { i18n } from '~/i18n'
import {
  Application,
  ApplicationColor,
  ApplicationState,
  IApplication,
} from '~/types'

export class ApplicationEntity implements IApplication {
  private readonly _displayState: string

  constructor(
    private readonly _id: string,
    private readonly _type: string,
    private readonly _state: ApplicationState,
    private _date: string,
    private _color: ApplicationColor
  ) {
    this._displayState = this.getState(this._state)
  }

  public get id(): string {
    return this._id
  }

  public get type(): string {
    return this._type
  }

  public get state(): ApplicationState {
    return this._state
  }

  public get color(): ApplicationColor {
    return this._color
  }

  public get date(): string {
    return this._date
  }

  public get displayState(): string {
    return this._displayState
  }

  private getState(state: ApplicationState) {
    if (state === 'CREATED') {
      return i18n.global.t('created')
    } else if (state === 'CHECKING') {
      return i18n.global.t('checking')
    } else if (state === 'CHECKED') {
      return i18n.global.t('checked')
    }

    return ''
  }

  public static parse(proto: Application) {
    return new ApplicationEntity(
      proto.id,
      proto.type,
      proto.state,
      proto.date,
      proto.color
    )
  }
}
