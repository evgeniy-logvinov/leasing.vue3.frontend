<script setup lang="ts">
  import { computed, toRefs, defineProps } from 'vue'
  import { ElButton } from 'element-plus'
  import { useStore } from '~/store'

  const props = defineProps<{ msg: string }>()
  const store = useStore()

  console.log(store.state)

  const count = computed(() => store.state)

  const { msg } = toRefs(props)

  function log() {
    console.log('msg', msg.value)
    store.commit('increment')
  }
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="log"> Primary </el-button>
  {{ count }}
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
