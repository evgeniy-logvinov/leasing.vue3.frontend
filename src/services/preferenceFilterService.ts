import { FinancedType, FinancedTypes, PreferenceFilter } from '~/types'

class PreferenceFilterService {
  async getPreferenceFilter(): Promise<PreferenceFilter> {
    console.log('getPreferenceFilter')
    return Promise.resolve(filter)
  }

  async getFinancedType(type: FinancedTypes): Promise<FinancedType> {
    console.log('getPreferenceFilter')
    return Promise.resolve(financedTypes[type])
  }

  async saveFilter(data: PreferenceFilter): Promise<void> {
    console.log('saveFilter service', data)
    filter = data
    return Promise.resolve()
  }
}

export const preferenceFilterService = new PreferenceFilterService()

let filter: PreferenceFilter = {
  // id: '1',
  checked: false,
  gc: {
    hasGC: false,
    items: [],
  },
  citiesAndTerritories: [
    {
      id: '1',
      cities: [
        [1, 2, 3],
        [1, 2, 4],
        [1, 6, 7],
      ],
      territories: [],
    },
  ],
  guaranteePossible: {
    checked: false,
    forAllSubjects: false,
    onlyAffiliatedCompanies: false,
  },
  financedTypes: {
    car: false,
    lightСommercialTransport: false,
  },
}

const financedTypes: {
  car: FinancedType
  lightСommercialTransport: FinancedType
} = {
  car: {
    new: {
      checked: true,
      ep: {
        checked: true,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
    used: {
      checked: false,
      ep: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
    returnable: {
      checked: false,
      ep: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
  },
  lightСommercialTransport: {
    new: {
      checked: false,
      ep: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
    used: {
      checked: false,
      ep: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
    returnable: {
      checked: false,
      ep: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        psn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      legalEntity: {
        checked: false,
        osn: {
          checked: false,
          period: 0,
        },
        usn: {
          checked: false,
          period: 0,
        },
        envd: {
          checked: false,
          period: 0,
        },
        echn: {
          checked: false,
          period: 0,
        },
        forTaxi: false,
        fullPrice: 0,
        hasNotConditions: false,
        maxPeriodFinancing: 0,
        minAdvanceAmount: 0,
        price: {
          from: 0,
          to: 0,
        },
      },
      noMoreMonth: 0,
    },
  },
}
