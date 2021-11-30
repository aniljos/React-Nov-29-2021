//function statement
//function -imiplicit ==> "this", "arguments"
function sum(x, y){

    console.log("in sum...", arguments);
    console.log("in sum...", this);
    return x + y;
}

// function sum(){

//     console.log("in sum no args...");
    
// }
// let result = sum(3,4);
// result = sum();
// result = sum(3,4,5,6,7);

//function expression
let add = function(x, y){
    return x + y;
}
console.log("add", add(3,4));

let calc = (x, y)=> {
    return x + y;
}

console.log("calc", calc(3,4));

calc = (x, y) => x * y;

console.log("calc", calc(3,4));

var obj = {

    x: 10,
    print: function(){

        var timeoutfn = function(){
            console.log("x after 1sec", this.x);
        }
        console.log("x: ", this.x);

        setTimeout(timeoutfn, 1000);

        setTimeout(()=>{
            console.log("x after 1sec", this.x);
        }, 1000);
    }
}

obj.print();

