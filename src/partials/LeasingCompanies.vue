<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElRow, ElCol, ElButton } from 'element-plus'
  import { userService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import { ILeasingCompany, NewUser } from '~/types'
  import AddUser from '~/forms/AddUser.vue'
  import LeasingCompaniesTable from '~/forms/LeasingCompaniesTable.vue'
  // TODO: debounce for description

  const leasingCompanies = ref<ILeasingCompany[]>([])
  const dialogAddVisible = ref<boolean>(false)
  const { t } = useI18n()

  const handleInvite = async (id: string) => {
    const leasingCompany = leasingCompanies.value.find((lk) => lk.id === id)

    if (leasingCompany) {
      leasingCompany.invited = !leasingCompany.invited
    } else {
      throw Error(t('leasingCompany.not.exists'))
    }
    await userService.inviteLeasingCompany(id)
  }

  const handleDelete = async (id: string) => {
    const index = leasingCompanies.value.findIndex((lk) => lk.id === id)
    if (index) {
      leasingCompanies.value.splice(index, 1)
    }
    await userService.deleteLeasingCompany(id)
  }

  const handleBlocked = async (id: string, blocked: boolean) => {
    const leasingCompany = leasingCompanies.value.find((lk) => lk.id === id)

    if (leasingCompany) {
      leasingCompany.blocked = blocked
      await userService.updateLeasingCompany(leasingCompany)
    } else {
      throw Error(t('leasingCompany.not.exists'))
    }
  }

  const handleAccreditation = async (id: string, accreditation: boolean) => {
    const leasingCompany = leasingCompanies.value.find((lk) => lk.id === id)

    if (leasingCompany) {
      leasingCompany.accreditation = accreditation
      await userService.updateLeasingCompany(leasingCompany)
    } else {
      throw Error(t('leasingCompany.not.exists'))
    }
  }

  const handleDescription = async (id: string, description: string) => {
    const leasingCompany = leasingCompanies.value.find((lk) => lk.id === id)

    if (leasingCompany) {
      leasingCompany.description = description
      await userService.updateClient(leasingCompany)
    } else {
      throw Error(t('leasingCompany.exists'))
    }
  }

  const handleDownloadAgreement = async (id: string) => {
    await userService.downloadAgreement(id)
  }

  const addLeasingCompany = async ({ email, inn, userName }: NewUser) => {
    if (email && inn && userName) {
      await userService.addLeasingCompany(userName, inn, email)
      dialogAddVisible.value = false
      getLeasingCompanies()
    }
  }

  const getLeasingCompanies = async () => {
    leasingCompanies.value = []
    leasingCompanies.value = await userService.getLeasingCompanies()
  }

  onMounted(async () => getLeasingCompanies())
</script>

<template>
  <add-user v-model="dialogAddVisible" @add="addLeasingCompany"></add-user>
  <el-row>
    <el-col>
      <el-button type="primary" @click="dialogAddVisible = true">{{
        t('leasingCompany.add')
      }}</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <leasing-companies-table
        :leasing-companies="leasingCompanies"
        @invite="handleInvite"
        @delete="handleDelete"
        @blocked="handleBlocked"
        @accreditation="handleAccreditation"
        @description="handleDescription"
        @download="handleDownloadAgreement"
      ></leasing-companies-table>
    </el-col>
  </el-row>
</template>
