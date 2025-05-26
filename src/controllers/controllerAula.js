const db = require('../models');
const Aula = db.aula;

exports.createAula = async (req, res) => {
  try {
    const nova = await Aula.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar aula', erro: err.message });
  }
};

exports.getAulas = async (req, res) => {
  try {
    const aulas = await Aula.findAll();
    res.json(aulas);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar aulas', erro: err.message });
  }
};

exports.getAulaById = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (aula) {
      res.json(aula);
    } else {
      res.status(404).json({ mensagem: 'Aula não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar aula', erro: err.message });
  }
};

exports.updateAula = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (aula) {
      await aula.update(req.body);
      res.json(aula);
    } else {
      res.status(404).json({ mensagem: 'Aula não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar aula', erro: err.message });
  }
};

exports.deleteAula = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (aula) {
      await aula.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Aula não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar aula', erro: err.message });
  }
};