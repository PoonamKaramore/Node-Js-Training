let numbers ={
    getIterators: function(start,end){
        let nextvalue = start;
        return{
            next: ()=>{
                if(nextvalue<end){
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

let iterators = numbers.getIterators(1,6);
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());