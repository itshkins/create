import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
  entries: [`src/create`],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      minify: false,
    },
  },
})
