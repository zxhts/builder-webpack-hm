const path = require('path');

process.chdir(path.join(__dirname, 'smoke'));

describe('builder-webpack test case', () => {
    require('./unit/webpack-smoke-test.js');
})