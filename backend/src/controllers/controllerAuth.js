const { gestor, formador, formando } = require('../models');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Tenta login como Gestor
    const g = await gestor.findOne({ where: { email } });
    if (g && g.palavra_passe === password) {
      return res.json({
        id: g.id_utilizador,
        nome: g.nome,
        tipo: 'gestor'
      });
    }

    // Tenta login como Formador
    const fmd = await formador.findOne({ where: { email } });
    if (fmd && fmd.palavra_passe === password) {
      return res.json({
        id: fmd.id_utilizador,
        nome: fmd.nome,
        tipo: 'formador'
      });
    }

    // Tenta login como Formando
    const fnd = await formando.findOne({ where: { email } });
    if (fnd && fnd.palavra_passe === password) {
      return res.json({
        id: fnd.id_utilizador,
        nome: fnd.nome,
        tipo: 'formando'
      });
    }

    // Nenhum utilizador encontrado
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro no login', erro: err.message });
  }
};
