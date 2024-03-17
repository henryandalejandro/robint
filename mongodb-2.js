

     db.lista_usuarios.insertOne(
        {
            "nombre": "Marcela",
            "apellido": "mosquera",
            "correo": "mosuqw@correo.com",
            "ciudad": "Bogota ",
            "pais": "Colombia",
            "edad": 16,
            "altura": 1.60,
            "peso": 16
        });

  


    

// 1//Incrementar el salario de todos los usuarios en un 10%

db.lista_usuarios.updateMany({}, { $mul: { salario: 1.1 } });

// 2// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.lista_usuarios.updateOne({ ciudad: 'New york' }, { $set: { ciudad: 'los Angeles' } });

// 3) Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".


db.lista_usuarios.updateOne(
    { nombre: "Juan", apellido: "Perez" }, 
    { $set: { correo: "nuevo@correo.com" } } 
);
// 4)Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

db.lista_usuarios.updateOne(
    { correo: "ejemplo@correo.com" }, // Filtro para encontrar el usuario
    { $set: { edad: 35 } } // Nuevo valor para el campo "edad"
);




// 5) Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.lista_usuarios.updateOne(
    { pais: {$eq:"Mexico"} }, // Filtro para encontrar el usuario
    { $set: { pais: 'Canada' } } // Nuevo valor para el campo "edad"
);
6//Aumentar la altura de todos los usuarios en 5 centímetros.
db.lista_usuarios.updateMany(
    {}, // Sin filtro para seleccionar todos los usuarios
    { $inc: { altura: 5 } } // Incremento de 5 centímetros en el campo "altura"
);
// 7)Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

db.lista_usuarios.updateOne(
    { correo: "otroejemplo@correo.com" }, // Filtro para encontrar el usuario
    { $set: { apellido: 'Gonzales' } } // Nuevo valor para el campo "edad"
);

// 8) Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.lista_usuarios.updateOne(
    { nombre: "Maria" }, // Filtro para encontrar el usuario
    { $set: { peso: 140 } } // Nuevo valor para el campo "edad"
);

// 9)Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%

db.lista_usuarios.updateMany(
    { pais: "Estados unidos" }, // Filtro para seleccionar usuarios de Estados Unidos
    { $mul: { salario: 1.15 } } // Multiplicar el salario por 1.15 para aumentarlo en un 15%
);

db.lista_usuarios.find({pais:
    
    'Estados unidos'});

// 10)Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.lista_usuarios.updateOne(
    { nombre: "Pedro" }, // Filtro para seleccionar el usuario con nombre "Pedro"
    { $set: { correo: "nuevo_correo@riwi.co" } } // Nuevo valor del correo electrónico
);
// 11)Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.lista_usuarios.updateMany(
    { edad: { $lt: 30 } }, // Filtro para seleccionar usuarios con edad menor a 30 años
    { $set: { edad: 30 } } // Nuevo valor de la edad
);

// 12)Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%
db.lista_usuarios.updateMany(
    { salario: { $lt: 3000 } }, // Filtra los usuarios con salario inferior a 3000 dólares
    { $mul: { salario: 1.2 } } // Incrementa el salario en un 20% (1 + 20% = 1.2)
);

// 13)Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.lista_usuarios.updateMany(
    { ciudad: "Bogota" }, // Filtra los usuarios que viven en Bogotá
    { $set: { ciudad: "Medellín" } } // Actualiza la ciudad de residencia a Medellín
);

// 14)Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

db.lista_usuarios.updateMany(
    { salario: { $gt: 5000 } }, // Filtra los usuarios con salario superior a 5000 dólares
    { $set: { pais: "Australia" } } // Actualiza el país de residencia a Australia
);

// 15 Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.lista_usuarios.updateMany(
    { edad: { $gt: 50 } }, // Filtra los usuarios con más de 50 años
    { $inc: { edad: -5 } } // Reduce la edad en 5 años
);

// 16 Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.lista_usuarios.updateMany(
    { peso: { $gt: 200 } }, // Filtra los usuarios con peso superior a 200 libras
    { $set: { peso: 180 } } // Establece el nuevo peso como 180 libras
);
// 17) Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.lista_usuarios.updateMany(
    { ciudad: "London" }, // Filtra los usuarios que viven en London
    { $mul: { salario: 1.25 } } // Multiplica el salario por 1.25 para aumentarlo en un 25%
);

// 18 Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.lista_usuarios.updateMany(
    { salario: { $gt: 4000 } }, // Filtra los usuarios con salario superior a 4000 dólares
    { $set: { apellido: "Smith" } } // Establece el nuevo apellido como "Smith"
);

// 19 Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

db.lista_usuarios.updateMany(
    { nombre: /^A/ }, // Filtra los usuarios cuyo nombre empiece por "A"
    { $set: { correo: "nuevo@riwi.es" } } // Establece el nuevo correo electrónico
);

// 20 Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".


db.lista_usuarios.updateMany(
    { altura: { $lt: 160 } }, // Filtra los usuarios con altura inferior a 160 cm
    { $set: { ciudad: "París" } } // Establece la ciudad de residencia como "París"
);



// operaciones de elimacion 

// 1)Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.lista_usuarios.deleteMany({ salario: { $lt: 2000 } });

// 2)Eliminar usuarios que tienen una edad menor que 25 años.
db.lista_usuarios.deleteMany({ edad: { $lt: 25 } });

// 3)Borrar todos los usuarios que viven en "París".
db.lista_usuarios.deleteMany({ ciudad: "París" });

// 4)Eliminar usuarios que tienen un peso superior a 180 libras.
db.lista_usuarios.deleteMany({ peso: { $gt: 180 } });


// 5 Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.lista_usuarios.deleteMany({ altura: { $lt: 160 } });

// 6Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.lista_usuarios.deleteMany({ nombre: "John", apellido: "Doe" });


// 7 Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.lista_usuarios.deleteMany({ correo: "borrar@riwi.com" });

// 8Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.lista_usuarios.deleteMany({ correo: { $exists: false } });

// 9 Eliminar usuarios que viven en "Tokyo".
db.lista_usuarios.deleteMany({ ciudad: "Tokyo" });

// 10 Borrar todos los usuarios que son menores de 18 años.
db.lista_usuarios.deleteMany({ edad: { $lt: 18 } });

// 11 Eliminar usuarios que tienen un salario igual a 0.
db.lista_usuarios.deleteMany({ salario: 0 });

// 12Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.lista_usuarios.deleteMany({ ciudad: "New York", salario: { $gt: 5000 } });
// 13)  Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.lista_usuarios.deleteMany({ correo: /spam/ });

// 14 Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.lista_usuarios.deleteMany({ ciudad: "Bello", edad: { $gt: 50 } });


// 15 Eliminar todos los usuarios que tienen el apellido "González".

db.lista_usuarios.deleteMany({ apellido: "González" });

// 16  Borrar usuarios que tienen una edad superior a 70 años.

db.lista_usuarios.deleteMany({ edad: { $gt: 70 } });


// 17 Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.lista_usuarios.deleteMany({ pais: "Canadá", salario: { $lt: 4000 } });

// 18Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.lista_usuarios.deleteMany({ salario: { $gte: 1000, $lte: 2000 } });

// 19Eliminar usuarios que tienen una edad igual a 30 años.

db.lista_usuarios.deleteMany({ edad: 30 });

// 20 Borrar usuarios que tienen una altura superior a 190 centímetros.
db.lista_usuarios.deleteMany({ altura: { $gt: 190 } });





























11)

