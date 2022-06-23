<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    router
  >
    <el-menu-item
      v-if="hasPermission(Permissions.USERS)"
      index="/private/users"
      :route="{ name: 'users' }"
    >
      <el-icon><avatar /></el-icon>
      <template #title> {{ t('users') }} </template>
    </el-menu-item>
    <el-menu-item
      v-if="hasPermission(Permissions.PREFERENCE_FILTER)"
      index="/private/preference-filter"
      :route="{ name: 'preference-filter' }"
    >
      <el-icon><Filter /></el-icon>
      <template #title> {{ t('preferenceFilter.short') }}</template>
    </el-menu-item>
    <el-menu-item
      v-if="hasPermission(Permissions.HEADS_OF_DEPARTMENTS)"
      index="/private/heads-of-departments"
      :route="{ name: 'headsOfDepartments' }"
    >
      <el-icon><avatar /></el-icon>
      <template #title> {{ t('employees') }} </template>
    </el-menu-item>
    <el-menu-item
      v-if="hasPermission(Permissions.COMPANY_PROFILE)"
      index="/private/company-profile"
      :route="{ name: 'companyProfile' }"
    >
      <el-icon><postcard /></el-icon>
      <template #title> {{ t('companyProfile') }} </template>
    </el-menu-item>
    <el-menu-item
      v-if="hasPermission(Permissions.ORDERS)"
      index="/private/orders"
      :route="{ name: 'orders' }"
    >
      <el-icon><grid /></el-icon>
      <template #title> {{ t('orders') }}</template>
    </el-menu-item>
    <el-menu-item
      v-if="hasPermission(Permissions.STATISTICS)"
      index="/private/statistics"
      :route="{ name: 'statistics' }"
    >
      <el-icon><pie-chart /></el-icon>
      <template #title> {{ t('statistics') }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Avatar,
    Filter,
    Postcard,
    Grid,
    PieChart,
  } from '@element-plus/icons-vue'
  import { ElMenu, ElMenuItem, ElIcon } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { useStore } from '~/store'
  import { Permissions } from '~/types'
  import { computed } from '@vue/reactivity'

  const store = useStore()
  const { t } = useI18n()
  const permissons = computed<Permissions[]>(
    () => store.getters['auth/permissions']
  )

  const hasPermission = (permission: Permissions): boolean =>
    Boolean(permissons.value?.includes(permission))

  const isCollapse = ref(false)
</script>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
</style>
