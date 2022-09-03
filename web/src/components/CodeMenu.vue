<template>
  <a-menu mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys">
    <a-sub-menu v-for="item in menuData" :key="item">
      <template #title>{{ getMenuTitle(item) }}</template>
      <a-menu-item v-for="sitem in item" :key="sitem">{{ getItemTitle(sitem) }}</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts" setup>
import { watch, ref } from 'vue';
let data = defineProps<{
  menuData: number[][][][],
  selectedKeys: number[][][],
  openKeys: number[][][][],
}>()

const menuData = ref(data.menuData)
const selectedKeys = ref(data.selectedKeys)
const openKeys = ref(data.openKeys)

watch(data, async (newValue) => {
  menuData.value = newValue.menuData
  selectedKeys.value = newValue.selectedKeys
  openKeys.value = newValue.openKeys
})

const emit = defineEmits(['selectedKeysUpdate'])

watch(selectedKeys, async (newValue:number[][][]) => {
  emit('selectedKeysUpdate', newValue[0])
})

function getItemTitle(array: number[][]) {
  if (array.length === 1) {
    return 'Number: ' + array[0][1]
  } else {
    return 'Number: ' + array[0][1] + '-' + array[array.length - 1][1]
  }
}

function getMenuTitle(array: number[][][]) {
  if (array.length === 1 && array[0].length == 1) {
    return 'Title No.:' + array[0][0]
  } else {
    return 'Title No.:' + array[0][0][1] + '-' + array[array.length - 1][array[array.length - 1].length - 1][1]
  }
}
</script>