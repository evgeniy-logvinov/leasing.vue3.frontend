<script setup lang="ts">
  import { defineProps, toRefs } from 'vue'
  import { FinancedSubType } from '~/types'
  import { ElRow, ElCol, ElCheckbox, ElInput } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import LegalBusiness from '~/forms/LegalBusiness.vue'
  import EpBusiness from '~/forms/EpBusiness.vue'
  // TODO: disable all functionalities while not cheched
  const { t } = useI18n()

  const props = defineProps<{
    data: FinancedSubType
  }>()
  const { data } = toRefs(props)
</script>

<template>
  <el-row
    ><el-col>
      <span>{{ t('preferenceFilter.noMore') }}</span>
      <el-input
        v-model="data.noMoreMonth"
        :placeholder="t('typeSomething')"
      ></el-input>
      <span>{{ t('preferenceFilter.monthesOnTheEndOfLizing') }}</span></el-col
    ></el-row
  >
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.legalEntity.checked"
        :label="t('preferenceFilter.legalEntity')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <legal-business :data="data.legalEntity"></legal-business>
  <el-row
    ><el-col>
      <el-checkbox
        v-model="data.ep.checked"
        :label="t('preferenceFilter.ep')"
        size="large"
      ></el-checkbox> </el-col
  ></el-row>
  <ep-business :data="data.ep"></ep-business>
</template>
