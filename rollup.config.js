import {resolve} from 'node:path'
import {defineConfig} from 'rollup'
import esbuild from 'rollup-plugin-esbuild'

const PREFIX = `create`
const INPUT = `src/create.ts`

const isDev = process.env.NODE_ENV === `development`

const home = (...args) => resolve(__dirname, ...args)

export default defineConfig([
  !isDev && {
    input: INPUT,
    output: [{
      file: `dist/${PREFIX}.min.cjs`,
      format: `cjs`,
    }],
    plugins: [
      esbuild({
        minify: true,
      }),
    ],
  },
  isDev && {
    input: INPUT,
    output: [{
      file: `dist/${PREFIX}.cjs`,
      format: `cjs`,
    }],
    plugins: [
      esbuild(),
    ],
  }
].filter(Boolean))
