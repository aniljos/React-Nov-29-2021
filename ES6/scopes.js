//var x;

console.log("ES6 Scopes");

console.log("x", x); //undefined
let x = 10; // global
console.log("x", x);

var y;
console.log("y", y); //undefined

//console.log("z", z); // reference error

foo();
function foo(){
    console.log("in foo");
    if(x < 100){
        let msg = "hello";
        console.log("msg", msg);
    }
    //console.log("msg", msg);
}


console.log("App Over");