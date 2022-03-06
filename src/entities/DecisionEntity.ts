import { i18n } from '~/i18n'
import { DecisionTopFive, DecisionType, Decision } from '~/types'
import { IDecision } from '~/types/IDecision'

export class DecisionEntity implements IDecision {
  private readonly _displayTime: string
  private readonly _displayDecisionType: string
  private readonly _displayDecisionTopFive: string

  constructor(
    private readonly _companyName: string,
    private readonly _decision: DecisionType,
    private readonly _topFive: DecisionTopFive | null,
    private readonly _analitic: string,
    private readonly _time: string,
    private readonly _manager: string
  ) {
    this._displayTime = _time + 'TM'
    this._displayDecisionType = this.getDecisionType(this._decision)
    this._displayDecisionTopFive = this.getDecisionTopFive(this.topFive)
  }

  public get companyName(): string {
    return this._companyName
  }

  public get decision(): DecisionType {
    return this._decision
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

  public get manager(): string {
    return this._manager
  }

  public get displayDecisionType(): string {
    return this._displayDecisionType
  }

  public get displayDecisionTopFive(): string {
    return this._displayDecisionTopFive
  }

  private getDecisionType(type: DecisionType) {
    if (type === 'APPROVED') {
      return i18n.global.t('approved')
    } else if (type === 'APPROVED_WITH_CONDITIONS') {
      return i18n.global.t('approved.with.conditions')
    } else if (type === 'DISAPPROVED') {
      return i18n.global.t('dissapproved')
    }

    return ''
  }

  private getDecisionTopFive(topFive: DecisionTopFive | null) {
    if (topFive === 'UNKNOWN') {
      return i18n.global.t('unknown')
    } else if (topFive === 'YES') {
      return i18n.global.t('yes')
    }

    return ''
  }

  public static parse(proto: Decision) {
    return new DecisionEntity(
      proto.companyName,
      proto.decision,
      proto.topFive,
      proto.analitic,
      proto.time,
      proto.manager
    )
  }
}
