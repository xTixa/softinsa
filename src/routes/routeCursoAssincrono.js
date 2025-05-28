const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerCursoAssincrono');

router.post('/', controller.createCursoAssincrono);
router.get('/', controller.getCursosAssincronos);
router.get('/:id_curso/:id_assincrono', controller.getCursoAssincronoById);
router.put('/:id_curso/:id_assincrono', controller.updateCursoAssincrono);
router.delete('/:id_curso/:id_assincrono', controller.deleteCursoAssincrono);

module.exports = router;
