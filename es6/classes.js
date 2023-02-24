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

class newPolygon extends Polygon{
    defination(){
        console.log('It is a flat two-dimensional closed shape bounded with straight sides.');
    }
}

const polygonObject = new Polygon(20,10);
polygonObject.values();

const newPolygonObj = new newPolygon(40,30);
newPolygonObj.values(); //accessing the method of class polygon
newPolygonObj.defination();
