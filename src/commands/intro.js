import inquirer from 'inquirer';

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

const resolve = selection => {
  console.log(selection);
};

export default () => inquirer.prompt(introQuestions, resolve);
