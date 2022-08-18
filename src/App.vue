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
// import formGenerate from './components/FormGenerate.vue'
// import SkyGenerateForm from '../dist/s-generate-form.es.js'
// import "../dist/style.css"
import  SkyGenerateForm from 'sky-generate-form'
import "sky-generate-form/style.css"

const test = ref()

const getData = () => {
  test.value.getData().then((res: any) => {
    console.log('res', res)
  })
  
}
</script>


<style scoped>

</style>
