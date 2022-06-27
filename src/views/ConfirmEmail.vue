<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ConfirmEmail } from '~/types'
  import { authService } from '~/services'
  import { store } from '~/store'

  const { t } = useI18n()
  const route = useRoute()
  const confirmEmail = ref<ConfirmEmail>({
    id: '',
  })
  const approved = ref<boolean>(false)

  confirmEmail.value.id = route.params.id as string

  const confirm = async () => {
    try {
      approved.value = false
      await store.dispatch('auth/confirmEmail', confirmEmail.value)
      approved.value = true
    } catch (err) {
      console.log('error')
    }
  }
</script>

<template>
  <el-row v-if="!approved"
    ><el-col>
      {{ t('confirmEmail.label') }}
      <el-button type="primary" @click="confirm">
        {{ t('confirmEmail.button') }}</el-button
      >
    </el-col></el-row
  >
  <el-row v-else
    ><el-col>
      {{ t('confirmEmail.approved') }}
    </el-col></el-row
  >
</template>
