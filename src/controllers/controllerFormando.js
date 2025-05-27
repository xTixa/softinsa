const db = require('../models');
const Formando = db.formando;

exports.createFormando = async (req, res) => {
  try {
    const novo = await Formando.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar formando', erro: err.message });
  }
};

exports.getFormandos = async (req, res) => {
  try {
    const formandos = await Formando.findAll();
    res.json(formandos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar formandos', erro: err.message });
  }
};

exports.getFormandoById = async (req, res) => {
  try {
    const formando = await Formando.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formando: req.params.id_formando
      }
    });
    formando ? res.json(formando) : res.status(404).json({ mensagem: 'Formando não encontrado' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar formando', erro: err.message });
  }
};

exports.updateFormando = async (req, res) => {
  try {
    const formando = await Formando.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formando: req.params.id_formando
      }
    });
    if (formando) {
      await formando.update(req.body);
      res.json(formando);
    } else {
      res.status(404).json({ mensagem: 'Formando não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar formando', erro: err.message });
  }
};

exports.deleteFormando = async (req, res) => {
  try {
    const formando = await Formando.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_formando: req.params.id_formando
      }
    });
    if (formando) {
      await formando.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Formando não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar formando', erro: err.message });
  }
};