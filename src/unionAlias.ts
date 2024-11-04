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

let score: number | string = 33

type Usser = {
  name: string,
  id: number
}
type Admin = {
  username: string,
  id: number
}

let Ayomide: Usser | Admin = {name: "Ayomide", id: 22}

Ayomide = {username: "Ay", id: 33}

function getDbId(id: number | string){
  console.log(`Db id is ${id}`)
}

getDbId(3)
getDbId('4')

function getId(id: number | string){
  if(typeof id === "string"){
    id.toLowerCase()
  }
}

// array

const data: number [] = [1, 2, 3]
const data2:  string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = ["1", "2", 9, false]