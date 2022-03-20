<script setup lang="ts">
  import { defineProps, toRefs } from 'vue'
  import { LegalBusinessEntity } from '~/types'
  import { ElRow, ElCol, ElCheckbox, ElInput } from 'element-plus'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const props = defineProps<{
    data: LegalBusinessEntity
  }>()
  const { data } = toRefs(props)
</script>

<template>
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.osn.checked"
        :label="t('preferenceFilter.osn')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.registrationRange') }}</span>
      <el-input
        v-model="data.osn.period"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.monthes') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.usn.checked"
        :label="t('preferenceFilter.usn')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.registrationRange') }}</span>
      <el-input
        v-model="data.usn.period"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.monthes') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.envd.checked"
        :label="t('preferenceFilter.envd')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.registrationRange') }}</span>
      <el-input
        v-model="data.envd.period"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.monthes') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.echn.checked"
        :label="t('preferenceFilter.echn')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.registrationRange') }}</span>
      <el-input
        v-model="data.echn.period"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.monthes') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.priceRange.from') }}</span>
      <el-input
        v-model="data.price.from"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.priceRange.to') }}</span>
      <el-input
        v-model="data.price.to"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.priceRange.oneItem') }}</span>
    </el-col></el-row
  >
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.fillPrice') }}</span>
      <el-input
        v-model="data.fullPrice"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.currency') }}</span>
      <el-checkbox
        v-model="data.hasNotConditions"
        :label="t('preferenceFilter.hasNotConditions')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.minAdvanceAmount') }}</span>
      <el-input
        v-model="data.minAdvanceAmount"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>%</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.maxPeriodFinancing') }}</span>
      <el-input
        v-model="data.maxPeriodFinancing"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('month.short') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.forTaxi"
        :label="t('preferenceFilter.forTaxi')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
</template>
