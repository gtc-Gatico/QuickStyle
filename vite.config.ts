import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx'
//devui
import { DevUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    build: {
        outDir: "docs"
    },
    plugins: [
        vue(),
        vueJsx(),
        Components({
            resolvers: [DevUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
