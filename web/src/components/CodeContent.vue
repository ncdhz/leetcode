<template>
  <div :class="lineNumbers ? 'line-numbers' :''">
    <pre style="background: #fff;" :class="`language-${type}`"><code v-html="Prism.highlight(code as string, Prism.languages[type as string], type as string)"></code></pre>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'  
  import Prism from 'prismjs'
  const { code, type, lineNumbers } = defineProps({
    code: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
    lineNumbers: {
      type: Boolean,
      default: false
    }
  })
  onMounted(() => {
    Prism.highlightAll()
  })
</script>