const db = require('../models');
const Area = db.area;

exports.createArea = async (req, res) => {
  try {
    const nova = await Area.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar área', erro: err.message });
  }
};

exports.getAreas = async (req, res) => {
  try {
    const areas = await Area.findAll();
    res.json(areas);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar áreas', erro: err.message });
  }
};

exports.getAreaById = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (area) {
      res.json(area);
    } else {
      res.status(404).json({ mensagem: 'Área não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar área', erro: err.message });
  }
};

exports.updateArea = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (area) {
      await area.update(req.body);
      res.json(area);
    } else {
      res.status(404).json({ mensagem: 'Área não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar área', erro: err.message });
  }
};

exports.deleteArea = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (area) {
      await area.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Área não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao eliminar área', erro: err.message });
  }
};