// TYPES

// Another fundamental part of creating programs in JavaScript for webpages and servers alike 
// is working with textual data. As in other languages, we use the type string to refer to these 
// textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") 
// or single quotes (') to surround string data.
const myString : string = 'Egor';

// As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers 
// get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary 
// and octal literals introduced in ECMAScript 2015.
const myNumber : number = 123;

// The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
const myBoolean : boolean = true;

// TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written 
// in one of two ways. In the first, you use the type 
// of the elements followed by [] to denote an array of that element type:
const hobbies : string[] = ['Programming', 'Gaming'];
// If no types are declared, TypeScript will automatically assign a type depending on the types of the Array values.
const arrayOfNumbers = [1, 2, 3] // This variable will automatically be assigned a number[] array type.

// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 
// For example, you may want to represent a value as a pair of a string and a number:
const tupleArray: [string, number] = ['Abramov', 69];

// We may need to describe the type of variables that we do not know when we are writing an application. These values may come from 
// dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values 
// pass through compile-time checks. To do so, we label these with the any type:
let anyType : any = 'BMW';
console.log(anyType);
anyType = { customTag: 'Home' };
console.log(anyType);

// A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving 
// more friendly names to sets of numeric values. By default, any enum will begin numbering their members starting at 0. You can change 
// this by manually setting the value of one of its members. For example, we can modify the Green value to 100, the next will be 101, then 
// set Yellow back to 2.
enum Colors {
    Black, 
    White,
    Orange,
    Blue = 100,
    Purple
};
const myColor : Colors = Colors.Purple;
console.log(myColor);