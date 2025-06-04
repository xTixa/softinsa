const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFormador');

router.post('/', controller.createFormador);
router.get('/', controller.getFormadores);
router.get('/:id_utilizador/:id_formador', controller.getFormadorById);
router.put('/:id_utilizador/:id_formador', controller.updateFormador);
router.delete('/:id_utilizador/:id_formador', controller.deleteFormador);

module.exports = router;
