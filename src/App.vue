<template>
  <header>
    <sky-generate-form ref="test" :customConfig="json"></sky-generate-form>
    <el-button @click="getData">获取</el-button>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import json from './components/config.js'
// import SkyGenerateForm from './components/FormGenerate.vue'
// import SkyGenerateForm from '../dist/s-generate-form.es.js'
// import "../dist/style.css"
import "sky-generate-form/style.css"
import  SkyGenerateForm from 'sky-generate-form'

const test = ref()

const getData = () => {
  test.value.getData().then((res: any) => {
    console.log('res', res)
  })
  
}
</script>


<style scoped>

</style>
