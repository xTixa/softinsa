const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await db.utilizadores.count();
    const totalFormadores = await db.formador.count();
    const totalCursos = await db.curso.count();

    // Calcular duração total em dias
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

    // Top 5 cursos com maior avaliação
    const topCourses = await db.curso.findAll({
      attributes: ['id_curso', 'titulo', 'descricao', 'avaliacao'],
      where: {
        avaliacao: { [db.Sequelize.Op.not]: null }
      },
      order: [['avaliacao', 'DESC']],
      limit: 5
    });

    res.json({
      totalUsers,
      totalFormadores,
      totalCursos,
      totalDias: Math.round(totalDias),
      topCourses
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao obter estatísticas', detalhes: err.message });
  }
});

module.exports = router;
