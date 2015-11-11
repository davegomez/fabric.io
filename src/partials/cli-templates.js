import chalk from 'chalk';

const row = chalk.yellow('='.repeat(80));

export const wellcome = `${row}
Welcome to fabric.io

From now on we will walk you through the interactive command line interface
asking you a few questions we need to know in order to create the initial
configuration of your ECMAScript 2015 project. Answer all the questions as
accurate as you can to start working in no time.
${row}`;

export const help = `
Usage: fabric-io init [options]

General options:
  -r, --react        # Create a React project scaffold
  -e, --electron     # Create an Electron project scaffold
  -n, --node         # Create an Node.js project scaffold

  -h, --help         # Print this info and fabric.io's options and usage
  -v, --version      # Print version
`;
