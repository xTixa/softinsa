const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerAula');

router.post('/', controller.createAula);
router.get('/', controller.getAulas);
router.get('/:id', controller.getAulaById);
router.put('/:id', controller.updateAula);
router.delete('/:id', controller.deleteAula);

module.exports = router;
