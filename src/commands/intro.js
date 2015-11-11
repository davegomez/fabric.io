/* eslint no-process-exit: 0 */
/* global process */

import inquirer from 'inquirer';
import initFabric from './init';
import showInfo from './info';
import open from './../tools/open';
import log from './../tools/logger';
import validFlag from './../tools/flag-checker';

const docs = 'https://www.npmjs.com/package/fabric-io';

const choices = [
  'Create a new scaffold',
  'Check the documentation',
  'Read the help',
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

export default argv => validFlag(argv, 'h', 'v') ?
  showInfo(argv) :
  inquirer.prompt(question, resolve);
