// import fs from 'fs'

const Student ={
    name : 'Phumlani',
    age : '30§§',
    course : 'Dip in ICT',
    module : 'Communications and Media'
};

const fs = require('fs');

function writeData(obj){

    fs.writeFile('./students.json' ,JSON.stringify(obj), err =>{
        if(err){
            console.log(err)
        }
        else{
            console.log('success')
        }
    })
}
function readData(){
    fs.readFile('./students.json', 'utf-8', (err,jsonstring) => {
        if(err){
            console.log(err);
        }
        else {
            try {
                const data = JSON.parse(jsonString);
                console.log(data);
                console.log('success');
            } catch (error) {
                console.log('Error parsing JSON', err);
            }
        }
    });
}

writeData(Student);
readData