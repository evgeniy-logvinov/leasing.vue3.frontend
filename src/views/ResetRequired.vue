<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ElRow, ElCol, ElButton, ElInput } from 'element-plus'
  import { ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ResetRequired } from '~/types'
  import { store } from '~/store'
  import { computed } from '@vue/reactivity'

  const router = useRouter()
  const { t } = useI18n()
  const resetRequiredDto = ref<ResetRequired>({
    email: '',
  })
  const requestSend = ref<boolean>(false)

  const sendRresetRequired = async () => {
    try {
      requestSend.value = false
      await store.dispatch('auth/resetRequired', resetRequiredDto.value)
      requestSend.value = true
    } catch (err) {
      console.log('error')
    }
  }
</script>

<template>
  <template v-if="!requestSend">
    <el-row
      ><el-col>
        {{ t('resetRequired.label') }}
        {{ t('email') }}
        <el-input v-model="resetRequiredDto.email" :placeholder="t('email')"
      /></el-col>
    </el-row>
    <el-row
      ><el-col>
        <el-button type="primary" @click="sendRresetRequired">
          {{ t('resetRequired.button') }}</el-button
        >
      </el-col></el-row
    >
  </template>
  <template v-else>
    <el-row
      ><el-col>
        {{ t('resetRequired.send') }}
      </el-col></el-row
    >
  </template>
</template>
