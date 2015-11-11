#! /usr/bin/env node
/* global process */

import 'babel-polyfill';
import { docopt } from 'docopt';
import pjson from './../package.json';
import { help } from './partials/cli-templates';

const options = docopt(help, {
  argv: process.argv.slice(2),
  help: true,
  version: `v${pjson.version}`,
  exit: true
});

options.init ? build(options) : resolve(options);
