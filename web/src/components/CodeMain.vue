<template>
  <a-layout-content :style="isSM ? 'padding: 0;' : 'padding: 0 50px;'">
    <a-breadcrumb style="margin: 16px 0" v-if="!isSM">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <template v-if="!showCode">
        <a-breadcrumb-item v-if="menuItemId == 0">All</a-breadcrumb-item>
        <a-breadcrumb-item v-if="menuItemId != 0">{{ $config.codeMessage[$db.allTypes[menuItemId - 1]].name }}
        </a-breadcrumb-item>
      </template>
      <template v-else>
        <a-breadcrumb-item>{{ $config.codeMessage[$db.type[showCodeData[0]]].name }}
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ $db.name[showCodeData[0]] }}</a-breadcrumb-item>
      </template>
    </a-breadcrumb>

    <a-layout style="padding: 24px 0; background: #fff" v-if="!showCode">
      <a-layout-sider width="200" style="background: #fff" v-if="!isSM">
        <code-menu :menu-data="menuData" :selected-keys="[menuData[0][0]]" :open-keys="[menuData[0]]" v-on:selected-keys-update="selectedKeysUpdate"/>
      </a-layout-sider>

      <code-drawer-menu v-if="showDrawerMenu" v-on:close-drawer-menu="drawerMenu">
        <code-menu :menu-data="menuData" :selected-keys="[menuData[0][0]]" :open-keys="[menuData[0]]" v-on:selected-keys-update="selectedKeysUpdate"/>
      </code-drawer-menu>

      <a-affix :offset-top="50" v-if="isSM">
        <a-button @click="drawerMenu">
          <template #icon>
            <menu-outlined />
          </template>
        </a-button>
      </a-affix>
      
      <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        <code-item v-for="(item, index) in selectedKeys" :key="index" v-on:openCode="openCode(item)" :data="item" />
      </a-layout-content>
    </a-layout>

    <a-layout v-if="showCode" style="background: #fff; padding: 0px 24px 24px 24px;">
      <a-page-header :title="$db.name[showCodeData[0]]" :sub-title="`Number: ${showCodeData[1]}`" @back="closeCode" />
      <code-show :data="showCodeData" />
    </a-layout>
  </a-layout-content>
  <a-layout-footer style="text-align: center" v-if="!isSM">
  </a-layout-footer>
</template>

<script lang="ts" setup>
  import { ref, getCurrentInstance } from 'vue'
  import CodeItem from './CodeItem.vue'
  import CodeShow from './CodeShow.vue'
  import { MenuOutlined } from '@ant-design/icons-vue'
  import CodeMenu from './CodeMenu.vue'
  import CodeDrawerMenu from './CodeDrawerMenu.vue'
  const emit = defineEmits(['resize'])
  const instance = getCurrentInstance()
  const proxy = instance?.proxy
  const $bus = proxy?.$bus
  const $config = proxy?.$config
  const $db = proxy?.$db

  const showDrawerMenu = ref<boolean>(false)
  function drawerMenu() {
    showDrawerMenu.value = !showDrawerMenu.value
  }

  let menuItemId = ref<number>(0)

  let showCode = ref<boolean>(false)
  let showCodeData = ref<number[]>([0, 0])
  let isSM = ref<boolean>(false)

  function onResize() {
    const width = document.documentElement.clientWidth
    if (width < 650 && !isSM.value) {
      isSM.value = true
      showDrawerMenu.value = false
      updateMenuItemId(0)
    } else if (width >= 650 && isSM.value) {
      isSM.value = false
      showDrawerMenu.value = false
      updateMenuItemId(0)
    }
    emit('resize', isSM.value)
  }

  window.onresize = onResize

  onResize()

  function getMenuData(index: number) {
    let type: string = 'number'
    if (index !== 0) {
      type = $db?.allTypes[index - 1] as string
    }
    let data: number[][] = $db?.[type]
    let result = []
    let menuSpace = $config?.menuSpace as number
    let itemSpace = $config?.itemSpace as number
    let i = 0
    while (i * menuSpace * itemSpace < data.length) {
      let mj = []
      let j = 0

      while (i * menuSpace * itemSpace + j * itemSpace < data.length && j < menuSpace) {
        let k = 0
        let mk = []
        while (i * menuSpace * itemSpace + j * itemSpace + k < data.length && k < itemSpace) {
          mk.push(data[i * menuSpace * itemSpace + j * itemSpace + k])
          k++
        }
        j++
        mj.push(mk)
      }
      i++
      result.push(mj)
    }
    return result
  }

  let menuData = ref<number[][][][]>(getMenuData(menuItemId.value))
  const selectedKeys = ref<number[][]>(menuData.value[0][0])

  function selectedKeysUpdate(value: number[][]) {
    selectedKeys.value = value
  }

  const updateMenuItemId = (id: unknown) => {
    menuItemId.value = id as number
    menuData.value = getMenuData(id as number)
    selectedKeys.value = menuData.value[0][0]
    showCode.value = false
  }

  $bus?.on('menuItemId', updateMenuItemId)

  $bus?.on('searchId', (id) => {
    openCode(id as number[])
  })

  function openCode(props: number[]) {
    showCodeData.value = props
    showCode.value = true
  }

  function closeCode() {
    showCode.value = false
  }
</script>
