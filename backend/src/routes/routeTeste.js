const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerTeste');

router.post('/', controller.createTeste);
router.get('/', controller.getTestes);
router.get('/:id', controller.getTesteById);
router.put('/:id', controller.updateTeste);
router.delete('/:id', controller.deleteTeste);

module.exports = router;
