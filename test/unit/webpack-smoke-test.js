const assert = require('assert');

describe('webpack.base.js test case', () => {
    const smokeConfig = require('../../lib/webpack.smoke.js');

    it('entry', () => {
        assert.equal(smokeConfig.entry.index, '/Users/zhaoxianhe/learn/builder-webpack/test/smoke/src/index.js');
    })

    it('mode', () => {
        assert.equal(smokeConfig.mode, 'production');
    })

    it('devtool', () => {
        assert.equal(smokeConfig.devtool, 'cheap-source-map');
    })
})