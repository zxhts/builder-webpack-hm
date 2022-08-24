const glob = require('glob-all');
const expect = require('chai').expect;

describe('Checking generated html files', () => {
    it('should generate html files', () => {
        const files = glob.sync([
            './dist/index.html'
        ]);

        // if (files.length > 0) {
        //     done();
        // } else {
        //     throw new Error('no html files generated');
        // }
        expect(files.length).to.be.equal(1);
    })
})