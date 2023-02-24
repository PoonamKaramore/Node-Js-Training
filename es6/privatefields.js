class Person{
    #firstName;
    #lastName;
    constructor(fname,lname){
        this.#firstName = fname;
        this.#lastName = lname;
    }

    get fname(){
        return this.#firstName 
    }

    set fname(initial){
        this.#firstName = initial;
    }

    greet(){
        console.log(`Hello, ${this.#firstName}`)
    }
}
let newObj = new Person('Poonam');
newObj.greet();
newObj.fname = 'Poonam';
console.log(newObj.fname);