const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerQuiz');

router.post('/', controller.createQuiz);
router.get('/', controller.getQuizzes);
router.get('/:id', controller.getQuizById);
router.put('/:id', controller.updateQuiz);
router.delete('/:id', controller.deleteQuiz);

module.exports = router;
