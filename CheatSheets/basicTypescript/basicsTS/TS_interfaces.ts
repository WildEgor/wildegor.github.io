// We can think of interfaces as a way to assign types to the structure of a variable. 
// This variable may be an argument, a class, an object, you name it, think of it as making a contract with the interface. 
// Here's how we can define a very simple interface and use it on a variable and on a function
interface SimplePerson {
    firstName: string;
}
const simplePerson: SimplePerson = { firstName: 'Robert' };
const simpleGreet = (simplePerson: SimplePerson) => console.log(`Hello ${simplePerson.firstName}!`);
simpleGreet(simplePerson); // Prints: "Hello Robert!"

// Optional Properties
interface SimplePerson {
    firstName: string;
    lastName?: string;
    age?: number;
}
// Not possible because the firstName key-value pair is missing.
// const wrong: SimplePerson = { lastName: 'Molina', age: 24 };
const right: SimplePerson = { firstName: 'Robert', age: 24 };

// We may also define the interface with index signatures, think of them like dynamic key-value pairs. Here's an example:
// interface NamedPerson {
//     firstName: string;
//     age?: number;
//     [propName: string]: any;
// }
// const person: NamedPerson = {
//     firstName: 'Robert',
//     lastName: 'Molina',
//     age: 24,
//     hobbies: ['Programming', 'Cooking'],
//     greet(lastName: string) {
//         console.log(`Hi, I am ${this.firstName} ${lastName}!`);
//     }
// }

// Here are two more advanced examples, we can use an interface to define the subtypes of a class, or a function:
interface NamedPerson {
    firstName: string;
    age?: number;
    greet(lastName: string): void;
    [propName: string]: any;
}
class Person implements NamedPerson {
    constructor(public firstName: string, public lastName: string) {}
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}!`);
    }
}
const myPerson = new Person('Robert', 'Molina');
const newPerson = new Person('Robert', 'Molina');
myPerson.greet(newPerson.lastName); // Prints: "Hi, I am Robert Moina"

// Implementing an interface to a Class
class Control {
    private readonly state: any;
}
// Note that classes may be extended to another class and tied to an interface by using the implements keyword.
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { };
    // state: {} // throw error
}

// Implementing an interface to a function. One such example is an object that acts as both a function and an object, with additional properties:
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (num1: number, num2: number) => {
    return (num1 + num2) * 2;
}
console.log(myDoubleFunction(10,50)); // Prints: 120

// Interface Inheritance. Interfaces may also inherit properties to extend its own properties
// Bear in mind that all of the extended interfaces must be structurally compatible or else 
// the compiler will throw an error. As a final note, we can also omit (by either picking or excluding) 
// properties, more on this directly below.
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
interface PenStroke {
    penWidth: number;
}
const square: Square = {
    color: "blue",
    sideLength: 10
};
// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
// const square: Square = {
//     color: "magenta",
//     penWidth: 2.5,
//     sideLength: 0.5
// }

// Omit type when extending an interface.
// Omit picks every property of an object T, excluding the specified K properties (or keys) of T.
type omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// Exclude 
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// Pick
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
const nameAndAgeOnly = pick(myPerson, "firstName"); 

// Omitting specific properties when extending an interface
type InputElementAttributes = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type value = string | number | string[];
interface IInputProps extends IInputState, Omit<InputElementAttributes, 'onChange'> {
  onChange: (value?: value) => void
}

// Type checking for interfaces
interface Fish {
    swim: () => void
}
interface Bird {
    fly: () => void
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

// Type checking for interfaces enhanced example:
// type value = string | number | string[];
// interface IValue {
//     value: value;
//     [propName: string]: any;
// }
interface ISelectValue extends IValue {

}
// const instanceOfIValue = (object: any): object is ISelectValue => {
//     if (object && object.inputData) {
//       return 'inputData' in object; // true
//     }
//     return false;
// }
// const onChangeHandler = (inputData: value | IValue): value => {
//     // Checking for IValue object.
//     if (instanceOfIValue(inputData))
//       return inputData.value;
//     // Otherwise, simply return the inputData which will be of type value.
//     return inputData;
// }

// Use discriminators to check for instances of specific objects.
interface IValue {
    value?: value;
    displayValue: string;
    discriminator: 'IValue';
    [propName: string]: any;
}
const instanceOfIValue = (object: any): object is ISelectValue => {
    if (object && object.discriminator) 
      return object.discriminator === 'IValue';
    return false;
}
const onChangeHandler = (inputData: value | IValue): value => {
    // Checking for IValue object.
    if (instanceOfIValue(inputData)) 
      return inputData.value || inputData.displayValue;
    // Otherwise, simply return the inputData which will be of type value.
    return inputData;
}

