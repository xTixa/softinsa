const db = require('../models');
const AvaliacaoPublicacao = db.avaliacao_publicacao;

exports.create = async (req, res) => {
  try {
    const novaAvaliacao = await AvaliacaoPublicacao.create(req.body);
    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const avaliacoes = await AvaliacaoPublicacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const avaliacao = await AvaliacaoPublicacao.findByPk(req.params.id);
    if (avaliacao) res.json(avaliacao);
    else res.status(404).json({ erro: 'Avaliação não encontrada' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [rows] = await AvaliacaoPublicacao.update(req.body, {
      where: { ID_AVALIACAO_PUBLICACAO: req.params.id }
    });
    if (rows) res.json({ mensagem: 'Avaliação atualizada com sucesso' });
    else res.status(404).json({ erro: 'Avaliação não encontrada' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const rows = await AvaliacaoPublicacao.destroy({
      where: { ID_AVALIACAO_PUBLICACAO: req.params.id }
    });
    if (rows) res.json({ mensagem: 'Avaliação eliminada com sucesso' });
    else res.status(404).json({ erro: 'Avaliação não encontrada' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
