const db = require('../models');
const Publicacao = db.publicacao;

exports.createPublicacao = async (req, res) => {
  try {
    const nova = await Publicacao.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar publicação', erro: err.message });
  }
};

exports.getPublicacoes = async (req, res) => {
  try {
    const publicacoes = await Publicacao.findAll();
    res.json(publicacoes);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar publicações', erro: err.message });
  }
};

exports.getPublicacaoById = async (req, res) => {
  try {
    const publicacao = await Publicacao.findByPk(req.params.id);
    if (publicacao) {
      res.json(publicacao);
    } else {
      res.status(404).json({ mensagem: 'Publicação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar publicação', erro: err.message });
  }
};

exports.updatePublicacao = async (req, res) => {
  try {
    const publicacao = await Publicacao.findByPk(req.params.id);
    if (publicacao) {
      await publicacao.update(req.body);
      res.json(publicacao);
    } else {
      res.status(404).json({ mensagem: 'Publicação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar publicação', erro: err.message });
  }
};

exports.deletePublicacao = async (req, res) => {
  try {
    const publicacao = await Publicacao.findByPk(req.params.id);
    if (publicacao) {
      await publicacao.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Publicação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar publicação', erro: err.message });
  }
};