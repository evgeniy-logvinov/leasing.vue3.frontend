<script setup lang="ts">
  import { ElRow, ElCol, ElCheckbox, ElButton, ElCascader } from 'element-plus'
  import GKTable from '~/forms/GKTable.vue'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { IGC } from '~/types'
  import { GCEntity } from '~/entities'

  interface Filter {
    checked: boolean
    gc: {
      hasGC: boolean
      items: IGC[]
    }
    citiesAndTerritories: [
      {
        id: string
        cities: any
        territories: any
      }
    ]
  }

  const { t } = useI18n()
  const data = ref<Filter>({
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

  const props = { multiple: true }

  const options = [
    {
      value: 1,
      label: 'Россия',
      children: [
        {
          value: 2,
          label: 'Челябинская область',
          children: [
            { value: 3, label: 'Челябинск' },
            { value: 4, label: 'Магнитогорск' },
            { value: 5, label: 'Чебяркуль' },
          ],
        },
        {
          value: 6,
          label: 'Свердловская область',
          children: [{ value: 7, label: 'Екатеринбург' }],
        },
      ],
    },
  ]
</script>

<template>
  <el-row
    ><el-col>{{ t('filter.title') }}</el-col></el-row
  >
  <el-row
    ><el-col>1. {{ t('filter.chooseCitiesAndTerritories') }}</el-col></el-row
  >
  <!-- TODO: if not checked then remove from the list cities tith zato -->
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.checked"
        :label="t('filter.zato')"
        size="large"
      ></el-checkbox>
      {{}}</el-col
    ></el-row
  >
  <el-row v-for="row in data.citiesAndTerritories" :key="row.id"
    ><el-col>
      <el-cascader
        v-model="row.cities"
        :options="options"
        :props="props"
        clearable
        filterable
        :placeholder="t('chooseCity')" />
      <el-cascader
        v-model="row.territories"
        :options="options"
        :props="props"
        clearable
        filterable
        :placeholder="t('filter.customerTerritoryCoverage')" /></el-col
  ></el-row>
  <el-row
    ><el-col>
      <el-button type="primary" @click="addRow">{{ t('add') }}</el-button>
    </el-col></el-row
  >
  <el-row
    ><el-col>2. {{ t('filter.doYouHaveGK') }}</el-col></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.gc.hasGC"
        :label="t('yes')"
        size="large"
      ></el-checkbox></el-col
  ></el-row>
  <el-row v-if="data.gc.hasGC"
    ><el-col> <g-k-table :gcs="data.gc.items"></g-k-table> </el-col
    ><el-col>
      <el-button type="primary" @click="addGc">{{ t('add') }}</el-button>
    </el-col></el-row
  >
  <el-row
    ><el-col>3. {{ t('filter.chooseTypeFinancialAsset') }}</el-col></el-row
  >
  <el-row><el-col> </el-col></el-row>
</template>
