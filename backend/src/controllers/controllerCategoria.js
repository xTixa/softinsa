const db = require('../models'); 
const Categoria = db.categoria;

// Criar nova categoria
exports.createCategoria = async (req, res) => {
  const { nome_categoria } = req.body;

  try {
    const novaCategoria = await Categoria.create({ nome_categoria });
    res.status(201).json(novaCategoria);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar categoria', erro: error.message });
  }
};

// Listar todas as categorias
exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter categorias', erro: error.message });
  }
};

// Obter uma categoria por ID
exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter categoria', erro: error.message });
  }
};

// Atualizar uma categoria
exports.updateCategoria = async (req, res) => {
  try {
    const { nome_categoria } = req.body;
    const categoria = await Categoria.findByPk(req.params.id);

    if (categoria) {
      categoria.nome_categoria = nome_categoria;
      await categoria.save();
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar categoria', erro: error.message });
  }
};

// Apagar uma categoria
exports.deleteCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (categoria) {
      await categoria.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao apagar categoria', erro: error.message });
  }
};
