const expect = require('chai').expect;

describe('test_suites',function(){
    before(function(){
        console.log('before the test cases are runned')
    })
    it('return true',function(){
        expect(true).to.equal(true);
    });
    after(function(){
        console.log('After tests')
    })
})
