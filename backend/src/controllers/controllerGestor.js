const db = require('../models');
const Gestor = db.gestor;

exports.createGestor = async (req, res) => {
  try {
    const novo = await Gestor.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar gestor', erro: err.message });
  }
};

exports.getGestores = async (req, res) => {
  try {
    const gestores = await Gestor.findAll();
    res.json(gestores);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar gestores', erro: err.message });
  }
};

exports.getGestorById = async (req, res) => {
  try {
    const gestor = await Gestor.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_gestor: req.params.id_gestor
      }
    });
    if (gestor) {
      res.json(gestor);
    } else {
      res.status(404).json({ mensagem: 'Gestor não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar gestor', erro: err.message });
  }
};

exports.updateGestor = async (req, res) => {
  try {
    const gestor = await Gestor.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_gestor: req.params.id_gestor
      }
    });
    if (gestor) {
      await gestor.update(req.body);
      res.json(gestor);
    } else {
      res.status(404).json({ mensagem: 'Gestor não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar gestor', erro: err.message });
  }
};

exports.deleteGestor = async (req, res) => {
  try {
    const gestor = await Gestor.findOne({
      where: {
        id_utilizador: req.params.id_utilizador,
        id_gestor: req.params.id_gestor
      }
    });
    if (gestor) {
      await gestor.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Gestor não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar gestor', erro: err.message });
  }
};