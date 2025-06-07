const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerCurso');

router.post('/', controller.createCurso);
router.get('/', controller.getCursos);
router.get('/:id', controller.getCursoById);
router.put('/:id', controller.updateCurso);
router.delete('/:id', controller.deleteCurso);

router.get('/top-avaliados', async (req, res) => {
  try {
    const cursos = await db.curso.findAll({
      limit: 5,
      order: [['avaliacao_media', 'DESC']] // ajusta o campo conforme a tua BD
    });

    res.json(cursos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar cursos top', detalhes: err.message });
  }
});


module.exports = router;
