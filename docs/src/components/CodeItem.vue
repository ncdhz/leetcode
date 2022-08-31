<template>
    <a-card hoverable style="margin-bottom: 20px;">
        <template #cover>
            <div style="margin: 0px 5%;width:90%;"><pre :class="`language-${type} line-numbers`" style="background:#fff;"><code v-html="Prism.highlight(($db?.code as string[])[props.data[0]], Prism.languages[type], type)"></code></pre></div>
        </template>
        <template class="ant-card-actions" #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta :title="`Number: ${props.data[1]}`" :description="$db.name[props.data[0]]">
            <template #avatar>
                <a-avatar :src="$config.authorImg"/>
            </template>
        </a-card-meta>
    </a-card>
</template>
<script lang="ts" setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { getCurrentInstance, ref } from 'vue'
import Prism from 'prismjs'

const proxy = getCurrentInstance()?.proxy
const $config = proxy?.$config
const $db = proxy?.$db
const props = defineProps(['data'])
const type = ref<string>(($db?.type as string[])[props.data[0]])
</script>