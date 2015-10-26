#! /usr/bin/env node

import 'babel/polyfill';
import init from './commands/init';

init()
  .then(data => console.log('this is the data: ', data))
  .catch(err => new Error(err));
