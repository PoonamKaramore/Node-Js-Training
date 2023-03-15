var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);
var getUser = require('../test/getuser')
describe('get-user-testcase',function(){

    it('callback',function(){
        var spy = sinon.spy();
        getUser(spy);
        spy.should.have.been.calledOnce;

    })
});