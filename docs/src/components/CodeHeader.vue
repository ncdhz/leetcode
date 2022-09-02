<template>
    <a-layout-header class="header">
        <div class="logo">
            <a-space align="center">
                <a :href="$config?.github"><github-outlined class='logo_icon'/></a>
            </a-space>
        </div>
        <a-menu
            theme="dark"
            mode="horizontal"
            v-model:selectedKeys="selectedKeys"
            :style="{ lineHeight: '64px' }"
            v-on:click="itemClick">
            <a-menu-item :key="0">Home</a-menu-item>
            <a-menu-item v-for="(item, index) in $db?.allTypes" :key="index + 1">{{$config?.codeMessage[item].name}}</a-menu-item>
        </a-menu>
    </a-layout-header>
</template>
<script lang="ts" setup>

import { GithubOutlined } from '@ant-design/icons-vue'
import { ref, getCurrentInstance } from 'vue'
const proxy = getCurrentInstance()?.proxy

const selectedKeys = ref<number[]>([0])
function itemClick( { key } : { key: number }) {
    if (key !== selectedKeys.value[0]) {
        proxy?.$bus.emit('menuItemId', key)
    }
}

const $config = proxy?.$config
const $db = proxy?.$db

</script>
<style>
.logo {
    float: right;
    width: 120px;
    height: 31px;
    margin: 16px 0 16px 24px;
    display: flex;
}
.logo_icon {
    float: left;
    font-size: 22px;
    justify-content: center;
}
.logo_icon svg {
    color: aliceblue;
}
</style>
