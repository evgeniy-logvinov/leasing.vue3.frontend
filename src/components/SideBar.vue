<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/private/users" :route="{ name: 'users' }">
      <el-icon><avatar /></el-icon>
      <template #title> Пользователи </template>
    </el-menu-item>
    <el-menu-item index="/private/orders" :route="{ name: 'orders' }">
      <el-icon><grid /></el-icon>
      <template #title> Заявки </template>
    </el-menu-item>
    <el-menu-item index="/private/statistics" :route="{ name: 'statistics' }">
      <el-icon><pie-chart /></el-icon>
      <template #title> Статистика </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Avatar, Grid, PieChart } from '@element-plus/icons-vue'
  import { ElMenu, ElMenuItem, ElIcon } from 'element-plus'

  const isCollapse = ref(false)
</script>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
</style>
