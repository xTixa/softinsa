const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerRespostasQuiz');

router.post('/', controller.createRespostaQuiz);
router.get('/', controller.getRespostasQuiz);
router.get('/:id', controller.getRespostaQuizById);
router.put('/:id', controller.updateRespostaQuiz);
router.delete('/:id', controller.deleteRespostaQuiz);

module.exports = router;
