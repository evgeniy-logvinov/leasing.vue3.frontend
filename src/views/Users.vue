<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElTable, ElTableColumn, ElTabs, ElTabPane } from 'element-plus'
  import { userService } from '~/services/userService'
  import { UserEntity } from '~/entities'
  import { useI18n } from 'vue-i18n'

  const users = ref<UserEntity[]>([])
  const { t } = useI18n()

  onMounted(async () => {
    const res = await userService.getUsers()
    users.value = res
  })
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="t('clients')">
      <el-table :data="users" highlight-current-row>
        <el-table-column type="index" width="50" />
        <el-table-column prop="userName" :label="t('name')" width="140">
        </el-table-column>
        <el-table-column prop="inn" :label="t('inn')" width="120">
        </el-table-column>
        <el-table-column prop="email" :label="t('address')"> </el-table-column>
        <el-table-column prop="agreement" :label="t('agreement')">
        </el-table-column>
        <el-table-column prop="invite" :label="t('invite')"> </el-table-column>
        <el-table-column prop="displayState" :label="t('state')">
        </el-table-column>
        <el-table-column prop="accrediation" :label="t('accreditation')">
        </el-table-column>
        <el-table-column prop="blocked" :label="t('blocked')">
        </el-table-column>
        <el-table-column prop="description" :label="t('description')">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane :label="t('lizingCompanies')">{{
      t('lizingCompanies')
    }}</el-tab-pane>
  </el-tabs>
</template>
