<template>
    <a-card hoverable style="margin-bottom: 20px;">
        <template #cover>
            <div style="margin: 0px 2%; width:96%;"  @click="openCode"><pre :class="`language-${type} line-numbers`" style="background:#fff;"><code v-html="Prism.highlight(getShowCode(getCodes(($db?.code as string[])[props.data[0]])), Prism.languages[type], type)"></code></pre></div>
        </template>
        <template class="ant-card-actions" #actions>
            <eye-outlined key="eye" @click="openCode"/>
            <copyright-circle-outlined key="copy_key" @click="copyKey"/>
            <copy-outlined key="copy" @click="copy" />
        </template>
        <a-card-meta :title="`Number: ${props.data[1]}`" :description="$db.name[props.data[0]]">
            <template #avatar>
                <a-avatar :src="$config.authorImg"/>
            </template>
        </a-card-meta>
    </a-card>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { EyeOutlined, CopyOutlined, CopyrightCircleOutlined} from '@ant-design/icons-vue';
import { getCurrentInstance, ref } from 'vue'
import Prism from 'prismjs'
const instance = getCurrentInstance()
const proxy = instance?.proxy
const $config = proxy?.$config
const $db = proxy?.$db
const props = defineProps(['data'])
const type = ref<string>(($db?.type as string[])[props.data[0]])

function getCodes(code: string) {
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
    return codes.slice(i, j)
}

function openCode() {
    instance?.emit('openCode')
}

function getShowCode(codes:string[]) {
    if (codes.length > 6) {
        return codes.slice(0, 6).join('\n') + '\n...\n'
    }
    return codes.join('\n')
}

function copy() {
    (proxy as any).$copyText(($db?.code as string[])[props.data[0]]).then(() => {
        message.success('Copy all succeeded.')
    }, () => {
        message.error('Copy all failed.')
    })
}

function copyKey() {
    (proxy as any).$copyText(getCodes(($db?.code as string[])[props.data[0]]).join('\n')).then(() => {
        message.success('Copy key succeeded.')
    }, () => {
        message.error('Copy key failed.')
    })
}
</script>