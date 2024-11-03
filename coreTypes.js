"use strict";
// const person : {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
//   // role is a tuple with fixed size of element and fixed type
// } = {
//   name: 'Anas',
//   age: 22,
//   hobbies: ['Sports', 'Cooking' ],
//   role: [2, 'coder']
// }
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
const person = {
    name: 'Anas',
    age: 22,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};
for (const hobby of person.hobbies) {
    console.log(hobby);
}
// person.role.push('admin') 
// it works fine [2, 'coder', 'admin']
// because push is an exception in typescript tuples
console.log(person);
// enum data type explicitly for TS and not JS 
