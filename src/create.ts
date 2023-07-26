#!/usr/bin/env node
import {fileURLToPath} from 'url'
import {join, dirname} from 'node:path'
import fs from 'fs-extra'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

console.log({__dirname, cwd})

const [, , projectName] = process.argv
const templateName = `vfsd`
const templatePath = join(__dirname, `../templates`, templateName)

const run = async () => {
  await fs.copy(templatePath, projectName, {
    filter(src, dest) {
      return true
    },
  })
}

run().catch(console.error)
