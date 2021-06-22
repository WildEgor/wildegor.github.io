// A namespace is, simply put, an object that contains other code.
namespace Jedi {
    export let homeworld = 'Tatooine';
    export function sayName() {
        alert('Luke')
    }
}
alert(Jedi.homeworld)
Jedi.sayName()

// You can also export classes and interfaces from a namespace:
namespace StarWars {
    export class Jedi {}
    export interface RebelScum {}
}

// Note: TypeScript uses the IIFE pattern

// Also they can indeed be nested!
namespace SomeNS {
    export namespace InnerNS {
        export function someFunc() { }
    }
}
SomeNS.InnerNS.someFunc();

import sf = SomeNS.InnerNS.someFunc;
sf();



// Modules represent their own scope, which is another way of saying that anything
// inside the module is not visible to anything outside the module unless explicitly
// exported (and subsequently imported elsewhere), nor can any code inside the module
// touch anything outside of itself unless explicitly imported. That’s similar to a namespace,
// but remember that a namespace always results in at least the namespace object itself
// existing in global scope, that’s the big difference.

// Variable
export let captain = "Picard";
// Interface
export interface CaptainChecker {
isGreat(inName: string): boolean;
}
// Function
export function addFirst(inLast: string): string {
return "Jean Luc " + inLast;
}
// Class
export class Ship {
    name: "Enterprise";
}
// Type alias
export type cap = typeof captain;

// Import { addFirst } from "./MyModule"
// or if export addFirst;
// export { addFirst as myAddFirstFunc }