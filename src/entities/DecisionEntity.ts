import { i18n } from '~/i18n'
import {
  DecisionTopFive,
  DecisionType,
  Decision,
  DecisionManager,
} from '~/types'
import { IDecision } from '~/types/IDecision'

export class DecisionEntity implements IDecision {
  private readonly _displayTime: string
  private readonly _displayType: string
  private readonly _displayTopFive: string
  private readonly _displayManager: string

  constructor(
    private readonly _companyName: string,
    private readonly _type: DecisionType,
    private readonly _topFive: DecisionTopFive | null,
    private readonly _analitic: string,
    private readonly _time: string,
    private readonly _manager: DecisionManager | string
  ) {
    this._displayTime = _time + 'TM'
    this._displayType = this.getDecisionType(this._type)
    this._displayTopFive = this.getDecisionTopFive(this._topFive)
    this._displayManager = this.getDecisionManager(this._manager)
  }

  public get companyName(): string {
    return this._companyName
  }

  public get type(): DecisionType {
    return this._type
  }

  public get topFive(): DecisionTopFive | null {
    return this._topFive
  }

  public get analitic(): string {
    return this._analitic
  }

  public get time(): string {
    return this._time
  }

  public get manager(): DecisionManager | string {
    return this._manager
  }

  public get displayType(): string {
    return this._displayType
  }

  public get displayTopFive(): string {
    return this._displayTopFive
  }

  public get displayManager(): string {
    return this._displayManager
  }

  private getDecisionType(type: DecisionType): string {
    if (type === 'APPROVED') {
      return i18n.global.t('approved.all')
    } else if (type === 'APPROVED_WITH_CONDITIONS') {
      return i18n.global.t('approved.with.conditions')
    } else if (type === 'DISAPPROVED') {
      return i18n.global.t('dissapproved')
    }

    return type
  }

  private getDecisionManager(manager: DecisionManager | string): string {
    if (manager === 'UNKNOWN') {
      return i18n.global.t('unknown')
    } else if (manager === 'NO') {
      return i18n.global.t('no')
    }

    return manager
  }

  private getDecisionTopFive(topFive: DecisionTopFive | null): string {
    if (topFive === 'UNKNOWN') {
      return i18n.global.t('unknown')
    } else if (topFive === 'YES') {
      return i18n.global.t('yes')
    }

    return topFive || ''
  }

  public static parse(proto: Decision) {
    return new DecisionEntity(
      proto.companyName,
      proto.type,
      proto.topFive,
      proto.analitic,
      proto.time,
      proto.manager
    )
  }
}
