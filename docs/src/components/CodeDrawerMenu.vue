<template>
  <a-drawer
    placement="left"
    :closable="false"
    :visible="visible"
    @close="closeMenu"
    width="280"
  >
    <code-main-menu theme="light"/>
    <slot></slot>
  </a-drawer>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import CodeMainMenu from './CodeMainMenu.vue'
  const visible = ref<boolean>(true)
  const emit = defineEmits(['closeDrawerMenu'])
  function closeMenu() {
    emit('closeDrawerMenu')
  }
</script>