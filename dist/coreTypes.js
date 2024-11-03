"use strict";
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
console.log(person);
