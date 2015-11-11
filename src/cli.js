#! /usr/bin/env node
/* global process */

import 'babel-polyfill';
import minimist from 'minimist';
import resolve from './commands/intro';

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

argv._.includes('init') ? init(argv) : resolve();
