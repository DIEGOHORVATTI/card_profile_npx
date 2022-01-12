const boxen = require('boxen')
const chalk = require('chalk')
const social_networks = require('./social_networks')
const labels = require('./labels')
const names = require('./names')

const data = {
  name: chalk.bold.magenta(names[0]),
  title: chalk.green(names[1]),
  github: chalk.green(`${social_networks[0]}${names[2]}`),
  npm: chalk.green(`${social_networks[1]}${names[3]}`),
  linkedin: chalk.green(`${social_networks[2]}${names[4]}`),
  website: chalk.green(`${social_networks[3]}${names[6]}`),
  npx: chalk.green(labels[0]) + ' ' + chalk.magenta(names[5]),

  labelGithub: chalk.green.bold(labels[1]),
  labelNpm: chalk.green.bold(labels[2]),
  labelLinkedin: chalk.green.bold(labels[3]),
  labelWebsite: chalk.green.bold(labels[4]),
  labelNpx: chalk.green.bold(labels[5]),
}

module.exports = boxen(
  [
    `                    ${data.name}`,
    `             ${data.title}`,
    ``,
    `     ${data.labelGithub} ${data.github}`,
    `        ${data.labelNpm} ${data.npm}`,
    `   ${data.labelLinkedin} ${data.linkedin}`,
    `    ${data.labelWebsite} ${data.website}`,
    ``,
    `       ${data.labelNpx} ${data.npx}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'round',
    borderColor: 'green',
  }
)
