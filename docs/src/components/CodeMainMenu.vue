<template>
  <a-menu :theme="theme" :mode="mode" :inlineCollapsed="inlineCollapsed" v-model:selectedKeys="selectedKeys" :style="{ lineHeight: '64px' }"
    v-on:click="itemClick">
    <a-menu-item :key="0">Home</a-menu-item>
    <a-menu-item v-for="(item, index) in $db?.allTypes" :key="index + 1">{{ $config?.codeMessage[item].name }}
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
  import { ref, getCurrentInstance } from 'vue'
  const proxy = getCurrentInstance()?.proxy
  const { theme, mode, inlineCollapsed } = defineProps({
    theme: {
      type: String,
      default: 'dark',
      require: false
    },
    mode: {
      type: String,
      default: 'horizontal',
      require: false
    },
    inlineCollapsed: {
      type: Boolean,
      default: false
    }
  })
  const selectedKeys = ref<number[]>([0])
  function itemClick({ key }: { key: number }) {
    if (key !== selectedKeys.value[0]) {
      proxy?.$bus.emit('menuItemId', key)
    }
  }

  const $config = proxy?.$config

</script>