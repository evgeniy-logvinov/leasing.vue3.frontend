import { i18n } from '~/i18n'
import { Order, OrderColor, OrderState, IOrder } from '~/types'

export class OrderEntity implements IOrder {
  private readonly _displayState: string

  constructor(
    private readonly _id: string,
    private readonly _type: string,
    private readonly _state: OrderState,
    private _date: string,
    private _color: OrderColor
  ) {
    this._displayState = this.getState(this._state)
  }

  public get id(): string {
    return this._id
  }

  public get type(): string {
    return this._type
  }

  public get state(): OrderState {
    return this._state
  }

  public get color(): OrderColor {
    return this._color
  }

  public get date(): string {
    return this._date
  }

  public get displayState(): string {
    return this._displayState
  }

  private getState(state: OrderState) {
    if (state === 'CREATED') {
      return i18n.global.t('created')
    } else if (state === 'CHECKING') {
      return i18n.global.t('checking')
    } else if (state === 'CHECKED') {
      return i18n.global.t('checked')
    }

    return ''
  }

  public static parse(proto: Order) {
    return new OrderEntity(
      proto.id,
      proto.type,
      proto.state,
      proto.date,
      proto.color
    )
  }
}
