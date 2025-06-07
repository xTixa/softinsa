const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await db.utilizadores.count();
    const totalFormadores = await db.formador.count();
    const totalCursos = await db.curso.count();

    const cursos = await db.curso.findAll({
      attributes: ['data_inicio', 'data_fim']
    });

    let totalDias = 0;
    cursos.forEach(curso => {
      const inicio = new Date(curso.data_inicio);
      const fim = new Date(curso.data_fim);
      const dias = Math.max((fim - inicio) / (1000 * 60 * 60 * 24), 0);
      totalDias += dias;
    });

    res.json({
      totalUsers,
      totalFormadores,
      totalCursos,
      totalDias: Math.round(totalDias)
    });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao obter estatísticas', detalhes: err.message });
  }
});

module.exports = router;
