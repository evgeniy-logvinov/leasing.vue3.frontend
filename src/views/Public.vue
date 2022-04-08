<script setup lang="ts">
  import { ElContainer, ElScrollbar, ElFooter, ElMain } from 'element-plus'
</script>

<template>
  <el-container>
    <el-main class="w-full">
      <el-scrollbar>
        <router-view></router-view>
      </el-scrollbar>
    </el-main>
  </el-container>
  <el-footer>
    <div>Footer</div>
  </el-footer>
</template>
