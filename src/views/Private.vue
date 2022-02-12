<script setup lang="ts">
  import SideBar from '~/components/SideBar.vue'
  import { ElContainer, ElAside, ElScrollbar, ElHeader } from 'element-plus'
  import NavBar from '~/components/NavBar.vue'
</script>

<template>
  <el-container>
    <el-aside>
      <el-scrollbar class="h-full">
        <SideBar />
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header class="w-full text-left items-center">
        <NavBar />
      </el-header>
      <el-main class="w-full">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <el-footer>
    <div>Footer</div>
  </el-footer>
</template>
