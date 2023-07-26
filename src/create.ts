#!/usr/bin/env node
import {join} from 'node:path'
import fs from 'fs-extra'

const [, , projectName] = process.argv
const templateName = `vfsd`

const projectPath = join(process.cwd(), projectName)
const templatePath = join(__dirname, `../templates`, templateName)

const run = async () => {
  await fs.copy(templatePath, projectPath, {
    filter(src, dest) {
      return true
    },
  })
}

run().catch(console.error)
