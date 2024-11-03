function add (n1: number, n2: number){
  return n1 + n2
}

function printResult(num: number){
  console.log('Result: ' + num)
}

printResult(add(10, 22))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result =  n1 + n2
  cb(result)
}


let combineValue: (a: number, b: number) => number
combineValue = add
console.log(combineValue(1, 2));

addAndHandle(10, 12, (result) =>{
  console.log(result)
})
