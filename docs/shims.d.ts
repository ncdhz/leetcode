
declare module '*.vue' {
    import { defineComponent } from "vue"
    const Component: ReturnType<typeof defineComponent>
    export default Component
}



declare module 'db.json' {
    const code: string[]
    const name: string[]
    export default {
        code,
    }
}