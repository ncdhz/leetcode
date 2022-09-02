<template>
    <a-card>
        <template class="ant-card-actions" #title>
            <a-space :size="15">
                <eye-outlined key="eye" v-if="!openCode" @click="showCode"/>
                <eye-invisible-outlined v-if="openCode" @click="showCode" />
                <copyright-circle-outlined key="copy_key" @click="copyKey"/>
                <copy-outlined key="copy" @click="copy" />
            </a-space>
        </template>
        <template #cover>
            <div style="margin: 0px 2%; width:96%;"><pre :class="`language-${type} line-numbers`" style="background:#fff;"><code v-html="Prism.highlight(!openCode ? ($db?.code as string[])[props.data[0]] : getCode(($db?.code as string[])[props.data[0]]), Prism.languages[type], type)"></code></pre></div>
        </template>
    </a-card>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { CopyOutlined, CopyrightCircleOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue';
import { getCurrentInstance, ref } from 'vue'
import Prism from 'prismjs'
const instance = getCurrentInstance()
const proxy = instance?.proxy
const $config = proxy?.$config
const $db = proxy?.$db
const props = defineProps(['data'])
const type = ref<string>(($db?.type as string[])[props.data[0]])
const openCode = ref<boolean>(false)

function showCode() {
    openCode.value = !openCode.value
}

function getCode(code: string) {
    let codes = code.split('\n')
    let i = 0
    let j = codes.length - 1
    let start = RegExp($config?.startFlag as string)
    let end = RegExp($config?.endFlag as string)
    while(i < codes.length && !start.test(codes[i])) {
        i++
    }
    i++
    while(j >= 0 && !end.test(codes[j])) {
        j--
    }
    return codes.slice(i, j).join('\n')
}

function copy() {
    (proxy as any).$copyText(($db?.code as string[])[props.data[0]]).then(() => {
        message.success('Copy all succeeded.')
    }, () => {
        message.error('Copy all failed.')
    })
}

function copyKey() {
    (proxy as any).$copyText(getCode(($db?.code as string[])[props.data[0]])).then(() => {
        message.success('Copy key succeeded.')
    }, () => {
        message.error('Copy key failed.')
    })
}
</script>