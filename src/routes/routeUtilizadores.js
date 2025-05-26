const express = require('express');
const router = express.Router();
const utilizadorController = require('../controllers/controllerUtilizadores');

router.post('/', utilizadorController.createUtilizador);
router.get('/', utilizadorController.getUtilizadores);
router.get('/:id', utilizadorController.getUtilizadorById);
router.put('/:id', utilizadorController.updateUtilizador);
router.delete('/:id', utilizadorController.deleteUtilizador);

module.exports = router;
