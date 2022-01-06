"use strict";
const add = (n1, n2, showResult) => {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
};
// union type
const combine = (n1, n2, resultConversion) => {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' && resultConversion === 'as-number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const person = {
    name: 'Max',
    age: 27,
    role: Role.ADMIN,
    hobbies: ['Sports', 'Cooking']
};
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person.name);
const result = combine(number1, number2, 'as-number');
console.log(result);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
