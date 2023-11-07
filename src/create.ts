#!/usr/bin/env node
import {fileURLToPath} from 'node:url'
import {join} from 'node:path'
import fs from 'fs-extra'
import {program} from 'commander'

const {template, destination} = program
  .requiredOption('-t, --template <template>', 'template')
  .requiredOption('-d, --destination <destination>', 'destination path')
  .parse()
  .opts()
console.log({template, destination})

// @ts-ignore
const __dirname__ = fileURLToPath(import.meta.url)
const __cwd__ = process.cwd()

const templatePath = join(__dirname__, `../../templates`, template)
const projectPath = join(__cwd__, destination)
console.log({__dirname__, __cwd__, templatePath, projectPath})

const run = async () => {
  await fs.copy(templatePath, projectPath, {
    filter(src, dest) {
      return true
    },
  })
}

run().catch(console.error)
