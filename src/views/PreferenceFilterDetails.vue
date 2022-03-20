<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { FinancedType, FinancedTypes } from '~/types'
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
  import { preferenceFilterService } from '~/services'

  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()
  const id = ref<FinancedTypes>()
  const financedType = ref<FinancedType>()
  id.value = route.params.id as FinancedTypes

  const getFilter = async () => {
    if (id.value) {
      financedType.value = await preferenceFilterService.getFinancedType(
        id.value
      )
    }
  }

  onMounted(async () => await getFilter())

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
  <template v-if="!financedType">{{ t('loading') }}</template>
  <el-tabs v-else type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="financedType.new.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span> {{ t('preferenceFilter.new') }} </span>
      </template>
      <new-financed-sub-type :data="financedType.new"></new-financed-sub-type>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="financedType.used.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span>{{ t('preferenceFilter.used') }}</span>
      </template>
      <used-financed-sub-type
        :data="financedType.used"
      ></used-financed-sub-type>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span>
          <el-checkbox
            v-model="financedType.returnable.checked"
            size="large"
          ></el-checkbox>
        </span>
        <span>{{ t('preferenceFilter.returnable') }}</span>
      </template>
      <returnable-financed-sub-type
        :data="financedType.returnable"
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
