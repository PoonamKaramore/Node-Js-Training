let numbers ={
    [Symbol.iterator]: function(){
        const start = 0;
        const end = 5;
        let nextvalue = start;
        return{
            next: ()=>{
                if(nextvalue <= end){
                    let nextObj = {value:nextvalue , done:false} 
                    nextvalue++
                    return nextObj;
                }
                return {
                    value:nextvalue , done: true
                }
            }
        }
    }
}
for(const element of numbers){
    console.log(element)
}