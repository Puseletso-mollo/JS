import { Citizen } from "./citizen";

let resident1 = new Citizen(`Matete`, 21)
resident1.addAddress(`Limpopo`);
resident1.getDetails();

console.log(resident1.getDetails.toString)