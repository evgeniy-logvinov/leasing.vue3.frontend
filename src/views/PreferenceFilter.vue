<script setup lang="ts">
  import { ref } from 'vue'
  import { PreferenceFilter } from '~/types'
  import { GCEntity } from '~/entities'

  const data = ref<PreferenceFilter>({
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
    financedTypes: {
      car: {
        id: '1',
        checked: false,
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
      lightСommercialTransport: {
        id: '2',
        checked: false,
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
    },
    guaranteePossible: {
      checked: false,
      forAllSubjects: false,
      onlyAffiliatedCompanies: false,
    },
  })

  const addRow = () => {
    console.log('addRow')
    data.value.citiesAndTerritories.push({
      cities: [],
      territories: [],
      id: data.value.citiesAndTerritories + '',
    })
  }

  const addGc = () => {
    console.log('addGc')
    data.value.gc.items.push(
      GCEntity.parse({
        id: data.value.gc.items + '',
        accreditation: false,
        inn: 123,
        name: 'name',
        taxationSystem: 'OSN',
      })
    )
  }
</script>

<template>
  <router-view :data="data" @add-row="addRow" @add-gc="addGc"></router-view>
</template>
