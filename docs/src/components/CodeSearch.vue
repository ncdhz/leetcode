<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 100px;"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
    :dropdown-match-select-width="false"
    :dropdown-style="{ width: '210px' }"
    option-label-prop="id"
  />
</template>
<script lang="ts" setup>
  import { ref, getCurrentInstance } from 'vue';
  const instance = getCurrentInstance()
  const proxy = instance?.proxy
  const $bus = proxy?.$bus
  const $db = proxy?.$db
  const $config = proxy?.$config

  interface DataFormat {
    value: string
     id: number[]
  }

  const value = ref<string>('')
  const options = ref<DataFormat[]>([])
  function onSelect(value: string) {
    console.log(value)
  }
  function onSearch(value: string) {
    const reg = new RegExp(value)
    let results: DataFormat[] = []
    for (const ns of $db?.number as number[][]) {
      if (reg.test($db?.name[ns[0]] as string) || reg.test('' + ns[1])) {
        results.push({value: `${ns[1]}.${$db?.name[ns[0]]} ${$config?.codeMessage[$db?.type[ns[0]] as string].name}`, id: ns})
      }
    }
    if (results.length > 6) {
      results = results.slice(0, 6)
    }
    options.value = results
  }
</script>
