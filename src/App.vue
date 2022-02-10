<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  // import HelloWorld from './components/HelloWorld.vue'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'

  const zIndex = 3000
  const locale = zhCn
</script>

<template>
  <el-config-provider :z-index="zIndex" :locale="locale">
    <router-view />
  </el-config-provider>
</template>
