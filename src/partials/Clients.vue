<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { ElRow, ElCol, ElButton } from 'element-plus'
  import { userService } from '~/services'
  import { useI18n } from 'vue-i18n'
  import ClientsTable from '~/forms/ClientsTable.vue'
  import { IUser, NewUser } from '~/types'
  import AddUser from '~/forms/AddUser.vue'
  // TODO: debounce for description

  const clients = ref<IUser[]>([])
  const dialogAddVisible = ref<boolean>(false)
  const { t } = useI18n()

  const handleInvite = async (id: string) => {
    const client = clients.value.find((client) => client.id === id)

    if (client) {
      client.invited = !client.invited
    } else {
      throw Error(t('client.not.exists'))
    }
    await userService.inviteClient(id)
  }

  const handleDelete = async (id: string) => {
    const index = clients.value.findIndex((client) => client.id === id)
    if (index) {
      clients.value.splice(index, 1)
    }
    await userService.deleteClient(id)
  }

  const handleBlocked = async (id: string, blocked: boolean) => {
    const client = clients.value.find((client) => client.id === id)

    if (client) {
      client.blocked = blocked
      await userService.updateClient(client)
    } else {
      throw Error(t('client.not.exists'))
    }
  }

  const handleDescription = async (id: string, description: string) => {
    const client = clients.value.find((client) => client.id === id)

    if (client) {
      client.description = description
      await userService.updateClient(client)
    } else {
      throw Error(t('client.exists'))
    }
  }

  const addClient = async ({ email, inn, userName }: NewUser) => {
    if (email && inn && userName) {
      await userService.addClient(userName, inn, email)
      dialogAddVisible.value = false
      getClients()
    }
  }

  const getClients = async () => {
    clients.value = []
    clients.value = await userService.getClients()
  }

  onMounted(async () => getClients())
</script>

<template>
  <add-user v-model="dialogAddVisible" @add="addClient"></add-user>
  <el-row>
    <el-col>
      <el-button type="primary" @click="dialogAddVisible = true">{{
        t('client.add')
      }}</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <clients-table
        :clients="clients"
        @invite="handleInvite"
        @delete="handleDelete"
        @blocked="handleBlocked"
        @description="handleDescription"
      ></clients-table>
    </el-col>
  </el-row>
</template>
