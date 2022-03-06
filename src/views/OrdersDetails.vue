<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import { ElInput, ElRow, ElCol, ElButton } from 'element-plus'
  import { orderService, userService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import ClientsTable from '~/forms/ClientsTable.vue'
  import { IOrderFull, IUser, NewUser } from '~/types'
  // TODO: debounce for description

  const { t } = useI18n()
  const route = useRoute()
  const id = ref()
  const order = ref<IOrderFull>()

  id.value = route.params.id

  const getOrderFull = async (id: string) => {
    order.value = await orderService.getFullInfo(id)
  }

  onMounted(async () => getOrderFull(id.value))
</script>

<template>
  {{ t('details') }}
  <div v-if="!order">Loading</div>
  <el-input v-else v-model="order.request" autosize disabled type="textarea" />
</template>
