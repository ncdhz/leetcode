import { createApp } from 'vue'
import db from './db.json'
import config from './config'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import mitter from './bus'
import 'prismjs/themes/prism.css'

const app = createApp(App)

declare module 'vue' {
    export interface ComponentCustomProperties {
        $bus: typeof mitter,
        $db: {
            allTypes: string[],
            code: string[],
            name: string[],
            type: string[],
            number: number[][],
            [key: string]: any
        },
        $config: {
            github: string,
            codeType: {[key:string]: string},
            itemSpace: number,
            menuSpace: number,
            authorImg: string
        }
    }
}
app.config.globalProperties.$bus = mitter
app.config.globalProperties.$db = db
app.config.globalProperties.$config = config

app.use(Antd)
app.mount('#app')
