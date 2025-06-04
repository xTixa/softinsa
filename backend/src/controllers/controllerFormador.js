const db = require('../models');
const Formador = db.formador;

exports.createFormador = async (req, res) => {
  try {
    const novo = await Formador.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar formador', erro: err.message });
  }
};

exports.getFormadores = async (req, res) => {
  try {
    const formadores = await Formador.findAll();
    res.json(formadores);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar formadores', erro: err.message });
  }
};

exports.getFormadorById = async (req, res) => {
  try {
    const formador = await Formador.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formador: req.params.id_formador
      }
    });
    if (formador) {
      res.json(formador);
    } else {
      res.status(404).json({ mensagem: 'Formador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar formador', erro: err.message });
  }
};

exports.updateFormador = async (req, res) => {
  try {
    const formador = await Formador.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formador: req.params.id_formador
      }
    });
    if (formador) {
      await formador.update(req.body);
      res.json(formador);
    } else {
      res.status(404).json({ mensagem: 'Formador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar formador', erro: err.message });
  }
};

exports.deleteFormador = async (req, res) => {
  try {
    const formador = await Formador.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formador: req.params.id_formador
      }
    });
    if (formador) {
      await formador.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Formador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar formador', erro: err.message });
  }
};
