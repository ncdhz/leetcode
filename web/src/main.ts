import { createApp } from 'vue'
import db from './db.json'
import config from './config'
import App from './App.vue'
import { Menu, Drawer, Button, AutoComplete, Space, Layout, Card, Breadcrumb, Affix, Avatar, PageHeader, message } from 'ant-design-vue'

import 'ant-design-vue/lib/menu/style/css'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/drawer/style/css'
import 'ant-design-vue/lib/auto-complete/style/css'
import 'ant-design-vue/lib/space/style/css'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/card/style/css'
import 'ant-design-vue/lib/breadcrumb/style/css'
import 'ant-design-vue/lib/affix/style/css'
import 'ant-design-vue/lib/avatar/style/css'
import 'ant-design-vue/lib/page-header/style/css'
import 'ant-design-vue/es/message/style/css';

import mitter from './bus'
import 'prismjs/themes/prism.css'
import VueClipboard from 'vue-clipboard2'

const app = createApp(App);

declare module 'vue' {
  export interface ComponentCustomProperties {
    $bus: typeof mitter;
    $db: {
      allTypes: string[];
      code: string[];
      name: string[];
      type: string[];
      number: number[][];
      [key: string]: any;
    };
    $config: {
      github: string;
      codeMessage: { [key: string]: { [key: string]: string } };
      itemSpace: number;
      menuSpace: number;
      authorImg: string;
      startFlag: string;
      endFlag: string;
    };
  }
}
app.config.globalProperties.$bus = mitter
app.config.globalProperties.$db = db
app.config.globalProperties.$config = config
VueClipboard.config.autoSetContainer = true
app.config.globalProperties.$message = message
app.use(VueClipboard)
app.use(Menu)
app.use(Drawer)
app.use(AutoComplete)
app.use(Button)
app.use(Space)
app.use(Layout)
app.use(Card)
app.use(Breadcrumb)
app.use(Avatar)
app.use(Affix)
app.use(PageHeader)
app.mount("#app")