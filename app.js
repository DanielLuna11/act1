const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/LibreriaT'; // Asegúrate de incluir el nombre de la base de datos
mongoose.connect(url_bd)
  .then(() => {
    console.log('si jaloooo');
  })
  .catch((err) => {
    console.log('no jalooo', err);
  });

// Esquemas para la base de datos
const Esquema_Tabla = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  apepat: {
    type: String,
    required: true
  }
});

// Creando colección
const Tabla = mongoose.model('Datos personales', Esquema_Tabla);

// Crear datos
Tabla.create([
  { name: "Carlos", apepat: "Dantes" },
  { name: "Maria", apepat: "Estrada" },
  { name: "Pepe", apepat: "Rodriguez" },
  { name: "Camrmen", apepat: "Lurdes" },
  { name: "Natanael", apepat: "Cano" },
  { name: "Alfredo", apepat: "Olivas" },
  { name: "Don", apepat: "Dimadon" }
]).then(() => {
  console.log('Datos insertados');
}).catch((err) => {
  console.log('Error al insertar datos', err);
});