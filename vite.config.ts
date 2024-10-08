import { resolve} from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ts-utils',
        },
        // mapa para debugear la libreria y contiene la informacion del codigo de la libreria antes de ser transpilado
        sourcemap: true,
        target: 'es6',
        minify: false,
    },
    plugins: [dts({outDir: 'dist', exclude: "**/*.test.ts"},)],
}) 