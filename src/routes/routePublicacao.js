const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerPublicacao');

router.post('/', controller.createPublicacao);
router.get('/', controller.getPublicacoes);
router.get('/:id', controller.getPublicacaoById);
router.put('/:id', controller.updatePublicacao);
router.delete('/:id', controller.deletePublicacao);

module.exports = router;
