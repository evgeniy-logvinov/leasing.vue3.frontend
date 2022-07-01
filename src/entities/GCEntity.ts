import { i18n } from '~/i18n'
import { IGC, TaxationSystem } from '~/types'
import { GC } from '~/types/GC'

export class GCEntity implements IGC {
  private readonly _displayTaxationSystem: string

  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _inn: string,
    private readonly _accreditation: boolean,
    private readonly _taxationSystem: TaxationSystem
  ) {
    this._displayTaxationSystem = this.getTaxationSystem(this._taxationSystem)
  }

  public get id(): string {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get inn(): string {
    return this._inn
  }

  public get accreditation(): boolean {
    return this._accreditation
  }

  public get taxationSystem(): TaxationSystem {
    return this._taxationSystem
  }

  public get displayTaxationSystem(): string {
    return this._displayTaxationSystem
  }

  private getTaxationSystem(taxationSystem: TaxationSystem) {
    if (taxationSystem === 'USN') {
      return i18n.global.t('usn')
    } else if (taxationSystem === 'ECCHN') {
      return i18n.global.t('ecchn')
    } else if (taxationSystem === 'ENVD') {
      return i18n.global.t('envd')
    } else if (taxationSystem === 'OSN') {
      return i18n.global.t('osn')
    }

    return ''
  }

  public static parse(proto: GC) {
    return new GCEntity(
      proto.id,
      proto.name,
      proto.inn,
      proto.accreditation,
      proto.taxationSystem
    )
  }
}
