<script setup lang="ts">
  import { defineProps, toRefs } from 'vue'
  import { ElTable, ElTableColumn } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { IDecision } from '~/types'

  const { t } = useI18n()
  const props = defineProps<{
    decisions?: IDecision[]
  }>()
  const { decisions } = toRefs(props)
</script>

<template>
  <el-table
    :data="decisions"
    current-row-key="id"
    highlight-current-row
    :default-sort="{ prop: 'companyName', order: 'ascending' }"
  >
    <el-table-column type="index" width="30" />
    <el-table-column prop="companyName" :label="t('companyName')" sortable>
    </el-table-column>
    <el-table-column prop="displayType" sortable :label="t('decision')">
    </el-table-column>
    <el-table-column prop="displayTopFive" sortable :label="t('topFive')">
    </el-table-column>
    <el-table-column prop="analitic" sortable :label="t('analitic')">
    </el-table-column>
    <el-table-column prop="time" sortable :label="t('time')"> </el-table-column>
    <el-table-column prop="displayManager" sortable :label="t('manager')">
    </el-table-column>
  </el-table>
</template>
