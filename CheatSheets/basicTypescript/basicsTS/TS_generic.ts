// Generics are reusable components (be it a function, an object, a class) that can be used multiple times for 
// multiple variable types, like a string, a number, boolean, etc. 
// function echo<T>(data: T){
//     return data;
// }
const echo = <T extends unknown>(data: T) => data; // or arrow declaration
// const echo = <T, >(data: T) => data;
console.log(echo('Egor').startsWith('E'))
console.log(echo<number>(123).toExponential(2))
console.log(echo({ name: 'Egor', age: 25 }).age)



// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push('string'); // Not possible.
// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(['Apple', 'Banana']);
printAll<number>([1, 3, 5]);
// printAll<number>([1, 'string', 5]); // Not possible.



// Generic Types.
// Func
const echoStr: <T>(data: T) => T = echo;
console.log(echoStr<string>('Hello world!').toLocaleUpperCase()); // Prints: "HELLO WORLD!"
const echoNum: <T>(data: T) => T = echo;
console.log(echoNum<number>(312).toString()); // Prints: "312"
// Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T; // some func decl
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;
// Class (constraints)
class MultipleTypesMath<T extends number, U extends number | string> { // T-Type, U-Union
    constructor(public baseValue: T, public multiplyValue: U) {}
    calculate(): number {
      return +this.baseValue * +this.multiplyValue;
    }
}
const multipleTypesMath = new MultipleTypesMath<number, number | string>(5, 'wtf');
console.log(multipleTypesMath.calculate()); // Prints: 100 ??? 're sure about that
