<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElTable, ElTableColumn, ElTabs, ElTabPane } from 'element-plus'
  import { userService } from '~/services/userService'
  import { UserEntity } from '~/entities'

  const users = ref<UserEntity[]>([])

  onMounted(async () => {
    const res = await userService.getUsers()
    users.value = res
  })
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Clients">
      <el-table :data="users" highlight-current-row>
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" label="Name" width="140">
        </el-table-column>
        <el-table-column prop="inn" label="Inn" width="120"> </el-table-column>
        <el-table-column prop="email" label="Address"> </el-table-column>
        <el-table-column prop="agreement" label="Agreement"> </el-table-column>
        <el-table-column prop="Invite" label="Invite"> </el-table-column>
        <el-table-column prop="displayState" label="State"> </el-table-column>
        <el-table-column prop="accrediation" label="Accreditation">
        </el-table-column>
        <el-table-column prop="blocked" label="Blocked"> </el-table-column>
        <el-table-column prop="description" label="Description">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="Lizing companies">Lizing companies</el-tab-pane>
  </el-tabs>
</template>
