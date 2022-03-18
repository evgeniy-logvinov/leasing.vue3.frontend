import { CitiesAndTerritories } from './CitiesAndTerritories'
import { FilterGC } from './FilterGC'
import { FinancedTypes } from './FinancedTypes'
import { GuaranteePossilbe } from './GuaranteePossilbe'

export interface PreferenceFilter {
  checked: boolean
  gc: FilterGC
  citiesAndTerritories: CitiesAndTerritories[]
  financedTypes: FinancedTypes
  guaranteePossible: GuaranteePossilbe
}
