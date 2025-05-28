const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerCursoSincrono');

router.post('/', controller.createCursoSincrono);
router.get('/', controller.getCursosSincronos);
router.get('/:id_curso/:id_sincrono', controller.getCursoSincronoById);
router.put('/:id_curso/:id_sincrono', controller.updateCursoSincrono);
router.delete('/:id_curso/:id_sincrono', controller.deleteCursoSincrono);

module.exports = router;
