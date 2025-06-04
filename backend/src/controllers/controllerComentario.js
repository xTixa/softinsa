const db = require('../models');
const Comentario = db.comentario;

exports.createComentario = async (req, res) => {
  try {
    const novo = await Comentario.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar comentário', erro: err.message });
  }
};

exports.getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar comentários', erro: err.message });
  }
};

exports.getComentarioById = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (comentario) {
      res.json(comentario);
    } else {
      res.status(404).json({ mensagem: 'Comentário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar comentário', erro: err.message });
  }
};

exports.updateComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (comentario) {
      await comentario.update(req.body);
      res.json(comentario);
    } else {
      res.status(404).json({ mensagem: 'Comentário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar comentário', erro: err.message });
  }
};

exports.deleteComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (comentario) {
      await comentario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Comentário não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar comentário', erro: err.message });
  }
};