<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElTable, ElTableColumn, ElButton, ElRow, ElCol } from 'element-plus'
  import { userService } from '~/services/userService'
  import { useI18n } from 'vue-i18n'
  import { LizingCompanyEntity } from '~/entities/LizingCompanyEntity'

  const lizingCompanies = ref<LizingCompanyEntity[]>([])
  const { t } = useI18n()

  const addLizingCompany = async () => {
    await userService.addLizingCompany()
    await getLizingCompanies()
  }

  const getLizingCompanies = async () => {
    const res = await userService.getLizingCompanies()
    lizingCompanies.value = res
  }

  onMounted(async () => getLizingCompanies())
</script>

<template>
  <el-row>
    <el-col>
      <el-button type="primary" @click="addLizingCompany">{{
        t('addClient')
      }}</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-table :data="lizingCompanies" highlight-current-row>
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
    </el-col>
  </el-row>
</template>
