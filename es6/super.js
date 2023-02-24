class Car{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    description(){
        console.log('The name of car is ' +this.name)
        console.log('The color of car is ' +this.color)
    }
}

class Swift extends Car{
    constructor(){
        super('Kia','White')
    }
}
const swiftObj = new Swift();
swiftObj.description()