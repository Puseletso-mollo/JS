const student = {
    //data property
    firstName: 'Puseletso',
    // accessor property(getter)
    get getName() {
        return this.firstName;
        
}
}

console.log(student.firstName);

console.log(student.getName);

//Assign a new name to first name
student.changeName="Mmamokete"

console.log(student.firstName);