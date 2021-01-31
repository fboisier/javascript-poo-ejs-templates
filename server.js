const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/miscosaspublicas"));

app.set('views', __dirname + '/vistas'); 
app.set('view engine', 'ejs');

let datosPagina = {
    titulo : "Bienvenido al Sistema! (desde Variable)",
    contenido: "Esto es una pagina DINAMICA. Es decir TIENE!!! posibilidad de cambios por el lado del SERVIDOR",
    imagen: "peliculas.jpg"
}

app.get("/bienvenida" , (req,res)=>{

    res.render("vistaBienvenida", datosPagina);
});



app.get("/send" , (req,res)=>{

    res.send("Esto es texto y aguanta <b>HTML</b>");
});

app.get("/contacto" , (req,res)=>{
    let contacto = {
        titulo : "Bienvenido a la Pagina de Contacto",
        contenido: "Esto es una pagina de contacto, para demostrar que puedo usar la misma vista y cambiar solo los datos.",
        imagen: "pacman.gif"
    }
    res.render("vistaBienvenida", contacto);
});

app.get("/bienvenidadistinta" , (req,res)=>{
    res.render("vistaBienvenidaDistinta", datosPagina);
});

app.get("/tabla" , (req,res)=>{

    let tabla = {
        titulo : "Ejemplo con Tablas",
        contenido : "Esto es un ejemplo de como usar vistas y pasar datos desde el servidor y mostrar en una tabla.",
        titulodato1: "Nombre",
        titulodato2: "Apellido",
        titulodato3: "Edad",
        datostabla: [
            { dato1: "HOLA SOY 1", dato2: "Soy otro dato 1", dato3: "soy el tres 1" },
            { dato1: "HOLA SOY 2", dato2: "Soy otro dato 2", dato3: "soy el tres 2" },
            { dato1: "HOLA SOY 3", dato2: "Soy otro dato 3", dato3: "soy el tres 3" },
            { dato1: "HOLA SOY 4", dato2: "Soy otro dato 4", dato3: "soy el tres 4" },
            { dato1: "HOLA SOY 5", dato2: "Soy otro dato 5", dato3: "soy el tres 5" },
            { dato1: "HOLA SOY 6", dato2: "Soy otro dato 6", dato3: "soy el tres 6" },
            { dato1: "HOLA SOY 7", dato2: "Soy otro dato 7", dato3: "soy el tres 7" },
            { dato1: "HOLA SOY 8", dato2: "Soy otro dato 8", dato3: "soy el tres 8" },
            { dato1: "HOLA SOY 9", dato2: "Soy otro dato 9", dato3: "soy el tres 9" },
            { dato1: "HOLA SOY 10", dato2: "Soy otro dat 1o", dato3: "soy el tre 1s" },
            { dato1: "HOLA SOY 11", dato2: "Soy otro dat 1o", dato3: "soy el tre 1s" },
        ]
    }

    console.log(tabla.datostabla[4].dato2);


    res.render("vistaContabla", tabla);
});


app.get("/tabla2" , (req,res)=>{

    let tabla = {
        titulo : "Ejemplo con Tablas 2",
        contenido : "Esto es un ejemplo de como usar vistas y pasar datos desde el servidor y mostrar en una tabla.",
        titulodato1: "Nombre",
        titulodato2: "Apellido",
        titulodato3: "Edad",
        datostabla: [
            { dato1: "Francisco", dato2: "Boisier", dato3: "35" },
            { dato1: "Javier", dato2: "Sandoval", dato3: "25" },
        ]
    }

    res.render("vistaContabla", tabla);
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );