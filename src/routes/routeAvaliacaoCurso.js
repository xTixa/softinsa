const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerAvaliacaoCurso');

router.post('/', controller.createAvaliacao);
router.get('/', controller.getAvaliacoes);
router.delete('/:id', controller.deleteAvaliacao);

module.exports = router;
