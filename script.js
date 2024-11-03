function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(10, 22));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValue;
combineValue = add;
console.log(combineValue(1, 2));
addAndHandle(10, 12, function (result) {
    console.log(result);
});
