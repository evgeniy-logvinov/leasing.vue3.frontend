import {
  IOrderFull,
  Decision,
  OrderColor,
  OrderFull,
  OrderState,
} from '~/types'
import { DecisionEntity } from './DecisionEntity'
import { OrderEntity } from './OrderEntity'

export class OrderFullEntity extends OrderEntity implements IOrderFull {
  private readonly _displayDecisions: DecisionEntity[]

  constructor(
    _id: string,
    _type: string,
    _state: OrderState,
    _date: string,
    _color: OrderColor,
    private _request: string,
    private _decisions: Decision[]
  ) {
    super(_id, _type, _state, _date, _color)
    this._displayDecisions = this._decisions.map((decision) =>
      DecisionEntity.parse(decision)
    )
  }

  public get request(): string {
    return this._request
  }

  public get decisions(): Decision[] {
    return this._decisions
  }

  public get displayDecisions(): DecisionEntity[] {
    return this._displayDecisions
  }

  public static parse(proto: OrderFull) {
    return new OrderFullEntity(
      proto.id,
      proto.type,
      proto.state,
      proto.date,
      proto.color,
      proto.request,
      proto.decisions
    )
  }
}
