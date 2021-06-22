// Basic class
class Point {
    readonly x: number
    y: number
    // constructor(X: number = 0, Y: number = 0){
    //     this.x = X;
    //     this.y = Y;
    // }
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        // TBD
    }
}

const pt = new Point(1, '2');
console.log(pt.x)

class Base {
    k = 4;
}
  
class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        console.log(this.k);
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
    }
}

// Get/Set
class C {
    private _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
}

const measure = new C;
console.log(measure.length);

// implements / extends

// Public, private, and protected modifiers
// public
// Because public is already the default visibility modifier, 
// you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

// protected
// protected members are only visible to subclasses of the class they’re declared in.
class Greeter {
    public greet() {
      console.log("Hello, " + this.getName()); 
    }
    protected getName() {
      return "hi";
    }
}
  
class SpecialGreeter extends Greeter {
    public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName()); // <---
    }
}
const g = new SpecialGreeter();
const base = new Greeter();
g.greet(); // OK
g.getName(); // NOT OK <----

// private 
// private is like protected, but doesn’t allow access to the member even from subclasses:
class Basic {
    private x = 0;
}
const b = new Basic();
// Can't access from outside the class
console.log(b.x);

// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. 
// Unlike an interface, an abstract class may contain implementation details for its members.
abstract class Project {
    projectName: string = 'Default';
    budget: number = 0;
    // Prototype. Abstract methods share a similar syntax to interface methods.
    // However, abstract methods must include the abstract keyword and may optionally include access modifiers
    // Think of abstract methods as methods that won't be passed down to the inheritor classes.
    abstract changeName(name: string): void; 
    calcBudget() {
      return this.budget * 2;
    }
}

// const abstrClass = new Project; // throw error

class ITProject extends Project {
    changeName = (name: string) => {
      this.projectName = name;
    }
}

const newProject = new ITProject();
console.log(newProject) // Prints: { projectName: "Default", budget: 0, ...  }
newProject.changeName('Super IT Project');
console.log(newProject); // Prints: { projectName: "'Super IT Project", budget: 0, ...  }
newProject.budget = 1000;
console.log(newProject.budget); // Prints: 1000
console.log(newProject.calcBudget()); // Prints: 2000


