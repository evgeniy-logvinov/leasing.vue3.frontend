<script setup lang="ts">
  import { ElRow, ElCol, ElInput, ElButton, ElIcon } from 'element-plus'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { HeadsOfDepartments } from '~/types'
  import { Check } from '@element-plus/icons-vue'

  const headsOfDepartments = ref<HeadsOfDepartments>({
    analitics: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      phone: '',
      patronymic: '',
    },
    sales: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      phone: '',
      patronymic: '',
    },
  })
  const { t } = useI18n()

  const save = () => {
    console.log('save head of departments')
  }
</script>

<template>
  <template v-if="!headsOfDepartments">{{ t('loading') }}</template>
  <template v-else>
    <el-row
      ><el-col> {{ t('analitics.headOfDepartment') }} </el-col></el-row
    >
    <el-row
      ><el-col>
        {{ t('firstName') }}
        <el-input
          v-model="headsOfDepartments.analitics.firstName"
          :placeholder="t('firstName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('lastName') }}
        <el-input
          v-model="headsOfDepartments.analitics.lastName"
          :placeholder="t('lastName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('patronymic') }}
        <el-input
          v-model="headsOfDepartments.analitics.patronymic"
          :placeholder="t('patronymic')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('email') }}
        <el-input
          v-model="headsOfDepartments.analitics.email"
          :placeholder="t('email')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('phone') }}
        <el-input
          v-model="headsOfDepartments.analitics.phone"
          :placeholder="t('phone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('mobilePhone') }}
        <el-input
          v-model="headsOfDepartments.analitics.mobilePhone"
          :placeholder="t('mobilePhone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col> {{ t('sales.headOfDepartment') }} </el-col></el-row
    >
    <el-row
      ><el-col>
        {{ t('firstName') }}
        <el-input
          v-model="headsOfDepartments.sales.firstName"
          :placeholder="t('firstName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('lastName') }}
        <el-input
          v-model="headsOfDepartments.sales.lastName"
          :placeholder="t('lastName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('patronymic') }}
        <el-input
          v-model="headsOfDepartments.sales.patronymic"
          :placeholder="t('patronymic')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('email') }}
        <el-input
          v-model="headsOfDepartments.sales.email"
          :placeholder="t('email')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('phone') }}
        <el-input
          v-model="headsOfDepartments.sales.phone"
          :placeholder="t('phone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('mobilePhone') }}
        <el-input
          v-model="headsOfDepartments.sales.mobilePhone"
          :placeholder="t('mobilePhone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        <el-button :disabled="!headsOfDepartments" type="primary" @click="save">
          <el-icon><check /></el-icon>{{ t('saveAndContinue') }}</el-button
        >
      </el-col></el-row
    >
  </template>
</template>
