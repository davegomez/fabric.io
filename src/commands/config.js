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

const validateOptions = input => OPTIONS.includes(input.toLowerCase());

const configOptions = [
  {
    type: 'input',
    name: 'transpiler',
    message: 'Transpiling Engine? [Babel, Traceur]',
    default: 'Babel',
    validate: validateOptions
  },
  {
    type: 'input',
    name: 'preprocessor',
    message: 'CSS Preprocessor? [SASS, LESS, Stylus]',
    default: 'SASS',
    validate: validateOptions
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Testing Framework? [Mocha, Jasmine, tape]',
    default: 'Mocha',
    validate: validateOptions
  },
  { type: 'confirm',
    name: 'wallaby',
    message: 'Wallaby Support?',
    default: 'No'
  },
  {
    type: 'checkbox',
    message: 'JavaScript Linters',
    name: 'linters',
    choices: [
      {
        name: 'ESLint'
      },
      {
        name: 'JSCS'
      },
      {
        name: 'JSHint'
      },
      {
        name: 'JSLint'
      }
    ]
  }
];

export default npmData =>
  inquirer.prompt(
    configOptions, options =>
      ({ npmData, options })
  );

