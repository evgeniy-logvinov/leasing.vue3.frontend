<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElRow, ElCol, ElButton } from 'element-plus'
  import { userService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import { ILizingCompany, NewUser } from '~/types'
  import AddUser from '~/forms/AddUser.vue'
  import LizingCompaniesTable from '~/forms/LizingCompaniesTable.vue'
  // TODO: debounce for description

  const lizingCompanies = ref<ILizingCompany[]>([])
  const dialogAddVisible = ref<boolean>(false)
  const { t } = useI18n()

  const handleInvite = async (id: string) => {
    const lizingCompany = lizingCompanies.value.find((lk) => lk.id === id)

    if (lizingCompany) {
      lizingCompany.invited = !lizingCompany.invited
    } else {
      throw Error(t('lizingCompany.not.exists'))
    }
    await userService.inviteLizingCompany(id)
  }

  const handleDelete = async (id: string) => {
    const index = lizingCompanies.value.findIndex((lk) => lk.id === id)
    if (index) {
      lizingCompanies.value.splice(index, 1)
    }
    await userService.deleteLizingCompany(id)
  }

  const handleBlocked = async (id: string, blocked: boolean) => {
    const lizingCompany = lizingCompanies.value.find((lk) => lk.id === id)

    if (lizingCompany) {
      lizingCompany.blocked = blocked
      await userService.updateLizingCompany(lizingCompany)
    } else {
      throw Error(t('lizingCompany.not.exists'))
    }
  }

  const handleAccreditation = async (id: string, accreditation: boolean) => {
    const lizingCompany = lizingCompanies.value.find((lk) => lk.id === id)

    if (lizingCompany) {
      lizingCompany.accreditation = accreditation
      await userService.updateLizingCompany(lizingCompany)
    } else {
      throw Error(t('lizingCompany.not.exists'))
    }
  }

  const handleDescription = async (id: string, description: string) => {
    const lizingCompany = lizingCompanies.value.find((lk) => lk.id === id)

    if (lizingCompany) {
      lizingCompany.description = description
      await userService.updateClient(lizingCompany)
    } else {
      throw Error(t('lizingCompany.exists'))
    }
  }

  const handleDownloadAgreement = async (id: string) => {
    await userService.downloadAgreement(id)
  }

  const addLizingCompany = async ({ email, inn, userName }: NewUser) => {
    if (email && inn && userName) {
      await userService.addLizingCompany(userName, inn, email)
      dialogAddVisible.value = false
      getLizingCompanies()
    }
  }

  const getLizingCompanies = async () => {
    lizingCompanies.value = []
    lizingCompanies.value = await userService.getLizingCompanies()
  }

  onMounted(async () => getLizingCompanies())
</script>

<template>
  <add-user v-model="dialogAddVisible" @add="addLizingCompany"></add-user>
  <el-row>
    <el-col>
      <el-button type="primary" @click="dialogAddVisible = true">{{
        t('lizingCompany.add')
      }}</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <lizing-companies-table
        :lizing-companies="lizingCompanies"
        @invite="handleInvite"
        @delete="handleDelete"
        @blocked="handleBlocked"
        @accreditation="handleAccreditation"
        @description="handleDescription"
        @download="handleDownloadAgreement"
      ></lizing-companies-table>
    </el-col>
  </el-row>
</template>
