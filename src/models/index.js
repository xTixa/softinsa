const Sequelize = require('sequelize');
const sequelize = require('../database/db');

// Importar todos os modelos
// const anexo_aula = require('./anexo_aula')(sequelize, Sequelize.DataTypes);
// const anexo_publicacao = require('./anexo_publicacao')(sequelize, Sequelize.DataTypes);
// const area = require('./area')(sequelize, Sequelize.DataTypes);
// const area_partilha = require('./area_partilha')(sequelize, Sequelize.DataTypes);
// const aula = require('./aula')(sequelize, Sequelize.DataTypes);
// const avaliacao_curso = require('./avaliacao_curso')(sequelize, Sequelize.DataTypes);
// const avaliacao_publicacao = require('./avaliacao_publicacao')(sequelize, Sequelize.DataTypes);
//  const categoria = require('./categoria')(sequelize, Sequelize.DataTypes);
// const categoria_publicacao = require('./categoria_publicacao')(sequelize, Sequelize.DataTypes);
// const comentario = require('./comentario')(sequelize, Sequelize.DataTypes);
// const curso = require('./curso')(sequelize, Sequelize.DataTypes);
// const curso_assincrono = require('./curso_assincrono')(sequelize, Sequelize.DataTypes);
 const formador = require('./formador')(sequelize, Sequelize.DataTypes);
 const curso_sincrono = require('./curso_sincrono')(sequelize, Sequelize.DataTypes);
// const denuncia_post = require('./denuncia_post')(sequelize, Sequelize.DataTypes);
 const utilizadores = require('./utilizadores')(sequelize, Sequelize.DataTypes);
 const formando = require('./formando')(sequelize, Sequelize.DataTypes);
// const gestor = require('./gestor')(sequelize, Sequelize.DataTypes);
// const gerir = require('./gerir')(sequelize, Sequelize.DataTypes);
// const inscricao = require('./inscricao')(sequelize, Sequelize.DataTypes);
// const notificacao = require('./notificacao')(sequelize, Sequelize.DataTypes);
// const notificar = require('./notificar')(sequelize, Sequelize.DataTypes);
// const publicacao = require('./publicacao')(sequelize, Sequelize.DataTypes);
// const quiz = require('./quiz')(sequelize, Sequelize.DataTypes);
// const respostas_quiz = require('./respostas_quiz')(sequelize, Sequelize.DataTypes);
// const respostas_teste = require('./respostas_teste')(sequelize, Sequelize.DataTypes);
// const submeter_ficheiro = require('./submeter_ficheiro')(sequelize, Sequelize.DataTypes);
// const teste = require('./teste')(sequelize, Sequelize.DataTypes);
// const topico = require('./topico')(sequelize, Sequelize.DataTypes);
// const topico_publicacao = require('./topico_publicacao')(sequelize, Sequelize.DataTypes);

// Agrupar todos os modelos
const db = {
  Sequelize,
  sequelize,
//   anexo_aula,
//   anexo_publicacao,
//   area,
//   area_partilha,
//   aula,
//   avaliacao_curso,
//   avaliacao_publicacao,
//   categoria,
//   categoria_publicacao,
//   comentario,
//   curso,
//   curso_assincrono,
   formador,
   curso_sincrono,
//   denuncia_post,
   utilizadores,
   formando,
//   gestor,
//   gerir,
//   inscricao,
//   notificacao,
//   notificar,
//   publicacao,
//   quiz,
//   respostas_quiz,
//   respostas_teste,
//   submeter_ficheiro,
//   teste,
//   topico,
//   topico_publicacao
};

module.exports = db;
