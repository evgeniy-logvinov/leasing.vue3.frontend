<template>
  <el-row>
    <el-col class="align-middle"
      >{{ userName }}
      <el-icon style="margin-right: 8px; margin-top: 1px"
        ><close-bold /></el-icon
    ></el-col>
  </el-row>
  <el-row>
    <el-col>{{ date }} {{ time }}</el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { CloseBold } from '@element-plus/icons-vue'
  import { ElIcon, ElRow, ElCol } from 'element-plus'
  import { ref, computed } from 'vue'
  import { useStore } from '~/store'

  const store = useStore()
  const userName = computed(() => store.state.userName)
  const date = ref('15.04.2019(понедельник)')
  const time = ref('12:34:14')
</script>
