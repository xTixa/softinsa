const db = require('../models');
const Inscricao = db.inscricao;

exports.createInscricao = async (req, res) => {
  try {
    const nova = await Inscricao.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar inscrição', erro: err.message });
  }
};

exports.getInscricoes = async (req, res) => {
  try {
    const inscricoes = await Inscricao.findAll();
    res.json(inscricoes);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar inscrições', erro: err.message });
  }
};

exports.deleteInscricao = async (req, res) => {
  try {
    const { id_inscricao } = req.params;
    const registo = await Inscricao.findByPk(id_inscricao);
    if (registo) {
      await registo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Inscrição não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar inscrição', erro: err.message });
  }
};