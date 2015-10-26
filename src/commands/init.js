import npm from 'npm';

export default () =>
  new Promise((resolve, reject) =>
    npm.load(() =>
      npm.commands.init('', (err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      })
    )
  );
