
import one, {multiply, divide} from './one.js'

console.log("in two.js");

function compute(){

    one.add();

    multiply();
    divide();
    console.log("in compute");
}

compute();