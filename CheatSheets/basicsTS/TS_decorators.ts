// For example, say we want to provide some logging in the constructor function of a
// class. Let’s further say that for whatever reason, we don’t want to modify the code within
// the class (maybe we didn’t write it ourselves and don’t want to mess around with code
// provided by someone else). For this, you can use a class decorator. You can do that as
// follows

function logConstructor(inConstructor: Function) {
    console.log(inConstructor);
}

@logConstructor
class Spaceship {
    constructor() { console.log("constructor"); }
}

const s = new Spaceship();

// The other types of decorators are the following:
// • Method – Placed just before a method declaration, the decorator
// function will be passed either the constructor for a static class or
// the prototype of the class for an instance member, the name of the
// decorated method, and a descriptor for the method.


function editable(value: boolean) {
    return function(target:any, propName: string, descriptor: PropertyDescriptor = {}) {
      descriptor.writable = value;
      Object.defineProperty(target, propName, descriptor);
    }
}


// • Accessor – Placed just before an accessor declaration, the decorator
// function will be passed either the constructor for a static class or
// the prototype of the class for an instance member, the name of the
// decorated accessor, and a descriptor for the accessor.
// • Property – Placed just before a property declaration, the decorator
// function will be passed either the constructor for a static class or the
// prototype of the class for an instance property and the name of the
// decorated property.


// Property Decorator
function overwritable(value: boolean): any {
    return function(target: any, propName: string): any {
      const newDescriptor: PropertyDescriptor = { // New PropertyDescriptor object.
        writable: value
      };
      return newDescriptor;
    }
}

// • Parameter – Placed just before the name of the parameter in a
// function argument list, the decorator function will be passed either
// the constructor for a static class or the prototype of the class for an
// instance member, the name of the decorated parameter, and the
// ordinal index of the parameter in the function’s argument list

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('Target: ', target);
    console.log('Method name: ', methodName);
    console.log('Param index: ', paramIndex);
}

class Project {
    projectName: string
    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }

    // @printInfo behind printAll
    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
          console.log(10000);
        } else {
          console.log(2000);
        }
      }
}
  
const project = new Project('Super Project');
// project.calcBudget(); // Prints: 1000
project.calcBudget = () => { // Throws warning in the console IF editable is false. Property won't ever be changed.
  console.log(2000);
};

project.calcBudget(); // Prints: 1000
project.calcBudget = () => { // Throws error in console IF the @editable decorator's argument is false, cannot assign new property to this.
  console.log(2000);
}; 
project.calcBudget(); // Prints: 2000
console.log(project) // IF overwritable is false, then projectName will be equal to undefined.

project.printStudentNumbers('anything', true);
project.printStudentNumbers('anything', false);

// Decorator factory 
function logConstructorFactory(inEnabled: boolean) {
    if (inEnabled) {
        return function(inConstructor: Function) {
            console.log(inConstructor);
    }
    } else {
        return function() { };
    }
}
@logConstructorFactory(true)
class Spaceship {
    constructor() { console.log("Spaceship constructor"); }
}
@logConstructorFactory(false)
class Spacestation {
    constructor() { console.log("Spacestation constructor"); }
}
const s = new Spaceship();
const t = new Spacestation();


// Enhance class with decorator 
interface IPlant {
    plantName: string
}
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
      console.log(this);
    }
}
@logConstructorFactory(false)
@printable
class Plant implements IPlant {
    readonly plantName: 'Plant'
    private type: 'Green';
}
const plant = new Plant();
(<any>plant).print(); // Would print the constructed Plant object: { name: "Green Plant" }, then change the name property.
console.log('After print() is executed', plant); // Prints: the constructed Plant object: { name: "Red Plant" }.