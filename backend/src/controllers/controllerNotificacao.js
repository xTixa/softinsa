const db = require('../models');
const Notificacao = db.notificacao;

exports.createNotificacao = async (req, res) => {
  try {
    const nova = await Notificacao.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar notificação', erro: err.message });
  }
};


exports.getNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.json(notificacoes);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar notificações', erro: err.message });
  }
};

exports.getNotificacaoById = async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      res.json(notificacao);
    } else {
      res.status(404).json({ mensagem: 'Notificação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar notificação', erro: err.message });
  }
};

exports.updateNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      await notificacao.update(req.body);
      res.json(notificacao);
    } else {
      res.status(404).json({ mensagem: 'Notificação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar notificação', erro: err.message });
  }
};

exports.deleteNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.findByPk(req.params.id);
    if (notificacao) {
      await notificacao.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Notificação não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar notificação', erro: err.message });
  }
};