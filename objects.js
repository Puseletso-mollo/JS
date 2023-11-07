
let school = {
    name: "Secunda Secondary School",
    location: "Mpumalanga",
    established: "1982",
    20:1000,

    displayInfo: function (){
        console.log(`Welcome to ${school.name} 
        located at ${school.location} which was established on
         ${school.established} having rating of ${school[20]}`);//for numbers or integer we strictly use square brackets
    }



}
school.displayInfo()
console.log([school.name])
console.log(`$(school.name)`)

//the $ inside brackets is called identifier
//the ${} inside the brackets is called dynamic callback method