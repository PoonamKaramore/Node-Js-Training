// public instance field

class Person{
    firstName = 'Poonam';
}
const name = new Person();
console.log(name);

let name1 = new Person()
name1.firstName = 'Payal' //changing the value of instance field
console.log(name1)

//using constructor
class newPerson{
    constructor(fname){
        this.firstName = fname;
    }
}
const value1 = new newPerson('Tony');
const value2 = new newPerson('Hello');
console.log(value1);
console.log(value2);

// public static field

class Car{
    constructor(color){
        this.color = color;
    }
    content(){
        console.log('color is '+this.color)
    }
    static location = 'India'
    static name(){
        return 'Swift'
    }
}

const newObj = new Car('Red');
newObj.content();
console.log(Car.location)
console.log(Car.name())

