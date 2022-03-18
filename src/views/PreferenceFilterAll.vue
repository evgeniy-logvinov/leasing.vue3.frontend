<script setup lang="ts">
  import {
    ElRow,
    ElCol,
    ElCheckbox,
    ElButton,
    ElCascader,
    ElIcon,
  } from 'element-plus'
  import { Tools, Check } from '@element-plus/icons-vue'
  import GKTable from '~/forms/GKTable.vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'

  import { onMounted, ref } from 'vue'
  import { PreferenceFilter } from '~/types'
  import { GCEntity } from '~/entities'
  import { preferenceFilterService } from '~/services'

  const data = ref<PreferenceFilter>()

  const getFilter = async () => {
    data.value = await preferenceFilterService.getPreferenceFilter()
  }

  onMounted(async () => getFilter())

  const addRow = () => {
    console.log('addRow')
    data?.value?.citiesAndTerritories.push({
      cities: [],
      territories: [],
      id: data.value.citiesAndTerritories + '',
    })
  }

  const addGc = () => {
    console.log('addGc')
    data?.value?.gc.items.push(
      GCEntity.parse({
        id: data.value.gc.items + '',
        accreditation: false,
        inn: 123,
        name: 'name',
        taxationSystem: 'OSN',
      })
    )
  }

  const saveFilter = async () => {
    if (data.value) {
      await preferenceFilterService.saveFilter(data.value)
      console.log(data)
      await getFilter()
    }
  }

  const router = useRouter()
  const { t } = useI18n()
  const cascaderProps = { multiple: true }
  // TODO: Need to be typed
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

  const openFinancedType = (id: string) => {
    router.push({
      name: 'preference-filter-details',
      params: { id },
    })
  }
</script>

<template>
  <template v-if="!!data">
    <el-row
      ><el-col>{{ t('preferenceFilter.title') }}</el-col></el-row
    >
    <el-row
      ><el-col
        >1. {{ t('preferenceFilter.chooseCitiesAndTerritories') }}</el-col
      ></el-row
    >
    <!-- TODO: if not checked then remove from the list cities tith zato -->
    <el-row
      ><el-col>
        <el-checkbox
          v-model="data.checked"
          :label="t('preferenceFilter.zato')"
          size="large"
        ></el-checkbox></el-col
    ></el-row>
    <el-row v-for="row in data.citiesAndTerritories" :key="row.id"
      ><el-col>
        <el-cascader
          v-model="row.cities"
          :options="options"
          :props="cascaderProps"
          clearable
          filterable
          :placeholder="t('chooseCity')" />
        <el-cascader
          v-model="row.territories"
          :options="options"
          :props="cascaderProps"
          clearable
          filterable
          :placeholder="
            t('preferenceFilter.customerTerritoryCoverage')
          " /></el-col
    ></el-row>
    <el-row
      ><el-col>
        <el-button type="primary" @click="addRow">{{ t('add') }}</el-button>
      </el-col></el-row
    >
    <el-row
      ><el-col>2. {{ t('preferenceFilter.doYouHaveGK') }}</el-col></el-row
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
      ><el-col
        >3. {{ t('preferenceFilter.chooseTypeFinancialAsset') }}</el-col
      ></el-row
    >
    <el-row
      ><el-col>
        <el-checkbox
          v-model="data.financedTypes.car"
          :label="t('preferenceFilter.car')"
          size="large"
        ></el-checkbox>
        <el-button
          :disabled="!data.financedTypes.car"
          @click="data && openFinancedType('car')"
        >
          <el-icon><tools /></el-icon
        ></el-button> </el-col
    ></el-row>
    <el-row
      ><el-col>
        <el-checkbox
          v-model="data.financedTypes.lightСommercialTransport"
          :label="t('preferenceFilter.lightСommercialЕransport')"
          size="large"
        ></el-checkbox>
        <el-button
          :disabled="!data.financedTypes.lightСommercialTransport"
          @click="data && openFinancedType('lightСommercialTransport')"
        >
          <el-icon><tools /></el-icon
        ></el-button> </el-col
    ></el-row>
    <el-row
      ><el-col>4. {{ t('preferenceFilter.guaranteePossible') }}</el-col></el-row
    >
    <el-row
      ><el-col>
        <el-checkbox
          v-model="data.guaranteePossible.checked"
          :label="t('yes')"
          size="large"
        ></el-checkbox></el-col
    ></el-row>
    <el-row v-if="data.guaranteePossible.checked"
      ><el-col>
        <el-checkbox
          v-model="data.guaranteePossible.onlyAffiliatedCompanies"
          :label="t('preferenceFilter.onlyAffiliatedCompanies')"
          size="large"
        ></el-checkbox> </el-col
    ></el-row>
    <el-row v-if="data.guaranteePossible.checked"
      ><el-col>
        <el-checkbox
          v-model="data.guaranteePossible.forAllSubjects"
          :label="t('preferenceFilter.forAllSubjects')"
          size="large"
        ></el-checkbox> </el-col
    ></el-row>
    <el-row
      ><el-col>
        <el-button :disabled="!data" type="primary" @click="saveFilter">
          <el-icon><check /></el-icon>{{ t('saveAndContinue') }}</el-button
        >
      </el-col></el-row
    >
  </template>
  <template v-else>
    {{ t('emptyData') }}
  </template>
</template>
