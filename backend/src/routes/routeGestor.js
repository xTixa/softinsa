const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerGestor');

router.post('/', controller.createGestor);
router.get('/', controller.getGestores);
router.get('/:id_utilizador/:id_gestor', controller.getGestorById);
router.put('/:id_utilizador/:id_gestor', controller.updateGestor);
router.delete('/:id_utilizador/:id_gestor', controller.deleteGestor);

module.exports = router;
