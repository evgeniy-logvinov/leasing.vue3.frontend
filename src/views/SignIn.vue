<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
  import { ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { SignInInfo } from '~/types'
  import { store } from '~/store'
  import { computed } from '@vue/reactivity'

  const router = useRouter()
  const { t } = useI18n()
  const signInInfo = ref<SignInInfo>({
    password: '',
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

  const signIn = async () => {
    try {
      await store.dispatch('auth/signIn', signInInfo.value)
      router.push({
        name: 'private',
      })
    } catch (err) {
      console.log('error')
    }
  }

  const goToSignUp = async () => {
    router.push({
      name: 'signUp',
    })
  }
</script>

<template>
  <el-row
    ><el-col>
      {{ t('email') }}
      <el-input v-model="signInInfo.email" :placeholder="t('email')"
    /></el-col>
  </el-row>
  <el-row
    ><el-col>
      {{ t('password') }}
      <el-input
        v-model="signInInfo.password"
        type="password"
        :placeholder="t('password')"
        show-password
      /> </el-col
  ></el-row>
  <el-row
    ><el-col>
      <el-button type="primary" @click="signIn"> {{ t('signIn') }}</el-button>
    </el-col></el-row
  >
  <el-row
    ><el-col>
      <el-button type="primary" @click="goToSignUp">
        {{ t('signUp') }}</el-button
      >
    </el-col></el-row
  >
</template>
