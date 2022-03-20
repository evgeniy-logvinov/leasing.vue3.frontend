<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import { ElInput, ElCol, ElRow, ElButton } from 'element-plus'
  import { orderService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import { IOrderFull } from '~/types'
  import DecisionsTable from '~/forms/DecisionsTable.vue'
  // TODO: debounce for description

  const { t } = useI18n()
  const route = useRoute()
  const router = useRouter()
  const id = ref()
  const order = ref<IOrderFull>()

  id.value = route.params.id

  const getOrderFull = async (id: string) => {
    order.value = await orderService.getFullInfo(id)
  }

  const back = async () => {
    router.push({ name: 'all' })
  }

  onMounted(async () => getOrderFull(id.value))
</script>

<template>
  {{ t('details') }}
  <el-row>
    <el-col>
      <el-button type="primary" @click="back">{{
        t('back')
      }}</el-button></el-col
    >
  </el-row>
  <div v-if="!order">Loading</div>
  <div v-else>
    <div>{{ t('order.uniqNumber') }} ({{ order.id }})</div>
    <div>{{ t('order.type') }} ({{ order.type }})</div>
    <el-input v-model="order.request" autosize disabled type="textarea" />
    <decisions-table :decisions="order.displayDecisions"></decisions-table>
  </div>
</template>
