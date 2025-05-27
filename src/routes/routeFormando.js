const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFormando');

router.post('/', controller.createFormando);
router.get('/', controller.getFormandos);
router.get('/:id_utilizador/:id_formando', controller.getFormandoById);
router.put('/:id_utilizador/:id_formando', controller.updateFormando);
router.delete('/:id_utilizador/:id_formando', controller.deleteFormando);

module.exports = router;
