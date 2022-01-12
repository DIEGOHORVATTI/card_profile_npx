const chalk = require("chalk");

module.exports = {
  name: chalk.bold.green("                  Diego Horvatti"),
  title: chalk.magenta("             Full stack junior"),
  github: chalk.gray("https://github.com/") + chalk.green("DIEGOHORVATTI"),
  npm: chalk.gray("https://www.npmjs.com/") + chalk.red("~diegohorvatti"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("diego-horvatti/"),
  website: chalk.yellow("https://onichans.com"),
  npx: chalk.green("npx") + " " + chalk.white("div"),

  labelGithub: chalk.white.bold("     GitHub:"),
  labelNpm: chalk.white.bold("        npm:"),
  labelLinkedin: chalk.white.bold("   LinkedIn:"),
  labelWebsite: chalk.white.bold("    Website:"),
  labelNpx: chalk.white.bold("       Card:"),
};
