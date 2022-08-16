<script setup lang="ts">
import json from './components/config.js'
import FormGenerate from './components/FormGenerate.vue'
</script>

<template>
  <header>
    <form-generate :customConfig="json"></form-generate>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>

</style>
