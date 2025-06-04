const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerNotificacao');

router.post('/', controller.createNotificacao);
router.get('/', controller.getNotificacoes);
router.get('/:id', controller.getNotificacaoById);
router.put('/:id', controller.updateNotificacao);
router.delete('/:id', controller.deleteNotificacao);

module.exports = router;
