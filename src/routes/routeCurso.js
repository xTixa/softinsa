const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerCurso');

router.post('/', controller.createCurso);
router.get('/', controller.getCursos);
router.get('/:id', controller.getCursoById);
router.put('/:id', controller.updateCurso);
router.delete('/:id', controller.deleteCurso);

module.exports = router;
