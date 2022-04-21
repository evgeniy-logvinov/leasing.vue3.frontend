<script setup lang="ts">
  import { defineProps, toRefs, defineEmits } from 'vue'
  import {
    ElTable,
    ElTableColumn,
    ElButton,
    ElCheckbox,
    ElInput,
    ElPopconfirm,
  } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { ClientEntity } from '~/entities'
  // TODO: handle on change to prevent a lot of requests

  const emit = defineEmits<{
    (e: 'invite', id: string): void
    (e: 'delete', id: string): void
    (e: 'blocked', id: string, event: boolean): void
    (e: 'description', id: string, event: string): void
  }>()
  const { t } = useI18n()
  const props = defineProps<{
    clients: ClientEntity[]
  }>()
  const { clients } = toRefs(props)

  const confirmInviteEvent = (id: string): boolean | Promise<boolean> => {
    emit('invite', id)
    return true
  }

  const confirmDeleteEvent = (id: string): boolean | Promise<boolean> => {
    emit('delete', id)
    return true
  }
</script>

<template>
  <el-table
    :data="clients"
    current-row-key="id"
    highlight-current-row
    :default-sort="{ prop: 'userName', order: 'ascending' }"
  >
    <el-table-column type="index" width="30" />
    <el-table-column :label="t('name')" prop="userName" sortable width="140">
    </el-table-column>
    <el-table-column prop="inn" :label="t('inn')" width="90"> </el-table-column>
    <el-table-column prop="email" sortable :label="t('address')">
    </el-table-column>
    <el-table-column :label="t('invite')" width="120">
      <template #default="{ row }">
        <el-popconfirm
          v-if="row.state === 'UNREG'"
          key="toInvite"
          :confirm-button-text="t('yes')"
          :cancel-button-text="t('no')"
          :title="t('client.question.invite')"
          @confirm="confirmInviteEvent(row.id)"
        >
          <template #reference>
            <el-button size="small" :disabled="row.invited">{{
              t('to.invite')
            }}</el-button>
          </template>
        </el-popconfirm>
        <el-popconfirm
          v-else-if="row.state === 'REG'"
          key="delete"
          :confirm-button-text="t('yes')"
          :cancel-button-text="t('no')"
          :title="t('client.question.delete')"
          @confirm="confirmDeleteEvent(row.id)"
        >
          <template #reference>
            <el-button size="small">{{ t('to.delete') }}</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
    <el-table-column prop="displayState" :label="t('state')"> </el-table-column>
    <el-table-column prop="blocked" :label="t('access')">
      <template #default="{ row }">
        <el-checkbox
          :label="t('blocked')"
          :model-value="row.blocked"
          size="small"
          @change="emit('blocked', row.id, $event)"
        ></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column prop="description" :label="t('description')">
      <template #default="{ row }">
        <el-input
          :model-value="row.description"
          :placeholder="t('input.placeholder')"
          @input="emit('description', row.id, $event)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>
