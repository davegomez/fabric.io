#! /usr/bin/env node

import 'babel/polyfill';
import init from './commands/init';
import config from './commands/config';
import build from './commands/build';

const throwError = err => new Error(err);

init()
  .then(config)
  .then(build)
  .catch(throwError);
