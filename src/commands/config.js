import inquirer from 'inquirer';

const linterList = options =>
  options
    .split(/ +/)
    .map(option =>
      option.includes('*') ?
      { name: option.replace('*', ''), checked: true } :
      { name: option }
    );

const configOptions = [
  {
    type: 'input',
    name: 'transpiler',
    message: 'Transpiler: ',
    default: 'Babel',
    choices: ['Babel', 'Traceur']
  },
  {
    type: 'list',
    name: 'preprocessor',
    message: 'CSS preprocessor: ',
    default: 'SASS',
    choices: ['SASS', 'LESS', 'Stylus', 'None']
  },
  {
    type: 'list',
    name: 'tests',
    message: 'Testing framework: ',
    default: 'Mocha',
    choices: ['Mocha', 'Jasmine', 'Tape', 'None']
  },
  {
    when: response => response.tests === 'Mocha' || 'Jasmine',
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

