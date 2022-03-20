<script setup lang="ts">
  import { defineProps, toRefs, defineEmits } from 'vue'
  import { ElTable, ElTableColumn, ElCheckbox, ElButton } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { IGC } from '~/types'
  // TODO: handle on change to prevent a lot of requests

  const emit = defineEmits<{
    (e: 'download', id: string): void
  }>()
  const { t } = useI18n()
  const props = defineProps<{
    gcs?: IGC[]
  }>()
  const { gcs } = toRefs(props)
</script>

<template>
  <!-- TODO: placeholder for empty elements -->
  <el-table
    :data="gcs"
    current-row-key="id"
    highlight-current-row
    :default-sort="{ prop: 'name', order: 'ascending' }"
  >
    <el-table-column type="index" width="30" />
    <el-table-column :label="t('name')" prop="name" sortable width="140">
    </el-table-column>
    <el-table-column prop="inn" :label="t('inn')" width="90"> </el-table-column>
    <el-table-column
      prop="displayTaxationSystem"
      sortable
      :label="t('taxationSystem')"
    >
    </el-table-column>
    <el-table-column prop="agreement" sortable :label="t('agreement')">
      <template #default="{ row }">
        <!-- TODO: different colors for different statuses -->
        <el-button
          key="downloadAgreement"
          size="small"
          @click="emit('download', row.id)"
          >{{ t('agreement') }}</el-button
        >
      </template>
    </el-table-column>
    <el-table-column prop="accreditation" :label="t('accreditation')">
      <template #default="{ row }">
        <el-checkbox
          :label="t('accredetation')"
          :model-value="row.accreditation"
          :disabled="true"
          size="small"
        ></el-checkbox>
      </template>
    </el-table-column>
  </el-table>
</template>
