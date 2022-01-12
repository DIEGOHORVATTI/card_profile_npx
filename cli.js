#!/usr/bin/env node
const minimist = require('minimist');
const chalk = require('chalk');
const pkg = require('.');
const http = require('http');
const inquirer = require('inquirer');
const opn = require('opn');

const card = require("./lib/card");

module.exports = ({ json }) => (json ? JSON.stringify(data) : card);

const options = {
  alias: { json: "j" },
};

const argv = minimist(process.argv.slice(2), options);

function links() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Abrir:',
        choices: [
          'Git hub ->',
          'npm ->',
          'Linkdin ->',
          'Website ->',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action']

      switch(action) {
        case "Git hub ->":
          opn(`${link[0]}${nomes[2]}`);
          break;
        case "npm ->":
          opn(`${link[1]}${nomes[3]}`);
          break;
        case "Linkdin ->":
          opn(`${link[2]}${nomes[4]}`);
          break;
        case "Website ->":
          opn(`${link[3]}${nomes[6]}`);
          break;
        case "Sair":
          console.log(chalk.bgGreen.black('Obrigado por me visitar<3'))
          process.exit()
          break;
        default:
          console.log("informe uma opção valida");
          break;
      }

    })
}

console.log(pkg(argv));
links()