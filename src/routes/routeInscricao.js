const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerInscricao');

router.post('/', controller.createInscricao);
router.get('/', controller.getInscricoes);
router.delete('/:id_inscricao', controller.deleteInscricao);

module.exports = router;
