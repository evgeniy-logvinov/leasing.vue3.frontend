<template>
  <el-row>
    <el-col class="align-middle"
      >{{ userName }}
      <el-icon style="margin-right: 8px; margin-top: 1px"
        ><close-bold /></el-icon
    ></el-col>
  </el-row>
  <el-row>
    <el-col
      >{{ date }} ({{ t('monday') }}) {{ time }}
      <el-button type="primary" @click="switchLanguage">
        EN / RU
      </el-button></el-col
    >
  </el-row>
  <el-row>
    <el-col>
      <el-button @click="signOut">
        {{ t('signOut') }}
      </el-button></el-col
    >
  </el-row>
  <el-row> </el-row>
</template>

<script lang="ts" setup>
  import { CloseBold } from '@element-plus/icons-vue'
  import { ElIcon, ElRow, ElCol, ElButton } from 'element-plus'
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import router from '~/router'
  import { authService } from '~/services'
  import { useStore } from '~/store'

  const store = useStore()
  const { locale, t } = useI18n()
  const userName = computed(() => store.state.userName)

  const date = ref(`15.04.2019`)
  const time = ref('12:34:14')
  const switchLanguage = () => {
    locale.value = locale.value === 'ru-RU' ? 'en-US' : 'ru-RU'
  }
  const signOut = () => {
    authService.removeUser()
    router.push({
      name: 'signIn',
    })
  }
</script>
