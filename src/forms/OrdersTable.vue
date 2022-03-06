<script setup lang="ts">
  import { defineProps, toRefs } from 'vue'
  import { ElTable, ElTableColumn } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { IOrder } from '~/types'
  // TODO: handle on change to prevent a lot of requests
  import { useRouter } from 'vue-router'

  const { t } = useI18n()
  const router = useRouter()
  const props = defineProps<{
    orders?: IOrder[]
  }>()
  const { orders } = toRefs(props)
  const rowClick = (row: IOrder) => {
    router.push({ name: 'details', params: { id: row.id } })
  }
</script>

<template>
  <el-table
    :data="orders"
    current-row-key="id"
    highlight-current-row
    :default-sort="{ prop: 'userName', order: 'ascending' }"
    @row-click="rowClick"
  >
    <el-table-column :label="t('order.uniqNumber')" prop="id" sortable>
    </el-table-column>
    <el-table-column prop="type" :label="t('order.type')" sortable>
    </el-table-column>
    <el-table-column prop="displayState" sortable :label="t('state')">
    </el-table-column>
  </el-table>
</template>
