const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de la tabla usuarios
const DesarroladorSchema = new Schema({
    name: {type: String},
    username: {type: String},
    password: {type: String},
    activities: {type: String},
    numberPhone: {type: String}
});

module.exports = Desarrollador = mongoose.model('Desarroladores', DesarroladorSchema);