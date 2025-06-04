const db = require('../models');
const CursoSincrono = db.curso_sincrono;

exports.createCursoSincrono = async (req, res) => {
  try {
    const novo = await CursoSincrono.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar curso sincrono', erro: err.message });
  }
};

exports.getCursosSincronos = async (req, res) => {
  try {
    const cursos = await CursoSincrono.findAll();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar cursos sincronos', erro: err.message });
  }
};

exports.getCursoSincronoById = async (req, res) => {
  try {
    const { id_curso, id_sincrono } = req.params;
    const curso = await CursoSincrono.findOne({ where: { id_curso, id_sincrono } });
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso sincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar curso sincrono', erro: err.message });
  }
};

exports.updateCursoSincrono = async (req, res) => {
  try {
    const { id_curso, id_sincrono } = req.params;
    const curso = await CursoSincrono.findOne({ where: { id_curso, id_sincrono } });
    if (curso) {
      await curso.update(req.body);
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso sincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar curso sincrono', erro: err.message });
  }
};

exports.deleteCursoSincrono = async (req, res) => {
  try {
    const { id_curso, id_sincrono } = req.params;
    const curso = await CursoSincrono.findOne({ where: { id_curso, id_sincrono } });
    if (curso) {
      await curso.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Curso sincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar curso sincrono', erro: err.message });
  }
};
