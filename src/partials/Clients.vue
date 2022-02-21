<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { ElRow, ElCol, ElButton, ElDialog, ElInput } from 'element-plus'
  import { userService } from '~/services/userService'
  import { useI18n } from 'vue-i18n'
  import ClientsTable from '~/forms/ClientsTable.vue'
  import { IUser, NewUser } from '~/types'
  import { i18n } from '~/i18n'
  // TODO: debounce

  const clients = ref<IUser[]>([])
  const newClient = ref<NewUser>({
    email: null,
    inn: null,
    userName: null,
  })
  const dialogAddVisible = ref<boolean>(false)
  const { t } = useI18n()

  const handleInvite = async (id: string) => {
    const client = clients.value.find((client) => client.id === id)

    if (client) {
      client.invited = !client.invited
    } else {
      throw Error(i18n.global.t('client.not.exists'))
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
      throw Error(i18n.global.t('client.not.exists'))
    }
  }

  const handleDescription = async (id: string, description: string) => {
    const client = clients.value.find((client) => client.id === id)

    if (client) {
      client.description = description
      await userService.updateClient(client)
    } else {
      throw Error(t('clients.exists'))
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

  const notEmptyClient = computed(
    () =>
      !newClient.value.userName ||
      !newClient.value.inn ||
      !newClient.value.email
  )

  onMounted(async () => getClients())
</script>

<template>
  <el-dialog v-model="dialogAddVisible" :title="t('client.addNew.title')">
    <el-row class="mb-8">
      <el-col>
        <el-input
          v-model="newClient.userName"
          :placeholder="t('name')"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="mb-8">
      <el-col>
        <el-input v-model="newClient.inn" :placeholder="t('inn')"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          v-model="newClient.email"
          :placeholder="t('email')"
        ></el-input>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogAddVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          :disabled="notEmptyClient"
          @click="addClient(newClient)"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
  <el-row>
    <el-col>
      <el-button type="primary" @click="dialogAddVisible = true">{{
        t('addClient')
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
