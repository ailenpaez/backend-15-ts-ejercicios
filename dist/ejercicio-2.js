"use strict";
// ----------- Sólamente modificar los tipos ----------- //
const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
persons.forEach(logPerson);
// En caso de que estés trabada:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
