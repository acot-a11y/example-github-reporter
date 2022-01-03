module.exports = {
  extends: ['@acot'],
  connection: {
    command: 'npm run serve',
  },
  reporters: ['@acot/pretty', '@acot/github'],
  origin: 'http://localhost:3000',
  paths: ['/page1', '/page2', '/page3', '/page4', '/page5'],
};
