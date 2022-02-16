<script setup lang="ts">
  import { ElTabs, ElTabPane } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import Clients from '~/partials/Clients.vue'
  import LizingCompanies from '~/partials/LizingCompanies.vue'

  const { t } = useI18n()
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="t('clients')">
      <clients />
    </el-tab-pane>
    <el-tab-pane :label="t('lizingCompanies')">
      <lizing-companies />
    </el-tab-pane>
  </el-tabs>
</template>
