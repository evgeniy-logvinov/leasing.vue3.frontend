<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import {
    ElTable,
    ElTableColumn,
    ElRow,
    ElCol,
    ElButton,
    ElCheckbox,
    ElInput,
  } from 'element-plus'
  import { userService } from '~/services/userService'
  import { useI18n } from 'vue-i18n'
  import { ClientEntity } from '~/entities/ClientEntity'
  // TODO: debounce
  const clients = ref<ClientEntity[]>([])
  const { t } = useI18n()

  const handleInvite = (index: string, row: string) => {
    console.log('scope.$index, scope.row', index, row)
  }

  const addClient = async () => {
    await userService.addClient()
    await getClients()
  }

  const getClients = async () => {
    const res = await userService.getClients()
    clients.value = res
  }

  onMounted(async () => getClients())
</script>

<template>
  <el-row>
    <el-col>
      <el-button type="primary" @click="addClient">{{
        t('addClient')
      }}</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-table
        :data="clients"
        highlight-current-row
        :default-sort="{ prop: 'userName', order: 'ascending' }"
      >
        <el-table-column type="index" width="30" />
        <el-table-column
          :label="t('name')"
          prop="userName"
          sortable
          width="140"
        >
        </el-table-column>
        <el-table-column prop="inn" :label="t('inn')" width="90">
        </el-table-column>
        <el-table-column prop="email" sortable :label="t('address')">
        </el-table-column>
        <el-table-column :label="t('invite')" width="120">
          <template #default="scope">
            <el-button
              v-if="scope.row.state === 'UNREG'"
              key="toInvite"
              size="small"
              :disabled="!scope.row.invited"
              @click="handleInvite(scope.$index, scope.row)"
              >{{ t('to.invite') }}</el-button
            >
            <el-button
              v-else-if="scope.row.state === 'REG'"
              key="Invited"
              size="small"
              @click="handleInvite(scope.$index, scope.row)"
              >{{ t('to.delete') }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="displayState" :label="t('state')">
        </el-table-column>
        <el-table-column prop="blocked" :label="t('access')">
          <template #default="scope">
            <el-checkbox
              :label="t('blocked')"
              :model-value="scope.row.blocked"
              size="small"
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="description" :label="t('description')">
          <template #default="scope">
            <el-input
              v-model="scope.row.displayDescription"
              :placeholder="t('input.placeholder')"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
