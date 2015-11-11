#! /usr/bin/env node

import 'babel-polyfill';
import minimist from 'minimist';
import resolve from './commands/intro';
import { help } from './partials/cli-templates';

const options = {
  alias: {
    e: 'electron',
    h: 'help',
    n: 'node',
    r: 'react',
    v: 'version'
  }
};

const argv = minimist(process.argv.slice(2), options);

argv._.includes('init') ? init() : resolve();
