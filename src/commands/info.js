

export default argv => {
  Object.keys(argv)
    .filter(x => x === 'h' || x === 'v');
};
