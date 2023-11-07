#!/usr/bin/env node
import {fileURLToPath} from 'url'
import {join, dirname} from 'node:path'
import fs from 'fs-extra'

// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

const [, , projectName] = process.argv
const projectPath = join(cwd, projectName)

const templateName = process.argv[1] || process.exit(1)
const templatePath = join(__dirname, `../templates`, templateName)

const run = async () => {
  await fs.copy(templatePath, projectPath, {
    filter(src, dest) {
      return true
    },
  })
}

run().catch(console.error)
