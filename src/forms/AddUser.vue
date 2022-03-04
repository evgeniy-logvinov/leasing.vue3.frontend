<script setup lang="ts">
  import { computed, ref, defineEmits, defineProps, watch } from 'vue'
  import { ElRow, ElCol, ElButton, ElDialog, ElInput } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { NewUser } from '~/types'
  // TODO: Validation
  const props = defineProps<{
    modelValue: boolean
  }>()

  const newClient = ref<NewUser>({
    email: null,
    inn: null,
    userName: null,
  })
  const dialogAddVisible = ref<boolean>(false)
  const { t } = useI18n()

  const emit = defineEmits<{
    (e: 'add', newUser: NewUser): void
    (e: 'input', show: boolean): void
  }>()

  // instead, use a getter:
  watch(
    () => props.modelValue,
    (showDialog) => {
      dialogAddVisible.value = showDialog
      console.log(`count is: ${showDialog}`)
    },
    { immediate: true }
  )
  const notEmptyClient = computed(
    () =>
      !newClient.value.userName ||
      !newClient.value.inn ||
      !newClient.value.email
  )
</script>

<template>
  <el-dialog
    v-model="dialogAddVisible"
    :title="t('client.addNew.title')"
    @closed="emit('input', false)"
  >
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
        <el-button @click="emit('input', false)">{{ t('cancel') }}</el-button>
        <el-button
          type="primary"
          :disabled="notEmptyClient"
          @click="emit('add', newClient)"
          >{{ t('request.send') }}</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
