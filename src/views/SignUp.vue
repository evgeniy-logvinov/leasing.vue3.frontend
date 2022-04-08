<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { SignUpInfo } from '~/types'
  import { authService } from '~/services'
  import { computed } from '@vue/reactivity'
  import { store } from '~/store'

  const router = useRouter()
  const { t } = useI18n()
  const signUpInfo = ref<SignUpInfo>({
    password: '',
    username: '',
    email: '',
  })

  const loggedIn = computed(() => store.getters['auth/loggedIn'])

  onMounted(() => {
    if (loggedIn.value) {
      router.push({
        name: 'private',
      })
    }
  })

  const signUp = async () => {
    console.log('signUp', signUpInfo.value)
    await authService.signUp(signUpInfo.value)
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
      <el-input v-model="signUpInfo.username" placeholder="Please input"
    /></el-col>
  </el-row>
  <el-row
    ><el-col>
      <el-input
        v-model="signUpInfo.password"
        type="password"
        placeholder="Please input password"
        show-password
      /> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <el-button type="primary" @click="signUp"> {{ t('signUp') }}</el-button>
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
