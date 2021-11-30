console.log("in one.js");

function add(){
    console.log("in add");
}
export const x = 10;
export function multiply(){
    console.log("in multiply");
}
export function divide(){
    console.log("in divide");
}
export default {
    add, multiply
};