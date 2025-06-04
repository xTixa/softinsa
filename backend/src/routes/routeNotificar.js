const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerNotificar');

router.post('/', controller.createNotificacaoEnviada);
router.get('/', controller.getNotificacoesEnviadas);
router.delete('/:id_utilizador/:id_notificacao', controller.deleteNotificacaoEnviada);

module.exports = router;
