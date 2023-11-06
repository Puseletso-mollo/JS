
//Array of subjects as elements
const courses = ['Computer Science', 'Software Engineering','DataBase', 'Computer Literacy']
let i=0; //counter
let len = courses.length; //call the total number bof elements in the array

let devops = " "; //just a space at the beginning

for (i=0; i < len;){
    devops += courses[i + '']+'\n' // the += allows the elements to be print
    i++;

}
console.log(devops);