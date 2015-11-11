import { help } from '../partials/cli-templates';

const logs = {
  help,
  exit: 'Bye'
};

export default log => () => console.log(logs[log]);
