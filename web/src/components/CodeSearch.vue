<template>
  <a-auto-complete
    v-model:value="value"
    style="width: 150px;"
    placeholder="number or name"
    @select="onSelect"
    @search="onSearch"
    :options="dataSource"
    :dropdown-match-select-width="210"
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
  const dataSource = ref<DataFormat[]>([])
  function onSelect(_: string, obj: DataFormat) {
    $bus?.emit('searchId', obj.id)
  }

  function onSearch(text: string) {
    const reg = new RegExp(text)
    let results: DataFormat[] = []
    for (const ns of $db?.number as number[][]) {
      if (reg.test($db?.name[ns[0]] as string) || reg.test('' + ns[1])) {
        results.push({value: `${ns[1]}.${$db?.name[ns[0]]} ${$config?.codeMessage[$db?.type[ns[0]] as string].name}`, id: ns})
      }
    }
    if (results.length > 6) {
      results = results.slice(0, 6)
    }
    dataSource.value = results
  }
</script>
