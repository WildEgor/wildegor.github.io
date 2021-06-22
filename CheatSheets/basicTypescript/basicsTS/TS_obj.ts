// The type object represents the non-primitive type, i.e. any thing that is not number, 
// string, boolean, symbol, null, or undefined.
// In JavaScript, so as in TypeScript, Objects are comprised of key-value pairs. We can 
// assign types to the object key-value pairs, like so:
let userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
};
  // userData = { // Not valid
  //   name: 2,
  //   age: 'Age'
  // };
  // userData = { // Not valid
  //   a: 'Robert',
  //   b: 24
  // };
userData = {
    name: 'Robert',
    age: 24
};

// As you may expect, the assigned types to the object key-value pairs can reach high levels of complexity, 
// for example:
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
      return this.data
    }
  };
// complex = {}; // Not possible.

// In TypeScript, all newly declared object properties (including both function parameters, and interface 
// properties) may be declared as optional. To do so, we must place a ? character after the key (or name) 
// of the property when declaring it (a postfix notation). Here's an example:
const right: { name: string, age?: number } = {
    name: 'Robert'
};
const alsoRight: { name: string, age?: number } = {
    name: 'Robert',
    age: 24
};
// This is not possible because the name key-value pair is missing.
// const wrong: { name: string, age?: number } = {
//   age: 24
// };

// Writing complex and long types can quickly become dull and impractical. For a DRY approach, 
// it's possible to create aliases for types, essentially creating your own types. Here's an example 
// using the complex object above:
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex  = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
        return this.data
    }
};

// Variables are not restricted to only one assigned type. This is where union types come in where we 
// can assign two or more types (e.g. assign number and string) to a single variable. For example:
let myRealRealAge: number | string = 25;
myRealRealAge = '25';
// myRealRealAge = 25 // correct
// myRealRealAge = true // Not possible since myRealRealAge only accepts a number or a string.


