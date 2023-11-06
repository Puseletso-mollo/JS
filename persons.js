//let's create a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//Then we create two person objects

let john = new Person("John", 23);
let jane = new Person("Jane", 19);

console.log(john);
console.log(jane);