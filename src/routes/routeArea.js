const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerArea');

router.post('/', controller.createArea);
router.get('/', controller.getAreas);
router.get('/:id', controller.getAreaById);
router.put('/:id', controller.updateArea);
router.delete('/:id', controller.deleteArea);

module.exports = router;