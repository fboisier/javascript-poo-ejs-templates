import { Animal } from "./Animal.js";

class Perro extends Animal{
    constructor(raza, nombre, peso){
        super("Perro", nombre, peso);
        this.tipoAlimento = "carnivoro";
        this.tamanio = "mediano";
        this.raza = raza;
    }

    ladrar(){
        console.log("el perro " + this.nombre + " ladra. ");
    }
}

export { Perro };