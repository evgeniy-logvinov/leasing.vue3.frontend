<script setup lang="ts">
  import SideBar from '~/components/SideBar.vue'
  import { Setting } from '@element-plus/icons-vue'
  import {
    ElContainer,
    ElAside,
    ElScrollbar,
    ElHeader,
    ElDropdown,
    ElIcon,
    ElDropdownItem,
    ElDropdownMenu,
  } from 'element-plus'
</script>

<template>
  <el-container>
    <el-aside>
      <el-scrollbar class="h-full">
        <SideBar />
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px; width: 100%">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>
      <el-main class="w-full">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
