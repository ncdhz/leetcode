<template>
  <a-layout>
    <code-header v-if="!isSM"/>
    <code-main v-on:resize="updateSM"/>
  </a-layout>
</template>

<script lang="ts" setup>
  import CodeHeader from './components/CodeHeader.vue'
  import CodeMain from './components/CodeMain.vue'
  import { ref } from 'vue'

  let isSM = ref<boolean>(false)
  function updateSM(is: boolean) {
    isSM.value = is
  }
</script>