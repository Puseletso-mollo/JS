const student = {
    //data property attribute
    firstName: 'Puseletso',
    surname: "Mollo",
    age: 18,
    contact: "0724781414",
 
    
//accessor property(getter)
get getName (){
    return this.firstName;
},

get getDetails(){
    return[this.firstName, this.surname]
},


//accessor property(setter)
set changeName(newName){
    this.firstName=newName;
}
}

//call all information
console.log(student.getDetails)

console.log(student.firstName)
console.log(student.getName)


student.changeName="Ashante";