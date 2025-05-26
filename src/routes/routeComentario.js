const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerComentario');

router.post('/', controller.createComentario);
router.get('/', controller.getComentarios);
router.get('/:id', controller.getComentarioById);
router.put('/:id', controller.updateComentario);
router.delete('/:id', controller.deleteComentario);

module.exports = router;
