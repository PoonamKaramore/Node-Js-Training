const Checkout = require('../test/checkout')
var expect = require('chai').expect;
var checkout;

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('a',1);
    checkout.addItemPrice('c',2);
});

it('calculate_price',function(){
    checkout.addItem('a')
    expect(checkout.calculateTotal()).to.equal(1);

});

//adding multiple items 
it('multiple_items',function(){
    checkout.addItem('a');
    checkout.addItem('c');
    expect(checkout.calculateTotal()).to.equal(3)
})

//applying discount
it('discount',function(){
    checkout.addDiscount('a',3,2);
})


it('discount_on_total',function(){
    checkout.addDiscount('a',3,2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);

})

it('throws expection' , function(){
    expect(function(){
        checkout.addItem('b').to.throw();
    })
})