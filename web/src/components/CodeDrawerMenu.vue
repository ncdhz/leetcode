<template>
  <a-drawer
    placement="left"
    :closable="false"
    :visible="visible"
    @close="closeMenu"
    width="280"
  >
    <code-main-menu theme="light"/>
    <a-menu mode="inline">
      <a-sub-menu>
        <template #title>Search</template>
        <a-menu-item><code-search></code-search></a-menu-item>
      </a-sub-menu>
    </a-menu>
    <slot></slot>
  </a-drawer>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import CodeMainMenu from './CodeMainMenu.vue'
import CodeSearch from './CodeSearch.vue'
  const visible = ref<boolean>(true)
  const emit = defineEmits(['closeDrawerMenu'])
  function closeMenu() {
    emit('closeDrawerMenu')
  }
</script>
