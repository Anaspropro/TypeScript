"use strict";
function adding(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(adding(10, 22));
function addingAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValue;
combineValue = adding;
console.log(combineValue(1, 2));
23;
addingAndHandle(10, 12, (result) => {
    console.log(result);
});
