#!/usr/bin/env node
import {join} from 'node:path'
import fs from 'fs-extra'

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
