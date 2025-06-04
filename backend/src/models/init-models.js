var DataTypes = require("sequelize").DataTypes;
var _anexo_aula = require("./anexo_aula");
var _anexo_publicacao = require("./anexo_publicacao");
var _area = require("./area");
var _area_partilha = require("./area_partilha");
var _aula = require("./aula");
var _avaliacao_curso = require("./avaliacao_curso");
var _avaliacao_publicacao = require("./avaliacao_publicacao");
var _categoria = require("./categoria");
var _categoria_publicacao = require("./categoria_publicacao");
var _comentario = require("./comentario");
var _curso = require("./curso");
var _curso_assincrono = require("./curso_assincrono");
var _curso_sincrono = require("./curso_sincrono");
var _denuncia_post = require("./denuncia_post");
var _formador = require("./formador");
var _formando = require("./formando");
var _gerir = require("./gerir");
var _gestor = require("./gestor");
var _inscricao = require("./inscricao");
var _notificacao = require("./notificacao");
var _notificar = require("./notificar");
var _publicacao = require("./publicacao");
var _quiz = require("./quiz");
var _respostas_quiz = require("./respostas_quiz");
var _respostas_teste = require("./respostas_teste");
var _submeter_ficheiro = require("./submeter_ficheiro");
var _teste = require("./teste");
var _topico = require("./topico");
var _topico_publicacao = require("./topico_publicacao");
var _utilizadores = require("./utilizadores");

function initModels(sequelize) {
  var anexo_aula = _anexo_aula(sequelize, DataTypes);
  var anexo_publicacao = _anexo_publicacao(sequelize, DataTypes);
  var area = _area(sequelize, DataTypes);
  var area_partilha = _area_partilha(sequelize, DataTypes);
  var aula = _aula(sequelize, DataTypes);
  var avaliacao_curso = _avaliacao_curso(sequelize, DataTypes);
  var avaliacao_publicacao = _avaliacao_publicacao(sequelize, DataTypes);
  var categoria = _categoria(sequelize, DataTypes);
  var categoria_publicacao = _categoria_publicacao(sequelize, DataTypes);
  var comentario = _comentario(sequelize, DataTypes);
  var curso = _curso(sequelize, DataTypes);
  var curso_assincrono = _curso_assincrono(sequelize, DataTypes);
  var curso_sincrono = _curso_sincrono(sequelize, DataTypes);
  var denuncia_post = _denuncia_post(sequelize, DataTypes);
  var formador = _formador(sequelize, DataTypes);
  var formando = _formando(sequelize, DataTypes);
  var gerir = _gerir(sequelize, DataTypes);
  var gestor = _gestor(sequelize, DataTypes);
  var inscricao = _inscricao(sequelize, DataTypes);
  var notificacao = _notificacao(sequelize, DataTypes);
  var notificar = _notificar(sequelize, DataTypes);
  var publicacao = _publicacao(sequelize, DataTypes);
  var quiz = _quiz(sequelize, DataTypes);
  var respostas_quiz = _respostas_quiz(sequelize, DataTypes);
  var respostas_teste = _respostas_teste(sequelize, DataTypes);
  var submeter_ficheiro = _submeter_ficheiro(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var topico = _topico(sequelize, DataTypes);
  var topico_publicacao = _topico_publicacao(sequelize, DataTypes);
  var utilizadores = _utilizadores(sequelize, DataTypes);

  area.belongsToMany(publicacao, { as: 'id_publicacao_publicacaos', through: area_partilha, foreignKey: "id_area", otherKey: "id_publicacao" });
  categoria.belongsToMany(publicacao, { as: 'id_publicacao_publicacao_categoria_publicacaos', through: categoria_publicacao, foreignKey: "id_categoria", otherKey: "id_publicacao" });
  notificacao.belongsToMany(utilizadores, { as: 'id_utilizador_utilizadores', through: notificar, foreignKey: "id_notificacao", otherKey: "id_utilizador" });
  publicacao.belongsToMany(area, { as: 'id_area_areas', through: area_partilha, foreignKey: "id_publicacao", otherKey: "id_area" });
  publicacao.belongsToMany(categoria, { as: 'id_categoria_categoria', through: categoria_publicacao, foreignKey: "id_publicacao", otherKey: "id_categoria" });
  publicacao.belongsToMany(topico, { as: 'id_topico_topicos', through: topico_publicacao, foreignKey: "id_publicacao", otherKey: "id_topico" });
  topico.belongsToMany(publicacao, { as: 'id_publicacao_publicacao_topico_publicacaos', through: topico_publicacao, foreignKey: "id_topico", otherKey: "id_publicacao" });
  utilizadores.belongsToMany(notificacao, { as: 'id_notificacao_notificacaos', through: notificar, foreignKey: "id_utilizador", otherKey: "id_notificacao" });
  area_partilha.belongsTo(area, { as: "id_area_area", foreignKey: "id_area"});
  area.hasMany(area_partilha, { as: "area_partilhas", foreignKey: "id_area"});
  curso.belongsTo(area, { as: "id_area_area", foreignKey: "id_area"});
  area.hasMany(curso, { as: "cursos", foreignKey: "id_area"});
  topico.belongsTo(area, { as: "id_area_area", foreignKey: "id_area"});
  area.hasMany(topico, { as: "topicos", foreignKey: "id_area"});
  anexo_aula.belongsTo(aula, { as: "id_aula_aula", foreignKey: "id_aula"});
  aula.hasMany(anexo_aula, { as: "anexo_aulas", foreignKey: "id_aula"});
  area.belongsTo(categoria, { as: "id_categoria_categorium", foreignKey: "id_categoria"});
  categoria.hasMany(area, { as: "areas", foreignKey: "id_categoria"});
  categoria_publicacao.belongsTo(categoria, { as: "id_categoria_categorium", foreignKey: "id_categoria"});
  categoria.hasMany(categoria_publicacao, { as: "categoria_publicacaos", foreignKey: "id_categoria"});
  curso.belongsTo(categoria, { as: "id_categoria_categorium", foreignKey: "id_categoria"});
  categoria.hasMany(curso, { as: "cursos", foreignKey: "id_categoria"});
  comentario.belongsTo(comentario, { as: "com_idcomentario_comentario", foreignKey: "com_idcomentario"});
  comentario.hasMany(comentario, { as: "comentarios", foreignKey: "com_idcomentario"});
  aula.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(aula, { as: "aulas", foreignKey: "id_curso"});
  avaliacao_curso.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(avaliacao_curso, { as: "avaliacao_cursos", foreignKey: "id_curso"});
  curso_assincrono.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(curso_assincrono, { as: "curso_assincronos", foreignKey: "id_curso"});
  curso_sincrono.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(curso_sincrono, { as: "curso_sincronos", foreignKey: "id_curso"});
  gerir.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(gerir, { as: "gerirs", foreignKey: "id_curso"});
  inscricao.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(inscricao, { as: "inscricaos", foreignKey: "id_curso"});
  notificacao.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(notificacao, { as: "notificacaos", foreignKey: "id_curso"});
  quiz.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(quiz, { as: "quizzes", foreignKey: "id_curso"});
  submeter_ficheiro.belongsTo(curso, { as: "id_curso_curso", foreignKey: "id_curso"});
  curso.hasMany(submeter_ficheiro, { as: "submeter_ficheiros", foreignKey: "id_curso"});
  teste.belongsTo(curso_sincrono, { as: "id_curso_curso_sincrono", foreignKey: "id_curso"});
  curso_sincrono.hasMany(teste, { as: "testes", foreignKey: "id_curso"});
  teste.belongsTo(curso_sincrono, { as: "id_sincrono_curso_sincrono", foreignKey: "id_sincrono"});
  curso_sincrono.hasMany(teste, { as: "id_sincrono_testes", foreignKey: "id_sincrono"});
  curso_sincrono.belongsTo(formador, { as: "id_formador_formador", foreignKey: "id_formador"});
  formador.hasMany(curso_sincrono, { as: "curso_sincronos", foreignKey: "id_formador"});
  curso_sincrono.belongsTo(formador, { as: "id_utilizador_formador", foreignKey: "id_utilizador"});
  formador.hasMany(curso_sincrono, { as: "id_utilizador_curso_sincronos", foreignKey: "id_utilizador"});
  avaliacao_curso.belongsTo(formando, { as: "id_formando_formando", foreignKey: "id_formando"});
  formando.hasMany(avaliacao_curso, { as: "avaliacao_cursos", foreignKey: "id_formando"});
  avaliacao_curso.belongsTo(formando, { as: "id_utilizador_formando", foreignKey: "id_utilizador"});
  formando.hasMany(avaliacao_curso, { as: "id_utilizador_avaliacao_cursos", foreignKey: "id_utilizador"});
  inscricao.belongsTo(formando, { as: "id_formando_formando", foreignKey: "id_formando"});
  formando.hasMany(inscricao, { as: "inscricaos", foreignKey: "id_formando"});
  inscricao.belongsTo(formando, { as: "id_utilizador_formando", foreignKey: "id_utilizador"});
  formando.hasMany(inscricao, { as: "id_utilizador_inscricaos", foreignKey: "id_utilizador"});
  submeter_ficheiro.belongsTo(formando, { as: "id_formando_formando", foreignKey: "id_formando"});
  formando.hasMany(submeter_ficheiro, { as: "submeter_ficheiros", foreignKey: "id_formando"});
  submeter_ficheiro.belongsTo(formando, { as: "id_utilizador_formando", foreignKey: "id_utilizador"});
  formando.hasMany(submeter_ficheiro, { as: "id_utilizador_submeter_ficheiros", foreignKey: "id_utilizador"});
  gerir.belongsTo(gestor, { as: "id_gestor_gestor", foreignKey: "id_gestor"});
  gestor.hasMany(gerir, { as: "gerirs", foreignKey: "id_gestor"});
  gerir.belongsTo(gestor, { as: "id_utilizador_gestor", foreignKey: "id_utilizador"});
  gestor.hasMany(gerir, { as: "id_utilizador_gerirs", foreignKey: "id_utilizador"});
  notificar.belongsTo(notificacao, { as: "id_notificacao_notificacao", foreignKey: "id_notificacao"});
  notificacao.hasMany(notificar, { as: "notificars", foreignKey: "id_notificacao"});
  anexo_publicacao.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(anexo_publicacao, { as: "anexo_publicacaos", foreignKey: "id_publicacao"});
  area_partilha.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(area_partilha, { as: "area_partilhas", foreignKey: "id_publicacao"});
  avaliacao_publicacao.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(avaliacao_publicacao, { as: "avaliacao_publicacaos", foreignKey: "id_publicacao"});
  categoria_publicacao.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(categoria_publicacao, { as: "categoria_publicacaos", foreignKey: "id_publicacao"});
  comentario.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(comentario, { as: "comentarios", foreignKey: "id_publicacao"});
  denuncia_post.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(denuncia_post, { as: "denuncia_posts", foreignKey: "id_publicacao"});
  topico_publicacao.belongsTo(publicacao, { as: "id_publicacao_publicacao", foreignKey: "id_publicacao"});
  publicacao.hasMany(topico_publicacao, { as: "topico_publicacaos", foreignKey: "id_publicacao"});
  respostas_quiz.belongsTo(quiz, { as: "id_quiz_quiz", foreignKey: "id_quiz"});
  quiz.hasMany(respostas_quiz, { as: "respostas_quizzes", foreignKey: "id_quiz"});
  respostas_teste.belongsTo(teste, { as: "id_teste_teste", foreignKey: "id_teste"});
  teste.hasMany(respostas_teste, { as: "respostas_testes", foreignKey: "id_teste"});
  curso.belongsTo(topico, { as: "id_topico_topico", foreignKey: "id_topico"});
  topico.hasMany(curso, { as: "cursos", foreignKey: "id_topico"});
  topico_publicacao.belongsTo(topico, { as: "id_topico_topico", foreignKey: "id_topico"});
  topico.hasMany(topico_publicacao, { as: "topico_publicacaos", foreignKey: "id_topico"});
  avaliacao_publicacao.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(avaliacao_publicacao, { as: "avaliacao_publicacaos", foreignKey: "id_utilizador"});
  comentario.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(comentario, { as: "comentarios", foreignKey: "id_utilizador"});
  denuncia_post.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(denuncia_post, { as: "denuncia_posts", foreignKey: "id_utilizador"});
  formador.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(formador, { as: "formadors", foreignKey: "id_utilizador"});
  formando.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(formando, { as: "formandos", foreignKey: "id_utilizador"});
  gestor.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(gestor, { as: "gestors", foreignKey: "id_utilizador"});
  notificar.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(notificar, { as: "notificars", foreignKey: "id_utilizador"});
  publicacao.belongsTo(utilizadores, { as: "id_utilizador_utilizadore", foreignKey: "id_utilizador"});
  utilizadores.hasMany(publicacao, { as: "publicacaos", foreignKey: "id_utilizador"});

  return {
    anexo_aula,
    anexo_publicacao,
    area,
    area_partilha,
    aula,
    avaliacao_curso,
    avaliacao_publicacao,
    categoria,
    categoria_publicacao,
    comentario,
    curso,
    curso_assincrono,
    curso_sincrono,
    denuncia_post,
    formador,
    formando,
    gerir,
    gestor,
    inscricao,
    notificacao,
    notificar,
    publicacao,
    quiz,
    respostas_quiz,
    respostas_teste,
    submeter_ficheiro,
    teste,
    topico,
    topico_publicacao,
    utilizadores,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
