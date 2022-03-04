<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElRow, ElCol } from 'element-plus'
  import { IOrder } from '~/types'
  import { orderService } from '~/services'
  import OrdersTable from '~/forms/OrdersTable.vue'
  // TODO: debounce for description

  const orders = ref<IOrder[]>([])

  const getOrders = async () => {
    orders.value = []
    orders.value = await orderService.getOrders()
  }

  onMounted(async () => getOrders())
</script>

<template>
  <el-row>
    <el-col>
      <orders-table :orders="orders"></orders-table>
    </el-col>
  </el-row>
</template>
