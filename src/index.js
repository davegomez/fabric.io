#! /usr/bin/env node

import 'core-js/shim';
import cli from './modules/cli';

const tst = 'Hello there!';
cli('test!');
console.log(Array.from(tst));
