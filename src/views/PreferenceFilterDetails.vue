<script setup lang="ts">
  import { ref, defineProps, toRefs } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { FinancedType, FinancedTypes, PreferenceFilter } from '~/types'
  import {
    ElRow,
    ElCol,
    ElButton,
    ElTabs,
    ElTabPane,
    ElIcon,
    ElCheckbox,
  } from 'element-plus'
  import { Back, Check } from '@element-plus/icons-vue'
  import { useI18n } from 'vue-i18n'
  import NewFinancedSubType from '~/partials/NewFinancedSubType.vue'
  import UsedFinancedSubType from '~/partials/UsedFinancedSubType.vue'
  import ReturnableFinancedSubType from '~/partials/ReturnableFinancedSubType.vue'

  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()
  const id = ref<keyof FinancedTypes>()
  id.value = route.params.id as keyof FinancedTypes

  const props = defineProps<{
    data?: PreferenceFilter
  }>()
  const { data } = toRefs<{ data?: PreferenceFilter }>(props)
  const currentFinancedType: FinancedType | undefined =
    data?.value?.financedTypes[id.value]

  if (!currentFinancedType) {
    throw new Error(t('preferenceFilter.financedTypeNotExist'))
  }

  const goBack = () => {
    router.push({
      name: 'preference-filter-all',
    })
  }

  const saveAndExit = () => {
    console.log('save')
    router.push({
      name: 'preference-filter-all',
    })
  }
</script>

<template>
  <el-row
    ><el-col>
      <el-button @click="goBack">
        <el-icon><back /></el-icon
      ></el-button> </el-col
  ></el-row>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="currentFinancedType.new.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span> {{ t('preferenceFilter.new') }} </span>
      </template>
      <new-financed-sub-type
        :data="currentFinancedType.new"
      ></new-financed-sub-type>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="currentFinancedType.used.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span>{{ t('preferenceFilter.used') }}</span>
      </template>
      <used-financed-sub-type
        :data="currentFinancedType.used"
      ></used-financed-sub-type>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="currentFinancedType.returnable.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span>{{ t('preferenceFilter.returnable') }}</span>
      </template>
      <returnable-financed-sub-type
        :data="currentFinancedType.returnable"
      ></returnable-financed-sub-type>
    </el-tab-pane>
  </el-tabs>
  <el-row
    ><el-col>
      <el-button type="primary" @click="saveAndExit">
        <el-icon><check /></el-icon>{{ t('saveAndExit') }}</el-button
      >
    </el-col></el-row
  >
</template>
