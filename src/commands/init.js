import { help } from '../partials/cli-templates';
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));

export default () =>
  new Promise((resolve, reject) => {
    if (!argv._.length === 1 && !argv._.includes('init')) {
      reject(help);
    }

    resolve(argv)
  });
