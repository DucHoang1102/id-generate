var chai      = require('chai'),
    assert    = chai.assert,
    expect    = chai.expect;

var idGenerator = require('../index');

var opts = {
    prefix: 'CT',
    min: 100000,
    max: 999999
}

var listData = [
    {
        it: 'CASE: 1. Error',
        opts: '',
        match: ''
    },

    {
        it: 'CASE: 2. Error',
        opts: 'a',
        match: ''
    },

    {
        it: 'CASE: 3. Error',
        opts: 1,
        match: ''
    },
];

describe('Test id generate package', () => {

    for (let data of listData) {

        it (data.it, () => {
            expect(idGenerator.generate(data.opts)).to.be.an('error');
        });
    }
});
