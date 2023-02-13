function checkspeed(speed){

    const speedlimit = 70;

    if(speed < speedlimit + 5)
     console.log('ok');
      
    else{
        let points = Math.floor((speed-speedlimit)/5);
        if(points >= 12)
          console.log('lisence suspended')
        else 
          console.log('points:',points);
    }

}
console.log(checkspeed(177));