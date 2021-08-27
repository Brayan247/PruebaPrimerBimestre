const mongoose = require('mongoose');
const Desarrollador = require('../models/Desarrollador');

const findAllDesarrolladores = (req, res) => {
    Desarrollador.find((err, desarrolladores) => {
        err && res.send(500).send(err.message);
        res.status(200).json(desarrolladores);
    })
}

const findById = (req, res) => {
    Desarrollador.findById(req / params.id, (err, desarrolladores) => {
        err && res.send(500).send(err.message);
        res.status(200).json(desarrolladores);
    })
}

const addDesarrollador = (req, res) => {
    let desarrollador = new Desarrollador({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        activities: req.body.activities,
        numberPhone: req.body.numberPhone
    });
    desarrollador.save((err, dsr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(dsr);
    });
}

module.exports = { findAllDesarrolladores, findById, addDesarrollador };