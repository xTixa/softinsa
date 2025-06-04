const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerTopico');

router.post('/', controller.createTopico);
router.get('/', controller.getTopicos);
router.get('/:id', controller.getTopicoById);
router.put('/:id', controller.updateTopico);
router.delete('/:id', controller.deleteTopico);

module.exports = router;
