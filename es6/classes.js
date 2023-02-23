class Polygon { 
    constructor(height, width) { 
       this.height = height; 
       this.width= width;
    } 
    values(){
        console.log('Height of polygon is: '+ this.height)
        console.log('Width of polygon is: '+ this.width)
    }
}
var polygonObject = new Polygon(20,10);
polygonObject.values();
