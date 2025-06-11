const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFormador');
//const db = require('../models');

router.post('/', controller.createFormador);

/*
router.get('/:id_formador/cursos', async (req, res) => {
  const idFormador = req.params.id_formador;

  try {
    const sincronos = await db.curso_sincrono.findAll({
      where: { id_formador: idFormador },
      attributes: ['id_curso', 'titulo', 'duracao', 'avaliacao', 'membros', 'tumbnail']
    });

    const assincronos = await db.curso_assincrono.findAll({
      where: { id_formador: idFormador },
      attributes: ['id_curso', 'titulo', 'duracao', 'avaliacao', 'membros', 'tumbnail']
    });

    const cursos = [
      ...sincronos.map(c => ({ ...c.dataValues, tipo: 'Síncrono' })),
      ...assincronos.map(c => ({ ...c.dataValues, tipo: 'Assíncrono' }))
    ];

    res.json(cursos);
  } catch (error) {
    console.error('Erro ao buscar cursos do formador:', error);
    res.status(500).json({ erro: 'Erro ao buscar cursos do formador.' });
  }
});*/


router.get('/', controller.getFormadores);
router.get('/:id_utilizador/:id_formador', controller.getFormadorById);
router.put('/:id_utilizador/:id_formador', controller.updateFormador);
router.delete('/:id_utilizador/:id_formador', controller.deleteFormador);

module.exports = router;
