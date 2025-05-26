const express = require('express');
const app = express();
const db = require('./models');
const categoriaRoutes = require('./routes/routeCategoria');
const utilizadorRoutes = require('./routes/routeUtilizadores');
const areaRoutes = require('./routes/routeArea');
const topicoRoutes = require('./routes/routeTopico'); 
const cursoRoutes = require('./routes/routeCurso'); 
const aulaRoutes = require('./routes/routeAula'); 
const publicacaoRoutes = require('./routes/routePublicacao');
const comentarioRoutes = require('./routes/routeComentario'); 
const quizRoutes = require('./routes/routeQuiz');
const respostasQuizRoutes = require('./routes/routeRespostasQuiz');

// Configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Corrigir aqui o caminho da rota
app.use('/api/categorias', categoriaRoutes);
app.use('/api/utilizadores', utilizadorRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/topicos', topicoRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/aulas', aulaRoutes);
app.use('/api/publicacoes', publicacaoRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/respostas-quiz', respostasQuizRoutes);

// Sincronizar e arrancar servidor
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com a base de dados');
    app.listen(app.get('port'), () => {
      console.log('Servidor a correr na porta ' + app.get('port'));
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar com a base de dados:', err);
  });
