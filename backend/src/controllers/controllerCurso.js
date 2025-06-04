const db = require('../models');
const Curso = db.curso;

exports.createCurso = async (req, res) => {
  try {
    const novo = await Curso.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar curso', erro: err.message });
  }
};

exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar cursos', erro: err.message });
  }
};

exports.getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar curso', erro: err.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      await curso.update(req.body);
      res.json(curso);
    } else {
      res.status(404).json({ mensagem: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar curso', erro: err.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
      await curso.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Curso não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar curso', erro: err.message });
  }
};