#!/usr/bin/env babel-node
import commander from 'commander'
import cipher from './cipher'
import fs from 'fs'
require('colors')

commander.command('encode <path> <key>')
  .action(async(path, key) => {
    console.log(`Reading ${path}...`)
    const input = fs.readFileSync(path)
    console.log(`Encoding ${path}...`)
    const encoded = cipher.encode(input, key)
    const encodePath = `${path}.encoded`
    fs.writeFileSync(encodePath, encoded)
    console.log(`Encoded file is located in ${encodePath}`.green)
    return encodePath
  })

commander.command('decode <path> <key>')
  .action(async(path, key) => {
    console.log(`Reading ${path}...`)
    const input = fs.readFileSync(path)
    console.log(`Decoding ${path}...`)
    const decoded = cipher.decode(input, key)
    const decodePath = `${path}.decoded`
    fs.writeFileSync(decodePath, decoded)
    console.log(`Decoded file is located in ${decodePath}`.green)
    return decodePath
  })

commander.parse(process.argv)