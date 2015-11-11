/* eslint no-process-exit: 0 */
/* global process */

import inquirer from 'inquirer';
import initFabric from './init';
import open from './../tools/open';
import log from './../tools/logger';

const docs = 'https://www.npmjs.com/package/fabric-io';

const choices = [
  'Create a new scaffold',
  'Check the documentation',
  'Read the help',
  'Exit'
];

const introQuestions = {
  type: 'list',
  name: 'resolve',
  message: 'What do you want to do?',
  default: 'Create a new scaffold',
  choices
};

const exit = () => {
  log('exit')();
  process.exit();
};

const resolutions = {
  'Create a new scaffold': initFabric,
  'Check the documentation': open(docs),
  'Read the help': log('help'),
  Exit: exit
};

const resolve = selection => {
  resolutions[selection.resolve]();
};

export default () => inquirer.prompt(introQuestions, resolve);
