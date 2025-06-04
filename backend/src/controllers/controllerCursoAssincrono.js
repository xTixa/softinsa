const db = require('../models');
const CursoAssincrono = db.curso_assincrono;

exports.createCursoAssincrono = async (req, res) => {
  try {
    const novo = await CursoAssincrono.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar curso assincrono', erro: err.message });
  }
};

exports.getCursosAssincronos = async (req, res) => {
  try {
    const cursos = await CursoAssincrono.findAll();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar cursos assincronos', erro: err.message });
  }
};

exports.getCursoAssincronoById = async (req, res) => {
  try {
    const { id_curso, id_assincrono } = req.params;
    const curso = await CursoAssincrono.findOne({ where: { id_curso, id_assincrono } });
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso assincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar curso assincrono', erro: err.message });
  }
};

exports.updateCursoAssincrono = async (req, res) => {
  try {
    const { id_curso, id_assincrono } = req.params;
    const curso = await CursoAssincrono.findOne({ where: { id_curso, id_assincrono } });
    if (curso) {
      await curso.update(req.body);
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso assincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar curso assincrono', erro: err.message });
  }
};

exports.deleteCursoAssincrono = async (req, res) => {
  try {
    const { id_curso, id_assincrono } = req.params;
    const curso = await CursoAssincrono.findOne({ where: { id_curso, id_assincrono } });
    if (curso) {
      await curso.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Curso assincrono não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar curso assincrono', erro: err.message });
  }
};