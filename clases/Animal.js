class Animal {
    constructor(tipo, nombre, peso){
        this.tipo = tipo;
        this.raza = "";
        this.nombre = nombre;
        this.peso = peso;
        this.tipoAlimento = "";
        this.tamanio = "";
    }

    comer(){
        console.log("El  "+ this.tipo +" " + this.nombre + " come.");
    }
}

export {Animal};