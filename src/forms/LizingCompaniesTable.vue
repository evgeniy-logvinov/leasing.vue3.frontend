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
  import { ILizingCompany } from '~/types'
  import LizingCompaniesEmployees from './LizingCompaniesEmployees.vue'
  // TODO: handle on change to prevent a lot of requests

  const emit = defineEmits<{
    (e: 'invite', id: string): void
    (e: 'delete', id: string): void
    (e: 'accreditation', id: string, event: boolean): void
    (e: 'blocked', id: string, event: boolean): void
    (e: 'description', id: string, event: string): void
    (e: 'download', id: string): void
  }>()
  const { t } = useI18n()
  const props = defineProps<{
    lizingCompanies?: ILizingCompany[]
  }>()
  const { lizingCompanies } = toRefs(props)

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
    :data="lizingCompanies"
    current-row-key="id"
    highlight-current-row
    :default-sort="{ prop: 'userName', order: 'ascending' }"
  >
    <el-table-column type="expand">
      <template #default="{ row }">
        <lizing-companies-employees
          :company-id="row.id"
        ></lizing-companies-employees>
      </template>
    </el-table-column>
    <el-table-column type="index" width="30" />
    <el-table-column :label="t('name')" prop="userName" sortable width="140">
    </el-table-column>
    <el-table-column prop="inn" :label="t('inn')" width="90"> </el-table-column>
    <el-table-column prop="email" sortable :label="t('address')">
    </el-table-column>
    <el-table-column prop="agreement" sortable :label="t('agreement')">
      <template #default="{ row }">
        <!-- TODO: different colors for different statuses -->
        <el-button
          v-if="row.state === 'UNREG' && row.invited"
          key="downloadAgreement"
          size="small"
          @click="emit('download', row.id)"
          >{{ t('agreement') }}</el-button
        >
      </template>
    </el-table-column>
    <el-table-column :label="t('invite')" width="120">
      <template #default="{ row }">
        <el-popconfirm
          v-if="row.state === 'UNREG' && !row.invited"
          :key="'toInvite' + row.id"
          :confirm-button-text="t('yes')"
          :cancel-button-text="t('no')"
          :title="t('lizingCompany.question.invite')"
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
          :title="t('lizingCompany.question.delete')"
          @confirm="confirmDeleteEvent(row.id)"
        >
          <template #reference>
            <el-button size="small">{{ t('to.delete') }}</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
    <el-table-column prop="displayState" :label="t('state')"> </el-table-column>
    <el-table-column prop="accreditation" :label="t('accreditation')">
      <template #default="{ row }">
        <el-checkbox
          :label="t('accredetation')"
          :model-value="row.accreditation"
          size="small"
          @change="emit('accreditation', row.id, $event)"
        ></el-checkbox>
      </template>
    </el-table-column>
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
