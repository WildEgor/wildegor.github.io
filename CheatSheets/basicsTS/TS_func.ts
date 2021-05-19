// Functions as you may expect work exactly the same as in JavaScript with a couple new features. In TypeScript, you may assign the function two things:
// 1 Argument types.
// 2 Function types.
function myFunction(myName: string) :string {
    return myName
}
console.log(myFunction('Egor'))

// In TypeScript any argument of a function may be assigned a type no matter how complex, for example:
// argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
  }
// console.log(multiply('Robert', 5)) // Not possible, both arguments must be of type number.
console.log(multiply(10,5)) // Prints: 50

// Just like the argument, the return value of a function may be assigned a type. Consider the example 
// above to be included into the example below:
let myMultiply: (val1: number, val2: number) => number;
  // myMultiply = sayHello; // Not possible.
  // myMultiply(); // Not possible.
myMultiply = multiply;
console.log(myMultiply(5, 2));

// The type void is a little like the opposite of any: the absence of having any type at all. 
// You may commonly see this as the return type of functions that do not return a value:
function sayHello(): void {
    console.log('Hello!');
    // return true; // Not possible because the function can't return anything due to the void assigned type (more on this below).
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
let unuse: void = undefined;