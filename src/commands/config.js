import inquirer from 'inquirer';

const OPTIONS = [
  'babel',
  'traceur',
  'sass',
  'less',
  'stylus',
  'mocha',
  'jasmine',
  'tape'
];

const linterList = options =>
  options
    .split(/ +/)
    .map(option =>
      option.includes('*') ?
      { name: option.replace('*', ''), checked: true } :
      { name: option }
    );

const validateSelection = function validateSelection(input) {
  const done = this.async();
  const option = input.toLowerCase();

  done(
    OPTIONS.includes(option) ?
      true :
      'Please choose one of the options above!'
  );

  return option;
};

const configOptions = [
  {
    type: 'input',
    name: 'transpiler',
    message: 'Choose a transpiling engine: [Babel, Traceur]',
    default: 'Babel',
    validate: validateSelection
  },
  {
    type: 'input',
    name: 'preprocessor',
    message: 'Choose a CSS preprocessor: [SASS, LESS, Stylus]',
    default: 'SASS',
    validate: validateSelection
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Choose a testing framework: [Mocha, Jasmine, tape]',
    default: 'Mocha',
    validate: validateSelection
  },
  {
    when: response => response.tests.toLowerCase() === 'mocha' || 'jasmine',
    type: 'confirm',
    name: 'wallaby',
    message: 'Do you require Wallaby support?',
    default: 'No'
  },
  {
    type: 'checkbox',
    message: 'Select the JavaScript linters',
    name: 'linter',
    choices: linterList('ESLint* JSCS JSHint JSLint')
  }
];

export default npmData =>
  inquirer.prompt(
    configOptions, options =>
      ({ npmData, options })
  );

