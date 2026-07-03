db["libros"].find({ "año": { $gt: 2022 } })

db["usuarios"].find({ "edad": { $gte: 21 } })

db["libros"].find({ "paginas": { $lt: 350 } })

db["usuarios"].find({ "edad": { $lte: 20 } })

db["libros"].find({ "categoria": { $ne: "Programación" } })

db["usuarios"].find({ $and: [ { "carrera": "Ingeniería Informática" }, { "semestre": { $gte: 6 } } ] })

db["libros"].find({ $or: [ { "categoria": "Programación" }, { "categoria": "Bases de Datos" } ] })

db["prestamos"].find({ $and: [ { "devuelto": false }, { "diasPrestamo": { $gt: 8 } } ] })

db["libros"].find({ "titulo": { $regex: /^m/i } })

db["usuarios"].find({ "nombre": { $regex: /^a/i } })

db["libros"].find({ "titulo": { $regex: /base/i } })

db["usuarios"].find({}, { "nombre": 1, "carrera": 1, "_id": 0 })

db["libros"].find({}, { "titulo": 1, "autor": 1, "_id": 0 })

db["prestamos"].find({}, { "usuario": 1, "libro": 1, "_id": 0 })

db["libros"].find().sort({ "año": -1 })

db["usuarios"].find().sort({ "nombre": 1 })

db["prestamos"].find().sort({ "diasPrestamo": -1 })

db["libros"].find({ "año": { $gte: 2022 } }, { "titulo": 1, "año": 1, "_id": 0 }).sort({ "año": -1 })

db["usuarios"].find({ $or: [ { "carrera": "Ingeniería en Sistemas Computacionales" }, { "carrera": "Ingeniería Informática" } ] }, { "nombre": 1, "carrera": 1, "_id": 0 })

db["prestamos"].find({ "devuelto": false }, { "usuario": 1, "libro": 1, "diasPrestamo": 1, "_id": 0 }).sort({ "diasPrestamo": -1 })
