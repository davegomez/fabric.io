import chalk from 'chalk';

const row = chalk.yellow('='.repeat(80));

export const wellcome = `${row}
Welcome to fabric.io

From now on we will walk you through the interactive command line interface
asking you a few questions we need to know in order to create the initial
configuration of your ECMAScript 2015 project. Answer all the questions as
accurate as you can to start working in no time.
${row}`;

export const help = `Usage:
  fabric-io
  fabric-io [options]
  fabric-io init [options]

General options:
  -h --help      Print this info and fabric.io's options and usage
  -d --docs      Opens the documentation site on your browser
  --version      Print fabric.io's version

Init options:
  -e --electron  Create an Electron project scaffold (supports React)
  -n --node      Create a Node.js project scaffold
  -r --react     Create a React project scaffold (supports Electron)
`;
