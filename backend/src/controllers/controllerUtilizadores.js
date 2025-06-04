const db = require('../models');
const Utilizador = db.utilizadores;

// Criar novo utilizador
exports.createUtilizador = async (req, res) => {
  try {
    const novo = await Utilizador.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar utilizador', erro: err.message });
  }
};

//Listar todos os utilizadores
exports.getUtilizadores = async (req, res) => {
  try {
    const utilizadores = await Utilizador.findAll();
    res.status(200).json(utilizadores);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar utilizadores', erro: err.message });
  }
};

// Buscar utilizador por ID
exports.getUtilizadorById = async (req, res) => {
  try {
    const utilizador = await Utilizador.findByPk(req.params.id);
    if (utilizador) {
      res.status(200).json(utilizador);
    } else {
      res.status(404).json({ mensagem: 'Utilizador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar utilizador', erro: err.message });
  }
};

// Atualizar utilizador
exports.updateUtilizador = async (req, res) => {
  try {
    const utilizador = await Utilizador.findByPk(req.params.id);
    if (utilizador) {
      await utilizador.update(req.body);
      res.status(200).json(utilizador);
    } else {
      res.status(404).json({ mensagem: 'Utilizador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar utilizador', erro: err.message });
  }
};

// Eliminar utilizador
exports.deleteUtilizador = async (req, res) => {
  try {
    const utilizador = await Utilizador.findByPk(req.params.id);
    if (utilizador) {
      await utilizador.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Utilizador não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar utilizador', erro: err.message });
  }
};
