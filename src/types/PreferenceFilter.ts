import { AvailableFinancedTypes } from './AvailableFinancedTypes'
import { CitiesAndTerritories } from './CitiesAndTerritories'
import { FilterGC } from './FilterGC'
// import { FinancedTypes } from './FinancedTypes'
import { GuaranteePossilbe } from './GuaranteePossilbe'

export interface PreferenceFilter {
  // id: string
  checked: boolean
  gc: FilterGC
  citiesAndTerritories: CitiesAndTerritories[]
  financedTypes: AvailableFinancedTypes
  guaranteePossible: GuaranteePossilbe
}
