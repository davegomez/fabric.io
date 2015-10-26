#! /usr/bin/env node

import 'babel/polyfill';
import init from './commands/init';
import getConfig from './commands/config';

init()
  .then(getConfig)
  .catch(err => new Error(err));
