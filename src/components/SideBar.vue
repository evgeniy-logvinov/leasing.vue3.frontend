<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="1" route="/users">
      <el-icon><avatar /></el-icon>
      <template #title>Пользователи</template>
    </el-menu-item>
    <el-menu-item index="2" route="/orders">
      <el-icon><grid /></el-icon>
      <template #title>Заявки</template>
    </el-menu-item>
    <el-menu-item index="3" route="/statistic">
      <el-icon><pie-chart /></el-icon>
      <template #title>Статистика</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Avatar,
  Grid,
  PieChart,
} from '@element-plus/icons-vue'
import {
  ElMenu,
  ElMenuItem,
  ElIcon,
} from 'element-plus'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>