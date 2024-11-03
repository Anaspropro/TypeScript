function adding (n1: number, n2: number){
  return n1 + n2
}

function printResult(num: number){
  console.log('Result: ' + num)
}

printResult(adding(10, 22))

function addingAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result =  n1 + n2
  cb(result)
}


let combineValue: (a: number, b: number) => number
combineValue = adding
console.log(combineValue(1, 2));23  

addingAndHandle(10, 12, (result) =>{
  console.log(result)
})
