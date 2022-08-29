<template>
    <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item v-if="menuItemId != 0">{{ $config.codeType[$db.allTypes[menuItemId - 1]]}}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout style="padding: 24px 0; background: #fff">
            <a-layout-sider width="200" style="background: #fff">
            <a-menu
                mode="inline"
                v-model:selectedKeys="selectedKeys"
                v-model:openKeys="openKeys"
                style="height: 100%">
                <a-sub-menu v-for="item in menuData" :key="item">
                    <template #title>
                        <span>
                        subnav 1
                        </span>
                    </template>
                    <a-menu-item v-for="sitem in item" :key="sitem">option1</a-menu-item>
                </a-sub-menu>
            </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            Content
            </a-layout-content>
        </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
    </a-layout-footer>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
const proxy = getCurrentInstance()?.proxy
const $bus = proxy?.$bus
const $config = proxy?.$config
const $db = proxy?.$db

let menuItemId = ref<number>(0)
function getMenuData(index: number) {
    let type: string = 'number'
    if (index !== 0) {
        type = $db?.allTypes[index - 1] as string
    }
    let data: number[][] = $db?.[type]
    let result = []
    let menuSpace = $config?.menuSpace as number
    let itemSpace = $config?.itemSpace as number
    let i= 0
    while(i * menuSpace * itemSpace < data.length) {
        let mj = []
        let j = 0

        while(i * menuSpace * itemSpace + j * itemSpace < data.length && j < menuSpace) {
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

function getItemTitle(array:number[][]) {
    
}

let menuData = ref<number[][][][]>(getMenuData(menuItemId.value))
const selectedKeys = ref<number[][][]>([menuData.value[0][0]])
const openKeys = ref<number[][][][]>([menuData.value[0]])

$bus?.on('menuItemId', (id: unknown) => {
    menuItemId.value = id as number
    menuData.value = getMenuData(id as number)
    selectedKeys.value = [menuData.value[0][0]]
    openKeys.value = [menuData.value[0]]
})

</script>
