module.exports = {
  subTaskConcurrency: 1,
  linters: {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'git add'],
    '*.css': ['prettier --write', 'stylelint', 'git add'],
  },
};
