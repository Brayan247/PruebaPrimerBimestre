const mongoose = require('mongoose');
const Desarrollador = require('../models/Desarrollador');
const document = require();
const namedsr = document.getElementById("name").value;
const usernamedsr = document.getElementById("name").value;
const passworddsr = document.getElementById("name").value;const activitiesdsr = document.getElementById("name").value;
const numberPhonedsr = document.getElementById("name").value;
const btnRegistrar = document.getElementById("btnRegistrar").addEventListener("click", addDesarrollador);
        
     const addDesarrollador = (req, res) => {
        let desarrollador = new Desarrollador({
        name: namedsr,
        username: usernamedsr,
        password: passworddsr,
        activities: activitiesdsr,
        numberPhone: numberPhonedsr
        });
    user.save((err, dsr) => {
    err && res.status(500).send(err.message);
    res.status(200).json(dsr);
    console.log('usuario registrado')
    });}