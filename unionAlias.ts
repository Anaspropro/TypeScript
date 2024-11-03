type numStr = number | string
type conversion = 'as-number' | 'as-text'

function combine(
  input1: numStr, 
  input2: numStr,
  resultConversion: conversion
){

  let result;
  if(typeof input1 === 'number' && typeof input2 === "number" || resultConversion === 'as-number'){
    result = +input1 + +input2
  } else{
    result = input1.toString() + ' ' + input2.toString()
  }
  return result
}

const combineAges = combine(30, 25, 'as-number')
console.log(combineAges);

const combineName = combine('Anas', 'Aliu', 'as-text')
console.log(combineName);

