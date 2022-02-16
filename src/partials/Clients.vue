<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElTable, ElTableColumn } from 'element-plus'
  import { userService } from '~/services/userService'
  import { useI18n } from 'vue-i18n'
  import { ClientEntity } from '~/entities/ClientEntity'

  const clients = ref<ClientEntity[]>([])
  const { t } = useI18n()

  onMounted(async () => {
    const res = await userService.getClients()
    clients.value = res
  })
</script>

<template>
  <el-table :data="clients" highlight-current-row>
    <el-table-column type="index" width="50" />
    <el-table-column prop="userName" :label="t('name')" width="140">
    </el-table-column>
    <el-table-column prop="inn" :label="t('inn')" width="120">
    </el-table-column>
    <el-table-column prop="email" :label="t('address')"> </el-table-column>
    <el-table-column prop="invite" :label="t('invite')"> </el-table-column>
    <el-table-column prop="displayState" :label="t('state')"> </el-table-column>
    <el-table-column prop="blocked" :label="t('blocked')"> </el-table-column>
    <el-table-column prop="description" :label="t('description')">
    </el-table-column>
  </el-table>
</template>
