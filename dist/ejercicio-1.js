"use strict";
// ----------- Sólamente modificar los tipos ----------- //
const users = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
];
function Person(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(Person);
// En caso de que estés trabada:
// https://www.typescriptlang.org/docs/handbook/2/objects.html
