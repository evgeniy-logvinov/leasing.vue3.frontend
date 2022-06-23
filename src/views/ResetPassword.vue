<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ResetPassword } from '~/types'
  import { authService } from '~/services'

  const { t } = useI18n()
  const router = useRouter()
  const route = useRoute()
  const resetPassword = ref<ResetPassword>({
    id: '',
    password: '',
    repeatPassword: '',
  })

  resetPassword.value.id = route.params.id as string

  const reset = async () => {
    await authService.resetPassword(resetPassword.value)
    router.push({
      name: 'signIn',
    })
  }

  const goToSignIn = async () => {
    router.push({
      name: 'signIn',
    })
  }
</script>

<template>
  <el-row
    ><el-col>
      {{ t('password') }}
      <el-input
        v-model="resetPassword.password"
        type="password"
        :placeholder="t('password')"
        show-password
      /> </el-col
  ></el-row>
  <el-row
    ><el-col>
      {{ t('repeatePassword') }}
      <el-input
        v-model="resetPassword.repeatPassword"
        type="password"
        :placeholder="t('repeatePassword')"
        show-password
      /> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <el-button type="primary" @click="reset">
        {{ t('resetPassword') }}</el-button
      >
    </el-col></el-row
  >
  <el-row
    ><el-col>
      <el-button type="primary" @click="goToSignIn">
        {{ t('signIn') }}</el-button
      >
    </el-col></el-row
  >
</template>
