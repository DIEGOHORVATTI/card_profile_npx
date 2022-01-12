#!/usr/bin/env node
const minimist = require('minimist')
const chalk = require('chalk')
const pkg = require('./lib/pkg')
const http = require('http')
const inquirer = require('inquirer')
const opn = require('opn')

const social_networks = require('./lib/social_networks')
const labels = require('./lib/labels')
const names = require('./lib/names')

const card = require('./lib/card')
const { exec } = require('child_process')

const options = {
  alias: { json: 'j' },
}

const argv = minimist(process.argv.slice(2), options)
const execute = () => {
  console.log(pkg(argv))
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Abrir:',
        choices: ['Git hub ->', 'npm ->', 'Linkdin ->', 'Website ->', 'Sair'],
      },
    ])
    .then((answer) => {
      const action = answer['action']

      switch (action) {
        case 'Git hub ->':
          opn(`${social_networks[0]}${names[2]}`)
          break
        case 'npm ->':
          opn(`${social_networks[1]}${names[3]}`)
          break
        case 'Linkdin ->':
          opn(`${social_networks[2]}${names[4]}`)
          break
        case 'Website ->':
          opn(`${social_networks[3]}${names[6]}`)
          break
        case 'Sair':
          console.log(chalk.bgGreen.black('Obrigado por me visitar<3'))
          process.exit()
          break
        default:
          console.log('informe uma opção valida')
          break
      }
    })
}
module.exports = execute
execute()
