const DesarrolladorController = require('../controllers/desarrolladores');
const express = require('express');
const router = express.Router();

router.get("/all", DesarrolladorController.findAllDesarrolladores);
router.get("/:id", DesarrolladorController.findById);
router.post("/add", DesarrolladorController.addDesarrollador);

module.exports = router;