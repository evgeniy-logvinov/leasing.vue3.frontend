<script setup lang="ts">
  import { ElRow, ElCol, ElInput, ElButton, ElIcon } from 'element-plus'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { HeadsOfDepartments } from '~/types'
  import { Check } from '@element-plus/icons-vue'

  const headsOfDepartments = ref<HeadsOfDepartments>({
    analiticsDepartment: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      mobilePhone: '',
      phone: '',
      patronymic: '',
    },
    salesDepartment: {
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
      ><el-col>
        {{ t('analiticsDepartment.headOfDepartment') }}
      </el-col></el-row
    >
    <el-row
      ><el-col>
        {{ t('firstName') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.firstName"
          :placeholder="t('firstName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('lastName') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.lastName"
          :placeholder="t('lastName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('patronymic') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.patronymic"
          :placeholder="t('patronymic')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('email') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.email"
          :placeholder="t('email')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('phone') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.phone"
          :placeholder="t('phone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('mobilePhone') }}
        <el-input
          v-model="headsOfDepartments.analiticsDepartment.mobilePhone"
          :placeholder="t('mobilePhone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col> {{ t('salesDepartment.headOfDepartment') }} </el-col></el-row
    >
    <el-row
      ><el-col>
        {{ t('firstName') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.firstName"
          :placeholder="t('firstName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('lastName') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.lastName"
          :placeholder="t('lastName')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('patronymic') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.patronymic"
          :placeholder="t('patronymic')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('email') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.email"
          :placeholder="t('email')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('phone') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.phone"
          :placeholder="t('phone')"
        ></el-input> </el-col
    ></el-row>
    <el-row
      ><el-col>
        {{ t('mobilePhone') }}
        <el-input
          v-model="headsOfDepartments.salesDepartment.mobilePhone"
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
