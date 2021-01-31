import { Animal } from "./Animal.js";

class Gato extends Animal{
    constructor(raza,nombre, peso){
        super("Gato", nombre, peso);
        this.tipoAlimento = "carnivoro";
        this.tamanio = "mediano"; 
        this.raza = raza;
    }

    maulla(){
        console.log("El gato " + this.nombre + " maulla");
    }
}

export { Gato };