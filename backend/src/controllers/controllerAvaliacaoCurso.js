const db = require('../models');
const AvaliacaoCurso = db.avaliacao_curso;

exports.createAvaliacao = async (req, res) => {
  try {
    const nova = await AvaliacaoCurso.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar avaliação', erro: err.message });
  }
};

exports.getAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await AvaliacaoCurso.findAll();
    res.json(avaliacoes);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar avaliações', erro: err.message });
  }
};

exports.deleteAvaliacao = async (req, res) => {
  try {
    const avaliacao = await AvaliacaoCurso.findByPk(req.params.id);
    if (avaliacao) {
      await avaliacao.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Avaliação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar avaliação', erro: err.message });
  }
};