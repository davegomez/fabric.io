#! /usr/bin/env node

/* global process */
/* eslint no-unused-expressions: 0 */

import 'babel-polyfill';
import { docopt } from 'docopt';
import build from './commands/build';
import resolve from './commands/resolve';
import pjson from './../package.json';
import { help } from './partials/cli-templates';

const options = docopt(help, {
  argv: process.argv.slice(2),
  help: true,
  version: `v${pjson.version}`,
  exit: true
});

console.log(options);

options.init ? build(options) : resolve(options);
