"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
const combineAges = combine(30, 25, 'as-number');
console.log(combineAges);
const combineName = combine('Anas', 'Aliu', 'as-text');
console.log(combineName);
let score = 33;
let Ayomide = { name: "Ayomide", id: 22 };
Ayomide = { username: "Ay", id: 33 };
function getDbId(id) {
    console.log(`Db id is ${id}`);
}
getDbId(3);
getDbId('4');
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 9, false];
