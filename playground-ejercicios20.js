db.createCollection("lista_usuarios")

db.lista_usuarios.insertOne(
    {
        "nombre": "María",
        "apellido": "López",
        "correo": "marialopez@example.com",
        "ciudad": "Bombay",
        "pais": "India",
        "edad": 28,
        "altura": 1.60,
        "peso": 62
    });



  db.lista_usuarios.find();

//   1) Obtener todos los usuarios que sean mayores de 18 años.

db.lista_usuarios.find({ edad: { $gt: 18 } });

//  2) btener todos los usuarios que sean de Londres o de París.
db.lista_usuarios.find({ $or: [{ ciudad: { $eq: 'Londres' } },
     { ciudad: { $eq: 'París' } }] });
    //  3)Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años
    db.lista_usuarios.find({ $and: [{ salario: { $gt: 2000 } },
    { edad: { $lt: 30 } }] });
    // 4)Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
    db.lista_usuarios.find({ $and: [{ pais: { $eq:'España' } },
        { salario: { $gt: 3000 } }] });
 // 5) Obtener todos los usuarios que tengan entre 25 y 35 años.
 db.lista_usuarios.find({ edad: { "$in": [25,26,27,28,29,30,31,32,33,34,35] } });
 // 6) Obtener a todos los usuarios que no sean de Estados Unidos
     db.lista_usuarios.find({pais: { $not: {$eq: 'Estados unidos' } }
          });
    // 7)Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
    db.lista_usuarios.find({ $and: [{ ciudad: { $eq:'Londres' } },
    { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });
    // 8)Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
    db.lista_usuarios.find({ $and: [{ pais: { $eq:'Australia' } },
    { peso: { $gt: 140 } } ] });
    // 9) Obtener a todos los usuarios que no sean de Londres ni de París.
    db.lista_usuarios.find({
        ciudad: { $nin: ["Londres", "París"] }
    });
    
// 10)Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años
db.lista_usuarios.find({ $or: [{ salario: { $lt: 2000 } }, { edad: { $gt: 40 } }] });

// 11)Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.lista_usuarios.find({ $or: [{ pais: { $eq: 'Canadá' } }, { salario: { $gt: 4000 } }] });

// 12)Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.lista_usuarios.find({pais: 'Italia', edad: { $gte: 20, $lte: 30 }
});
// 13)Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.lista_usuarios.find({ correo: { $exists: false } });
// 14)Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.lista_usuarios.find({ pais: 'Francia', salario: { $gte: 3000, $lte: 5000 } });
// 15)Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras
db.lista_usuarios.find({ pais: 'Brazil', $or: [{ peso: { $lt: 120 } }, { peso: { $gt: 140 } }] });

// 16) Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.lista_usuarios.find({ $or: [{ pais: 'Argentina' }, { pais: 'Chile' }], edad: { $lt: 25 } });

// 17 )Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.lista_usuarios.find({
    $and: [
        { pais: { $ne: "España" } },
        { pais: { $ne: "México" } },
        { salario: { $lt: 3000 } }
    ]
});

// 18) Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.lista_usuarios.find({
    pais: 'Alemania',
    $or: [
        { salario: { $lt: 4000 } },
        { edad: { $gt: 35 } }
    ]
})

// 19) Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.lista_usuarios.find({
    pais: { $ne: 'Colombia' },
    altura: { $lt: 170 }
})


// 20) Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.lista_usuarios.find({
    pais: 'India',
    salario: { $exists: false }
})
