export default class vehicle {
    constructor (make, name, engine){
        this.make = make;
        this.name = name;
        this.engine = engine;

    }

    get getName(){
        return (`The name of this vehicle is ${this.name}`)
    };
}
     let bike = new vehicle("Kawasaki", "suzuki", "1340c");
     let car = new vehicle("yaris", "Toyota", "VVT1");
     let truck = new vehicle("Volvo", "Mercedes Benz", "C63")

     console.log(`${bike.getName}`)
     console.log(`${bike.name}`)