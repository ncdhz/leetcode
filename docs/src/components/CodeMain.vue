<template>
    <a-layout-content :style="isSM ? 'padding: 0;' : 'padding: 0 50px;'">
        <a-breadcrumb style="margin: 16px 0" v-if="!isSM">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item v-if="menuItemId != 0">{{ $config.codeMessage[$db.allTypes[menuItemId - 1]].name}}</a-breadcrumb-item>
            <a-breadcrumb-item v-if="showCode">{{$db.name[showCodeData[0]]}}</a-breadcrumb-item>
        </a-breadcrumb>
        
        <a-layout style="padding: 24px 0; background: #fff" v-if="!showCode">
            <a-layout-sider width="200" style="background: #fff" v-if="!isSM">
                <a-menu
                    mode="inline"
                    v-model:selectedKeys="selectedKeys"
                    v-model:openKeys="openKeys"
                    style="height: 100%">
                    <a-sub-menu v-for="item in menuData" :key="item">
                        <template #title>
                            <span>{{getMenuTitle(item)}}</span>
                        </template>
                        <a-menu-item v-for="sitem in item" :key="sitem">{{getItemTitle(sitem)}}</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-affix :offset-top="50" v-if="isSM">
                <a-button>
                    <template #icon>
                        <menu-outlined />
                    </template>
                </a-button>
            </a-affix>
            <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
                <code-item v-for="(item, index) in selectedKeys[0]" :key="index" v-on:openCode="openCode(item)" :data="item"/>
            </a-layout-content>
        </a-layout>

        <a-layout v-if="showCode" style="background: #fff; padding: 0px 24px 24px 24px;">
            <a-page-header
                :title="$db.name[showCodeData[0]]"
                :sub-title="`Number: ${showCodeData[1]}`"
                @back="closeCode"
            />
            <code-show :data="showCodeData"/>
        </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"  v-if="!isSM">
    </a-layout-footer>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'
import CodeItem from '@/components/CodeItem.vue'
import CodeShow from '@/components/CodeShow.vue'
import { MenuOutlined } from '@ant-design/icons-vue'

const proxy = getCurrentInstance()?.proxy
const $bus = proxy?.$bus
const $config = proxy?.$config
const $db = proxy?.$db

let menuItemId = ref<number>(0)

let showCode = ref<boolean>(false)
let showCodeData = ref<number[]>([0, 0])
let isSM = ref<boolean>(false)

window.onresize = () => {
    const width = document.documentElement.clientWidth
    if (width < 650 && !isSM.value) {
        isSM.value = true
    } else if (width >= 650 && isSM.value) {
        isSM.value = false
    }
}

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

let menuData = ref<number[][][][]>(getMenuData(menuItemId.value))
const selectedKeys = ref<number[][][]>([menuData.value[0][0]])
const openKeys = ref<number[][][][]>([menuData.value[0]])

$bus?.on('menuItemId', (id: unknown) => {
    menuItemId.value = id as number
    menuData.value = getMenuData(id as number)
    selectedKeys.value = [menuData.value[0][0]]
    openKeys.value = [menuData.value[0]]
    showCode.value = false
})

function openCode(props: number[]) {
    showCodeData.value = props
    showCode.value = true
}

function closeCode() {
    showCode.value = false
}
</script>
