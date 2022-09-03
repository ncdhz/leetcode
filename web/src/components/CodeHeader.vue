<template>
  <a-layout-header class="header">
    <div class="logo">
      <a-space align="center" :size="20">
        <code-search/>
        <a :href="$config?.github">
          <github-outlined class="logo_icon" />
        </a>
      </a-space>
    </div>
    <code-main-menu/>
  </a-layout-header>
</template>
<script lang="ts" setup>
  import { GithubOutlined } from '@ant-design/icons-vue'
  import { getCurrentInstance } from 'vue'
  import CodeMainMenu from './CodeMainMenu.vue'
  import CodeSearch from './CodeSearch.vue'
  const proxy = getCurrentInstance()?.proxy
  const $config = proxy?.$config
</script>
<style>
  .logo {
    float: right;
    width: 210px;
    height: 35px;
    margin: 14px 0 14px 24px;
    display: flex;
  }

  .logo_icon {
    float: left;
    font-size: 30px;
    justify-content: center;
  }

  .logo_icon svg {
    color: aliceblue;
  }
</style>
