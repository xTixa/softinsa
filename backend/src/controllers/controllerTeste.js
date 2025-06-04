const db = require('../models');
const Teste = db.teste;

exports.createTeste = async (req, res) => {
  try {
    const novo = await Teste.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar teste', erro: err.message });
  }
};

exports.getTestes = async (req, res) => {
  try {
    const testes = await Teste.findAll();
    res.json(testes);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar testes', erro: err.message });
  }
};

exports.getTesteById = async (req, res) => {
  try {
    const teste = await Teste.findByPk(req.params.id);
    if (teste) {
      res.json(teste);
    } else {
      res.status(404).json({ mensagem: 'Teste não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar teste', erro: err.message });
  }
};

exports.updateTeste = async (req, res) => {
  try {
    const teste = await Teste.findByPk(req.params.id);
    if (teste) {
      await teste.update(req.body);
      res.json(teste);
    } else {
      res.status(404).json({ mensagem: 'Teste não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar teste', erro: err.message });
  }
};

exports.deleteTeste = async (req, res) => {
  try {
    const teste = await Teste.findByPk(req.params.id);
    if (teste) {
      await teste.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Teste não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar teste', erro: err.message });
  }
};
