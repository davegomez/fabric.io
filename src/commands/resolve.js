/* eslint no-process-exit: 0 */
/* global process */

import inquirer from 'inquirer';
import initFabric from './build';
import open from './../tools/open';
import log from './../tools/logger';
import validFlag from './../tools/flag-checker';

const docs = 'https://www.npmjs.com/package/fabric-io';

const choices = [
  'Create a new scaffold',
  'Read the documentation',
  'Check the help',
  'Exit'
];

const exitProgram = () => {
  log('exit')();
  process.exit();
};

const resolutions = {
  [choices[0]]: initFabric,
  [choices[1]]: open(docs),
  [choices[2]]: log('help'),
  [choices[3]]: exitProgram
};

const question = {
  type: 'list',
  name: 'resolve',
  message: 'What do you want to do?',
  default: 'Create a new scaffold',
  choices
};

const resolve = selection => {
  resolutions[selection.resolve]();
};

export default options => options['--docs'] ?
  open(docs)() :
  inquirer.prompt(question, resolve);
