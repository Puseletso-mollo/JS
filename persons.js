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

let thoko ={
    'name' : 'thoko',
    'age' : 25,

};

function Students(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

}

let lydia= new Students(thoko, thoko.age, "Full Stack");
console.log(lydia)