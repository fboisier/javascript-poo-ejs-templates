import {Gato} from "./clases/Gato.js";
import {Perro}  from "./clases/Perro.js";

let objGato = new Gato("Persa","Minino", 2);
let objPerro = new Perro("Yorky","Cachupin", 3);
let objPerro2 = new Perro("Grandanés", "Lazzy", 30);

objPerro2.tamanio = "Grande";

objGato.comer();
objPerro.comer();
objPerro2.comer();

objGato.maulla();
objPerro.ladrar();

console.log(objGato);
console.log(objPerro);
console.log(objPerro2);
