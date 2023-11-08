const myDetails=
`{
    "name": "Mmamokete",
    "surname": "Mollo",
    "course": "Computer Science"
}`

const Data = JSON.parse(myDetails);
JSON.stringify(myDetails);

const results = JSON.stringify(Data);
console.log(results.toUpperCase())