const db = require('../models');
const Topico = db.topico;

exports.createTopico = async (req, res) => {
  try {
    const novo = await Topico.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar tópico', erro: err.message });
  }
};

exports.getTopicos = async (req, res) => {
  try {
    const topicos = await Topico.findAll();
    res.json(topicos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar tópicos', erro: err.message });
  }
};

exports.getTopicoById = async (req, res) => {
  try {
    const topico = await Topico.findByPk(req.params.id);
    if (topico) {
      res.json(topico);
    } else {
      res.status(404).json({ mensagem: 'Tópico não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar tópico', erro: err.message });
  }
};

exports.updateTopico = async (req, res) => {
  try {
    const topico = await Topico.findByPk(req.params.id);
    if (topico) {
      await topico.update(req.body);
      res.json(topico);
    } else {
      res.status(404).json({ mensagem: 'Tópico não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar tópico', erro: err.message });
  }
};

exports.deleteTopico = async (req, res) => {
  try {
    const topico = await Topico.findByPk(req.params.id);
    if (topico) {
      await topico.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Tópico não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar tópico', erro: err.message });
  }
};