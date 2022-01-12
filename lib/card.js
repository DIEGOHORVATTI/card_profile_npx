const boxen = require("boxen");
const chalk = require("chalk");

module.exports = link = 
[
  "https://github.com/", 
  "https://www.npmjs.com/", 
  "https://linkedin.com/in/", 
  "https://diegohorvatti.github.io/"
]

module.exports = nomes = 
[
  "Diego Horvatti",
  "Full stack junior developer",
  "DIEGOHORVATTI",
  "~diegohorvatti",
  "diego-horvatti/",
  "div",
  "app/"
]

module.exports = labels = 
[
  "npx",
  "GitHub:",
  "npm:",
  "LinkedIn:",
  "Website:",
  "Card:"
]


const data = {
  name: chalk.bold.magenta(nomes[0]),
  title: chalk.green(nomes[1]),
  github: chalk.green(`${link[0]}${nomes[2]}`),
  npm: chalk.green(`${link[1]}${nomes[3]}`),
  linkedin: chalk.green(`${link[2]}${nomes[4]}`),
  website: chalk.green(`${link[3]}${nomes[6]}`),
  npx: chalk.green(labels[0]) + " " + chalk.magenta(nomes[5]),

  labelGithub: chalk.green.bold(labels[1]),
  labelNpm: chalk.green.bold(labels[2]),
  labelLinkedin: chalk.green.bold(labels[3]),
  labelWebsite: chalk.green.bold(labels[4]),
  labelNpx: chalk.green.bold(labels[5]),
};


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
  ].join("\n"), 
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "green",
  }
);