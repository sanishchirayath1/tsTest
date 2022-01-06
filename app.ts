const add = (n1: number, n2: number, showResult: boolean) => {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
// union type
const combine = (
    n1: number | string, 
    n2: number | string, 
    resultConversion: 'as-number' | 'as-string'
    ): number | string => {

    let result;

    if (typeof n1 === 'number' && typeof n2 === 'number' &&resultConversion === 'as-number' ) {
        result = n1 + n2;
    }
    else {
        result =  n1.toString() + n2.toString();
    }
    return result

}



enum Role { ADMIN, READ_ONLY, AUTHOR };

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const person: {
    name: string;
    age: number;
    role: Role;
    hobbies: string[];
} = {
    name: 'Max',
    age: 27,
    role: Role.ADMIN,
    hobbies: ['Sports', 'Cooking']
}

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.name)
const result = combine(number1, number2,'as-number');
console.log(result);

function generateError(message: string, code: number): never{
    throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);